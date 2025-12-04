export interface KnowledgeArticle {
  slug: string
  title: string
  category: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  content: string
  lastUpdated: string
}

export const knowledgeArticles: KnowledgeArticle[] = [
  // Common Vulnerabilities
  {
    slug: 'reentrancy',
    title: 'Reentrancy Attacks',
    category: 'vulnerabilities',
    difficulty: 'Medium',
    lastUpdated: '2025-10-25',
    content: `
# Reentrancy Attacks

Reentrancy is one of the most critical and dangerous vulnerabilities in smart contracts. It occurs when a function makes an external call to another untrusted contract before resolving its own state.

## What is Reentrancy?

A reentrancy attack happens when:
1. Contract A calls Contract B
2. Contract B calls back into Contract A before the first call completes
3. The state in Contract A hasn't been updated yet
4. Contract B exploits this to drain funds or manipulate state

## Classic Example: The DAO Hack

The infamous DAO hack in 2016 exploited a reentrancy vulnerability, resulting in the loss of ~$60 million worth of ETH and leading to the Ethereum hard fork.

## Vulnerable Pattern

\`\`\`solidity
function withdraw(uint amount) public {
    require(balances[msg.sender] >= amount);
    
    // Vulnerable: External call before state update
    (bool success, ) = msg.sender.call{value: amount}("");
    require(success);
    
    balances[msg.sender] -= amount; // State update happens AFTER the call
}
\`\`\`

## Attack Scenario

\`\`\`solidity
contract Attacker {
    VulnerableContract target;
    
    function attack() external payable {
        target.deposit{value: 1 ether}();
        target.withdraw(1 ether);
    }
    
    // Fallback function that re-enters
    receive() external payable {
        if (address(target).balance >= 1 ether) {
            target.withdraw(1 ether);
        }
    }
}
\`\`\`

## Prevention Methods

### 1. Checks-Effects-Interactions Pattern

Always follow this order:
- **Checks**: Validate all conditions
- **Effects**: Update all state variables
- **Interactions**: Make external calls

\`\`\`solidity
function withdraw(uint amount) public {
    // Checks
    require(balances[msg.sender] >= amount);
    
    // Effects (update state FIRST)
    balances[msg.sender] -= amount;
    
    // Interactions (external call LAST)
    (bool success, ) = msg.sender.call{value: amount}("");
    require(success);
}
\`\`\`

### 2. ReentrancyGuard Modifier

Use OpenZeppelin's ReentrancyGuard:

\`\`\`solidity
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract MyContract is ReentrancyGuard {
    mapping(address => uint) public balances;
    
    function withdraw(uint amount) public nonReentrant {
        require(balances[msg.sender] >= amount);
        balances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);
    }
}
\`\`\`

### 3. Pull Payment Pattern

Instead of pushing payments, let users pull their funds:

\`\`\`solidity
mapping(address => uint) public pendingWithdrawals;

function initiateWithdrawal(uint amount) public {
    require(balances[msg.sender] >= amount);
    balances[msg.sender] -= amount;
    pendingWithdrawals[msg.sender] += amount;
}

function withdraw() public {
    uint amount = pendingWithdrawals[msg.sender];
    require(amount > 0);
    pendingWithdrawals[msg.sender] = 0;
    payable(msg.sender).transfer(amount);
}
\`\`\`

## Best Practices

1. Always update state before external calls
2. Use ReentrancyGuard for critical functions
3. Limit the gas forwarded to external calls
4. Use \`.transfer()\` or \`.send()\` instead of \`.call{value: }()\` when possible
5. Implement withdrawal patterns instead of push payments
6. Test thoroughly with tools like Slither and Echidna

## Detection Tools

- **Slither**: Static analysis tool that detects reentrancy
- **Mythril**: Symbolic execution tool
- **Manticore**: Dynamic analysis
- **Foundry Fuzz**: Fuzz testing framework

## References

- [Consensys Smart Contract Best Practices](https://consensys.github.io/smart-contract-best-practices/attacks/reentrancy/)
- [SWC-107: Reentrancy](https://swcregistry.io/docs/SWC-107)
    `.trim(),
  },
  {
    slug: 'integer-overflow',
    title: 'Integer Overflow & Underflow',
    category: 'vulnerabilities',
    difficulty: 'Easy',
    lastUpdated: '2025-10-20',
    content: `
# Integer Overflow & Underflow

Integer overflow and underflow vulnerabilities occur when arithmetic operations exceed the maximum or minimum value a variable type can hold.

## Understanding the Issue

In Solidity versions before 0.8.0, integer operations did not check for overflow/underflow by default.

### Overflow Example

\`\`\`solidity
uint8 maxValue = 255;
maxValue = maxValue + 1; // Overflows to 0 (in Solidity < 0.8.0)
\`\`\`

### Underflow Example

\`\`\`solidity
uint8 minValue = 0;
minValue = minValue - 1; // Underflows to 255 (in Solidity < 0.8.0)
\`\`\`

## Solidity 0.8.0+ Protection

Starting with Solidity 0.8.0, overflow/underflow checks are built-in and will cause transactions to revert automatically.

\`\`\`solidity
// Solidity ^0.8.0
uint8 value = 255;
value = value + 1; // Will revert with "Arithmetic operation overflow"
\`\`\`

## When to Use Unchecked

For gas optimization, you can use \`unchecked\` blocks when you're certain overflow won't occur:

\`\`\`solidity
function increment(uint counter) public pure returns (uint) {
    unchecked {
        return counter + 1; // Skip overflow check for gas savings
    }
}
\`\`\`

## Legacy Contract Protection

For contracts using Solidity < 0.8.0, use SafeMath library:

\`\`\`solidity
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract LegacyContract {
    using SafeMath for uint256;
    
    uint256 public value;
    
    function add(uint256 amount) public {
        value = value.add(amount); // Safe addition
    }
    
    function subtract(uint256 amount) public {
        value = value.sub(amount); // Safe subtraction
    }
}
\`\`\`

## Best Practices

1. Use Solidity 0.8.0 or higher
2. Only use \`unchecked\` when absolutely necessary and safe
3. For legacy contracts, always use SafeMath
4. Test edge cases with maximum and minimum values
5. Document any unchecked arithmetic operations

## Detection

- **Slither**: Detects unsafe arithmetic operations
- **Mythril**: Identifies potential overflow/underflow
- **Manual review**: Check all arithmetic operations
    `.trim(),
  },
  {
    slug: 'access-control',
    title: 'Access Control Issues',
    category: 'vulnerabilities',
    difficulty: 'Medium',
    lastUpdated: '2025-10-18',
    content: `
# Access Control Issues

Access control vulnerabilities occur when functions lack proper permission checks, allowing unauthorized users to execute critical operations.

## Common Access Control Vulnerabilities

### 1. Missing Access Controls

\`\`\`solidity
// Vulnerable: No access control
function withdrawAll() public {
    payable(msg.sender).transfer(address(this).balance);
}

// Fixed: Add access control
address public owner;

modifier onlyOwner() {
    require(msg.sender == owner, "Not authorized");
    _;
}

function withdrawAll() public onlyOwner {
    payable(owner).transfer(address(this).balance);
}
\`\`\`

### 2. Default Function Visibility

Always explicitly declare function visibility:

\`\`\`solidity
// Vulnerable: No visibility specified (defaults to public in old Solidity)
function sensitiveFunction() {
    // Critical logic
}

// Fixed: Explicit visibility
function sensitiveFunction() private {
    // Critical logic
}
\`\`\`

### 3. tx.origin Authentication

Never use \`tx.origin\` for authorization:

\`\`\`solidity
// Vulnerable
function withdraw() public {
    require(tx.origin == owner);
    // ...
}

// Fixed: Use msg.sender
function withdraw() public {
    require(msg.sender == owner);
    // ...
}
\`\`\`

## Secure Access Control Patterns

### Using OpenZeppelin Ownable

\`\`\`solidity
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyContract is Ownable {
    function sensitiveFunction() public onlyOwner {
        // Only owner can call this
    }
}
\`\`\`

### Role-Based Access Control (RBAC)

\`\`\`solidity
import "@openzeppelin/contracts/access/AccessControl.sol";

contract MyContract is AccessControl {
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    
    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
    }
    
    function mint(address to) public onlyRole(MINTER_ROLE) {
        // Only minters can call this
    }
}
\`\`\`

### Multi-Signature Control

For critical operations, require multiple signatures:

\`\`\`solidity
uint public constant REQUIRED_CONFIRMATIONS = 2;
mapping(bytes32 => mapping(address => bool)) public confirmations;
mapping(bytes32 => uint) public confirmationCount;

function executeTransaction(bytes32 txId) public {
    require(confirmationCount[txId] >= REQUIRED_CONFIRMATIONS);
    // Execute transaction
}
\`\`\`

## Best Practices

1. Always use explicit function visibility
2. Implement the principle of least privilege
3. Use established access control libraries (OpenZeppelin)
4. Use multi-sig for critical operations
5. Implement timelocks for sensitive changes
6. Document all access control decisions
7. Test access control thoroughly

## Audit Checklist

- [ ] All functions have explicit visibility
- [ ] Critical functions have access control
- [ ] No use of tx.origin for authentication
- [ ] Access control modifiers are correctly implemented
- [ ] Admin functions use multi-sig when appropriate
- [ ] Role hierarchies are properly designed
    `.trim(),
  },
  {
    slug: 'front-running',
    title: 'Front-Running & MEV',
    category: 'vulnerabilities',
    difficulty: 'Hard',
    lastUpdated: '2025-10-15',
    content: `
# Front-Running & MEV

Front-running and Maximum Extractable Value (MEV) attacks exploit transaction ordering in the mempool to gain unfair advantages.

## What is Front-Running?

Front-running occurs when an attacker observes a pending transaction in the mempool and submits their own transaction with a higher gas price to have it executed first.

## Types of MEV Attacks

### 1. Sandwich Attacks

In DEX transactions:
1. Attacker sees your buy order in mempool
2. Attacker places a buy order before yours (front-run)
3. Your transaction executes at a worse price
4. Attacker sells immediately after (back-run)
5. Attacker profits from the price movement

### 2. Liquidation MEV

Bots compete to be first to liquidate undercollateralized positions in lending protocols, earning liquidation rewards.

### 3. Arbitrage MEV

Exploiting price differences across DEXs by being the first to execute arbitrage trades.

## Vulnerable Patterns

### Price-Sensitive Transactions

\`\`\`solidity
// Vulnerable: No slippage protection
function swap(uint amountIn) public {
    uint amountOut = getPrice(amountIn);
    token.transferFrom(msg.sender, address(this), amountIn);
    outputToken.transfer(msg.sender, amountOut);
}
\`\`\`

## Prevention Strategies

### 1. Slippage Protection

\`\`\`solidity
function swap(uint amountIn, uint minAmountOut) public {
    uint amountOut = getPrice(amountIn);
    require(amountOut >= minAmountOut, "Slippage too high");
    token.transferFrom(msg.sender, address(this), amountIn);
    outputToken.transfer(msg.sender, amountOut);
}
\`\`\`

### 2. Commit-Reveal Scheme

For sensitive operations, use two-phase commits:

\`\`\`solidity
mapping(bytes32 => uint) public commits;

function commit(bytes32 hash) public {
    commits[hash] = block.number;
}

function reveal(uint value, bytes32 salt) public {
    bytes32 hash = keccak256(abi.encodePacked(msg.sender, value, salt));
    require(commits[hash] > 0, "No commit found");
    require(block.number > commits[hash] + 10, "Too early");
    // Execute with revealed value
}
\`\`\`

### 3. Batch Transactions

Submit multiple operations in a single transaction to prevent interference.

### 4. Flashbots / Private Mempools

Use Flashbots Protect or similar services to submit transactions directly to miners, bypassing the public mempool.

## Design Considerations

1. **Minimize MEV Surface**: Reduce opportunities for extractable value
2. **Use Oracles**: Time-weighted average prices (TWAP) are more resistant to manipulation
3. **Add Delays**: Introduce time delays for critical operations
4. **Set Bounds**: Implement minimum/maximum values for sensitive parameters

## Tools & Resources

- **Flashbots**: https://docs.flashbots.net/
- **MEV-Inspect**: Tool for analyzing MEV activity
- **OpenMEV**: Research and tooling for MEV

## Best Practices

1. Always implement slippage protection for price-sensitive operations
2. Consider using commit-reveal for sensitive actions
3. Use TWAP oracles instead of spot prices
4. Add deadline parameters to time-sensitive transactions
5. Consider MEV in economic model design
6. Monitor mempool for suspicious activity
    `.trim(),
  },
  {
    slug: 'oracle-manipulation',
    title: 'Oracle Manipulation',
    category: 'vulnerabilities',
    difficulty: 'Hard',
    lastUpdated: '2025-10-12',
    content: `
# Oracle Manipulation

Price oracle manipulation is a critical vulnerability in DeFi protocols that rely on external price data for critical operations.

## What are Oracles?

Oracles provide off-chain data to smart contracts. Price oracles are especially critical for:
- Lending protocols (collateralization ratios)
- DEXs (price discovery)
- Derivatives (settlement prices)
- Liquidation mechanisms

## Manipulation Risks

### Flash Loan Price Manipulation

Attackers can:
1. Take a flash loan
2. Manipulate the price on a DEX
3. Use the manipulated price in your protocol
4. Profit from the difference
5. Repay the flash loan

### Example Vulnerable Code

\`\`\`solidity
// Vulnerable: Using spot price from single DEX
function getPrice() public view returns (uint) {
    return uniswapPair.getReserves(); // Can be manipulated in single tx
}
\`\`\`

## Secure Oracle Patterns

### 1. Chainlink Price Feeds

\`\`\`solidity
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract SecureOracle {
    AggregatorV3Interface internal priceFeed;
    
    constructor() {
        priceFeed = AggregatorV3Interface(
            0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419 // ETH/USD
        );
    }
    
    function getLatestPrice() public view returns (int) {
        (
            uint80 roundID,
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();
        
        require(timeStamp > 0, "Round not complete");
        require(answeredInRound >= roundID, "Stale price");
        
        return price;
    }
}
\`\`\`

### 2. Time-Weighted Average Price (TWAP)

\`\`\`solidity
// Using Uniswap V3 TWAP
function getTWAP(uint32 twapInterval) public view returns (uint) {
    uint32[] memory secondsAgos = new uint32[](2);
    secondsAgos[0] = twapInterval;
    secondsAgos[1] = 0;
    
    (int56[] memory tickCumulatives, ) = pool.observe(secondsAgos);
    
    int56 tickCumulativesDelta = tickCumulatives[1] - tickCumulatives[0];
    int24 arithmeticMeanTick = int24(tickCumulativesDelta / int56(uint56(twapInterval)));
    
    return getQuoteAtTick(arithmeticMeanTick, amountIn, baseToken, quoteToken);
}
\`\`\`

### 3. Multiple Oracle Sources

\`\`\`solidity
function getPrice() public view returns (uint) {
    uint chainlinkPrice = getChainlinkPrice();
    uint uniswapTWAP = getUniswapTWAP();
    uint bandPrice = getBandPrice();
    
    // Use median or require consistency
    require(
        abs(chainlinkPrice - uniswapTWAP) < chainlinkPrice / 20,
        "Price deviation too high"
    );
    
    return (chainlinkPrice + uniswapTWAP) / 2;
}
\`\`\`

## Best Practices

1. Never use spot prices from a single DEX for critical operations
2. Use established oracle solutions (Chainlink, Band Protocol)
3. Implement TWAP for DEX-based prices
4. Use multiple oracle sources and verify consistency
5. Add circuit breakers for abnormal price movements
6. Implement price deviation checks
7. Add time delays for large operations

## Circuit Breaker Implementation

\`\`\`solidity
uint public constant MAX_PRICE_CHANGE = 10; // 10% max change

function checkPrice(uint newPrice, uint oldPrice) internal pure {
    uint percentChange = abs(newPrice - oldPrice) * 100 / oldPrice;
    require(percentChange <= MAX_PRICE_CHANGE, "Price change too large");
}
\`\`\`

## Real-World Examples

- **Harvest Finance** (~$34M): Flash loan attack manipulating Curve pool prices
- **Cream Finance** (~$130M): Price oracle manipulation
- **Venus Protocol** (~$11M): Oracle price manipulation

## References

- [Chainlink Documentation](https://docs.chain.link/)
- [Uniswap V3 Oracle](https://docs.uniswap.org/concepts/protocol/oracle)
    `.trim(),
  },
  {
    slug: 'flash-loan',
    title: 'Flash Loan Attacks',
    category: 'vulnerabilities',
    difficulty: 'Hard',
    lastUpdated: '2025-10-10',
    content: `
# Flash Loan Attacks

Flash loans allow borrowing massive amounts of capital without collateral, as long as it's repaid in the same transaction. While a legitimate DeFi primitive, they're often used in attacks.

## How Flash Loans Work

1. Borrow large amount (no collateral needed)
2. Execute operations with borrowed funds
3. Repay loan + fees in same transaction
4. If repayment fails, entire transaction reverts

## Attack Patterns

### Price Manipulation Attack

\`\`\`
1. Flash loan 10M USDC
2. Buy large amount of TOKEN on DEX A
3. Price of TOKEN increases significantly
4. Use inflated price on protocol using oracle from DEX A
5. Profit from manipulated price
6. Sell TOKEN back
7. Repay flash loan
\`\`\`

### Collateral Manipulation

\`\`\`
1. Flash loan ETH
2. Supply ETH as collateral in lending protocol
3. Manipulate oracle price
4. Borrow maximum amount against inflated collateral value
5. Withdraw some collateral
6. Repay flash loan, keep borrowed funds
\`\`\`

## Defense Strategies

### 1. Use Manipulation-Resistant Oracles

\`\`\`solidity
// Use TWAP instead of spot price
function getPrice() public view returns (uint) {
    return uniswapV3Oracle.getTWAP(1800); // 30 minute TWAP
}
\`\`\`

### 2. Flash Loan Detection

\`\`\`solidity
mapping(address => uint) public userBalanceAtBlockStart;

modifier noFlashLoan() {
    require(
        userBalanceAtBlockStart[msg.sender] > 0 || 
        block.number > lastUserBlock[msg.sender],
        "Flash loan detected"
    );
    _;
}
\`\`\`

### 3. Reentrancy Guards

Flash loans often combine with reentrancy:

\`\`\`solidity
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract MyProtocol is ReentrancyGuard {
    function criticalFunction() external nonReentrant {
        // Protected from flash loan + reentrancy combo
    }
}
\`\`\`

### 4. Rate Limiting

\`\`\`solidity
mapping(address => uint) public lastActionBlock;
uint public constant COOLDOWN = 10; // blocks

function criticalAction() public {
    require(
        block.number >= lastActionBlock[msg.sender] + COOLDOWN,
        "Cooldown period"
    );
    lastActionBlock[msg.sender] = block.number;
    // Execute action
}
\`\`\`

## Best Practices

1. **Never use spot prices** for critical financial operations
2. **Use TWAP oracles** with sufficient time windows
3. **Implement multiple oracle sources** and validate consistency
4. **Add circuit breakers** for abnormal market conditions
5. **Set maximum transaction sizes** to limit attack impact
6. **Implement cooldown periods** for large operations
7. **Monitor for flash loan usage** in your protocol
8. **Test with flash loan scenarios** during audits

## Detection & Monitoring

### During Development
- Test contracts with simulated flash loan attacks
- Use tools like Foundry to simulate complex attack scenarios
- Review all price-dependent logic

### In Production
- Monitor for flash loans interacting with your protocol
- Set up alerts for large, single-transaction value changes
- Track price deviations from multiple sources

## Notable Flash Loan Attacks

- **bZx (2020)**: $954K - Price oracle manipulation
- **Harvest Finance (2020)**: $34M - Curve pool manipulation
- **Cream Finance (2021)**: $130M - Price oracle exploit
- **Pancake Bunny (2021)**: $45M - Price manipulation

## Tools

- **Tenderly**: Simulate flash loan scenarios
- **Foundry**: Write flash loan attack tests
- **Forta**: Monitor for flash loan activity

## References

- [Aave Flash Loans Documentation](https://docs.aave.com/developers/guides/flash-loans)
- [Flash Loan Attack Patterns](https://github.com/OffcierCia/DeFi-Developer-Road-Map)
    `.trim(),
  },
  // Best Practices
  {
    slug: 'cei-pattern',
    title: 'Checks-Effects-Interactions Pattern',
    category: 'best-practices',
    difficulty: 'Easy',
    lastUpdated: '2025-10-22',
    content: `
# Checks-Effects-Interactions Pattern

The Checks-Effects-Interactions (CEI) pattern is a fundamental security practice in Solidity development that helps prevent reentrancy and other vulnerabilities.

## The Pattern

Follow this order in your functions:

1. **Checks**: Validate all conditions and requirements
2. **Effects**: Update all state variables
3. **Interactions**: Make external calls

## Why It Matters

This pattern prevents reentrancy attacks by ensuring state is updated before any external calls that could call back into your contract.

## Example

### Bad (Vulnerable to Reentrancy)

\`\`\`solidity
function withdraw(uint amount) public {
    // Checks
    require(balances[msg.sender] >= amount);
    
    // Interactions (BEFORE effects)
    (bool success, ) = msg.sender.call{value: amount}("");
    require(success);
    
    // Effects (TOO LATE!)
    balances[msg.sender] -= amount;
}
\`\`\`

### Good (Following CEI Pattern)

\`\`\`solidity
function withdraw(uint amount) public {
    // 1. Checks
    require(balances[msg.sender] >= amount, "Insufficient balance");
    require(amount > 0, "Amount must be positive");
    
    // 2. Effects (update state FIRST)
    balances[msg.sender] -= amount;
    
    // 3. Interactions (external calls LAST)
    (bool success, ) = msg.sender.call{value: amount}("");
    require(success, "Transfer failed");
}
\`\`\`

## Detailed Breakdown

### Checks Phase

Validate all conditions:

\`\`\`solidity
// Input validation
require(amount > 0, "Invalid amount");
require(amount <= maxAmount, "Exceeds maximum");

// Authorization
require(msg.sender == owner, "Not authorized");

// State validation
require(balances[msg.sender] >= amount, "Insufficient balance");
require(!paused, "Contract is paused");

// Business logic checks
require(block.timestamp >= startTime, "Too early");
\`\`\`

### Effects Phase

Update all state variables:

\`\`\`solidity
// Update balances
balances[msg.sender] -= amount;
balances[recipient] += amount;

// Update counters
totalSupply -= amount;
userTransactionCount[msg.sender]++;

// Emit events (considered effects)
emit Withdrawal(msg.sender, amount);
\`\`\`

### Interactions Phase

Make external calls:

\`\`\`solidity
// Transfer tokens
token.transfer(recipient, amount);

// Call external contract
externalContract.notify(amount);

// Send ETH
(bool success, ) = recipient.call{value: amount}("");
require(success);
\`\`\`

## Complex Example

\`\`\`solidity
function executeComplexOperation(
    address recipient,
    uint amount,
    bytes calldata data
) external nonReentrant {
    // ===== CHECKS =====
    require(recipient != address(0), "Invalid recipient");
    require(amount > 0 && amount <= MAX_AMOUNT, "Invalid amount");
    require(balances[msg.sender] >= amount, "Insufficient balance");
    require(isAuthorized[msg.sender], "Not authorized");
    require(!paused, "Paused");
    
    // ===== EFFECTS =====
    // Update all state
    balances[msg.sender] -= amount;
    balances[recipient] += amount;
    totalTransferred += amount;
    lastTransferTime[msg.sender] = block.timestamp;
    
    // Emit events
    emit Transfer(msg.sender, recipient, amount);
    
    // ===== INTERACTIONS =====
    // External calls last
    if (data.length > 0) {
        (bool success, ) = recipient.call(data);
        require(success, "Callback failed");
    }
    
    // Notify external contract
    if (shouldNotify) {
        externalRegistry.recordTransfer(msg.sender, recipient, amount);
    }
}
\`\`\`

## Common Pitfalls

### 1. Hidden Interactions

Be aware that these are also interactions:
- Token transfers (ERC20/ERC721)
- ETH transfers
- Any call to external contracts
- Even view functions on untrusted contracts!

### 2. Multiple Interactions

When multiple external calls are needed, ensure all state updates happen first:

\`\`\`solidity
function multipleOperations() public {
    // All checks first
    require(condition1);
    require(condition2);
    
    // All effects
    updateState1();
    updateState2();
    emit Event1();
    emit Event2();
    
    // All interactions last
    externalCall1();
    externalCall2();
}
\`\`\`

## When to Deviate

Sometimes you need to deviate from strict CEI (e.g., checking return values from external calls). In these cases:

1. Use ReentrancyGuard
2. Carefully document why you're deviating
3. Ensure you're not vulnerable to reentrancy
4. Have it reviewed in audit

## Benefits

1. **Prevents reentrancy**: State is updated before external calls
2. **Clear code structure**: Easy to review and maintain
3. **Predictable behavior**: State changes are finalized before interactions
4. **Gas efficient**: Often more efficient than complex guards

## Verification

During code review, for each function:
- [ ] All require statements at the beginning
- [ ] All state updates before external calls
- [ ] All external calls at the end
- [ ] Events emitted after state changes but before interactions
- [ ] No state changes after external calls

## References

- [Consensys Best Practices](https://consensys.github.io/smart-contract-best-practices/)
- [Solidity Docs: Security Considerations](https://docs.soliditylang.org/en/latest/security-considerations.html)
    `.trim(),
  },
  {
    slug: 'openzeppelin',
    title: 'Using OpenZeppelin Libraries',
    category: 'best-practices',
    difficulty: 'Easy',
    lastUpdated: '2025-10-18',
    content: `
# Using OpenZeppelin Libraries

OpenZeppelin Contracts is the industry-standard library for secure smart contract development. It provides tested, audited implementations of common patterns.

## Why Use OpenZeppelin?

1. **Battle-tested**: Used in thousands of projects
2. **Professionally audited**: Regular security audits
3. **Community maintained**: Active development and updates
4. **Gas optimized**: Efficient implementations
5. **Well documented**: Comprehensive guides and examples

## Installation

\`\`\`bash
npm install @openzeppelin/contracts
\`\`\`

## Common Use Cases

### 1. ERC20 Token

\`\`\`solidity
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor() ERC20("MyToken", "MTK") {
        _mint(msg.sender, 1000000 * 10 ** decimals());
    }
}
\`\`\`

### 2. Access Control

\`\`\`solidity
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyContract is Ownable {
    function sensitiveFunction() public onlyOwner {
        // Only owner can execute
    }
}
\`\`\`

### 3. Pausable Functionality

\`\`\`solidity
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyContract is Pausable, Ownable {
    function pause() public onlyOwner {
        _pause();
    }
    
    function unpause() public onlyOwner {
        _unpause();
    }
    
    function criticalFunction() public whenNotPaused {
        // Can only execute when not paused
    }
}
\`\`\`

### 4. ReentrancyGuard

\`\`\`solidity
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract MyContract is ReentrancyGuard {
    function withdraw() public nonReentrant {
        // Protected from reentrancy
        uint amount = balances[msg.sender];
        balances[msg.sender] = 0;
        payable(msg.sender).transfer(amount);
    }
}
\`\`\`

### 5. Role-Based Access Control

\`\`\`solidity
import "@openzeppelin/contracts/access/AccessControl.sol";

contract MyContract is AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");
    
    constructor() {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }
    
    function mint(address to, uint amount) public onlyRole(MINTER_ROLE) {
        _mint(to, amount);
    }
}
\`\`\`

## Advanced Features

### Upgradeable Contracts

\`\`\`solidity
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract MyUpgradeableContract is Initializable, OwnableUpgradeable {
    function initialize() public initializer {
        __Ownable_init();
        // Initialize state
    }
}
\`\`\`

### ERC20 Extensions

\`\`\`solidity
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Snapshot.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";

contract GovernanceToken is ERC20, ERC20Burnable, ERC20Snapshot, ERC20Votes {
    // Advanced token with burning, snapshots, and voting power
}
\`\`\`

## Best Practices

1. **Use Latest Stable Version**: Keep dependencies updated
2. **Don't Modify Library Code**: Extend instead of modifying
3. **Understand What You Import**: Read the documentation
4. **Check for Updates**: Security patches are released regularly
5. **Use Specific Versions**: Lock to specific versions in production

## Common Patterns

### Safe Token Transfers

\`\`\`solidity
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

using SafeERC20 for IERC20;

function safeTransfer(IERC20 token, address to, uint amount) internal {
    token.safeTransfer(to, amount); // Handles all edge cases
}
\`\`\`

### Counters

\`\`\`solidity
import "@openzeppelin/contracts/utils/Counters.sol";

using Counters for Counters.Counter;
Counters.Counter private _tokenIds;

function mintNFT() public {
    uint newTokenId = _tokenIds.current();
    _tokenIds.increment();
    _mint(msg.sender, newTokenId);
}
\`\`\`

## Gotchas to Avoid

1. **Don't inherit from deprecated contracts**
2. **Be careful with upgradeable vs non-upgradeable versions**
3. **Initialize properly for upgradeable contracts**
4. **Watch for storage layout in upgrades**
5. **Test all inherited functionality**

## Version Management

\`\`\`json
{
  "dependencies": {
    "@openzeppelin/contracts": "^5.0.0"
  }
}
\`\`\`

Always check the [OpenZeppelin Contracts documentation](https://docs.openzeppelin.com/contracts/) for the latest version and migration guides.

## Resources

- [OpenZeppelin Contracts](https://github.com/OpenZeppelin/openzeppelin-contracts)
- [Documentation](https://docs.openzeppelin.com/contracts/)
- [Contract Wizard](https://wizard.openzeppelin.com/)
    `.trim(),
  },
]

export function getArticleBySlug(category: string, slug: string): KnowledgeArticle | undefined {
  return knowledgeArticles.find(
    (article) => article.category === category && article.slug === slug
  )
}

export function getArticlesByCategory(category: string): KnowledgeArticle[] {
  return knowledgeArticles.filter((article) => article.category === category)
}

// Note: Additional articles can be added to the knowledgeArticles array.
// For articles not yet implemented, they will show a "Coming Soon" message
// when accessed. To add new articles, simply add them to the array above
// with their content.

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  featured: boolean
  content: string
  author?: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Common Smart Contract Vulnerabilities in 2025',
    excerpt: 'An overview of the most critical vulnerabilities found in smart contracts this year and how to prevent them.',
    category: 'Security',
    date: '2025-10-15',
    readTime: '8 min read',
    featured: true,
    author: 'Alex Chen',
    content: `
# Common Smart Contract Vulnerabilities in 2025

As the blockchain ecosystem continues to evolve, so do the threats facing smart contracts. This year has seen several critical vulnerabilities emerge as common patterns in security audits. Understanding these vulnerabilities is crucial for developers and project teams.

## Reentrancy Attacks

Reentrancy attacks remain one of the most dangerous vulnerabilities in smart contracts. They occur when an external contract calls back into the calling contract before the initial transaction is complete, potentially draining funds or manipulating state.

### Prevention Strategies

1. **Use Checks-Effects-Interactions Pattern**: Always update state before making external calls
2. **Implement Reentrancy Guards**: Use OpenZeppelin's ReentrancyGuard modifier
3. **Pull Payment Pattern**: Let users withdraw funds instead of pushing payments

## Integer Overflow/Underflow

While Solidity 0.8.0+ has built-in overflow protection, older contracts and careful attention to arithmetic operations are still important.

## Access Control Issues

Improper access control can lead to unauthorized actions. Always:

- Use role-based access control libraries like OpenZeppelin AccessControl
- Verify permissions before critical operations
- Implement multi-signature requirements for sensitive functions

## Front-Running Vulnerabilities

Miner Extractable Value (MEV) and front-running attacks exploit transaction ordering. Consider:

- Commit-reveal schemes for sensitive operations
- Using Flashbots or similar solutions
- Implementing slippage protection

## Conclusion

Regular security audits are essential to identify and mitigate these vulnerabilities before deployment. Stay updated with the latest security best practices and consider automated tools alongside manual code review.
    `.trim(),
  },
  {
    id: 2,
    title: 'Best Practices for DeFi Protocol Security',
    excerpt: 'Learn the essential security practices every DeFi developer should follow when building protocols.',
    category: 'DeFi',
    date: '2025-10-10',
    readTime: '10 min read',
    featured: false,
    author: 'Sarah Johnson',
    content: `
# Best Practices for DeFi Protocol Security

DeFi protocols handle billions of dollars in user funds, making security absolutely critical. Here are the essential practices every DeFi developer should implement.

## Code Quality Standards

### 1. Use Battle-Tested Libraries

Leverage established libraries like OpenZeppelin Contracts, which have been extensively audited and tested. Don't reinvent the wheel for critical security functions.

### 2. Comprehensive Testing

- Unit tests for all functions
- Integration tests for complex workflows
- Fork tests on mainnet state
- Fuzz testing for edge cases

## Economic Security

### Price Oracle Security

- Use multiple price feeds
- Implement circuit breakers
- Consider TWAP (Time-Weighted Average Price) oracles
- Verify oracle freshness and validity

### Liquidity Considerations

- Ensure sufficient liquidity before major operations
- Implement maximum withdrawal limits
- Consider time locks for large withdrawals

## Access Control

Implement granular permission systems:

- Separate admin and emergency roles
- Time-locked administrative actions
- Multi-signature requirements for critical changes
- Clear upgrade mechanisms

## Monitoring and Incident Response

- Implement event logging for all critical operations
- Set up off-chain monitoring systems
- Have a clear incident response plan
- Consider insurance or bug bounty programs

## Conclusion

Security in DeFi is an ongoing process. Regular audits, continuous monitoring, and staying informed about new attack vectors are essential for maintaining protocol security.
    `.trim(),
  },
  {
    id: 3,
    title: 'Understanding Reentrancy Attacks',
    excerpt: 'Deep dive into reentrancy attacks, how they work, and effective mitigation strategies.',
    category: 'Security',
    date: '2025-10-05',
    readTime: '12 min read',
    featured: false,
    author: 'Michael Rodriguez',
    content: `
# Understanding Reentrancy Attacks

Reentrancy attacks are among the most devastating vulnerabilities in smart contract security. Let's explore how they work and how to prevent them.

## What is Reentrancy?

Reentrancy occurs when a contract function makes an external call to another contract, and that contract calls back into the original function before the first call completes. This can lead to state inconsistencies and fund drainage.

## How Reentrancy Works

### The Attack Vector

1. Attacker calls a vulnerable function
2. Function makes an external call (e.g., transfer funds)
3. Attacker's contract receives the call
4. Attacker's contract calls back into the original function
5. State hasn't been updated yet, so the attack succeeds

### Example Vulnerable Code

\`\`\`solidity
function withdraw() public {
    uint amount = balances[msg.sender];
    require(amount > 0);
    
    (bool success, ) = msg.sender.call{value: amount}("");
    require(success);
    
    balances[msg.sender] = 0; // Too late!
}
\`\`\`

## Mitigation Strategies

### 1. Checks-Effects-Interactions Pattern

Always follow this order:
1. **Checks**: Validate conditions
2. **Effects**: Update state
3. **Interactions**: Make external calls

### 2. ReentrancyGuard Modifier

Use OpenZeppelin's ReentrancyGuard:

\`\`\`solidity
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract MyContract is ReentrancyGuard {
    function withdraw() public nonReentrant {
        // Safe withdrawal logic
    }
}
\`\`\`

### 3. Pull Payment Pattern

Instead of pushing payments, let users pull their funds:

\`\`\`solidity
mapping(address => uint) public pendingWithdrawals;

function requestWithdrawal(uint amount) public {
    // Update state first
    pendingWithdrawals[msg.sender] += amount;
    balances[msg.sender] -= amount;
}

function withdraw() public {
    uint amount = pendingWithdrawals[msg.sender];
    pendingWithdrawals[msg.sender] = 0;
    payable(msg.sender).transfer(amount);
}
\`\`\`

## Real-World Examples

The DAO hack in 2016 is a famous example of a reentrancy attack that led to the Ethereum hard fork. More recently, the Fei Protocol incident demonstrated how complex protocols can be vulnerable.

## Conclusion

Reentrancy attacks remain a critical threat. Always update state before external calls, use proven security patterns, and consider multiple layers of protection.
    `.trim(),
  },
  {
    id: 4,
    title: 'Gas Optimization Techniques for Smart Contracts',
    excerpt: 'Practical tips and techniques to reduce gas costs in your Solidity smart contracts.',
    category: 'Development',
    date: '2025-09-28',
    readTime: '7 min read',
    featured: false,
    author: 'Emily Zhang',
    content: `
# Gas Optimization Techniques for Smart Contracts

Gas optimization is crucial for user experience and cost efficiency. Here are practical techniques to reduce gas consumption in your Solidity contracts.

## Storage Optimization

### Pack Structs Efficiently

Solidity storage slots are 32 bytes. Pack related variables together:

\`\`\`solidity
// Bad: Uses 3 storage slots
struct User {
    uint128 balance;    // Slot 1
    uint64 id;          // Slot 2 (wastes space)
    bool active;        // Slot 3 (wastes space)
}

// Good: Uses 1 storage slot
struct User {
    uint128 balance;    // Slot 1
    uint64 id;          // Slot 1
    bool active;        // Slot 1
}
\`\`\`

### Use uint256 or uint8 Appropriately

- Storage: Use smaller types (uint8, uint128) when you can pack them
- Memory/Stack: Use uint256 (native word size, no conversion needed)

## Loop Optimization

### Cache Array Length

\`\`\`solidity
// Bad
for (uint i = 0; i < items.length; i++) {
    // ...
}

// Good
uint length = items.length;
for (uint i = 0; i < length; i++) {
    // ...
}
\`\`\`

### Use Unchecked Arithmetic

For loops where overflow is impossible:

\`\`\`solidity
for (uint i = 0; i < length; ) {
    // ... operations
    unchecked { ++i; }
}
\`\`\`

## Function Optimization

### Short-Circuit Evaluation

Order conditions by probability:

\`\`\`solidity
// Most likely to fail first
require(isValid && amount > 0 && user.active);
\`\`\`

### Use Events Instead of Storage

Events are much cheaper than storage for historical data:

\`\`\`solidity
// Good: Use events for historical tracking
event Transfer(address indexed from, address indexed to, uint256 value);
\`\`\`

## Memory vs Storage

- Use memory for temporary variables
- Use calldata for read-only external function parameters
- Avoid copying storage to memory unnecessarily

## Best Practices

1. Minimize external calls
2. Batch operations when possible
3. Use libraries for reusable code
4. Consider using proxy patterns for upgradeability

## Conclusion

Gas optimization requires balancing readability, security, and cost. Always measure gas usage before and after optimization to verify improvements.
    `.trim(),
  },
  {
    id: 5,
    title: 'Layer 2 Security Considerations',
    excerpt: 'Security implications and best practices when deploying on Layer 2 solutions.',
    category: 'Layer 2',
    date: '2025-09-20',
    readTime: '9 min read',
    featured: false,
    author: 'David Kim',
    content: `
# Layer 2 Security Considerations

Layer 2 solutions offer scalability, but they introduce unique security considerations. Here's what you need to know.

## Understanding Layer 2 Architectures

### Optimistic Rollups

- Rely on fraud proofs and challenge periods
- Funds are locked during challenge windows
- Consider withdrawal delays in your design

### ZK-Rollups

- Use cryptographic proofs for validity
- Faster withdrawals but more complex
- Verify proof systems are battle-tested

## Security Considerations

### Bridge Security

Bridges between L1 and L2 are common attack vectors:

- Audit bridge contracts thoroughly
- Consider multi-signature requirements
- Implement time delays for large withdrawals
- Use proven bridge solutions when possible

### Centralization Risks

Some L2 solutions have centralized components:

- Understand trust assumptions
- Consider exit mechanisms
- Plan for potential sequencer downtime

### Smart Contract Differences

L2 environments may have differences:

- Gas costs and limits
- Opcodes availability
- Block structure and timing
- Address derivation

## Best Practices

### 1. Test on L2 Testnets

Don't assume L1 behavior applies directly to L2. Test thoroughly on L2 testnets.

### 2. Handle Withdrawal Delays

Design your contracts to handle delayed withdrawals gracefully, especially for Optimistic Rollups.

### 3. Monitor L2-Specific Risks

- Sequencer downtime
- Bridge risks
- L2 upgrade implications

### 4. Consider Multi-Layer Deployment

Deploy critical logic on L1 when possible, use L2 for high-frequency operations.

## Conclusion

Layer 2 security requires understanding the specific L2 architecture you're using. Always account for unique risks and test thoroughly in the L2 environment.
    `.trim(),
  },
  {
    id: 6,
    title: 'NFT Security: Beyond the Basics',
    excerpt: 'Advanced security considerations for NFT projects including royalty mechanisms and marketplace integration.',
    category: 'NFT',
    date: '2025-09-15',
    readTime: '11 min read',
    featured: false,
    author: 'Lisa Wang',
    content: `
# NFT Security: Beyond the Basics

While basic NFT security is important, advanced projects require deeper considerations around royalties, marketplaces, and complex interactions.

## Royalty Mechanism Security

### Enforceable vs Non-Enforceable Royalties

- On-chain royalties: Enforced by the contract
- Off-chain royalties: Rely on marketplace compliance
- Consider EIP-2981 standard implementation

### Royalty Implementation

\`\`\`solidity
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

interface IERC2981 is IERC165 {
    function royaltyInfo(uint256 tokenId, uint256 salePrice)
        external view returns (address receiver, uint256 royaltyAmount);
}
\`\`\`

## Marketplace Integration Security

### Preventing Unauthorized Transfers

- Implement proper access controls
- Use allowlists for trusted marketplaces
- Consider operator approvals carefully

### Price Manipulation Protection

- Implement minimum price floors
- Use time-weighted pricing
- Monitor for wash trading

## Batch Operations

### Efficient Minting

\`\`\`solidity
function batchMint(address[] calldata recipients, uint256[] calldata tokenIds) external {
    require(recipients.length == tokenIds.length, "Arrays length mismatch");
    
    for (uint i = 0; i < recipients.length; ) {
        _safeMint(recipients[i], tokenIds[i]);
        unchecked { ++i; }
    }
}
\`\`\`

## Metadata Security

- Host metadata securely (IPFS, Arweave)
- Verify metadata integrity
- Implement metadata update mechanisms carefully

## Advanced Features

### Dynamic NFTs

- Consider state management complexity
- Validate state transitions
- Plan for metadata updates

### Access Control

Implement role-based access for:
- Minting permissions
- Metadata updates
- Royalty configuration

## Conclusion

NFT security extends far beyond basic token standards. Consider marketplace interactions, royalty enforcement, and complex feature sets carefully.
    `.trim(),
  },
  {
    id: 7,
    title: 'Formal Verification in Smart Contract Security',
    excerpt: 'An introduction to formal verification and how it can enhance your security audit process.',
    category: 'Security',
    date: '2025-09-10',
    readTime: '15 min read',
    featured: false,
    author: 'Alex Chen',
    content: `
# Formal Verification in Smart Contract Security

Formal verification uses mathematical methods to prove that a smart contract satisfies its specifications. Let's explore how it can enhance security.

## What is Formal Verification?

Formal verification proves that a program's behavior matches its specification using mathematical logic. Unlike testing, it can prove properties hold for all possible inputs.

## Benefits

### Complete Coverage

- Proves properties for all inputs, not just test cases
- Finds edge cases that testing might miss
- Provides mathematical certainty

### Specification Clarity

- Forces clear definition of expected behavior
- Documents contract invariants
- Improves understanding of the system

## Tools and Techniques

### Solidity-Specific Tools

**Certora**: Automated formal verification for Solidity
**Manticore**: Symbolic execution engine
**Slither**: Static analysis with formal verification elements

### Specification Languages

Define properties to verify:

\`\`\`solidity
// Example invariant: Total supply never exceeds max
invariant totalSupply <= MAX_SUPPLY

// Example rule: Transfers only decrease sender balance
rule transferPreservesBalance(uint amount) {
    uint senderBalanceBefore = balanceOf(msg.sender);
    transfer(recipient, amount);
    assert balanceOf(msg.sender) == senderBalanceBefore - amount;
}
\`\`\`

## Common Properties to Verify

1. **Access Control**: Only authorized users can call functions
2. **Invariants**: Key properties always hold (e.g., total supply = sum of balances)
3. **Reentrancy**: Functions are not vulnerable to reentrancy
4. **Overflow/Underflow**: Arithmetic operations are safe
5. **Business Logic**: Complex logic behaves as specified

## Limitations

- Requires mathematical specifications
- Can be computationally expensive
- May not catch specification errors
- Best combined with other audit methods

## Best Practices

1. Start with critical functions
2. Define clear specifications
3. Use incremental verification
4. Combine with manual review and testing

## Conclusion

Formal verification is a powerful addition to security audits but should complement, not replace, manual code review and testing.
    `.trim(),
  },
  {
    id: 8,
    title: 'Tokenomics Security: Protecting Economic Models',
    excerpt: 'How to design secure tokenomics that resist economic attacks and manipulation.',
    category: 'Tokenomics',
    date: '2025-09-05',
    readTime: '13 min read',
    featured: false,
    author: 'Emily Zhang',
    content: `
# Tokenomics Security: Protecting Economic Models

Tokenomics security goes beyond code security - it's about ensuring your economic model is resistant to attacks and manipulation.

## Common Tokenomics Vulnerabilities

### Inflation Attacks

Uncontrolled token minting can devalue holdings:

- Implement maximum supply caps
- Use time-locked minting functions
- Require multi-signature for supply changes

### Flash Loan Attacks

Attackers use flash loans to manipulate token prices:

- Implement time-weighted pricing
- Add cooldown periods for critical operations
- Consider circuit breakers

### Rug Pull Mechanisms

Prevent project owners from draining liquidity:

- Lock liquidity provider tokens
- Implement vesting schedules for team tokens
- Use multi-signature wallets
- Consider timelocks for withdrawals

## Vesting Schedule Security

### Implementation Best Practices

\`\`\`solidity
contract VestingWallet {
    mapping(address => VestingSchedule) public vestingSchedules;
    
    struct VestingSchedule {
        uint256 totalAmount;
        uint256 released;
        uint256 startTime;
        uint256 duration;
    }
    
    function release() public {
        VestingSchedule storage schedule = vestingSchedules[msg.sender];
        uint256 releasable = vestedAmount(msg.sender) - schedule.released;
        
        require(releasable > 0, "No tokens to release");
        schedule.released += releasable;
        
        token.transfer(msg.sender, releasable);
    }
}
\`\`\`

## Economic Attack Vectors

### Price Manipulation

- Implement minimum liquidity requirements
- Use multiple price oracles
- Consider TWAP mechanisms

### Sybil Attacks

- Implement anti-Sybil mechanisms
- Consider reputation systems
- Use proof-of-stake or similar mechanisms

### Governance Attacks

- Require minimum stake for proposals
- Implement quorum requirements
- Use time delays for execution

## Best Practices

1. **Transparent Economics**: Clearly document all token flows
2. **Limits and Caps**: Implement maximums for critical parameters
3. **Time Delays**: Add delays for major economic changes
4. **Multi-Signature**: Require multiple approvals for sensitive actions
5. **Audit Economics**: Review economic models with experts

## Conclusion

Tokenomics security requires careful design and thorough testing. Consider economic attacks alongside technical vulnerabilities in your security review.
    `.trim(),
  },
]


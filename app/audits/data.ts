export interface AuditFinding {
  id: string
  title: string
  severity: 'High' | 'Medium' | 'Low' | 'Info'
  description: string
  recommendation: string
  codeSnippet: string
}

export interface Audit {
  slug: string
  project: string
  scope: string
  findings: { high: number; medium: number; low?: number }
  highlights: string[]
  findingsDetail: AuditFinding[]
}

export const audits: Audit[] = [
  {
    slug: 'uniswap-v2-partial',
    project: 'Uniswap V2 (partial review)',
    scope: 'Pair / Router',
    findings: { high: 1, medium: 3 },
    highlights: [
      'Reentrancy risk in swap callback path',
      'Flash loan arbitrage vector in Pair.sync',
      'Rounding bias in getAmountOut edge cases',
    ],
    findingsDetail: [
      {
        id: 'H-01',
        title: 'Reentrancy in swap via callback',
        severity: 'High',
        description:
          'The swap function triggers a callback to the recipient before state updates complete. A malicious pair contract or receiver can re-enter and drain liquidity during the callback window.',
        recommendation:
          'Apply checks-effects-interactions pattern. Update all state (balances, reserves) before performing the callback. Consider ReentrancyGuard as defense-in-depth.',
        codeSnippet: `// Vulnerable: callback before state finalization
function swap(uint amount0Out, uint amount1Out, address to, bytes data) external {
    // ... checks ...
    if (amount0Out > 0) _safeTransfer(_token0, to, amount0Out);
    if (amount1Out > 0) _safeTransfer(_token1, to, amount1Out);
    if (data.length > 0) IUniswapV2Callee(to).uniswapV2Call(...);  // Re-entry point
    _update(balance0, balance1, ...);  // State update too late
}`,
      },
      {
        id: 'M-01',
        title: 'Flash loan arbitrage via sync manipulation',
        severity: 'Medium',
        description:
          'An attacker can flash loan, call sync() to skew reserves, execute arbitrage, and repay within the same transaction. While not a direct exploit of Pair logic, it enables low-cost MEV extraction.',
        recommendation:
          'Document sync() behavior. Consider time-weighted oracles for dependent protocols. No change required in Pair—informational for integrators.',
        codeSnippet: `function sync() external lock {
    _update(IERC20(token0).balanceOf(address(this)),
            IERC20(token1).balanceOf(address(this)),
            reserve0, reserve1);
}`,
      },
      {
        id: 'M-02',
        title: 'Rounding bias in getAmountOut',
        severity: 'Medium',
        description:
          'Integer division in getAmountOut can favor the pool in certain edge cases. With small amounts, the rounding may consistently round down for users.',
        recommendation:
          'Document expected rounding behavior. For protocols requiring exact amounts, use getAmountIn or add safety margins.',
        codeSnippet: `function getAmountOut(uint amountIn, uint reserveIn, uint reserveOut)
    public pure returns (uint amountOut) {
    require(amountIn > 0 && reserveIn > 0 && reserveOut > 0);
    uint amountInWithFee = amountIn * 997;
    uint numerator = amountInWithFee * reserveOut;
    uint denominator = reserveIn * 1000 + amountInWithFee;
    amountOut = numerator / denominator;  // Truncation
}`,
      },
      {
        id: 'M-03',
        title: 'Missing zero-address check in Router',
        severity: 'Medium',
        description:
          'addLiquidity and related Router functions do not explicitly reject tokenA == tokenB or token == address(0). Can lead to accidental loss of funds.',
        recommendation:
          'Add require(tokenA != tokenB) and require(tokenA != address(0) && tokenB != address(0)) at Router entry points.',
        codeSnippet: `function addLiquidity(
    address tokenA,
    address tokenB,
    uint amountADesired,
    uint amountBDesired,
    // ... no zero / same-token checks
) public returns (uint amountA, uint amountB, uint liquidity) { ... }`,
      },
    ],
  },
  {
    slug: 'bridge-message-relay',
    project: 'Bridge Message Relay (anonymized)',
    scope: 'Relayer / Verifier',
    findings: { high: 2, medium: 2 },
    highlights: [
      'Replay across chains without nonce enforcement',
      'Signature malleability in ECDSA recovery',
    ],
    findingsDetail: [
      {
        id: 'H-01',
        title: 'Cross-chain replay without nonce',
        severity: 'High',
        description:
          'Messages are verified by signature only. Same signed message can be relayed on multiple target chains. Attacker replays a valid withdraw on Chain B after it was already executed on Chain A.',
        recommendation:
          'Include (chainId, nonce) in signed payload. Maintain per-sender nonce on each destination chain. Reject duplicates.',
        codeSnippet: `// Vulnerable: no chain/nonce in message
struct Message {
    address sender;
    address token;
    uint256 amount;
    bytes32 txHash;
}
// Add: uint256 destChainId; uint256 nonce;`,
      },
      {
        id: 'H-02',
        title: 'Signature malleability',
        severity: 'High',
        description:
          'Using ecrecover directly allows signature malleability (ECDSA s-value). A valid signature can be modified to a different valid signature, breaking nonce/replay assumptions.',
        recommendation:
          'Use OpenZeppelin ECDSA.recover with signature validation that rejects s > secp256k1.n/2. Or use EIP-1271 for contract signers.',
        codeSnippet: `address signer = ecrecover(
    keccak256(abi.encodePacked(prefix, messageHash)),
    v, r, s
);
// s malleability: (r,s) and (r, n-s) both valid`,
      },
    ],
  },
  {
    slug: 'defi-lending-core',
    project: 'DeFi Lending Core (anonymized)',
    scope: 'Lending logic / Oracle',
    findings: { high: 1, medium: 4 },
    highlights: [
      'Oracle manipulation via low-liquidity pool',
      'Liquidation threshold bypass with flash loan',
    ],
    findingsDetail: [
      {
        id: 'H-01',
        title: 'Oracle price manipulation',
        severity: 'High',
        description:
          'Protocol uses single Uniswap pool as price feed. Attacker can flash loan to move spot price, trigger liquidations or unfair borrows at manipulated price.',
        recommendation:
          'Use TWAP (time-weighted average price), multiple oracles, or Chainlink. Enforce minimum liquidity and max price deviation per block.',
        codeSnippet: `// Vulnerable: spot price only
(uint256 reserve0, uint256 reserve1,) = pair.getReserves();
uint256 price = reserve1 / reserve0;  // Instant manipulation
return price;`,
      },
    ],
  },
]

export function getAuditBySlug(slug: string): Audit | undefined {
  return audits.find((a) => a.slug === slug)
}

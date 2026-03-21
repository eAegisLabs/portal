import Link from 'next/link'
import styles from './page.module.css'

const DEMO_FINDINGS = [
  { id: 'H-01', title: 'Reentrancy in swap via callback', severity: 'High' as const },
  { id: 'M-01', title: 'Flash loan arbitrage via sync manipulation', severity: 'Medium' as const },
  { id: 'M-02', title: 'Rounding bias in getAmountOut', severity: 'Medium' as const },
  { id: 'M-03', title: 'Missing zero-address check in Router', severity: 'Medium' as const },
  { id: 'L-01', title: 'Unchecked return value for non-standard ERC20', severity: 'Low' as const },
]

const RISK_RATING = [
  { level: 'Critical', count: 0, color: '#dc3545' },
  { level: 'High', count: 1, color: '#ff6b6b' },
  { level: 'Medium', count: 3, color: '#ffc107' },
  { level: 'Low', count: 1, color: '#00d9ff' },
  { level: 'Info', count: 0, color: '#718096' },
]

export const metadata = {
  title: 'Report Demo | Sample Audit Report',
  description: 'See what an Aegis Labs audit report looks like. Overview, scope, methodology, findings, risk rating.',
}

export default function ReportDemoPage() {
  return (
    <div className={styles.reportPage}>
      {/* Header / Cover */}
      <section className={styles.cover}>
        <div className="container">
          <span className={styles.badge}>Demo Report</span>
          <h1>Smart Contract Security Audit Report</h1>
          <p className={styles.projectName}>Uniswap V2 — Partial Review</p>
          <div className={styles.meta}>
            <span>Version 1.0</span>
            <span>•</span>
            <span>November 2025</span>
            <span>•</span>
            <span>Aegis Labs</span>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>1. Overview</h2>
          <div className={styles.content}>
            <p>
              This report presents the findings of a security audit conducted by Aegis Labs
              on a subset of the Uniswap V2 core contracts, specifically the Pair and Router
              implementations.
            </p>
            <p>
              The audit focused on cross-chain message handling, reentrancy vectors,
              liquidity invariants, and upgradeability risks. Automated analysis was
              supplemented with manual code review.
            </p>
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>2. Scope</h2>
          <div className={styles.content}>
            <div className={styles.scopeGrid}>
              <div className={styles.scopeCard}>
                <h4>In Scope</h4>
                <ul>
                  <li>UniswapV2Pair.sol</li>
                  <li>UniswapV2Router02.sol</li>
                  <li>swap / addLiquidity / removeLiquidity flows</li>
                </ul>
              </div>
              <div className={styles.scopeCard}>
                <h4>Out of Scope</h4>
                <ul>
                  <li>Factory contracts</li>
                  <li>ERC20 token implementations</li>
                  <li>Oracle / TWAP logic</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>3. Methodology</h2>
          <div className={styles.content}>
            <div className={styles.methodologyGrid}>
              <div className={styles.methodItem}>
                <div className={styles.methodIcon}>1</div>
                <h4>Static Analysis</h4>
                <p>Slither, Mythril for automated vulnerability detection</p>
              </div>
              <div className={styles.methodItem}>
                <div className={styles.methodIcon}>2</div>
                <h4>Manual Review</h4>
                <p>Line-by-line audit of business logic and edge cases</p>
              </div>
              <div className={styles.methodItem}>
                <div className={styles.methodIcon}>3</div>
                <h4>Cross-chain Focus</h4>
                <p>Message verification, replay protection, invariant checks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Rating - Visual */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>4. Risk Rating</h2>
          <div className={styles.riskSection}>
            <div className={styles.riskBars}>
              {RISK_RATING.map((r) => (
                <div key={r.level} className={styles.riskRow}>
                  <span className={styles.riskLabel}>{r.level}</span>
                  <div className={styles.riskBarBg}>
                    <div
                      className={styles.riskBarFill}
                      style={{
                        width: `${Math.min(100, (r.count / 5) * 100)}%`,
                        backgroundColor: r.color,
                      }}
                    />
                  </div>
                  <span className={styles.riskCount}>{r.count}</span>
                </div>
              ))}
            </div>
            <div className={styles.riskSummary}>
              <p>
                <strong>Overall Assessment:</strong> 1 High and 3 Medium severity issues
                identified. No Critical findings. Recommendations provided for all items.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Findings - Vulnerability List UI */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>5. Findings</h2>
          <p className={styles.findingsIntro}>
            Detailed vulnerability list with descriptions, recommendations, and code references.
          </p>

          {/* Findings index / TOC */}
          <div className={styles.findingsIndex}>
            {DEMO_FINDINGS.map((f) => (
              <a
                key={f.id}
                href={`#finding-${f.id}`}
                className={`${styles.findingIndexItem} ${styles[`severity${f.severity}`]}`}
              >
                <span className={styles.findingId}>{f.id}</span>
                <span className={styles.findingTitle}>{f.title}</span>
                <span className={`${styles.severityBadge} ${styles[`badge${f.severity}`]}`}>
                  {f.severity}
                </span>
              </a>
            ))}
          </div>

          {/* Finding Detail: H-01 */}
          <div id="finding-H-01" className={styles.findingDetail}>
            <div className={styles.findingDetailHeader}>
              <span className={styles.findingId}>H-01</span>
              <span className={`${styles.severityBadge} ${styles.badgeHigh}`}>High</span>
            </div>
            <h3>Reentrancy in swap via callback</h3>
            <div className={styles.findingBlock}>
              <h4>Description</h4>
              <p>
                The swap function triggers a callback to the recipient before state updates
                complete. A malicious pair contract or receiver can re-enter and drain
                liquidity during the callback window.
              </p>
            </div>
            <div className={styles.findingBlock}>
              <h4>Recommendation</h4>
              <p>
                Apply checks-effects-interactions pattern. Update all state (balances,
                reserves) before performing the callback. Consider ReentrancyGuard as
                defense-in-depth.
              </p>
            </div>
            <div className={styles.findingBlock}>
              <h4>Code Reference</h4>
              <pre className={styles.codeBlock}>
                <code>{`function swap(uint amount0Out, uint amount1Out, address to, bytes data) external {
    // ... checks ...
    if (amount0Out > 0) _safeTransfer(_token0, to, amount0Out);
    if (amount1Out > 0) _safeTransfer(_token1, to, amount1Out);
    if (data.length > 0) IUniswapV2Callee(to).uniswapV2Call(...);  // Re-entry point
    _update(balance0, balance1, ...);  // State update too late
}`}</code>
              </pre>
            </div>
          </div>

          {/* Finding Detail: M-01 */}
          <div id="finding-M-01" className={styles.findingDetail}>
            <div className={styles.findingDetailHeader}>
              <span className={styles.findingId}>M-01</span>
              <span className={`${styles.severityBadge} ${styles.badgeMedium}`}>Medium</span>
            </div>
            <h3>Flash loan arbitrage via sync manipulation</h3>
            <div className={styles.findingBlock}>
              <h4>Description</h4>
              <p>
                An attacker can flash loan, call sync() to skew reserves, execute arbitrage,
                and repay within the same transaction. Enables low-cost MEV extraction.
              </p>
            </div>
            <div className={styles.findingBlock}>
              <h4>Recommendation</h4>
              <p>
                Document sync() behavior. Consider time-weighted oracles for dependent
                protocols. Informational for integrators.
              </p>
            </div>
          </div>

          {/* Collapsed style for M-02, M-03, L-01 - compact */}
          <div id="finding-M-02" className={`${styles.findingDetail} ${styles.compact}`}>
            <div className={styles.findingDetailHeader}>
              <span className={styles.findingId}>M-02</span>
              <span className={`${styles.severityBadge} ${styles.badgeMedium}`}>Medium</span>
            </div>
            <h3>Rounding bias in getAmountOut</h3>
            <p>
              Integer division can favor the pool in edge cases. Document rounding behavior;
              use getAmountIn or safety margins for exact-amount protocols.
            </p>
          </div>

          <div id="finding-M-03" className={`${styles.findingDetail} ${styles.compact}`}>
            <div className={styles.findingDetailHeader}>
              <span className={styles.findingId}>M-03</span>
              <span className={`${styles.severityBadge} ${styles.badgeMedium}`}>Medium</span>
            </div>
            <h3>Missing zero-address check in Router</h3>
            <p>
              addLiquidity does not reject tokenA == tokenB or address(0). Add explicit
              validation at Router entry points.
            </p>
          </div>

          <div id="finding-L-01" className={`${styles.findingDetail} ${styles.compact}`}>
            <div className={styles.findingDetailHeader}>
              <span className={styles.findingId}>L-01</span>
              <span className={`${styles.severityBadge} ${styles.badgeLow}`}>Low</span>
            </div>
            <h3>Unchecked return value for non-standard ERC20</h3>
            <p>
              Some tokens do not return bool. Use SafeERC20 or check return values where
              applicable.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>This is what you get</h2>
            <p>Structured, actionable reports. Not PDFs—living documents you can share and reference.</p>
            <Link href="/submit" className="btn btn-primary">
              Submit for Free Review
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

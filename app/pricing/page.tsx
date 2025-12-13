import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'Pricing',
  description: 'Transparent pricing for smart contract audit services. Choose from Basic, Standard, or Premium audit packages.',
}

export default function Pricing() {
  return (
    <div className={styles.pricingPage}>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <h1>Audit Pricing</h1>
          <p>Transparent pricing for comprehensive smart contract security audits</p>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className={styles.packages}>
        <div className="container">
          {/* Basic Audit */}
          <div className={`card ${styles.packageCard}`}>
            <div className={styles.packageHeader}>
              <div className={styles.packageIcon}>🟦</div>
              <h2>Basic Audit</h2>
              <div className={styles.priceRange}>$1,000 – $4,000</div>
            </div>

            <div className={styles.packageSection}>
              <h3>🎯 Suitable For</h3>
              <ul>
                <li>ERC20 / ERC721 basic token projects</li>
                <li>Simple functional smart contracts</li>
                <li>Limited budget, need for quick launch</li>
              </ul>
            </div>

            <div className={styles.packageSection}>
              <h3>🧩 Services Included</h3>
              <ul>
                <li>Automated vulnerability scanning (Slither / Mythril)</li>
                <li>Basic manual audit (permissions, asset security, common vulnerabilities)</li>
                <li>Standard risk checks:
                  <ul className={styles.subList}>
                    <li>Reentrancy attacks</li>
                    <li>Authorization errors</li>
                    <li>Overflow/underflow</li>
                    <li>External call risks</li>
                  </ul>
                </li>
                <li>Basic Gas usage analysis</li>
                <li>Pre-deployment parameter check</li>
              </ul>
            </div>

            <div className={styles.packageSection}>
              <h3>📄 Deliverables</h3>
              <ul>
                <li>Audit report (PDF)</li>
                <li>Risk level classification</li>
                <li>Remediation recommendations</li>
                <li>1 re-audit after fixes</li>
              </ul>
            </div>

            <Link href="/contact" className="btn btn-secondary">
              Get Quote
            </Link>
          </div>

          {/* Standard Audit */}
          <div className={`card ${styles.packageCard} ${styles.featured}`}>
            <div className={styles.featuredBadge}>Most Popular</div>
            <div className={styles.packageHeader}>
              <div className={styles.packageIcon}>🟩</div>
              <h2>Standard Audit</h2>
              <div className={styles.priceRange}>$4,000 – $12,000</div>
            </div>

            <div className={styles.packageSection}>
              <h3>🎯 Suitable For</h3>
              <ul>
                <li>General DApp projects</li>
                <li>Staking, mining, vesting, airdrop contracts</li>
                <li>Multi-contract structure projects</li>
                <li>Contracts using Proxy patterns</li>
              </ul>
            </div>

            <div className={styles.packageSection}>
              <h3>🧩 Services Included</h3>
              <ul>
                <li>Comprehensive manual code audit</li>
                <li>Automated scanning + manual false positive filtering</li>
                <li>Foundry Fuzz Testing</li>
                <li>Permission matrix analysis</li>
                <li>Upgrade proxy (UUPS / Transparent) review</li>
                <li>Business logic and event flow analysis</li>
                <li>Front-running risk analysis</li>
                <li>Gas optimization recommendations (optional)</li>
              </ul>
            </div>

            <div className={styles.packageSection}>
              <h3>📄 Deliverables</h3>
              <ul>
                <li>Complete audit report (PDF)</li>
                <li>Risk levels: Critical / High / Medium / Low / Info</li>
                <li>Test coverage documentation</li>
                <li>1 fix re-audit</li>
                <li>Optional: Pre-deployment configuration check</li>
              </ul>
            </div>

            <Link href="/contact" className="btn btn-primary">
              Get Quote
            </Link>
          </div>

          {/* Premium/DeFi Audit */}
          <div className={`card ${styles.packageCard}`}>
            <div className={styles.packageHeader}>
              <div className={styles.packageIcon}>🟥</div>
              <h2>Premium / DeFi Audit</h2>
              <div className={styles.priceRange}>$12,000 – $50,000+</div>
            </div>

            <div className={styles.packageSection}>
              <h3>🎯 Suitable For</h3>
              <ul>
                <li>DeFi protocols (DEX, AMM, Lending)</li>
                <li>Cross-chain bridges, Rollups, off-chain proof systems</li>
                <li>Complex economic/incentive model projects</li>
                <li>High TVL projects requiring deep security analysis</li>
              </ul>
            </div>

            <div className={styles.packageSection}>
              <h3>🧩 Services Included</h3>
              <ul>
                <li>Multi-auditor deep manual audit</li>
                <li>Complete Foundry Fuzz testing & scenario simulation</li>
                <li>Economic model risk analysis</li>
                <li>Flash-loan, MEV (Sandwich/Arbitrage) simulation</li>
                <li>Oracle price manipulation security analysis (TWAP / Chainlink)</li>
                <li>Proxy upgrade lifecycle review</li>
                <li>Multi-sig / Timelock permission architecture design</li>
                <li>Emergency response recommendations</li>
                <li>Optional: Formal verification</li>
              </ul>
            </div>

            <div className={styles.packageSection}>
              <h3>📄 Deliverables</h3>
              <ul>
                <li>Comprehensive audit report (professional layout)</li>
                <li>2 fix re-audits</li>
                <li>Permission architecture diagrams / flowcharts</li>
                <li>Production deployment checklist</li>
                <li>Tokenomics security assessment (optional)</li>
              </ul>
            </div>

            <Link href="/contact" className="btn btn-secondary">
              Get Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className={styles.comparisonSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Package Comparison</h2>
            <p>Find the right audit package for your project</p>
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th>Package</th>
                  <th>Automated Scanning</th>
                  <th>Manual Audit</th>
                  <th>Fuzz Testing</th>
                  <th>Proxy Review</th>
                  <th>Economic Model</th>
                  <th>MEV / Flashloan</th>
                  <th>Re-audits</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.packageName}>Basic</td>
                  <td>✔</td>
                  <td>✔ (Basic)</td>
                  <td>✘</td>
                  <td>✘</td>
                  <td>✘</td>
                  <td>✘</td>
                  <td>1</td>
                  <td>$1k–4k</td>
                </tr>
                <tr className={styles.featuredRow}>
                  <td className={styles.packageName}>Standard</td>
                  <td>✔</td>
                  <td>✔ (Full)</td>
                  <td>✔</td>
                  <td>✔</td>
                  <td>✘</td>
                  <td>Partial</td>
                  <td>1</td>
                  <td>$4k–12k</td>
                </tr>
                <tr>
                  <td className={styles.packageName}>Premium</td>
                  <td>✔</td>
                  <td>✔✔ (Multi-auditor)</td>
                  <td>✔✔</td>
                  <td>✔✔</td>
                  <td>✔</td>
                  <td>✔✔</td>
                  <td>2</td>
                  <td>$12k–50k+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.whySection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Why Choose Aegis Labs?</h2>
            <p>Built for small teams - affordable, fast, and friendly</p>
          </div>

          <div className={styles.whyGrid}>
            <div className="card">
              <div className={styles.whyIcon}>🔗</div>
              <h3>Real On-Chain Experience</h3>
              <p>
                Experience from actual on-chain projects including Bridge, Staking, and Layer 2 protocols.
              </p>
            </div>

            <div className="card">
              <div className={styles.whyIcon}>🛠️</div>
              <h3>Familiar with Modern Tools</h3>
              <p>
                Proficient in Foundry, Hardhat, Rollup technologies, and cross-chain bridge architectures.
              </p>
            </div>

            <div className="card">
              <div className={styles.whyIcon}>📊</div>
              <h3>Three-Dimensional Review</h3>
              <p>
                Comprehensive review covering business logic, economic model, and security from three perspectives.
              </p>
            </div>

            <div className="card">
              <div className={styles.whyIcon}>✅</div>
              <h3>Complete Support</h3>
              <p>
                Audit results include re-audits, production deployment checks, and architecture consulting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Secure Your Project?</h2>
            <p>Get a free quote tailored to your team size and budget. No hidden fees, transparent pricing</p>
            <Link href="/contact" className="btn btn-primary">
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

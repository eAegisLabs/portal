import { metadata } from './metadata'
import Link from 'next/link'
import styles from './page.module.css'

export { metadata }

export default function Services() {
  return (
    <div className={styles.servicesPage}>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <h1>Our Services</h1>
          <p>Affordable audit solutions designed for small and medium teams</p>
        </div>
      </section>

      {/* Service Types */}
      <section className={styles.serviceTypes}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Audit Types</h2>
            <p>We offer specialized audits for different blockchain ecosystems</p>
          </div>

          <div className={styles.auditTypesGrid}>
            <div className="card" id="solidity">
              <h3>Solidity/EVM Audits</h3>
              <p>
                Comprehensive security audits for Ethereum smart contracts written in Solidity.
                Our experts review code for common vulnerabilities including:
              </p>
              <ul>
                <li>Reentrancy attacks</li>
                <li>Integer overflow/underflow</li>
                <li>Access control issues</li>
                <li>Gas optimization</li>
                <li>Logic errors</li>
                <li>Upgradeability risks</li>
              </ul>
            </div>

            <div className={`card ${styles.comingSoonCard}`} id="rust">
              <div className={styles.cardHeader}>
                <h3>Rust/Move Audits</h3>
                <span className={styles.comingSoonBadge}>Coming Soon</span>
              </div>
              <p>
                Security assessments for Solana, Sui, and Aptos projects using Rust or Move.
                We specialize in:
              </p>
              <ul>
                <li>Ownership and borrow checker issues</li>
                <li>Resource management</li>
                <li>Account validation</li>
                <li>PDA (Program Derived Address) security</li>
                <li>Cross-program invocation security</li>
              </ul>
            </div>

            <div className="card" id="layer2">
              <h3>Layer 2 Protocol Audits</h3>
              <p>
                Deep security analysis for Layer 2 scaling solutions including:
              </p>
              <ul>
                <li>Optimistic Rollups (Optimism, Arbitrum)</li>
                <li>ZK-Rollups (zkSync, Starknet)</li>
                <li>State channels</li>
                <li>Sidechains</li>
                <li>Bridge protocols</li>
              </ul>
            </div>

            <div className="card" id="tokenomics">
              <h3>Tokenomics Review</h3>
              <p>
                Economic model analysis to ensure sustainable token design:
              </p>
              <ul>
                <li>Token distribution analysis</li>
                <li>Vesting schedule review</li>
                <li>Inflation/deflation mechanisms</li>
                <li>Governance model assessment</li>
                <li>Economic attack vectors</li>
              </ul>
            </div>

            <div className="card" id="dapp">
              <h3>DApp Security Testing</h3>
              <p>
                End-to-end security testing for decentralized applications:
              </p>
              <ul>
                <li>Frontend security assessment</li>
                <li>Smart contract integration testing</li>
                <li>Wallet connection security</li>
                <li>API endpoint security</li>
                <li>User flow analysis</li>
              </ul>
            </div>

            <div className="card" id="security">
              <h3>Security Audits</h3>
              <p>
                Comprehensive security audits covering all attack vectors:
              </p>
              <ul>
                <li>Automated vulnerability scanning</li>
                <li>Manual code review</li>
                <li>Formal verification (where applicable)</li>
                <li>Penetration testing</li>
                <li>Risk assessment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Process Overview */}
      <section className={styles.processOverview}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Our Audit Process</h2>
            <p>A streamlined methodology designed for small teams - transparent, efficient, and budget-friendly</p>
          </div>

          <div className={styles.processPhases}>
            <div className={`card ${styles.phaseCard}`}>
              <div className={styles.phaseNumber}>Phase 1</div>
              <h3>Client Consultation & Project Preparation</h3>
              <p className={styles.phaseDescription}>
                Initial consultation, requirement assessment, scope determination, contract signing,
                and code repository setup to establish a solid foundation for the audit.
              </p>
              <ul className={styles.phaseSteps}>
                <li>Consultation & requirement submission</li>
                <li>Initial communication & assessment</li>
                <li>Scope determination & quotation</li>
                <li>Contract signing & payment</li>
                <li>Code repository & locking</li>
              </ul>
            </div>

            <div className={`card ${styles.phaseCard}`}>
              <div className={styles.phaseNumber}>Phase 2</div>
              <h3>Audit Execution & Analysis</h3>
              <p className={styles.phaseDescription}>
                Comprehensive code review combining automated analysis tools with expert manual
                review to identify vulnerabilities and security issues.
              </p>
              <ul className={styles.phaseSteps}>
                <li>Audit team formation</li>
                <li>Automated preliminary analysis</li>
                <li>Manual code deep review</li>
                <li>Dynamic testing & verification</li>
              </ul>
            </div>

            <div className={`card ${styles.phaseCard}`}>
              <div className={styles.phaseNumber}>Phase 3</div>
              <h3>Reporting, Fixes & Verification</h3>
              <p className={styles.phaseDescription}>
                Vulnerability documentation, client presentation, fix implementation, and thorough
                re-review to ensure all issues are properly resolved.
              </p>
              <ul className={styles.phaseSteps}>
                <li>Vulnerability classification & draft report</li>
                <li>Results presentation meeting</li>
                <li>Client fixes & code updates</li>
                <li>Code re-review & verification</li>
              </ul>
            </div>

            <div className={`card ${styles.phaseCard}`}>
              <div className={styles.phaseNumber}>Phase 4</div>
              <h3>Final Delivery & Follow-up</h3>
              <p className={styles.phaseDescription}>
                Final report delivery, certificate issuance, project closure, and ongoing support
                to ensure long-term security and partnership.
              </p>
              <ul className={styles.phaseSteps}>
                <li>Final report release</li>
                <li>Certificate issuance & report publication</li>
                <li>Project closure & feedback</li>
                <li>Ongoing support & monitoring</li>
              </ul>
            </div>
          </div>

          <div className={styles.processCta}>
            <Link href="/audit-process" className="btn btn-primary">
              View Detailed Process
            </Link>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className={styles.deliverables}>
        <div className="container">
          <div className="card">
            <h2>What You'll Receive</h2>
            <div className={styles.deliverablesList}>
              <div className={styles.deliverableItem}>
                <h4>📄 Executive Summary</h4>
                <p>High-level overview of findings and risk assessment</p>
              </div>
              <div className={styles.deliverableItem}>
                <h4>🔍 Detailed Technical Report</h4>
                <p>In-depth analysis of each vulnerability with code examples</p>
              </div>
              <div className={styles.deliverableItem}>
                <h4>✅ Remediation Recommendations</h4>
                <p>Specific guidance on how to fix identified issues</p>
              </div>
              <div className={styles.deliverableItem}>
                <h4>🔄 Follow-up Support</h4>
                <p>Post-audit support and verification of fixes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import Link from 'next/link'
import styles from './page.module.css'

export default function AuditProcess() {
  return (
    <div className={styles.processPage}>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <h1>Our Audit Process</h1>
          <p className={styles.subtitle}>
            Version 1.0 | Effective Date: November 29, 2025
          </p>
          <p className={styles.description}>
            Our comprehensive seven-step audit methodology ensures the highest standards of
            professionalism, consistency, and transparency from consultation to delivery.
            We combine advanced automated analysis tools with expert manual review to
            maximize the identification and elimination of potential security vulnerabilities
            and logic flaws.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className={styles.introduction}>
        <div className="container">
          <div className={styles.introContent}>
            <h2>Our Methodology</h2>
            <p>
              Aegis Labs' smart contract audit services aim to provide comprehensive security
              protection for Web3 projects through a systematic and rigorous seven-step process.
              Our workflow combines advanced automated analysis tools with experienced expert
              manual review to ensure maximum discovery and elimination of potential security
              vulnerabilities and logic defects.
            </p>
          </div>
        </div>
      </section>

      {/* Phase 1: Client Consultation & Project Preparation */}
      <section className={styles.phaseSection}>
        <div className="container">
          <div className={styles.phaseHeader}>
            <div className={styles.phaseNumber}>Phase 1</div>
            <div className={styles.phaseTitle}>
              <h2>Client Consultation & Project Preparation</h2>
              <p>Setting the foundation for a successful audit engagement</p>
            </div>
          </div>

          <div className={styles.stepsGrid}>
            <div className={`card ${styles.stepCard}`}>
              <div className={styles.stepNumber}>1.0</div>
              <h3>Consultation & Requirement Submission</h3>
              <p className={styles.stepRole}>Client / Platform</p>
              <p>
                Client submits initial requirements through the platform form, including contract
                type, code volume (LOC), and project urgency.
              </p>
            </div>

            <div className={`card ${styles.stepCard}`}>
              <div className={styles.stepNumber}>1.1</div>
              <h3>Initial Communication & Assessment</h3>
              <p className={styles.stepRole}>Account Manager</p>
              <p>
                Account Manager conducts an online meeting with the client to understand project
                architecture, business logic, and security concerns.
              </p>
            </div>

            <div className={`card ${styles.stepCard}`}>
              <div className={styles.stepNumber}>1.2</div>
              <h3>Scope Determination & Quotation</h3>
              <p className={styles.stepRole}>Account Manager / Technical Director</p>
              <p>
                Based on Lines of Code (LOC), contract complexity, and audit depth, determine
                the final audit scope and timeline, and generate a formal quote.
              </p>
            </div>

            <div className={`card ${styles.stepCard}`}>
              <div className={styles.stepNumber}>1.3</div>
              <h3>Contract Signing & Payment</h3>
              <p className={styles.stepRole}>Account Manager / Legal</p>
              <p>
                Both parties sign a Non-Disclosure Agreement (NDA) and service contract.
                Client makes advance payment (or full payment).
              </p>
            </div>

            <div className={`card ${styles.stepCard}`}>
              <div className={styles.stepNumber}>1.4</div>
              <h3>Code Repository & Locking</h3>
              <p className={styles.stepRole}>Technical Support / Client</p>
              <p>
                Client submits the code to be audited to a secure private repository (e.g., private Git)
                and locks the Commit Hash, performing a "code freeze" to ensure audit consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 2: Audit Execution & Analysis */}
      <section className={`${styles.phaseSection} ${styles.phaseAlternate}`}>
        <div className="container">
          <div className={styles.phaseHeader}>
            <div className={styles.phaseNumber}>Phase 2</div>
            <div className={styles.phaseTitle}>
              <h2>Audit Execution & Analysis</h2>
              <p>Comprehensive code review and security analysis</p>
            </div>
          </div>

          <div className={styles.stepsGrid}>
            <div className={`card ${styles.stepCard}`}>
              <div className={styles.stepNumber}>2.1</div>
              <h3>Audit Team Formation</h3>
              <p className={styles.stepRole}>Technical Director</p>
              <p>
                Technical Director assigns 2-3 senior auditors with relevant experience
                (e.g., DeFi, NFT, Layer 2) to form the project team.
              </p>
            </div>

            <div className={`card ${styles.stepCard}`}>
              <div className={styles.stepNumber}>2.2</div>
              <h3>Automated Preliminary Analysis</h3>
              <p className={styles.stepRole}>Audit Team</p>
              <p>
                Team uses internal tools (such as static analyzers) to perform an initial quick
                scan of the code, generating a preliminary "low-risk" issue list.
              </p>
            </div>

            <div className={`card ${styles.stepCard}`}>
              <div className={styles.stepNumber}>2.3</div>
              <h3>Manual Code Deep Review</h3>
              <p className={styles.stepRole}>Audit Team</p>
              <p>
                Audit team reviews code line by line, focusing on high-risk areas including:
                business logic, economic model, external calls, and Gas optimization.
              </p>
            </div>

            <div className={`card ${styles.stepCard}`}>
              <div className={styles.stepNumber}>2.4</div>
              <h3>Dynamic Testing & Verification</h3>
              <p className={styles.stepRole}>Audit Team</p>
              <p>
                Team deploys contracts on test networks (e.g., Goerli, Sepolia), uses fuzzing
                tools and writes additional unit tests to verify edge cases and attack vectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 3: Reporting, Fixes & Verification */}
      <section className={styles.phaseSection}>
        <div className="container">
          <div className={styles.phaseHeader}>
            <div className={styles.phaseNumber}>Phase 3</div>
            <div className={styles.phaseTitle}>
              <h2>Reporting, Fixes & Verification</h2>
              <p>Vulnerability documentation and remediation validation</p>
            </div>
          </div>

          <div className={styles.stepsGrid}>
            <div className={`card ${styles.stepCard}`}>
              <div className={styles.stepNumber}>3.1</div>
              <h3>Vulnerability Classification & Draft Report</h3>
              <p className={styles.stepRole}>Audit Team</p>
              <p>
                Audit team classifies all discovered issues (including automated and manual findings)
                by severity and compiles them into a preliminary audit report.
              </p>
            </div>

            <div className={`card ${styles.stepCard}`}>
              <div className={styles.stepNumber}>3.2</div>
              <h3>Results Presentation Meeting</h3>
              <p className={styles.stepRole}>Audit Team / Account Manager</p>
              <p>
                Account Manager organizes a meeting where auditors explain each vulnerability's
                nature, potential impact, and remediation recommendations to the project team.
              </p>
            </div>

            <div className={`card ${styles.stepCard}`}>
              <div className={styles.stepNumber}>3.3</div>
              <h3>Client Fixes & Code Updates</h3>
              <p className={styles.stepRole}>Client</p>
              <p>
                Client development team implements code fixes based on the report and submits
                a new Commit Hash.
              </p>
            </div>

            <div className={`card ${styles.stepCard}`}>
              <div className={styles.stepNumber}>3.4</div>
              <h3>Code Re-review & Verification (Re-audit)</h3>
              <p className={styles.stepRole}>Audit Team</p>
              <p>
                Audit team performs differential review (Diff Review) on the fixed code,
                confirming all reported vulnerabilities have been properly resolved and no new
                issues were introduced (regression testing).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 4: Final Delivery & Follow-up */}
      <section className={`${styles.phaseSection} ${styles.phaseAlternate}`}>
        <div className="container">
          <div className={styles.phaseHeader}>
            <div className={styles.phaseNumber}>Phase 4</div>
            <div className={styles.phaseTitle}>
              <h2>Final Delivery & Follow-up</h2>
              <p>Project completion and ongoing support</p>
            </div>
          </div>

          <div className={styles.stepsGrid}>
            <div className={`card ${styles.stepCard}`}>
              <div className={styles.stepNumber}>4.1</div>
              <h3>Final Report Release</h3>
              <p className={styles.stepRole}>Technical Director / Audit Team</p>
              <p>
                Generate final audit report including status of all fixed and unfixed issues.
                Report is reviewed and signed by the Technical Director.
              </p>
            </div>

            <div className={`card ${styles.stepCard}`}>
              <div className={styles.stepNumber}>4.2</div>
              <h3>Certificate Issuance & Report Publication</h3>
              <p className={styles.stepRole}>Account Manager / Marketing</p>
              <p>
                Issue audit pass certificate to client (if applicable) and publish public report
                on the platform per contract terms (typically a sanitized version).
              </p>
            </div>

            <div className={`card ${styles.stepCard}`}>
              <div className={styles.stepNumber}>4.3</div>
              <h3>Project Closure & Feedback</h3>
              <p className={styles.stepRole}>Account Manager</p>
              <p>
                Confirm all services are completed, collect final payment (if applicable),
                and gather client feedback on the service.
              </p>
            </div>

            <div className={`card ${styles.stepCard}`}>
              <div className={styles.stepNumber}>4.4</div>
              <h3>Ongoing Support & Monitoring</h3>
              <p className={styles.stepRole}>Account Manager / Technical Support</p>
              <p>
                Provide post-audit support (e.g., monitoring contract deployment after audit)
                and regularly send security trend briefings to clients, establishing long-term
                partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className={styles.overviewSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Why Our Process Works</h2>
            <p>Comprehensive coverage at every stage</p>
          </div>

          <div className={styles.overviewGrid}>
            <div className="card">
              <div className={styles.overviewIcon}>🔍</div>
              <h3>Systematic Approach</h3>
              <p>
                Every step is carefully planned and executed to ensure no vulnerability goes unnoticed.
              </p>
            </div>
            <div className="card">
              <div className={styles.overviewIcon}>🤝</div>
              <h3>Clear Communication</h3>
              <p>
                Dedicated Account Manager ensures transparent communication throughout the process.
              </p>
            </div>
            <div className="card">
              <div className={styles.overviewIcon}>🛡️</div>
              <h3>Multi-Layer Security</h3>
              <p>
                Combination of automated tools and expert manual review provides comprehensive coverage.
              </p>
            </div>
            <div className="card">
              <div className={styles.overviewIcon}>✅</div>
              <h3>Verification & Validation</h3>
              <p>
                Every fix is thoroughly reviewed to ensure proper resolution and no regression.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Start Your Audit?</h2>
            <p>Get in touch with us to discuss your project requirements</p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className="btn btn-primary">
                Request Quote
              </Link>
              <Link href="/services" className="btn btn-secondary">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
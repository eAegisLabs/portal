import Link from 'next/link'
import styles from './page.module.css'

const STEPS = [
  {
    num: 1,
    title: 'Static Analysis',
    description: 'Automated detection of common vulnerabilities, unchecked calls, and code quality issues using industry-standard tooling.',
  },
  {
    num: 2,
    title: 'Manual Review',
    description: 'Line-by-line code review focusing on business logic, access control, reentrancy, and integration risks.',
  },
  {
    num: 3,
    title: 'Fuzz Testing',
    description: 'Property-based fuzzing to uncover edge cases, unexpected inputs, and overflow conditions.',
  },
  {
    num: 4,
    title: 'Invariant Testing',
    description: 'Verification of system invariants under adversarial conditions—liquidity, collateral ratios, and state consistency.',
  },
  {
    num: 5,
    title: 'Reporting',
    description: 'Structured findings with severity, impact, and actionable recommendations. See our sample report.',
  },
]

const TOOLS = [
  {
    name: 'Slither',
    desc: 'Static analysis for Solidity. Detects vulnerabilities, gas issues, and code quality.',
    url: 'https://github.com/crytic/slither',
  },
  {
    name: 'Foundry',
    desc: 'Fuzz testing, invariant testing, and fast unit tests. Forge, Anvil, Cast.',
    url: 'https://getfoundry.sh',
  },
]

export default function ProcessPage() {
  return (
    <div className={styles.processPage}>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <h1>Audit Process</h1>
          <p className={styles.tagline}>
            We focus on edge cases and economic attack surfaces.
          </p>
        </div>
      </section>

      {/* 5 Steps */}
      <section className={styles.stepsSection}>
        <div className="container">
          <div className={styles.stepsList}>
            {STEPS.map((step) => (
              <div key={step.num} className={styles.stepCard}>
                <div className={styles.stepNum}>{step.num}</div>
                <div className={styles.stepContent}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className={styles.toolsSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Tools We Use</h2>
          <div className={styles.toolsGrid}>
            {TOOLS.map((tool) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.toolCard}
              >
                <div className={styles.toolName}>{tool.name}</div>
                <p>{tool.desc}</p>
                <span className={styles.toolLink}>→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to get started?</h2>
            <div className={styles.ctaButtons}>
              <Link href="/submit" className="btn btn-primary">
                Submit for Free Review
              </Link>
              <Link href="/report-demo" className="btn btn-secondary">
                See Sample Report
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

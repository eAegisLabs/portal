import Link from 'next/link'
import { audits } from './data'
import styles from './page.module.css'

export default function AuditsPage() {
  return (
    <div className={styles.auditsPage}>
      <section className={styles.header}>
        <div className="container">
          <h1>Public Audits</h1>
          <p>Published reports. Real findings.</p>
        </div>
      </section>

      <section className={styles.auditsSection}>
        <div className="container">
          <div className={styles.auditsGrid}>
            {audits.map((audit) => (
              <Link
                key={audit.slug}
                href={`/audits/${audit.slug}`}
                className={`card ${styles.auditCard}`}
              >
                <div className={styles.cardProject}>Project: {audit.project}</div>
                <div className={styles.cardScope}>Scope: {audit.scope}</div>

                <div className={styles.cardFindings}>
                  <span className={styles.findingBadge}>Findings:</span>
                  {audit.findings.high > 0 && (
                    <span className={styles.severityHigh}>
                      {audit.findings.high} High
                    </span>
                  )}
                  {audit.findings.medium > 0 && (
                    <span className={styles.severityMedium}>
                      {audit.findings.medium} Medium
                    </span>
                  )}
                  {audit.findings.low && audit.findings.low > 0 && (
                    <span className={styles.severityLow}>
                      {audit.findings.low} Low
                    </span>
                  )}
                </div>

                <div className={styles.cardHighlights}>
                  <span className={styles.highlightsLabel}>Highlights:</span>
                  <ul>
                    {audit.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>

                <span className={styles.viewReport}>View report →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Submit your project</h2>
            <p>Get a free preliminary review in 24h</p>
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

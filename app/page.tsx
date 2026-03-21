import Link from 'next/link'
import StructuredData, { organizationSchema, serviceSchema, websiteSchema } from '@/components/StructuredData'
import AuditLog from '@/components/AuditLog'
import { audits } from '@/app/audits/data'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={serviceSchema} />
      <StructuredData data={websiteSchema} />

      {/* 1. Hero — 定位 + CTA */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Audit complex smart contracts,
              <br />
              with a focus on <span className="gradient-text">bridge & cross-chain security</span>.
            </h1>
            <p className={styles.heroSubtitle}>
              Get a free preliminary review in 24h.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/submit" className="btn btn-primary">
                Submit for Free Review
              </Link>
              <Link href="/process" className="btn btn-secondary">
                Learn Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What we analyze — 技术能力 */}
      <section className={styles.section}>
        <div className={`container ${styles.analyzeContainer}`}>
          <AuditLog />
          <h2 className={styles.sectionTitle}>What we analyze</h2>
          <ul className={styles.analyzeList}>
            <li>Cross-chain message verification</li>
            <li>Replay protection</li>
            <li>Liquidity invariants</li>
            <li>Upgradeability risks</li>
          </ul>
        </div>
      </section>

      {/* 3. Public Audits — 能力证明 */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Public Audits</h2>
          <p className={styles.sectionDesc}>Proof of our methodology and findings.</p>
          <div className={styles.auditsPreview}>
            {audits.slice(0, 3).map((audit) => (
              <Link
                key={audit.slug}
                href={`/audits/${audit.slug}`}
                className={styles.auditPreviewCard}
              >
                <span className={styles.auditProject}>{audit.project}</span>
                <span className={styles.auditScope}>{audit.scope}</span>
                <span className={styles.auditFindings}>
                  {audit.findings.high} High · {audit.findings.medium} Medium
                </span>
              </Link>
            ))}
          </div>
          <Link href="/audits" className={styles.viewAll}>View all audits →</Link>
        </div>
      </section>

      {/* 4. Audit Process — 建立信任 */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Audit Process</h2>
          <p className={styles.sectionDesc}>We focus on edge cases and economic attack surfaces.</p>
          <ol className={styles.processList}>
            <li>Static Analysis</li>
            <li>Manual Review</li>
            <li>Fuzz Testing</li>
            <li>Invariant Testing</li>
            <li>Reporting</li>
          </ol>
          <Link href="/process" className={styles.viewAll}>Learn our process →</Link>
        </div>
      </section>

      {/* 5. Sample Report — 销售武器 */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Sample Report</h2>
          <p className={styles.sectionDesc}>See what you get. Overview, scope, methodology, findings, risk rating.</p>
          <Link href="/report-demo" className={styles.reportCta}>
            <span>View sample report</span>
            <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </section>

      {/* 6. CTA — Submit */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Submit for Free Review</h2>
            <p>Get a preliminary assessment in 24h. No commitment.</p>
            <Link href="/submit" className="btn btn-primary">
              Submit for Free Review
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

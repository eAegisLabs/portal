import Link from 'next/link'
import StructuredData, { organizationSchema, serviceSchema, websiteSchema } from '@/components/StructuredData'
import AuditLog from '@/components/AuditLog'
import { audits } from '@/app/audits/data'
import styles from './page.module.css'

const ANALYZE_ITEMS = [
  { title: 'Cross-chain message verification', desc: 'Validate message authenticity across bridges' },
  { title: 'Replay protection', desc: 'Nonce chains, domain separators, expiry' },
  { title: 'Liquidity invariants', desc: 'Reserve consistency and accounting edges' },
  { title: 'Upgradeability risks', desc: 'Proxy storage, auth, and init gaps' },
]

const PROCESS_STEPS = [
  'Static Analysis',
  'Manual Review',
  'Fuzz Testing',
  'Invariant Testing',
  'Reporting',
]

export default function Home() {
  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={serviceSchema} />
      <StructuredData data={websiteSchema} />

      {/* 1. Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroGrid} aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.heroBrand}>Aegis Labs</p>
          <h1 className={styles.heroTitle}>
            Audit complex smart contracts,
            <br />
            with a focus on{' '}
            <span className="gradient-text">bridge &amp; cross-chain security</span>.
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
      </section>

      {/* 2. What we analyze */}
      <section className={styles.section}>
        <div className={`container ${styles.analyzeLayout}`}>
          <div className={styles.analyzeVisual}>
            <AuditLog />
          </div>
          <div className={styles.analyzeCopy}>
            <h2 className={styles.sectionTitleLeft}>What we analyze</h2>
            <p className={styles.sectionDescLeft}>
              Edge cases and economic attack surfaces that automated scanners miss.
            </p>
            <ul className={styles.analyzeList}>
              {ANALYZE_ITEMS.map((item) => (
                <li key={item.title}>
                  <span className={styles.analyzeItemTitle}>{item.title}</span>
                  <span className={styles.analyzeItemDesc}>{item.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Public Audits */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Public Audits</h2>
            <p className={styles.sectionDesc}>Proof of our methodology and findings.</p>
          </div>
          <div className={styles.auditsPreview}>
            {audits.slice(0, 3).map((audit) => (
              <Link
                key={audit.slug}
                href={`/audits/${audit.slug}`}
                className={styles.auditPreviewCard}
              >
                <div className={styles.auditCardTop}>
                  <span className={styles.auditProject}>{audit.project}</span>
                  <span className={styles.auditScope}>{audit.scope}</span>
                </div>
                <div className={styles.auditFindings}>
                  <span className={styles.findingsHigh}>{audit.findings.high} High</span>
                  <span className={styles.findingsSep}>·</span>
                  <span className={styles.findingsMedium}>{audit.findings.medium} Medium</span>
                </div>
              </Link>
            ))}
          </div>
          <div className={styles.sectionFooter}>
            <Link href="/audits" className={styles.viewAll}>View all audits →</Link>
          </div>
        </div>
      </section>

      {/* 4. Audit Process */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Audit Process</h2>
            <p className={styles.sectionDesc}>
              We focus on edge cases and economic attack surfaces.
            </p>
          </div>
          <ol className={styles.processSteps}>
            {PROCESS_STEPS.map((step, i) => (
              <li key={step} className={styles.processStep}>
                <span className={styles.processNum}>{String(i + 1).padStart(2, '0')}</span>
                <span className={styles.processLabel}>{step}</span>
              </li>
            ))}
          </ol>
          <div className={styles.sectionFooter}>
            <Link href="/process" className={styles.viewAll}>Learn our process →</Link>
          </div>
        </div>
      </section>

      {/* 5. Sample Report */}
      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.reportBlock}>
            <div className={styles.reportCopy}>
              <h2 className={styles.sectionTitleLeft}>Sample Report</h2>
              <p className={styles.sectionDescLeft}>
                Overview, scope, methodology, findings, and risk ratings — see exactly what you get.
              </p>
              <Link href="/report-demo" className={styles.reportCta}>
                View sample report
                <span className={styles.arrow} aria-hidden="true">→</span>
              </Link>
            </div>
            <div className={styles.reportPreview} aria-hidden="true">
              <div className={styles.reportSheet}>
                <div className={styles.reportSheetLine} />
                <div className={styles.reportSheetLine} />
                <div className={styles.reportSheetLineShort} />
                <div className={styles.reportSeverityRow}>
                  <span className={styles.sevHigh} />
                  <span className={styles.sevMed} />
                  <span className={styles.sevLow} />
                </div>
                <div className={styles.reportSheetLine} />
                <div className={styles.reportSheetLineShort} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA */}
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

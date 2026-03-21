import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAuditBySlug, audits } from '../data'
import styles from './page.module.css'

interface PageProps {
  params: { slug: string }
}

export function generateStaticParams() {
  return audits.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const audit = getAuditBySlug(params.slug)
  if (!audit) return { title: 'Audit Not Found' }
  return {
    title: `${audit.project} | Audit Report`,
    description: `Scope: ${audit.scope}. Findings: ${audit.findings.high} High, ${audit.findings.medium} Medium.`,
  }
}

export default function AuditDetailPage({ params }: PageProps) {
  const audit = getAuditBySlug(params.slug)

  if (!audit) {
    notFound()
  }

  const getSeverityClass = (s: string) => {
    switch (s) {
      case 'High':
        return styles.severityHigh
      case 'Medium':
        return styles.severityMedium
      case 'Low':
        return styles.severityLow
      default:
        return styles.severityInfo
    }
  }

  return (
    <div className={styles.detailPage}>
      <section className={styles.header}>
        <div className="container">
          <Link href="/audits" className={styles.backLink}>
            ← Back to Audits
          </Link>
          <h1>{audit.project}</h1>
          <p className={styles.scope}>Scope: {audit.scope}</p>
          <div className={styles.summaryBadges}>
            <span className={styles.severityHigh}>
              {audit.findings.high} High
            </span>
            <span className={styles.severityMedium}>
              {audit.findings.medium} Medium
            </span>
            {audit.findings.low && audit.findings.low > 0 && (
              <span className={styles.severityLow}>
                {audit.findings.low} Low
              </span>
            )}
          </div>
        </div>
      </section>

      <section className={styles.findingsSection}>
        <div className="container">
          <h2>Findings</h2>

          {audit.findingsDetail.map((finding) => (
            <div key={finding.id} className={styles.findingCard}>
              <div className={styles.findingHeader}>
                <span className={styles.findingId}>{finding.id}</span>
                <span
                  className={`${styles.severityBadge} ${getSeverityClass(
                    finding.severity
                  )}`}
                >
                  {finding.severity}
                </span>
              </div>
              <h3 className={styles.findingTitle}>{finding.title}</h3>

              <div className={styles.findingBlock}>
                <h4>Description</h4>
                <p>{finding.description}</p>
              </div>

              <div className={styles.findingBlock}>
                <h4>Recommendation</h4>
                <p>{finding.recommendation}</p>
              </div>

              <div className={styles.findingBlock}>
                <h4>Code</h4>
                <pre className={styles.codeSnippet}>
                  <code>{finding.codeSnippet.trim()}</code>
                </pre>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <Link href="/submit" className="btn btn-primary">
              Submit for Free Review
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

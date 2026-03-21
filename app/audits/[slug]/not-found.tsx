import Link from 'next/link'

export default function AuditNotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <h1>Audit not found</h1>
      <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
        The audit report you're looking for doesn't exist.
      </p>
      <Link
        href="/audits"
        style={{ color: 'var(--accent-primary)', marginTop: '2rem', display: 'inline-block' }}
      >
        ← Back to Audits
      </Link>
    </div>
  )
}

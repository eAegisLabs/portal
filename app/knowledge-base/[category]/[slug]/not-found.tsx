import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h1>Article Not Found</h1>
      <p>The article you're looking for doesn't exist in our knowledge base.</p>
      <Link href="/knowledge-base" style={{ color: 'var(--accent-primary)', marginTop: '2rem', display: 'inline-block' }}>
        ← Back to Knowledge Base
      </Link>
    </div>
  )
}

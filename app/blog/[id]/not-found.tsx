import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
      <h1>Article Not Found</h1>
      <p>The blog post you're looking for doesn't exist.</p>
      <Link href="/blog" style={{ color: 'var(--accent-primary)', marginTop: '2rem', display: 'inline-block' }}>
        ← Back to Blog
      </Link>
    </div>
  )
}

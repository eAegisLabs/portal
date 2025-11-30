import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPosts } from '../posts'
import styles from './page.module.css'

interface PageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }))
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPosts.find((p) => p.id === parseInt(params.id))

  if (!post) {
    notFound()
  }

  // Convert markdown-like content to HTML (simplified version)
  const formatContent = (content: string) => {
    const lines = content.split('\n')
    const elements: JSX.Element[] = []
    let inCodeBlock = false
    let codeBlockLanguage = ''
    let codeBlockLines: string[] = []
    let currentParagraph: string[] = []
    let keyCounter = 0

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const text = currentParagraph.join(' ')
        elements.push(<p key={keyCounter++}>{text}</p>)
        currentParagraph = []
      }
    }

    const flushCodeBlock = () => {
      if (codeBlockLines.length > 0) {
        const code = codeBlockLines.join('\n')
        elements.push(
          <pre key={keyCounter++} className={styles.codeBlock}>
            <code>{code}</code>
          </pre>
        )
        codeBlockLines = []
      }
    }

    for (const line of lines) {
      // Code block start/end
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          flushCodeBlock()
          inCodeBlock = false
          codeBlockLanguage = ''
        } else {
          flushParagraph()
          inCodeBlock = true
          codeBlockLanguage = line.substring(3).trim()
        }
        continue
      }

      if (inCodeBlock) {
        codeBlockLines.push(line)
        continue
      }

      // Headers
      if (line.startsWith('# ')) {
        flushParagraph()
        elements.push(<h1 key={keyCounter++}>{line.substring(2)}</h1>)
        continue
      }
      if (line.startsWith('## ')) {
        flushParagraph()
        elements.push(<h2 key={keyCounter++}>{line.substring(3)}</h2>)
        continue
      }
      if (line.startsWith('### ')) {
        flushParagraph()
        elements.push(<h3 key={keyCounter++}>{line.substring(4)}</h3>)
        continue
      }
      if (line.startsWith('#### ')) {
        flushParagraph()
        elements.push(<h4 key={keyCounter++}>{line.substring(5)}</h4>)
        continue
      }

      // List items
      if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
        flushParagraph()
        const listItem = line.trim().substring(2)
        elements.push(
          <ul key={keyCounter++} className={styles.contentList}>
            <li>{listItem}</li>
          </ul>
        )
        continue
      }

      // Empty lines
      if (line.trim() === '') {
        flushParagraph()
        continue
      }

      // Regular text
      currentParagraph.push(line.trim())
    }

    flushParagraph()
    flushCodeBlock()

    return elements
  }

  return (
    <div className={styles.postPage}>
      {/* Back to Blog */}
      <section className={styles.backSection}>
        <div className="container">
          <Link href="/blog" className={styles.backLink}>
            ← Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <article className={styles.article}>
        <div className="container">
          <div className={styles.articleHeader}>
            <div className={styles.metaTags}>
              <span className={styles.category}>{post.category}</span>
              {post.featured && <span className={styles.featuredBadge}>Featured</span>}
            </div>
            
            <h1 className={styles.title}>{post.title}</h1>
            
            <div className={styles.articleMeta}>
              {post.author && (
                <span className={styles.author}>By {post.author}</span>
              )}
              <span className={styles.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className={styles.readTime}>{post.readTime}</span>
            </div>
          </div>

          {/* Article Content */}
          <div className={styles.content}>
            <div className={styles.excerpt}>
              <p>{post.excerpt}</p>
            </div>
            
            <div className={styles.mainContent}>
              {formatContent(post.content)}
            </div>
          </div>

          {/* Share Section */}
          <div className={styles.shareSection}>
            <h3>Share this article</h3>
            <div className={styles.shareButtons}>
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://aegislabs.com/blog/${post.id}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.shareButton}
              >
                Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://aegislabs.com/blog/${post.id}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.shareButton}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className={styles.relatedSection}>
        <div className="container">
          <h2>Related Articles</h2>
          <div className={styles.relatedGrid}>
            {blogPosts
              .filter((p) => p.id !== post.id && p.category === post.category)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="card"
                >
                  <span className={styles.relatedCategory}>{relatedPost.category}</span>
                  <h3>{relatedPost.title}</h3>
                  <p>{relatedPost.excerpt}</p>
                  <span className={styles.relatedReadMore}>Read More →</span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export async function generateMetadata({ params }: PageProps) {
  const post = blogPosts.find((p) => p.id === parseInt(params.id))

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Aegis Labs Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: post.author ? [post.author] : undefined,
      tags: [post.category],
    },
  }
}

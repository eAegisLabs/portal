import { notFound } from 'next/navigation'
import Link from 'next/link'
import { knowledgeArticles, getArticleBySlug, getArticlesByCategory } from '../../articles'
import styles from './page.module.css'

interface PageProps {
  params: {
    category: string
    slug: string
  }
}

export async function generateStaticParams() {
  return knowledgeArticles.map((article) => ({
    category: article.category,
    slug: article.slug,
  }))
}

export default function KnowledgeArticlePage({ params }: PageProps) {
  const article = getArticleBySlug(params.category, params.slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = getArticlesByCategory(article.category)
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return styles.difficultyEasy
      case 'medium':
        return styles.difficultyMedium
      case 'hard':
        return styles.difficultyHard
      default:
        return ''
    }
  }

  // Simple content formatter
  const formatContent = (content: string) => {
    const lines = content.split('\n')
    const elements: JSX.Element[] = []
    let inCodeBlock = false
    let codeBlockLines: string[] = []
    let keyCounter = 0

    for (const line of lines) {
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <pre key={keyCounter++} className={styles.codeBlock}>
              <code>{codeBlockLines.join('\n')}</code>
            </pre>
          )
          codeBlockLines = []
          inCodeBlock = false
        } else {
          inCodeBlock = true
        }
        continue
      }

      if (inCodeBlock) {
        codeBlockLines.push(line)
        continue
      }

      if (line.startsWith('# ')) {
        elements.push(<h1 key={keyCounter++}>{line.substring(2)}</h1>)
      } else if (line.startsWith('## ')) {
        elements.push(<h2 key={keyCounter++}>{line.substring(3)}</h2>)
      } else if (line.startsWith('### ')) {
        elements.push(<h3 key={keyCounter++}>{line.substring(4)}</h3>)
      } else if (line.startsWith('#### ')) {
        elements.push(<h4 key={keyCounter++}>{line.substring(5)}</h4>)
      } else if (line.trim() === '') {
        elements.push(<br key={keyCounter++} />)
      } else if (line.trim()) {
        elements.push(<p key={keyCounter++}>{line}</p>)
      }
    }

    return elements
  }

  return (
    <div className={styles.articlePage}>
      {/* Back Link */}
      <section className={styles.backSection}>
        <div className="container">
          <Link href="/knowledge-base" className={styles.backLink}>
            ← Back to Knowledge Base
          </Link>
        </div>
      </section>

      {/* Article */}
      <article className={styles.article}>
        <div className="container">
          <div className={styles.articleHeader}>
            <div className={styles.metadata}>
              <span className={`${styles.difficulty} ${getDifficultyColor(article.difficulty)}`}>
                {article.difficulty}
              </span>
              <span className={styles.category}>{article.category.replace('-', ' ')}</span>
            </div>
            
            <h1 className={styles.title}>{article.title}</h1>
            
            <div className={styles.articleMeta}>
              <span className={styles.date}>
                Last updated: {new Date(article.lastUpdated).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
          </div>

          <div className={styles.content}>
            {formatContent(article.content)}
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className={styles.relatedSection}>
          <div className="container">
            <h2>Related Articles</h2>
            <div className={styles.relatedGrid}>
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/knowledge-base/${related.category}/${related.slug}`}
                  className="card"
                >
                  <div className={styles.relatedHeader}>
                    <span className={`${styles.difficulty} ${getDifficultyColor(related.difficulty)}`}>
                      {related.difficulty}
                    </span>
                  </div>
                  <h3>{related.title}</h3>
                  <span className={styles.readMore}>Read Article →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Need an Affordable Audit?</h2>
            <p>Get a free quote tailored for your team size and budget</p>
            <Link href="/contact" className="btn btn-primary">
              Get Audit Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function generateMetadata({ params }: PageProps) {
  const article = getArticleBySlug(params.category, params.slug)

  if (!article) {
    return {
      title: 'Article Not Found',
    }
  }

  return {
    title: `${article.title} | Security Knowledge Base`,
    description: `Learn about ${article.title.toLowerCase()} in smart contract security. Difficulty: ${article.difficulty}`,
    openGraph: {
      title: article.title,
      description: `${article.title} - Smart Contract Security Guide`,
      type: 'article',
    },
  }
}

import Link from 'next/link'
import { blogPosts } from './posts'
import styles from './page.module.css'

export default function Blog() {

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className={styles.blogPage}>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <h1>Blog & Resources</h1>
          <p>Industry insights, security best practices, and Web3 knowledge</p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className={styles.featuredSection}>
          <div className="container">
            <div className={styles.featuredPost}>
              <div className={styles.featuredContent}>
                <span className={styles.featuredBadge}>Featured</span>
                <span className={styles.featuredCategory}>{featuredPost.category}</span>
                <h2>{featuredPost.title}</h2>
                <p>{featuredPost.excerpt}</p>
                <div className={styles.postMeta}>
                  <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Link href={`/blog/${featuredPost.id}`} className="btn btn-primary">
                  Read Article
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className={styles.postsSection}>
        <div className="container">
          <div className={styles.postsGrid}>
            {regularPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`} className="card">
                <div className={styles.postHeader}>
                  <span className={styles.postCategory}>{post.category}</span>
                  <span className={styles.postReadTime}>{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                <div className={styles.postFooter}>
                  <span className={styles.postDate}>
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                  <span className={styles.readMore}>Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactContent}>
            <h2>Need a Professional Audit?</h2>
            <p>Contact us to discuss your project and get a customized audit quote</p>
            <Link href="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

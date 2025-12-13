import Link from 'next/link'
import styles from './page.module.css'

export const metadata = {
  title: 'Security Knowledge Base',
  description: 'Comprehensive smart contract security knowledge base. Learn about vulnerabilities, best practices, and secure development patterns.',
}

export default function KnowledgeBase() {
  const categories = [
    {
      id: 'vulnerabilities',
      title: '🔴 Common Vulnerabilities',
      description: 'Understanding common smart contract vulnerabilities and how to prevent them',
      articles: [
        { title: 'Reentrancy Attacks', slug: 'reentrancy', difficulty: 'Medium' },
        { title: 'Integer Overflow & Underflow', slug: 'integer-overflow', difficulty: 'Easy' },
        { title: 'Access Control Issues', slug: 'access-control', difficulty: 'Medium' },
        { title: 'Front-Running & MEV', slug: 'front-running', difficulty: 'Hard' },
        { title: 'Oracle Manipulation', slug: 'oracle-manipulation', difficulty: 'Hard' },
        { title: 'Flash Loan Attacks', slug: 'flash-loan', difficulty: 'Hard' },
      ],
    },
    {
      id: 'best-practices',
      title: '✅ Best Practices',
      description: 'Industry-standard best practices for secure smart contract development',
      articles: [
        { title: 'Checks-Effects-Interactions Pattern', slug: 'cei-pattern', difficulty: 'Easy' },
        { title: 'Using OpenZeppelin Libraries', slug: 'openzeppelin', difficulty: 'Easy' },
        { title: 'Secure Upgradeability Patterns', slug: 'upgradeability', difficulty: 'Medium' },
        { title: 'Multi-Signature Wallet Implementation', slug: 'multisig', difficulty: 'Medium' },
        { title: 'Time Lock Mechanisms', slug: 'timelock', difficulty: 'Medium' },
        { title: 'Emergency Pause Functionality', slug: 'pause', difficulty: 'Easy' },
      ],
    },
    {
      id: 'defi-security',
      title: '💰 DeFi Security',
      description: 'Specialized security considerations for DeFi protocols',
      articles: [
        { title: 'AMM Security Considerations', slug: 'amm-security', difficulty: 'Hard' },
        { title: 'Lending Protocol Risks', slug: 'lending-risks', difficulty: 'Hard' },
        { title: 'Liquidity Pool Security', slug: 'liquidity-pool', difficulty: 'Medium' },
        { title: 'Yield Farming Best Practices', slug: 'yield-farming', difficulty: 'Medium' },
        { title: 'Price Oracle Security', slug: 'price-oracle', difficulty: 'Hard' },
        { title: 'Tokenomics Safety', slug: 'tokenomics', difficulty: 'Medium' },
      ],
    },
    {
      id: 'tools',
      title: '🛠️ Security Tools',
      description: 'Essential tools for smart contract security testing and analysis',
      articles: [
        { title: 'Static Analysis with Slither', slug: 'slither', difficulty: 'Easy' },
        { title: 'Symbolic Execution with Mythril', slug: 'mythril', difficulty: 'Medium' },
        { title: 'Fuzz Testing with Foundry', slug: 'foundry-fuzz', difficulty: 'Medium' },
        { title: 'Formal Verification Overview', slug: 'formal-verification', difficulty: 'Hard' },
        { title: 'Manual Code Review Checklist', slug: 'review-checklist', difficulty: 'Easy' },
      ],
    },
    {
      id: 'standards',
      title: '📋 Standards & Guidelines',
      description: 'Industry standards and security guidelines for Web3 development',
      articles: [
        { title: 'ERC Standards Overview', slug: 'erc-standards', difficulty: 'Easy' },
        { title: 'SWC Registry Guide', slug: 'swc-registry', difficulty: 'Medium' },
        { title: 'Ethereum Security Best Practices', slug: 'eth-best-practices', difficulty: 'Medium' },
        { title: 'Gas Optimization Guidelines', slug: 'gas-optimization', difficulty: 'Medium' },
        { title: 'Smart Contract Audit Checklist', slug: 'audit-checklist', difficulty: 'Easy' },
      ],
    },
  ]

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

  return (
    <div className={styles.knowledgeBasePage}>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <h1>Security Knowledge Base</h1>
          <p>Comprehensive resources for smart contract security and best practices</p>
        </div>
      </section>

      {/* Search (Coming Soon) */}
      <section className={styles.searchSection}>
        <div className="container">
          <div className={styles.searchBox}>
            <input 
              type="text" 
              placeholder="Search knowledge base..." 
              className={styles.searchInput}
              disabled
            />
            <span className={styles.comingSoon}>Search coming soon</span>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className={styles.categories}>
        <div className="container">
          {categories.map((category) => (
            <div key={category.id} className={styles.categorySection}>
              <div className={styles.categoryHeader}>
                <h2>{category.title}</h2>
                <p>{category.description}</p>
              </div>

              <div className={styles.articlesGrid}>
                {category.articles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/knowledge-base/${category.id}/${article.slug}`}
                    className={`card ${styles.articleCard}`}
                  >
                    <div className={styles.articleHeader}>
                      <h3>{article.title}</h3>
                      <span className={`${styles.difficulty} ${getDifficultyColor(article.difficulty)}`}>
                        {article.difficulty}
                      </span>
                    </div>
                    <div className={styles.articleFooter}>
                      <span className={styles.readMore}>Read More →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Need an Affordable Audit?</h2>
            <p>Get a free quote tailored for your team size and budget</p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className="btn btn-primary">
                Get Audit Quote
              </Link>
              <Link href="/services" className="btn btn-secondary">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

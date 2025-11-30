import Link from 'next/link'
import styles from './page.module.css'

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: 'DeFi Lending Protocol Audit',
      client: 'Major DeFi Platform',
      type: 'DeFi Protocol',
      description: 'Comprehensive security audit of a decentralized lending protocol handling over $500M in TVL.',
      challenges: [
        'Complex multi-token collateral system',
        'Interest rate calculation mechanisms',
        'Liquidation logic vulnerabilities',
      ],
      findings: 'Found 15 vulnerabilities including 3 critical issues',
      impact: 'Protected $500M+ in user assets',
      duration: '21 days',
      tags: ['DeFi', 'Lending', 'Multi-token'],
    },
    {
      id: 2,
      title: 'NFT Marketplace Security Review',
      client: 'Leading NFT Platform',
      type: 'NFT Collection',
      description: 'End-to-end security assessment of an NFT marketplace with royalty mechanisms and auction functionality.',
      challenges: [
        'Royalty payment security',
        'Auction logic integrity',
        'Gas optimization requirements',
      ],
      findings: 'Identified 8 medium-severity issues and optimization opportunities',
      impact: 'Enhanced platform security and reduced gas costs by 30%',
      duration: '14 days',
      tags: ['NFT', 'Marketplace', 'ERC-721'],
    },
    {
      id: 3,
      title: 'Cross-Chain Bridge Protocol',
      client: 'Layer 2 Bridge Project',
      type: 'Bridge Protocol',
      description: 'Deep security audit of a cross-chain bridge supporting multiple blockchain networks.',
      challenges: [
        'Multi-signature wallet security',
        'Oracle price feed manipulation risks',
        'Cross-chain message validation',
      ],
      findings: 'Discovered critical vulnerabilities in message validation logic',
      impact: 'Prevented potential bridge exploit worth millions',
      duration: '28 days',
      tags: ['Bridge', 'Cross-chain', 'Layer 2'],
    },
    {
      id: 4,
      title: 'Token Launch & Tokenomics Review',
      client: 'Web3 Startup',
      type: 'Token Contract',
      description: 'Security audit and tokenomics review for a new token launch with complex vesting schedules.',
      challenges: [
        'Vesting schedule implementation',
        'Token distribution security',
        'Economic model sustainability',
      ],
      findings: 'Reviewed and improved tokenomics design',
      impact: 'Successful secure token launch',
      duration: '10 days',
      tags: ['Token', 'Tokenomics', 'ERC-20'],
    },
    {
      id: 5,
      title: 'DAO Governance Protocol',
      client: 'Decentralized Autonomous Organization',
      type: 'DAO',
      description: 'Comprehensive audit of a DAO governance system with proposal voting and treasury management.',
      challenges: [
        'Proposal execution security',
        'Voting mechanism integrity',
        'Treasury fund management',
      ],
      findings: 'Found critical vulnerabilities in proposal execution',
      impact: 'Secured $50M+ treasury funds',
      duration: '18 days',
      tags: ['DAO', 'Governance', 'Treasury'],
    },
    {
      id: 6,
      title: 'Yield Farming Protocol',
      client: 'DeFi Yield Aggregator',
      type: 'DeFi Protocol',
      description: 'Security audit of an automated yield farming protocol with complex reward distribution.',
      challenges: [
        'Reward calculation accuracy',
        'Reentrancy protection',
        'Flash loan attack vectors',
      ],
      findings: 'Identified 12 vulnerabilities including reentrancy risks',
      impact: 'Enhanced protocol security before mainnet launch',
      duration: '16 days',
      tags: ['DeFi', 'Yield Farming', 'Automation'],
    },
  ]

  return (
    <div className={styles.caseStudiesPage}>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <h1>Case Studies</h1>
          <p>Real-world examples of our audit work and impact</p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className={styles.caseStudiesSection}>
        <div className="container">
          <div className={styles.intro}>
            <h2>Our Audit Success Stories</h2>
            <p>
              Over the years, we've helped numerous projects identify and fix critical
              vulnerabilities before they could be exploited. Here are some anonymized
              examples of our work (with client permission).
            </p>
          </div>

          <div className={styles.caseStudiesGrid}>
            {caseStudies.map((study) => (
              <div key={study.id} className="card">
                <div className={styles.caseHeader}>
                  <span className={styles.caseType}>{study.type}</span>
                  <span className={styles.caseDuration}>{study.duration}</span>
                </div>
                <h3>{study.title}</h3>
                <p className={styles.caseClient}>Client: {study.client}</p>
                <p className={styles.caseDescription}>{study.description}</p>

                <div className={styles.caseDetails}>
                  <div className={styles.detailSection}>
                    <h4>Key Challenges:</h4>
                    <ul>
                      {study.challenges.map((challenge, idx) => (
                        <li key={idx}>{challenge}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.detailSection}>
                    <h4>Our Findings:</h4>
                    <p className={styles.findings}>{study.findings}</p>
                  </div>

                  <div className={styles.detailSection}>
                    <h4>Impact:</h4>
                    <p className={styles.impact}>{study.impact}</p>
                  </div>
                </div>

                <div className={styles.caseTags}>
                  {study.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className={styles.statisticsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Projects Audited</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>$2B+</div>
              <div className={styles.statLabel}>Assets Protected</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>1000+</div>
              <div className={styles.statLabel}>Vulnerabilities Found</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>98%</div>
              <div className={styles.statLabel}>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Secure Your Project?</h2>
            <p>Join hundreds of projects that trust us with their security audits</p>
            <Link href="/contact" className="btn btn-primary">
              Get Your Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

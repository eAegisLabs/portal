import Link from 'next/link'
import StructuredData, { organizationSchema, serviceSchema, websiteSchema } from '@/components/StructuredData'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={serviceSchema} />
      <StructuredData data={websiteSchema} />
      
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Secure Your <span className="gradient-text">Web3 Assets</span>
              <br />
              Professional Smart Contract Audit Services
            </h1>
            <p className={styles.heroSubtitle}>
              We provide comprehensive smart contract security audits to help you discover
              and fix potential vulnerabilities, ensuring the security and reliability of
              your DeFi projects, NFT platforms, and blockchain applications.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/contact" className="btn btn-primary">
                Get Quote Now
              </Link>
              <Link href="/audit-process" className="btn btn-secondary">
                Learn Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className={styles.trustSection}>
        <div className="container">
          <div className={styles.trustGrid}>
            <div className={styles.trustItem}>
              <div className={styles.trustNumber}>500+</div>
              <div className={styles.trustLabel}>Projects Audited</div>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustNumber}>$2B+</div>
              <div className={styles.trustLabel}>Assets Protected</div>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustNumber}>1000+</div>
              <div className={styles.trustLabel}>Vulnerabilities Found</div>
            </div>
            <div className={styles.trustItem}>
              <div className={styles.trustNumber}>98%</div>
              <div className={styles.trustLabel}>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Core Services</h2>
            <p>We provide comprehensive smart contract security audit services</p>
          </div>
          
          <div className={styles.servicesGrid}>
            <div className="card">
              <div className={styles.serviceIcon}>🔒</div>
              <h3>Security Audits</h3>
              <p>
                Comprehensive smart contract security audits to identify reentrancy attacks,
                integer overflows, access control vulnerabilities, and other common security issues.
              </p>
              <Link href="/services#security" className={styles.serviceLink}>
                Learn More →
              </Link>
            </div>

            <div className="card">
              <div className={styles.serviceIcon}>💰</div>
              <h3>Tokenomics Review</h3>
              <p>
                In-depth analysis of token issuance, distribution mechanisms, and economic models
                to ensure the rationality and sustainability of token economics design.
              </p>
              <Link href="/services#tokenomics" className={styles.serviceLink}>
                Learn More →
              </Link>
            </div>

            <div className="card">
              <div className={styles.serviceIcon}>🚀</div>
              <h3>DApp Security Testing</h3>
              <p>
                End-to-end decentralized application security testing, including frontend
                interactions, smart contract integration, and overall architecture assessment.
              </p>
              <Link href="/services#dapp" className={styles.serviceLink}>
                Learn More →
              </Link>
            </div>

            <div className="card">
              <div className={styles.serviceIcon}>⚡</div>
              <h3>Layer 2 Protocol Audits</h3>
              <p>
                Professional Layer 2 scaling solution audits, including security assessments
                for Rollups, state channels, and sidechain protocols.
              </p>
              <Link href="/services#layer2" className={styles.serviceLink}>
                Learn More →
              </Link>
            </div>

            <div className="card">
              <div className={styles.serviceIcon}>🔧</div>
              <h3>Code Optimization</h3>
              <p>
                Gas optimization recommendations and code quality improvements while ensuring
                security, enhancing contract execution efficiency.
              </p>
              <Link href="/services#optimization" className={styles.serviceLink}>
                Learn More →
              </Link>
            </div>

            <div className="card">
              <div className={styles.serviceIcon}>📋</div>
              <h3>Compliance Review</h3>
              <p>
                Evaluate whether smart contracts comply with relevant regulatory requirements,
                helping projects meet regulatory compliance standards.
              </p>
              <Link href="/services#compliance" className={styles.serviceLink}>
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.whySection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Why Choose Us</h2>
            <p>Professional, Reliable, Efficient - Your Web3 Security Partner</p>
          </div>

          <div className={styles.whyGrid}>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>🎯</div>
              <h3>Expert Team</h3>
              <p>Composed of experienced security experts and smart contract developers</p>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>⚡</div>
              <h3>Fast Delivery</h3>
              <p>Efficient audit process, quick response, timely report delivery</p>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>🔍</div>
              <h3>Deep Analysis</h3>
              <p>Combining automated tools and manual review to ensure comprehensive coverage</p>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>🤝</div>
              <h3>Ongoing Support</h3>
              <p>Continuous post-audit support and vulnerability fix verification services</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Start Your Audit Project?</h2>
            <p>Contact us now for professional audit quotes and consultation</p>
            <Link href="/contact" className="btn btn-primary">
              Get Quote Now
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
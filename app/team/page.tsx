import styles from './page.module.css'
import Avatar from './Avatar'

export default function Team() {
  return (
    <div className={styles.teamPage}>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <h1>Our Team</h1>
          <p>Meet the security experts behind Aegis Labs</p>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <div className="container">
          <div className={styles.aboutContent}>
            <h2>About Aegis Labs</h2>
            <p>
              Aegis Labs is a leading smart contract security firm specializing in blockchain
              security audits. Our team consists of experienced security researchers, smart
              contract developers, and blockchain architects who have audited hundreds of
              projects across various blockchain ecosystems.
            </p>
            <p>
              With a track record of protecting over $2 billion in assets, we've identified
              and helped fix thousands of vulnerabilities in smart contracts, helping projects
              launch securely and maintain the trust of their communities.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className={styles.teamSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Core Team</h2>
            <p>Our team of security experts and blockchain developers</p>
          </div>

          <div className={styles.teamGrid}>
            <div className="card">
              <div className={styles.avatar}>👨‍💻</div>
              <h3>Alex Chen</h3>
              <p className={styles.role}>Lead Security Auditor</p>
              <p className={styles.bio}>
                Former security researcher at Consensys, 8+ years of experience in blockchain
                security. Specialized in DeFi protocol audits and formal verification.
              </p>
              <div className={styles.certifications}>
                <span className={styles.badge}>CISSP</span>
                <span className={styles.badge}>CEH</span>
              </div>
            </div>

            <div className="card">
              <div className={styles.avatar}>👩‍💻</div>
              <h3>Sarah Johnson</h3>
              <p className={styles.role}>Senior Smart Contract Developer</p>
              <p className={styles.bio}>
                10+ years in software development, 5+ years in blockchain. Expert in Solidity,
                Rust, and Move. Has contributed to major DeFi protocols.
              </p>
              <div className={styles.certifications}>
                <span className={styles.badge}>Solidity Expert</span>
              </div>
            </div>

            <div className="card">
              <div className={styles.avatar}>👨‍🔬</div>
              <h3>Michael Rodriguez</h3>
              <p className={styles.role}>Security Researcher</p>
              <p className={styles.bio}>
                Ph.D. in Computer Science, specializing in cryptography and formal methods.
                Expert in zero-knowledge proofs and Layer 2 protocols.
              </p>
              <div className={styles.certifications}>
                <span className={styles.badge}>Ph.D. CS</span>
                <span className={styles.badge}>Formal Verification</span>
              </div>
            </div>

            <div className="card">
              <div className={styles.avatar}>👩‍🔧</div>
              <h3>Emily Zhang</h3>
              <p className={styles.role}>Lead Auditor</p>
              <p className={styles.bio}>
                Former auditor at Trail of Bits, 6+ years of experience. Specialized in
                tokenomics review and economic security analysis.
              </p>
              <div className={styles.certifications}>
                <span className={styles.badge}>Tokenomics Expert</span>
              </div>
            </div>

            <div className="card">
              <div className={styles.avatar}>👨‍💼</div>
              <h3>David Kim</h3>
              <p className={styles.role}>Project Manager</p>
              <p className={styles.bio}>
                Ensures smooth project execution and client communication. Coordinates
                between audit teams and clients to deliver timely, high-quality reports.
              </p>
              <div className={styles.certifications}>
                <span className={styles.badge}>PMP</span>
              </div>
            </div>

            <div className="card">
              <div className={styles.avatar}>
                <Avatar 
                  src="/team/vike.jpg" 
                  alt="Vike" 
                  fallback="👤"
                />
              </div>
              <h3>Vike</h3>
              <p className={styles.role}>Account Manager</p>
              <p className={styles.bio}>
                Manages client relationships and ensures seamless communication throughout
                the audit process. Dedicated to understanding client needs and delivering
                exceptional service experience.
              </p>
              <div className={styles.certifications}>
                <span className={styles.badge}>Client Relations</span>
              </div>
            </div>

            <div className="card">
              <div className={styles.avatar}>👩‍🎓</div>
              <h3>Lisa Wang</h3>
              <p className={styles.role}>Junior Auditor</p>
              <p className={styles.bio}>
                Recent graduate with strong foundation in blockchain security. Rapidly
                growing expertise in automated tool analysis and vulnerability detection.
              </p>
              <div className={styles.certifications}>
                <span className={styles.badge}>New Talent</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className={styles.expertiseSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Our Expertise</h2>
            <p>Areas where we excel</p>
          </div>

          <div className={styles.expertiseGrid}>
            <div className={styles.expertiseItem}>
              <h3>🛡️ Security Research</h3>
              <p>Cutting-edge vulnerability research and threat modeling</p>
            </div>
            <div className={styles.expertiseItem}>
              <h3>💻 Smart Contract Development</h3>
              <p>Deep understanding of blockchain development practices</p>
            </div>
            <div className={styles.expertiseItem}>
              <h3>🔐 Cryptography</h3>
              <p>Expertise in cryptographic protocols and zero-knowledge proofs</p>
            </div>
            <div className={styles.expertiseItem}>
              <h3>📊 Tokenomics</h3>
              <p>Economic security and token design analysis</p>
            </div>
            <div className={styles.expertiseItem}>
              <h3>⚡ Layer 2 Protocols</h3>
              <p>Specialized knowledge in scaling solutions and rollups</p>
            </div>
            <div className={styles.expertiseItem}>
              <h3>🔗 Cross-Chain Security</h3>
              <p>Bridge and interoperability protocol audits</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

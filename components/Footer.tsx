import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <Link href="/" className={styles.footerLogo}>
              <img src="/logo_button.png" alt="Aegis Labs" className={styles.footerLogoImage} />
            </Link>
            <p>Professional smart contract audit services to secure your Web3 assets.</p>
          </div>

          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/audit-process">Audit Process</Link></li>
              <li><Link href="/team">Team</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Resources</h4>
            <ul>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li><Link href="/blog">Blog</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Legal</h4>
            <ul>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h4>Contact</h4>
            <ul>
              <li>Email: sunvike72@gmail.com</li>
              <li>Telegram: @vikesun</li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Aegis Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

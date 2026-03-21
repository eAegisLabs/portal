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
            <p>Affordable smart contract audit services for small and medium teams. Transparent pricing, fast delivery, expert guidance.</p>
          </div>

          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/audits">Audits</Link></li>
              <li><Link href="/research">Research</Link></li>
              <li><Link href="/process">Process</Link></li>
              <li><Link href="/submit">Submit</Link></li>
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

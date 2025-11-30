import styles from './page.module.css'

export default function Privacy() {
  return (
    <div className={styles.privacyPage}>
      <div className="container">
        <div className={styles.content}>
          <h1>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last updated: January 1, 2024</p>

          <section className={styles.section}>
            <h2>1. Introduction</h2>
            <p>
              Aegis Labs ("we," "our," or "us") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard
              your information when you visit our website and use our services.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Information We Collect</h2>
            <h3>2.1 Information You Provide</h3>
            <ul>
              <li>Name and contact information (email, phone number)</li>
              <li>Company or project information</li>
              <li>Project details and requirements</li>
              <li>Payment information (processed securely through third-party providers)</li>
            </ul>

            <h3>2.2 Automatically Collected Information</h3>
            <ul>
              <li>IP address and browser information</li>
              <li>Website usage data and analytics</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our audit services</li>
              <li>Process your requests and transactions</li>
              <li>Communicate with you about your projects</li>
              <li>Send you technical updates and security alerts</li>
              <li>Comply with legal obligations</li>
              <li>Protect our rights and prevent fraud</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to
              protect your personal information, including:
            </p>
            <ul>
              <li>SSL/TLS encryption for data transmission</li>
              <li>Encrypted storage of sensitive information</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Regular security assessments and updates</li>
            </ul>
            <p>
              However, no method of transmission over the Internet or electronic storage
              is 100% secure. While we strive to use commercially acceptable means to
              protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section className={styles.section}>
            <h2>5. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the
              purposes outlined in this Privacy Policy, unless a longer retention period
              is required or permitted by law. Audit reports and project-related data
              may be retained for legal compliance and record-keeping purposes.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Your Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul>
              <li>Access to your personal information</li>
              <li>Correction of inaccurate data</li>
              <li>Deletion of your personal information</li>
              <li>Objection to processing of your data</li>
              <li>Data portability</li>
              <li>Withdrawal of consent</li>
            </ul>
            <p>
              To exercise these rights, please contact us at privacy@aegislabs.com.
            </p>
          </section>

          <section className={styles.section}>
            <h2>7. Third-Party Services</h2>
            <p>
              We may use third-party services for analytics, payment processing, and
              communication. These services have their own privacy policies governing
              the collection and use of your information.
            </p>
          </section>

          <section className={styles.section}>
            <h2>8. Cookies</h2>
            <p>
              We use cookies and similar technologies to enhance your experience, analyze
              website traffic, and personalize content. You can control cookies through
              your browser settings.
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of
              any changes by posting the new policy on this page and updating the "Last
              updated" date.
            </p>
          </section>

          <section className={styles.section}>
            <h2>10. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <ul>
              <li>Email: privacy@aegislabs.com</li>
              <li>Address: [Your Business Address]</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

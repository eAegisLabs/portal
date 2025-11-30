import styles from './page.module.css'

export default function Terms() {
  return (
    <div className={styles.termsPage}>
      <div className="container">
        <div className={styles.content}>
          <h1>Terms of Service</h1>
          <p className={styles.lastUpdated}>Last updated: January 1, 2024</p>

          <section className={styles.section}>
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using Aegis Labs' services, you agree to be bound by these
              Terms of Service. If you disagree with any part of these terms, you may
              not access our services.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Services Description</h2>
            <p>
              Aegis Labs provides smart contract security audit services, including but
              not limited to:
            </p>
            <ul>
              <li>Code security analysis and vulnerability assessment</li>
              <li>Tokenomics review and economic security analysis</li>
              <li>DApp security testing</li>
              <li>Layer 2 protocol audits</li>
              <li>Compliance review</li>
            </ul>
            <p>
              We reserve the right to modify, suspend, or discontinue any aspect of our
              services at any time.
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. Client Responsibilities</h2>
            <p>As a client, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information about your project</li>
              <li>Grant us necessary access to source code and documentation</li>
              <li>Maintain confidentiality of audit reports until authorized release</li>
              <li>Pay all fees as agreed upon in the service agreement</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>4. Scope of Services</h2>
            <p>
              Our audit services are provided on an "as-is" basis and are based on the
              information and materials provided by you. We will:
            </p>
            <ul>
              <li>Conduct thorough security analysis using industry-standard tools and methodologies</li>
              <li>Provide detailed reports of identified vulnerabilities</li>
              <li>Offer recommendations for remediation</li>
              <li>Verify fixes upon your request (subject to additional fees)</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>5. Limitations of Liability</h2>
            <p>
              While we strive to identify security vulnerabilities, we cannot guarantee
              that all vulnerabilities will be discovered or that your smart contracts
              are completely secure. Our audit does not constitute:
            </p>
            <ul>
              <li>A guarantee of absolute security</li>
              <li>Insurance against future exploits</li>
              <li>Legal or financial advice</li>
              <li>Endorsement of your project</li>
            </ul>
            <p>
              Aegis Labs shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages resulting from the use or inability to
              use our services.
            </p>
          </section>

          <section className={styles.section}>
            <h2>6. Payment Terms</h2>
            <p>
              Payment terms will be specified in individual service agreements. Generally:
            </p>
            <ul>
              <li>A deposit may be required to initiate the audit</li>
              <li>Final payment is due upon report delivery</li>
              <li>All fees are non-refundable unless otherwise specified</li>
              <li>Late payments may incur additional fees</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>7. Confidentiality</h2>
            <p>
              We understand the sensitive nature of your code and business information.
              We agree to:
            </p>
            <ul>
              <li>Maintain strict confidentiality of your source code and project details</li>
              <li>Not disclose audit findings without your permission</li>
              <li>Use information solely for the purpose of providing audit services</li>
              <li>Return or destroy confidential materials upon request</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>8. Intellectual Property</h2>
            <p>
              You retain all intellectual property rights to your code and materials.
              We retain ownership of audit reports, methodologies, and any tools we
              develop. Audit reports are provided for your use but may not be
              republished without our consent.
            </p>
          </section>

          <section className={styles.section}>
            <h2>9. Termination</h2>
            <p>
              Either party may terminate services with written notice. Upon termination:
            </p>
            <ul>
              <li>All outstanding fees remain due</li>
              <li>Confidentiality obligations continue</li>
              <li>Completed work will be delivered as agreed</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>10. Dispute Resolution</h2>
            <p>
              Any disputes arising from these terms or our services shall be resolved
              through good faith negotiation. If unresolved, disputes may be subject to
              binding arbitration in accordance with applicable laws.
            </p>
          </section>

          <section className={styles.section}>
            <h2>11. Modifications</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes
              will be effective immediately upon posting. Continued use of our services
              after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2>12. Contact Information</h2>
            <p>
              For questions about these Terms of Service, please contact us at:
            </p>
            <ul>
              <li>Email: legal@aegislabs.com</li>
              <li>Address: [Your Business Address]</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import QuoteCalculator from '@/components/QuoteCalculator'
import styles from './page.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setSubmitted(true)
      setFormData({ name: '', email: '', company: '', projectType: '', message: '' })
      
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className={styles.contactPage}>
      {/* Header */}
      <section className={styles.header}>
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get a free quote tailored for your team. No commitment, just honest pricing</p>
        </div>
      </section>

      {/* Quote Calculator */}
      <section className={styles.calculatorSection}>
        <div className="container">
          <QuoteCalculator />
        </div>
      </section>

      {/* Contact Form */}
      <section className={styles.contactSection}>
        <div className="container">
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h2>Get in Touch</h2>
              <p>
                Have questions? Need a quote that fits your budget? Want to discuss
                your project? We're here to help small teams succeed.
              </p>

              <div className={styles.infoItems}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>📧</div>
                  <div>
                    <h4>Email</h4>
                    <p>sunvike72@gmail.com</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>💬</div>
                  <div>
                    <h4>Telegram</h4>
                    <p>@vikesun</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>⏰</div>
                  <div>
                    <h4>Response Time</h4>
                    <p>We typically respond within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.contactForm}>
              <h2>Send Us a Message</h2>
              {submitted ? (
                <div className={styles.successMessage}>
                  <h3>✅ Message Sent!</h3>
                  <p>We'll get back to you soon.</p>
                </div>
              ) : error ? (
                <div className={styles.errorMessage}>
                  <h3>❌ Error</h3>
                  <p>{error}</p>
                  <button 
                    onClick={() => setError(null)} 
                    className="btn btn-secondary"
                    style={{ marginTop: '1rem' }}
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="company">Company/Project Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="projectType">Project Type</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                    >
                      <option value="">Select a type</option>
                      <option value="token">Token Contract</option>
                      <option value="nft">NFT Collection</option>
                      <option value="defi">DeFi Protocol</option>
                      <option value="dao">DAO</option>
                      <option value="bridge">Bridge Protocol</option>
                      <option value="layer2">Layer 2 Protocol</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

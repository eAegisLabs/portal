'use client'

import { useState } from 'react'
import styles from './page.module.css'

const CONTRACT_TYPES = [
  { id: 'bridge', label: 'Bridge / Cross-chain' },
  { id: 'defi', label: 'DeFi' },
  { id: 'nft', label: 'NFT' },
] as const

const DEADLINE_OPTIONS = [
  { id: 'asap', label: 'ASAP' },
  { id: '1week', label: 'Within 1 week' },
  { id: '2weeks', label: 'Within 2 weeks' },
  { id: '1month', label: 'Within 1 month' },
] as const

export default function SubmitPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    githubRepo: '',
    contractType: '',
    deadline: '',
    email: '',
    name: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.githubRepo.trim().length > 0
      case 2:
        return !!formData.contractType
      case 3:
        return !!formData.deadline
      case 4:
        return formData.email.trim().length > 0
      default:
        return false
    }
  }

  const handleNext = () => {
    if (step < 4) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!canProceed()) return
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name || 'N/A',
          email: formData.email,
          company: formData.githubRepo,
          projectType: formData.contractType,
          message: `GitHub: ${formData.githubRepo}\nContract Type: ${CONTRACT_TYPES.find(c => c.id === formData.contractType)?.label ?? formData.contractType}\nDeadline: ${DEADLINE_OPTIONS.find(d => d.id === formData.deadline)?.label ?? formData.deadline}`,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setSubmitted(true)
      setFormData({ githubRepo: '', contractType: '', deadline: '', email: '', name: '' })
      setStep(1)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className={styles.submitPage}>
        <section className={styles.successSection}>
          <div className="container">
            <div className={styles.successCard}>
              <div className={styles.successIcon}>✓</div>
              <h2>Submitted</h2>
              <p className={styles.successMain}>We will respond within 24h.</p>
              <p className={styles.successSub}>
                We may include preliminary findings in our response when possible.
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className={styles.submitPage}>
      <section className={styles.header}>
        <div className="container">
          <h1>Submit for Free Review</h1>
          <p>4 simple steps. No commitment.</p>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className="container">
          <div className={styles.stepIndicator}>
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`${styles.stepDot} ${s === step ? styles.active : ''} ${s < step ? styles.done : ''}`}
              >
                {s}
              </div>
            ))}
          </div>

          <form onSubmit={step === 4 ? handleSubmit : (e) => { e.preventDefault(); handleNext() }} className={styles.form}>
            {error && (
              <div className={styles.errorBanner}>
                {error}
                <button type="button" onClick={() => setError(null)}>×</button>
              </div>
            )}

            {step === 1 && (
              <div className={styles.stepContent}>
                <h2>Step 1: GitHub repo</h2>
                <p className={styles.stepHint}>Link to your contract repository</p>
                <input
                  type="url"
                  placeholder="https://github.com/your-org/your-repo"
                  value={formData.githubRepo}
                  onChange={(e) => setFormData({ ...formData, githubRepo: e.target.value })}
                  className={styles.input}
                  autoFocus
                />
              </div>
            )}

            {step === 2 && (
              <div className={styles.stepContent}>
                <h2>Step 2: Contract type</h2>
                <p className={styles.stepHint}>What are you building?</p>
                <div className={styles.optionsGrid}>
                  {CONTRACT_TYPES.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      className={`${styles.optionBtn} ${formData.contractType === opt.id ? styles.selected : ''}`}
                      onClick={() => setFormData({ ...formData, contractType: opt.id })}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className={styles.stepContent}>
                <h2>Step 3: Deadline</h2>
                <p className={styles.stepHint}>When do you need the review?</p>
                <div className={styles.optionsGrid}>
                  {DEADLINE_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      className={`${styles.optionBtn} ${formData.deadline === opt.id ? styles.selected : ''}`}
                      onClick={() => setFormData({ ...formData, deadline: opt.id })}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className={styles.stepContent}>
                <h2>Step 4: Contact</h2>
                <p className={styles.stepHint}>Where should we reach you?</p>
                <div className={styles.formGroup}>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={styles.input}
                    required
                    autoFocus
                  />
                </div>
                <div className={styles.formGroup}>
                  <input
                    type="text"
                    placeholder="Your name (optional)"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={styles.input}
                  />
                </div>
              </div>
            )}

            <div className={styles.formActions}>
              {step > 1 ? (
                <button type="button" className="btn btn-secondary" onClick={handleBack}>
                  Back
                </button>
              ) : (
                <span />
              )}
              {step < 4 ? (
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!canProceed()}
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!canProceed() || loading}
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

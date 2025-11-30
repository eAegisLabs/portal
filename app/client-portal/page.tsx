'use client'

import { useState } from 'react'
import styles from './page.module.css'

interface Project {
  id: string
  name: string
  status: 'in-progress' | 'review' | 'completed'
  progress: number
  vulnerabilities: {
    critical: number
    high: number
    medium: number
    low: number
  }
  lastUpdate: string
}

export default function ClientPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Mock projects data - in real app, this would come from an API
  const projects: Project[] = [
    {
      id: '1',
      name: 'DeFi Lending Protocol',
      status: 'in-progress',
      progress: 65,
      vulnerabilities: { critical: 2, high: 3, medium: 5, low: 8 },
      lastUpdate: '2024-01-20',
    },
    {
      id: '2',
      name: 'NFT Marketplace',
      status: 'review',
      progress: 90,
      vulnerabilities: { critical: 0, high: 1, medium: 3, low: 4 },
      lastUpdate: '2024-01-18',
    },
    {
      id: '3',
      name: 'Token Contract',
      status: 'completed',
      progress: 100,
      vulnerabilities: { critical: 0, high: 0, medium: 0, low: 2 },
      lastUpdate: '2024-01-15',
    },
  ]

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would authenticate with a backend
    setIsLoggedIn(true)
  }

  if (!isLoggedIn) {
    return (
      <div className={styles.loginPage}>
        <div className={styles.loginContainer}>
          <div className={styles.loginCard}>
            <h1>Client Portal</h1>
            <p>Access your audit projects and reports</p>
            
            <form onSubmit={handleLogin} className={styles.loginForm}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Sign In
              </button>
            </form>

            <p className={styles.loginNote}>
              Demo mode: Enter any email and password to access
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.portalPage}>
      <div className="container">
        <div className={styles.portalHeader}>
          <div>
            <h1>Client Portal</h1>
            <p>Track your audit projects and access reports</p>
          </div>
          <button onClick={() => setIsLoggedIn(false)} className="btn btn-secondary">
            Sign Out
          </button>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <div key={project.id} className="card">
              <div className={styles.projectHeader}>
                <h3>{project.name}</h3>
                <span className={`${styles.statusBadge} ${styles[project.status]}`}>
                  {project.status.replace('-', ' ')}
                </span>
              </div>

              <div className={styles.progressSection}>
                <div className={styles.progressHeader}>
                  <span>Progress</span>
                  <span>{project.progress}%</span>
                </div>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              <div className={styles.vulnerabilitiesSection}>
                <h4>Vulnerabilities Found</h4>
                <div className={styles.vulnGrid}>
                  <div className={styles.vulnItem}>
                    <span className={styles.vulnLabel}>Critical</span>
                    <span className={`${styles.vulnCount} ${styles.critical}`}>
                      {project.vulnerabilities.critical}
                    </span>
                  </div>
                  <div className={styles.vulnItem}>
                    <span className={styles.vulnLabel}>High</span>
                    <span className={`${styles.vulnCount} ${styles.high}`}>
                      {project.vulnerabilities.high}
                    </span>
                  </div>
                  <div className={styles.vulnItem}>
                    <span className={styles.vulnLabel}>Medium</span>
                    <span className={`${styles.vulnCount} ${styles.medium}`}>
                      {project.vulnerabilities.medium}
                    </span>
                  </div>
                  <div className={styles.vulnItem}>
                    <span className={styles.vulnLabel}>Low</span>
                    <span className={`${styles.vulnCount} ${styles.low}`}>
                      {project.vulnerabilities.low}
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.projectFooter}>
                <span className={styles.lastUpdate}>
                  Last updated: {new Date(project.lastUpdate).toLocaleDateString()}
                </span>
                <button className={styles.viewButton}>
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.reportsSection}>
          <h2>Available Reports</h2>
          <div className={styles.reportsList}>
            <div className={styles.reportItem}>
              <div>
                <h4>Token Contract - Final Report</h4>
                <p>Completed on January 15, 2024</p>
              </div>
              <button className="btn btn-secondary">
                Download (SSL Encrypted)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

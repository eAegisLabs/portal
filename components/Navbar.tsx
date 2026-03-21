'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/audits', label: 'Audits' },
    { href: '/research', label: 'Research' },
    { href: '/process', label: 'Process' },
    { href: '/submit', label: 'Submit' },
  ]

  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.navContent}>
          <Link href="/" className={styles.logo}>
            <img src="/logo.png" alt="Aegis Labs" className={styles.logoImage} />
            <span className={styles.logoText}>Aegis Labs</span>
          </Link>
          
          <button
            className={styles.mobileToggle}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`${styles.navList} ${isOpen ? styles.open : ''}`}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/submit" className={`${styles.ctaButton} btn btn-primary`}>
            Submit for Free Review
          </Link>
        </div>
      </div>
    </nav>
  )
}

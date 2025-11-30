'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/audit-process', label: 'Audit Process' },
    { href: '/team', label: 'Team' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
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
            <li>
              <Link href="/client-portal" onClick={() => setIsOpen(false)} className={styles.clientPortalLink}>
                Client Portal
              </Link>
            </li>
          </ul>

          <Link href="/contact" className={`${styles.ctaButton} btn btn-primary`}>
            Get Quote
          </Link>
        </div>
      </div>
    </nav>
  )
}

import type { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  title: {
    default: 'Aegis Labs - Professional Smart Contract Audit Services',
    template: '%s | Aegis Labs',
  },
  description: 'Secure Your Web3 Assets: Professional smart contract audit services. Providing Solidity/EVM, Rust/Move, and Layer 2 protocol audits. Protect your DeFi, NFT, and blockchain projects.',
  keywords: [
    'smart contract audit',
    'Solidity security review',
    'Web3 audit services',
    'blockchain security',
    'DeFi audit',
    'NFT security audit',
    'smart contract security',
    'EVM audit',
    'blockchain audit',
    'cryptocurrency security',
  ],
  authors: [{ name: 'Aegis Labs' }],
  creator: 'Aegis Labs',
  publisher: 'Aegis Labs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aegis360.xyz'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aegis360.xyz',
    siteName: 'Aegis Labs',
    title: 'Aegis Labs - Professional Smart Contract Audit Services',
    description: 'Secure Your Web3 Assets: Professional smart contract audit services for DeFi, NFT, and blockchain projects.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Aegis Labs - Smart Contract Security',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aegis Labs - Professional Smart Contract Audit Services',
    description: 'Secure Your Web3 Assets: Professional smart contract audit services.',
    creator: '@aegislabs',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

// Page-specific metadata
export const pageMetadata: Record<string, Metadata> = {
  '/': {
    title: 'Home',
    description: 'Professional smart contract audit services to secure your Web3 assets. 500+ projects audited, $2B+ assets protected.',
  },
  '/services': {
    title: 'Services',
    description: 'Comprehensive smart contract audit services including Solidity/EVM audits, Rust/Move audits, Layer 2 protocols, and tokenomics review.',
    keywords: ['smart contract audit services', 'Solidity audit', 'EVM audit', 'DeFi audit', 'blockchain security services'],
  },
  '/audit-process': {
    title: 'Audit Process',
    description: 'Transparent audit workflow from initial consultation to final report delivery. Learn how we secure your smart contracts.',
    keywords: ['audit process', 'smart contract audit workflow', 'security audit methodology'],
  },
  '/team': {
    title: 'Our Team',
    description: 'Meet our team of security experts and smart contract developers with years of experience in blockchain security.',
    keywords: ['security experts', 'blockchain auditors', 'smart contract developers'],
  },
  '/case-studies': {
    title: 'Case Studies',
    description: 'Real-world examples of our audit work. See how we\'ve helped projects secure millions in assets.',
    keywords: ['audit case studies', 'security audit examples', 'blockchain audit success stories'],
  },
  '/blog': {
    title: 'Blog & Resources',
    description: 'Industry insights, security best practices, and Web3 knowledge. Stay updated with the latest in blockchain security.',
    keywords: ['blockchain security blog', 'smart contract best practices', 'Web3 security insights'],
  },
  '/contact': {
    title: 'Contact Us',
    description: 'Get in touch for a professional audit quote and consultation. We typically respond within 24 hours.',
    keywords: ['contact smart contract auditor', 'audit quote', 'security consultation'],
  },
}

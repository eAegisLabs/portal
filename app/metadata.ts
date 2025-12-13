import type { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  title: {
    default: 'Aegis Labs - Affordable Smart Contract Audits for Growing Teams',
    template: '%s | Aegis Labs',
  },
  description: 'Affordable smart contract audit services for small and medium teams. Transparent pricing from $1,000, fast turnaround, and expert guidance. Secure your Web3 project without breaking the budget.',
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
    title: 'Aegis Labs - Affordable Smart Contract Audits for Growing Teams',
    description: 'Affordable smart contract audit services for small and medium teams. Transparent pricing, fast turnaround, and expert guidance.',
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
    title: 'Aegis Labs - Affordable Smart Contract Audits for Growing Teams',
    description: 'Affordable smart contract audit services for small and medium teams.',
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
    description: 'Affordable smart contract audit services for small and medium teams. Transparent pricing from $1,000, fast turnaround, and expert guidance.',
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
    description: 'Get a free, no-obligation quote for your project. We respond within 24 hours with transparent pricing tailored to your needs.',
    keywords: ['contact smart contract auditor', 'audit quote', 'security consultation'],
  },
}

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
  '/audits': {
    title: 'Audits',
    description: 'Public smart contract audit reports. Proof of our security expertise and methodology.',
    keywords: ['public audit reports', 'smart contract audit', 'blockchain security proof'],
  },
  '/research': {
    title: 'Research',
    description: 'Technical research and security insights. Smart contract vulnerabilities, best practices, and Web3 security patterns.',
    keywords: ['smart contract research', 'blockchain security research', 'Web3 security insights'],
  },
  '/process': {
    title: 'Audit Process',
    description: 'Transparent audit workflow from initial consultation to final report delivery. Learn how we secure your smart contracts.',
    keywords: ['audit process', 'smart contract audit workflow', 'security audit methodology'],
  },
  '/report-demo': {
    title: 'Report Demo | Sample Audit Report',
    description: 'See what an Aegis Labs audit report looks like. Overview, scope, methodology, findings, risk rating—with visual severity and actionable recommendations.',
    keywords: ['audit report sample', 'security audit report', 'smart contract audit format'],
  },
  '/submit': {
    title: 'Submit Project',
    description: 'Get a free, no-obligation quote for your project. Submit your smart contract for audit. We respond within 24 hours.',
    keywords: ['submit audit', 'audit quote', 'smart contract audit request'],
  },
}

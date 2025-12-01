import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch for a professional audit quote and consultation. We typically respond within 24 hours.',
  keywords: ['contact smart contract auditor', 'audit quote', 'security consultation'],
  openGraph: {
    title: 'Contact Us - Aegis Labs',
    description: 'Get in touch for a professional audit quote and consultation.',
    url: 'https://aegis360.xyz/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

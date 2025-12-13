import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get a free quote tailored for your team size and budget. No commitment, just honest pricing. We respond within 24 hours.',
  keywords: ['contact smart contract auditor', 'audit quote', 'security consultation', 'affordable audit'],
  openGraph: {
    title: 'Contact Us - Aegis Labs',
    description: 'Get a free quote tailored for your team size and budget. No commitment, just honest pricing.',
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

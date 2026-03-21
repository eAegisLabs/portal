import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Submit Project',
  description: 'Get a free quote tailored for your project. Submit your smart contract for audit. We respond within 24 hours.',
  keywords: ['submit audit', 'audit quote', 'smart contract audit request', 'affordable audit'],
  openGraph: {
    title: 'Submit Project - Aegis Labs',
    description: 'Get a free quote for your smart contract audit. Submit your project for security review.',
    url: 'https://aegis360.xyz/submit',
  },
}

export default function SubmitLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

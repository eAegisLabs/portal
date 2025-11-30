export default function StructuredData({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Organization schema for homepage
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Aegis Labs',
  url: 'https://aegislabs.com',
  logo: 'https://aegislabs.com/logo.png',
  image: 'https://aegislabs.com/logo.png',
  description: 'Professional smart contract audit services for Web3 projects',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'sunvike72@gmail.com',
    contactType: 'Customer Service',
  },
  sameAs: [
    'https://t.me/vikesun',
  ],
}

// Service schema
export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Smart Contract Security Audit',
  provider: {
    '@type': 'Organization',
    name: 'Aegis Labs',
  },
  areaServed: 'Worldwide',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://aegislabs.com/contact',
  },
}

// WebSite schema with search action
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Aegis Labs',
  url: 'https://aegislabs.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://aegislabs.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

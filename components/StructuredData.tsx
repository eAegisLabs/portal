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
  url: 'https://aegis360.xyz',
  logo: 'https://aegis360.xyz/logo.png',
  image: 'https://aegis360.xyz/logo.png',
  description: 'Affordable smart contract audit services for small and medium teams',
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
    serviceUrl: 'https://aegis360.xyz/contact',
  },
}

// WebSite schema with search action
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Aegis Labs',
  url: 'https://aegis360.xyz',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://aegis360.xyz/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

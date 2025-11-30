import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/client-portal/', '/api/'],
      },
    ],
    sitemap: 'https://aegislabs.com/sitemap.xml',
  }
}

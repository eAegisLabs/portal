/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  async redirects() {
    return [
      { source: '/case-studies', destination: '/audits', permanent: true },
      { source: '/public-audits', destination: '/audits', permanent: true },
      { source: '/audit-process', destination: '/process', permanent: true },
      { source: '/contact', destination: '/submit', permanent: true },
      { source: '/knowledge-base', destination: '/research', permanent: true },
      { source: '/knowledge-base/:path*', destination: '/research/:path*', permanent: true },
      { source: '/services', destination: '/', permanent: true },
      { source: '/pricing', destination: '/submit', permanent: true },
      { source: '/team', destination: '/', permanent: true },
      { source: '/client-portal', destination: '/', permanent: true },
    ]
  },
}

module.exports = nextConfig

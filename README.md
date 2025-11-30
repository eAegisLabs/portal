# Portal

Professional smart contract audit service website built with Next.js 14.

## Features

- **Homepage**: Hero section, trust badges, core services, and CTA sections
- **Services Page**: Detailed service offerings with audit types and deliverables
- **Audit Process Page**: Transparent workflow from consultation to final report
- **Team Page**: Showcase of security experts and their expertise
- **Case Studies**: Real-world examples of audit work and impact
- **Blog/Resources**: Industry insights and security best practices
- **Contact Page**: Instant quote calculator and contact form
- **Client Portal**: Project tracking, vulnerability status, and secure report downloads
- **Privacy Policy & Terms**: Legal pages for compliance
- **SEO Optimized**: Meta tags, structured data, sitemap, and robots.txt

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Deployment**: Ready for Vercel/Netlify

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
  ├── page.tsx              # Homepage
  ├── services/             # Services page
  ├── audit-process/        # Audit process page
  ├── team/                 # Team page
  ├── case-studies/         # Case studies page
  ├── blog/                 # Blog page
  ├── contact/              # Contact page with quote calculator
  ├── client-portal/        # Client portal with login
  ├── privacy/              # Privacy policy
  ├── terms/                # Terms of service
  ├── layout.tsx            # Root layout
  ├── globals.css           # Global styles
  ├── metadata.ts           # SEO metadata configuration
  ├── robots.ts             # Robots.txt
  └── sitemap.ts            # Sitemap generation

components/
  ├── Navbar.tsx            # Navigation bar
  ├── Footer.tsx            # Footer component
  ├── QuoteCalculator.tsx   # Instant quote calculator
  └── StructuredData.tsx    # SEO structured data

public/                     # Static assets
```

## Key Features

### Instant Quote Calculator
- Calculate audit costs based on lines of code, complexity, and scope
- Real-time price estimation
- Transparent pricing model

### Client Portal
- Secure login system
- Project status tracking
- Vulnerability dashboard
- Secure report downloads (SSL/TLS encrypted)

### SEO Optimization
- Comprehensive meta tags
- Structured data (JSON-LD)
- Sitemap generation
- Robots.txt configuration
- Mobile-responsive design

## Customization

### Update Branding
- Modify colors in `app/globals.css` (CSS variables)
- Update company name in metadata and components
- Replace logo/icon files in `public/` directory

### Add Content
- Blog posts: Add to `app/blog/` directory
- Case studies: Update `app/case-studies/page.tsx`
- Team members: Update `app/team/page.tsx`

### Configure SEO
- Update URLs and metadata in `app/metadata.ts`
- Modify structured data in `components/StructuredData.tsx`
- Update sitemap in `app/sitemap.ts`

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the .next directory
```

### Other Platforms

The site is a standard Next.js application and can be deployed to any platform that supports Next.js.

## Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
NEXT_PUBLIC_SITE_URL=https://aegislabs.com
```

## Security Notes

- Ensure SSL/TLS is enabled in production
- Implement proper authentication for client portal (currently demo mode)
- Use secure APIs for form submissions
- Encrypt sensitive client data
- Regularly update dependencies

## License

Copyright © 2024 Aegis Labs. All rights reserved.

## Support

For questions or support, contact: contact@aegislabs.com
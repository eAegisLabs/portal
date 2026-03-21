# Aegis Labs

Smart contract audit website. Bridge & cross-chain security focus.

## Core Pages

- `/` — Home
- `/audits` — Public audit reports
- `/research` — Technical research & articles
- `/process` — Audit process (5 steps)
- `/report-demo` — Sample audit report
- `/submit` — Submit for free review

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- CSS Modules

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
app/
  ├── page.tsx           # Homepage
  ├── audits/            # Public audits list + detail
  ├── research/          # Research articles
  ├── process/           # Audit process
  ├── report-demo/       # Sample report
  ├── submit/            # Submit form
  ├── privacy/           # Privacy policy
  ├── terms/             # Terms of service
  ├── api/contact/       # Contact form API
  └── metadata.ts        # SEO metadata

components/
  ├── Navbar.tsx
  ├── Footer.tsx
  ├── AuditLog.tsx       # Terminal-style log
  └── StructuredData.tsx # SEO JSON-LD
```

## Environment Variables

```env
NEXT_PUBLIC_SITE_URL=https://aegis360.xyz
TELEGRAM_BOT_TOKEN=     # For submit notifications
TELEGRAM_CHAT_ID=       # For submit notifications
```

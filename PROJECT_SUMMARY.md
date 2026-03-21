# Aegis Labs - Project Summary

## Core Pages

| Route | Purpose |
|-------|---------|
| `/` | Home — Hero, What we analyze, Audits preview, Process, Sample report, CTA |
| `/audits` | Public audit reports |
| `/audits/[slug]` | Audit detail with findings |
| `/research` | Technical research articles |
| `/research/[category]/[slug]` | Article detail |
| `/process` | 5-step audit process + tools (Slither, Foundry) |
| `/report-demo` | Sample audit report |
| `/submit` | 4-step submit form |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## Redirects (legacy URLs)

- `/case-studies`, `/public-audits` → `/audits`
- `/contact` → `/submit`
- `/knowledge-base` → `/research`
- `/audit-process` → `/process`
- `/services`, `/pricing`, `/team`, `/client-portal` → `/` or `/submit`

## Key Components

- **AuditLog** — Terminal-style log for homepage
- **StructuredData** — SEO JSON-LD
- **Navbar / Footer** — Layout

## API

- `POST /api/contact` — Submit form (Telegram notification)

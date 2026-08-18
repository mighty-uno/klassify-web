# Klassify

Klassify is the AI-powered school operating system that automates attendance, billing, and report cards — saving hours for teachers and admin, while giving parents daily, real-time insights into their child's progress. It is built by Vidhiworks.

This repository contains the official Klassify marketing website, rebuilt with Next.js (App Router) and styled with Tailwind CSS. It replaces the previous static Framer export.

## Tech stack

- [Next.js 14](https://nextjs.org) — App Router, server components, route handlers
- [Tailwind CSS 3](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) — scroll reveal animations
- [Lucide Icons](https://lucide.dev)
- [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) — Inter + JetBrains Mono

## Pages

| Route | Description |
| --- | --- |
| `/` | Enhanced landing page — hero, stats, roles, product, AI, workflow, Oppa learning assistant, pricing, FAQ, CTA |
| `/contact` | Contact + demo enquiry form (posts to `/api/contact`, forwarded to FormSubmit) |
| `/privacy` | Privacy Policy, generated for the Klassify / Vidhiworks context |
| `/terms` | Terms of Service |
| `/cookies` | Cookie Policy |
| `/api/contact` | Server-side route handler that validates and forwards contact enquiries |

## Getting started

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:3000)
npm run dev
```

Or run the convenience script:

```bash
./start.sh
```

## Build & production

```bash
npm run build
npm run start
```

The build outputs `app/sitemap.ts` and `app/robots.ts` into `/sitemap.xml` and `/robots.txt` automatically.

## Contact

- Product & sales: contact.klassify@vidhiworks.com
- Support: vidhiworks@zohomail.in

© 2026 Klassify. School operations, made calmer.

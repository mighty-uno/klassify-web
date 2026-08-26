# SkooBee

SkooBee is the AI-powered school ERP and operating system that automates attendance, billing, schedules, payroll, and report cards — saving hours for teachers and admin, while giving parents daily, real-time insights into their child's progress. It is built by Vidhiworks.

This repository contains the official SkooBee marketing website and interactive system slides, built with Next.js (App Router) and styled with Tailwind CSS.

## Architecture

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS + Vanilla CSS tokens
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Forms:** FormSubmit integration with client validation (waitlist); contact enquiries and Bee-Bud partner applications send their notifications via ZeptoMail
- **Database:** Turso (libsql) stores Bee-Bud partner applications via `lib/turso.ts` (`TURSO_DATABASE_URL` / `TURSO_AUTH_TOKEN` env vars, see `.env.example`)
- **Transactional email:** ZeptoMail sends the contact enquiry and Bee-Bud application notifications via `lib/zeptoMail.ts` with branded templates in `lib/emailTemplates.ts` (`ZEPTOMAIL_API_TOKEN` / `ZEPTOMAIL_FROM_EMAIL` / `ZEPTOMAIL_TO_EMAIL`, see `.env.example`)
- **Interactive Slides:** `/slides` — full-featured interactive presentation deck with web/mobile carousels and keyboard controls

## Key Routes

| Route | Description |
|---|---|
| `/` | Landing page with Hero, Trust bar, Difference, Product visual showcase, AI engine preview, Oppa learning assistant, Pricing, and FAQ |
| `/slides` | Interactive system overview presentation deck with keyboard controls and live ERP screenshots |
| `/contact` | Book-a-demo and contact enquiry form |
| `/bee-bud` | Bee-Bud partner program — join the hive and earn a monthly honey drop |
| `/privacy` | Privacy Policy, generated for the SkooBee / Vidhiworks context |
| `/terms` | Terms of Service |
| `/cookies` | Cookie Policy |

## Running Locally

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev
./start.sh
```

## Build & production

```bash
npm run build
npm run start
```

The build outputs `app/sitemap.ts` and `app/robots.ts` into `/sitemap.xml` and `/robots.txt` automatically.

## Contact

- Product & sales: contact.skoobee@vidhiworks.com
- Built by Vidhiworks: vidhiworks@zohomail.in

© 2026 SkooBee. School ERP in your pocket.

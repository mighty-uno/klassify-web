# Bee-Bud Partner Page Design

- **Date:** 26 August 2026
- **Product:** SkooBee marketing site (Next.js 14 App Router + Tailwind + Framer Motion)
- **Status:** Approved

## Overview

A dedicated partner/reseller landing page for SkooBee. The program is called **Bee-Bud**; partners are **Bee-Buds**. The page is an immersive scroll-journey: as the visitor scrolls, a swarm of bees flies in and builds a honeycomb nest, and when the hive is complete a **honey drop** appears. The program is deliberately simple — **no tiers, no complex programs** — partners receive one **honey drop every month** for every school they bring into the hive. The signup hook is **recurring "honey" every month**, expressed metaphorically (no exact payment figures anywhere).

## Goals

- Attract signups from individual freelancers and resellers / IT distributors.
- Communicate a single, simple offer: bring schools into the hive, receive a honey drop every month.
- Deliver the requested visual metaphor: bees building a nest, ending in the monthly honey drop payoff.

## Route & Navigation

- **Route:** `/bee-bud`
- **Metadata:** title "Join the Bee-Bud — SkooBee Partner Program", description emphasizing recurring honey and the partner opportunity, canonical URL, existing OG/twitter image reuse, indexable.
- **Header:** add "Bee-Bud" to `NAV_LINKS` in `lib/site.ts` (desktop + mobile menus). Render white-on-dark at top of page via transparent header state.
- **Footer:** add "Bee-Bud" link under the Company column in `components/Footer.tsx`.
- **Sitemap:** add `/bee-bud` to the static routes list in `app/sitemap.ts` (priority 0.8, matching `/contact`).

## Page Sections

1. **The Hive Stage** — sticky scroll-journey (the centerpiece, ~400vh).
2. **The Deal** — the single honey-drop model.
3. **Why become a Bee-Bud** — benefit cards.
4. **How the hive works** — 3-step process.
5. **Bee-Bud FAQ** — accordion (reuse `components/home/FAQ.tsx` pattern).
6. **Application form** — inline partner application.

## The Hive Stage (Animation System)

### Mechanics

- A wrapper `<section class="relative h-[400vh]">` containing a `sticky top-0 h-screen overflow-hidden` stage.
- `useScroll({ target: ref })` produces `scrollYProgress` (0 → 1). Framer Motion `useTransform` drives all animation from this single value — scroll-linked, deterministic, no per-frame re-renders.

### Honeycomb

- SVG cluster of hexagon cells, arranged in three rows (bottom → middle → top).
- Cells fill with golden "honey" progressively as scroll progress increases, row by row — the nest grows as the visitor scrolls.

### Bees

- ~20–30 small SVG bee sprites: yellow/black striped body, translucent flapping wings, antennae.
- Start scattered at screen edges; fly inward and converge on the hive as progress increases.
- At full progress they swarm around the fully-lit nest.

### Honey drop

- When the hive is complete, a golden droplet ("honey drop") fades in above the hive — the payoff for the monthly recurring income.

### Overlay copy

- Centered, single headline that stays constant (no tier switching): **"A honey drop, every month."**
- Sub-line: "Join the Bee-Bud. Bring schools into the hive and receive a honey drop every month — recurring income that keeps flowing."
- Closing line (fades out at the very end): "No tiers. No complex programs. One simple deal: grow the hive, and honey drops for you every month."
- Scene fades out via progress-based opacity into the next section (no jarring cut).

## The Deal (Single Model)

The program has **no tiers and no multiple programs** — one simple model communicated as a feature card:

- **The honey drop** — every month, for every school you bring into the hive.
- You keep earning while schools keep using SkooBee.
- No fees, no quotas, no complex tiers.

The card carries a droplet icon, a checklist, and the note: *"Exact honey rates are shared after you apply — every Bee-Bud starts with a clear plan."*

**Money language:** always metaphor — "honey drop", "recurring honey", "earn month after month". No figures anywhere.

## Benefits Section ("Why become a Bee-Bud")

Four cards, light section matching homepage card style:

1. **Recurring honey** — earn month after month on every school you bring (headline hook).
2. **You sell, we do the rest** — SkooBee handles onboarding, training, and school support.
3. **Grow your territory** — claim your region, build a portfolio of schools, and watch your honey drops grow.
4. **Tools to fly with** — demo access, partner dashboard, marketing assets, real-time lead tracking.

## How the Hive Works (3 Steps)

1. **Join Bee-Bud** — apply with the form; SkooBee reviews and welcomes you.
2. **Learn the hive** — quick onboarding, product walkthrough, sales kit.
3. **Receive your honey drop** — sell to schools and earn a honey drop every month, recurring while they use SkooBee.

## Bee-Bud FAQ

Accordion (reuse `components/home/FAQ.tsx` pattern), partner-specific questions:

- *What does it cost to join?* — Free.
- *Who can apply?* — Individual freelancers and resellers / IT distributors.
- *Do I need a sales background?* — No.
- *How do payments work?* — A honey drop every month; exact rates shared after applying.
- *Is the region exclusive?* — Territory-based; build a portfolio and grow into exclusive ownership.
- *Is there a complex program to learn?* — No. No tiers or complex structures — one simple model.

## Application Form & Backend

- **Inline form** (`components/BeeBudForm.tsx`, client component mirroring `components/WaitlistForm.tsx`): fields name, email, company/org (optional), role, region/city, partner type (Individual freelancer / Reseller & IT distributor / Other), **qualification (mandatory select)**, message.
- **Backend:** `app/api/bee-bud/route.ts`, mirroring `app/api/waitlist/route.ts` and `app/api/contact/route.ts` patterns:
  - Validate required fields (name, email, region, partner type, qualification) + email format.
  - **Turso persistence:** every accepted application is inserted into a Turso (libsql) database via `lib/turso.ts` — `bee_bud_applications` table, schema auto-created (`CREATE TABLE IF NOT EXISTS`). Credentials come from `TURSO_DATABASE_URL` / `TURSO_AUTH_TOKEN` (see `.env.example`). When not configured, the insert is skipped with a warning and the form still works.
  - POST to FormSubmit endpoint (`https://formsubmit.co/ajax/vidhiworks@zohomail.in`) with `_subject: "Bee-Bud partner application"`, `_template: "table"`, `_captcha: "false"`, `AbortSignal.timeout(15000)`.
  - Graceful 400 / 502 error handling matching existing routes.
- **Form UX:** loading state, success/error status banner with `aria-live`, success message *"You're a Bee-Bud now! We'll reach out with the next steps."*

## Performance & Accessibility

- **Reduced motion:** if `prefers-reduced-motion`, the hive renders fully-built and static (honey drop visible). Implemented via Framer Motion `useReducedMotion()`.
- **Performance:** animation uses only `transform` + `opacity` (GPU-composited); ~20–30 bees max; SVG hexagons; `will-change` confined to the sticky stage; stage uses `overflow-hidden`; scroll-linked values memoized through Framer Motion springs.
- **Accessibility:** decorative stage elements `aria-hidden`; tier copy is real text (readable with JS off and by screen readers); keyboard-visible focus on nav link and form; contrast preserved (white on `night`, ink on `canvas`).
- **SEO:** indexable; sitemap includes `/bee-bud`; title/description set.
- **Verification:** `npm run typecheck` and `npm run lint` before finishing.

## Files Changed / Created

- **Create:** `app/bee-bud/page.tsx`; partner components under `components/partner/` (`HiveStage.tsx`, `Deal.tsx`, `Benefits.tsx`, `Steps.tsx`, `FAQ.tsx`); `components/BeeBudForm.tsx`; `app/api/bee-bud/route.ts`.
- **Edit:** `lib/site.ts` (nav link), `components/Footer.tsx` (footer link), `app/sitemap.ts` (route).

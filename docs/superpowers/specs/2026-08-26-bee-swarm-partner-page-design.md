# Bee Swarm Partner Page Design

- **Date:** 26 August 2026
- **Product:** SkooBee marketing site (Next.js 14 App Router + Tailwind + Framer Motion)
- **Status:** Approved

## Overview

A dedicated partner/reseller landing page for SkooBee. The program is called **Bee Swarm**; partners are **Bee-Buds**. The page is an immersive scroll-journey: as the visitor scrolls, a swarm of bees flies in and builds a honeycomb nest, while the visitor's "career" in the program climbs through three tiers — **Worker → Builder → Queen**. The signup hook is **recurring "honey" every month**, expressed metaphorically (no exact payment figures anywhere).

## Goals

- Attract signups from individual freelancers and resellers / IT distributors.
- Communicate the core offer: recurring commission ("honey"), done-for-you onboarding, territory growth.
- Deliver the requested visual metaphor: bees building a nest and growing in their career.

## Route & Navigation

- **Route:** `/bee-swarm`
- **Metadata:** title "Join the Bee Swarm — SkooBee Partner Program", description emphasizing recurring honey and the partner opportunity, canonical URL, existing OG/twitter image reuse, indexable.
- **Header:** add "Bee Swarm" to `NAV_LINKS` in `lib/site.ts` (desktop + mobile menus). Render white-on-dark at top of page via transparent header state.
- **Footer:** add "Bee Swarm" link under the Company column in `components/Footer.tsx`.
- **Sitemap:** add `/bee-swarm` to the static routes list in `app/sitemap.ts` (priority 0.8, matching `/contact`).

## Page Sections

1. **The Hive Stage** — sticky scroll-journey (the centerpiece, ~400vh).
2. **Why become a Bee-Bud** — benefit cards.
3. **How the hive works** — 3-step process.
4. **Bee Swarm FAQ** — accordion (reuse `components/home/FAQ.tsx` pattern).
5. **Application form** — inline partner application.

## The Hive Stage (Animation System)

### Mechanics

- A wrapper `<section class="relative h-[400vh]">` containing a `sticky top-0 h-screen overflow-hidden` stage.
- `useScroll({ target: ref })` produces `scrollYProgress` (0 → 1). Framer Motion `useTransform` drives all animation from this single value — scroll-linked, deterministic, no per-frame re-renders.
- Tier thresholds: **Worker** 0–35%, **Builder** 35–70%, **Queen** 70–100%.

### Honeycomb

- SVG cluster of hexagon cells, arranged in three rows (bottom → middle → top).
- Cells fill with golden "honey" progressively as scroll progress increases, row by row — the nest grows as the visitor scrolls.

### Bees

- ~20–30 small SVG bee sprites: yellow/black striped body, translucent flapping wings, antennae.
- Start scattered at screen edges; fly inward and converge on the hive as progress increases.
- At full progress they swarm around the fully-lit nest.
- **Queen bee:** a distinct, larger bee that flies in and settles atop the hive at the final threshold.

### Tier rails & overlay copy

- A thin progress rail under the headline with three markers: **Worker → Builder → Queen**; active marker highlights per threshold.
- Centered overlay headline + short line, crossfading per tier:
  - **Worker:** "Every hive starts with one bee." → "Join the swarm, learn the hive."
  - **Builder:** "Your comb grows." → "Bring in schools, earn recurring honey."
  - **Queen:** "Welcome to the top of the hive." → "Lead your territory. Keep earning."
- Scene fades out via progress-based opacity into the next section (no jarring cut).

## Career Tiers

Three tiers define the Bee-Bud journey. Each gets a badge, name, role line, and what unlocks; shown as a card rail synced with the stage, plus a full breakdown section after the stage.

- **Worker** — *"You've joined the swarm."*
  - Onboarding + training kit, demo access, partner dashboard, first leads supported by the SkooBee team.
  - Goal: land your first school and earn your first recurring honey.
- **Builder** — *"Your comb grows."*
  - Higher honey tier as volume climbs, co-branded marketing assets, priority support, quarterly growth reviews.
  - Goal: a portfolio of schools in your region earning month after month.
- **Queen** — *"The top of the hive."*
  - Premium honey tier, dedicated account manager, early feature access, territory leadership, invited to the Bee Swarm partner community.
  - Goal: own a thriving territory and lead other Bee-Buds.

**Money language:** always metaphor — "recurring honey", "honey tier climbs as your comb grows", "earn month after month". No figures. Near the form: *"Exact honey rates shared after you apply — every Bee-Bud starts with a clear plan."*

## Benefits Section ("Why become a Bee-Bud")

Four cards, light section matching homepage card style:

1. **Recurring honey** — earn month after month on every school you bring (headline hook).
2. **You sell, we do the rest** — SkooBee handles onboarding, training, and school support.
3. **Grow your territory** — claim your region, build a portfolio, climb tiers.
4. **Tools to fly with** — demo access, partner dashboard, marketing assets, real-time lead tracking.

## How the Hive Works (3 Steps)

1. **Join the swarm** — apply with the form; SkooBee reviews and welcomes you.
2. **Learn the hive** — quick onboarding, product walkthrough, sales kit.
3. **Grow your comb** — sell to schools, earn recurring honey, climb to Builder → Queen.

## Bee Swarm FAQ

Accordion (reuse `components/home/FAQ.tsx` pattern), partner-specific questions:

- *What does it cost to join?* — Free.
- *Who can apply?* — Individual freelancers and resellers / IT distributors.
- *Do I need a sales background?* — No.
- *How do payments work?* — Recurring honey; exact rates shared after applying.
- *Is the region exclusive?* — Territory-based; Queen tier builds exclusivity.

## Application Form & Backend

- **Inline form** (`components/BeeSwarmForm.tsx`, client component mirroring `components/WaitlistForm.tsx`): fields name, email, company/org (optional), role, region/city, partner type (Individual freelancer / Reseller & IT distributor / Other), message.
- **Backend:** new `app/api/bee-swarm/route.ts`, mirroring `app/api/waitlist/route.ts` and `app/api/contact/route.ts` patterns:
  - Validate required fields (name, email, region, partner type) + email format.
  - POST to FormSubmit endpoint (`https://formsubmit.co/ajax/vidhiworks@zohomail.in`) with `_subject: "Bee Swarm partner application"`, `_template: "table"`, `_captcha: "false"`, `AbortSignal.timeout(15000)`.
  - Graceful 400 / 502 error handling matching existing routes.
- **Form UX:** loading state, success/error status banner with `aria-live`, success message *"You've joined the swarm! We'll reach out with the next steps."*

## Performance & Accessibility

- **Reduced motion:** if `prefers-reduced-motion`, the hive renders fully-built and static; tiers render as a simple list. Implemented via Framer Motion `useReducedMotion()`.
- **Performance:** animation uses only `transform` + `opacity` (GPU-composited); ~20–30 bees max; SVG hexagons; `will-change` confined to the sticky stage; stage uses `overflow-hidden`; scroll-linked values memoized through Framer Motion springs.
- **Accessibility:** decorative stage elements `aria-hidden`; tier copy is real text (readable with JS off and by screen readers); keyboard-visible focus on nav link and form; contrast preserved (white on `night`, ink on `canvas`).
- **SEO:** indexable; sitemap includes `/bee-swarm`; title/description set.
- **Verification:** `npm run typecheck` and `npm run lint` before finishing.

## Files Changed / Created

- **Create:** `app/bee-swarm/page.tsx`; partner components under `components/partner/` (`HiveStage.tsx`, `Tiers.tsx`, `Benefits.tsx`, `Steps.tsx`, `FAQ.tsx`); `components/BeeSwarmForm.tsx`; `app/api/bee-swarm/route.ts`.
- **Edit:** `lib/site.ts` (nav link), `components/Footer.tsx` (footer link), `app/sitemap.ts` (route).

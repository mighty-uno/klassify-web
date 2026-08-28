# SkooBee Marketing Template Skill — Design

Date: 2026-08-28
Status: Approved by user

## 1. Purpose

Create a reusable Skill (`/.ai-ready/skills/skoobee-marketing/SKILL.md`) that generates SkooBee marketing email templates and Instagram post packs on demand, so the team can keep producing fresh templates without re-explaining the brand every time. Each invocation also renders branded visual assets using Bun's `Bun.WebView` (headless browser → screenshot).

The first concrete pack is generated during implementation and saved to `/marketing/`.

## 2. Product & brand reference (locked facts)

Sourced from the SkooBee repo (`README.md`, `lib/site.ts`, `lib/emailTemplates.ts`, `components/home/*`).

- **Product**: SkooBee — AI-powered school ERP / operating system, built by Vidhiworks (Mumbai, India).
- **Tagline**: "School ERP in your pocket."
- **Modules**: Attendance (3-second voice roll call, 30 min saved per teacher/day, instant parent absence alerts), Fees (auto-reminders, digital ledgers), Results (visual report cards with AI comments), Auto reports, Payroll, Schedules, Oppa AI learning assistant (chat with your textbooks).
- **Value props**: one source of truth for every team; clear workflows per role; more focus on student outcomes; free for teachers every day.
- **Pricing**: one plan, per student per month, custom quote. No per-module add-ons.
- **Contact / CTA**: Book a demo → https://skoobee.vidhiworks.com/contact and contact.skoobee@vidhiworks.com.
- **Partner program**: Bee-Bud — honey drop per month per school brought in.
- **Tone**: calm, dependable, warm, friendly (bee/hive/honey motif), confident, no hypey caps-lock screaming.
- **Brand palette**:
  - Navy ink `#0d0e1a`
  - Honey accent `#ffc93c`
  - Indigo primary `#4a3aff`
  - Muted text `#5e6377`
  - Light gray bg `#f7f7fa`
  - Border `#e3e3ea`
- **Typography**: Inter / Helvetica / Arial; uppercase mono labels for eyebrows.

## 3. Audiences

- **Email → School leadership** (principals, owners, directors, admins): pains = admin burden, fee collection, parent complaints, staff hours; cares = control, outcomes, parent satisfaction.
- **Instagram → Broader + parent-facing**: emotional hooks, teacher relief, parent peace of mind, student outcomes.

## 4. Skill file structure

`/.ai-ready/skills/skoobee-marketing/SKILL.md` sections:

1. **Purpose** — when/how to invoke.
2. **Brand reference** — locked facts above.
3. **Workflow (task list)** — the ordered steps the agent follows every invocation:
   1. Capture goal (channel, audience, theme/event, any specific school).
   2. Select 1–2 topics from the topic bank (or accept a custom one).
   3. Draft copy: email subject lines + body; IG caption + hashtags + story + reels + carousel.
   4. Generate visual assets with Bun.WebView (see §6).
   5. Save the pack under `/marketing/YYYY-MM-DD-<slug>/`.
   6. Validate against brand reference (facts, links, tone, hex colors).
4. **Topic & subject-line bank** — see §5.
5. **Template structures** — email skeleton and Instagram skeleton (§7).
6. **Image generation via Bun.WebView** — mechanism + runtime requirements (§6).

## 5. Topic & subject-line bank (initial seed)

Grouped by theme; each item ships a catchy email subject line and an IG hook. 20+ entries. Themes:

- **Attendance / teacher time** (e.g., "Give your teachers 30 minutes back every day")
- **Fees & collections** (e.g., "Fee collections that stop chasing themselves")
- **AI / Oppa** (e.g., "Turn every textbook in your school into a teacher")
- **Parent communication** (e.g., "Parents actually opened the app. Here's why.")
- **Report cards & results** (e.g., "What if report cards wrote themselves?")
- **School operations / admin calm** (e.g., "One dashboard. Every department. Zero spreadsheet chaos.")
- **Seasonal** (new academic year, exam season, admissions season, fee payment windows)
- **Social proof / Bee-Bud** (e.g., "Join schools already running the hive")

The bank lives inside SKILL.md and is intended to grow over time.

## 6. Image generation via Bun.WebView

`Bun.WebView` (Bun ≥ 1.4) is a built-in headless browser: navigate to a local HTML file, then `screenshot()` to PNG.

Mechanism (documented in the skill and demonstrated by the shipped `render.ts`):

1. Write a self-contained styled HTML art file (inline CSS, exact viewport size) with the brand palette, headline, CTA.
2. In a Bun script:
   ```ts
   await using view = new Bun.WebView({ width: 1200, height: 630 });
   await view.navigate("file://<abs-path>/art.html");
   await Bun.write(outPath, await view.screenshot({ format: "png" }));
   ```
3. Run with `bun render.ts <art.html> <out.png> <width> <height>`.

Runtime requirements (documented, non-blocking for authoring):
- Bun ≥ 1.4 installed (`Bun.WebView`).
- On Linux (this environment), a Chrome/Chromium/Edge binary is required (searched via `$PATH` / standard locations / `BUN_CHROME_PATH`); on macOS the system WebKit is used with nothing to install.
- Neither Bun nor Chrome is currently installed in this environment; the skill documents install commands (curl Bun installer; apt chromium) and generation happens at run time.

Sizes:
- Email hero: 1200×630 (OG-style banner).
- Instagram post: 1080×1080.
- Instagram story: 1080×1920 (optional).

## 7. Template structures

### Email skeleton (HTML, principal audience)
1. Preheader text.
2. Header: SkooBee wordmark + honey accent bar.
3. Hero: headline (curiosity + value), hero PNG banner (Bun.WebView generated).
4. Body: 1 pain line → 1 solution line → 3 feature cards → social proof line.
5. CTA button: "Book a demo" → https://skoobee.vidhiworks.com/contact.
6. P.S. line (urgency / seasonal hook).
7. Footer: contact.skoobee@vidhiworks.com, Vidhiworks · Mumbai, unsubscribe note.

### Instagram skeleton (parent-facing)
1. Post caption: hook line → 2–3 short paras → CTA → 10–15 hashtags.
2. Carousel: 4–6 slides, each with slide copy.
3. Story: 3–4 frames with text + CTA sticker.
4. Reel: 20–30s hook script + on-screen text.
5. Square post visual (Bun.WebView PNG).

## 8. Sample output pack (first run)

`/marketing/2026-08-28-school-operations-hive/`:
- `email-welcome-to-hive.html`
- `email-hero.png` (Bun.WebView)
- `instagram-pack.md`
- `ig-post.png` (Bun.WebView)
- `render.ts` (reusable script; also copied into the skill dir)
- `README.md` (pack contents + how to re-render images)

## 9. Out of scope (YAGNI)
- Email delivery / ESP integration (plain HTML only).
- Scheduling social posts.
- Localization beyond English.
- A/B copy variants beyond subject-line options.

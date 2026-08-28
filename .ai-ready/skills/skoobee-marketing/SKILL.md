---
name: skoobee-marketing
description: Generate SkooBee marketing email templates and Instagram post packs on demand. Captures goal, picks from a topic/subject-line bank, drafts copy for school leadership (email) and parent-facing (Instagram), renders branded PNG visuals via Bun.WebView, and saves the pack under /marketing/. Reuse for every new campaign — new subject lines, new hooks, new seasonal angles.
---

# SkooBee Marketing Templates

Generate a ready-to-send SkooBee marketing email template + an Instagram post pack (caption, hashtags, story, reels, carousel, post visual) and save it under `/marketing/YYYY-MM-DD-<slug>/`.

## Purpose

Every time the team says "generate another SkooBee marketing template" (or asks for an email template, Instagram post, subject lines, social hooks), run this skill instead of re-inventing the brand. It locks the brand facts, provides a topic/subject-line bank, and renders the template images automatically with `Bun.WebView`.

## Brand reference (do not deviate)

- **Product**: SkooBee — AI-powered school ERP / operating system. Built by Vidhiworks.
- **Website / CTA domain**: `skoobee.in` (use for all demo/book links, e.g. `https://skoobee.in/contact`).
- **Tagline**: "School ERP in your pocket."
- **Constant icon lockup**: EVERY generated image must include the SkooBee brand lockup — the mark icon (rounded navy square with honey "S" stroke and honey dot, from `assets/skoobee-mark.svg` or the inline SVG in the art templates) next to the "SkooBee" wordmark with tagline "School ERP in your pocket". Use the exact same lockup in every image generation. On Instagram add the handle `@skoobee` on the opposite side of the header.
- **Modules**: Attendance (3-second voice roll call; saves ~30 min per teacher per day; instant parent absence alerts), Fees (auto-reminders, digital ledgers), Results (visual report cards with AI comments), Auto reports, Payroll, Schedules, Oppa AI learning assistant (upload your textbooks → chat with them).
- **Value props**: one source of truth for every team; clear workflows for every role; more focus on student outcomes; free for teachers every day.
- **Pricing**: one plan, per student per month, custom quote; no per-module add-ons.
- **CTA**: "Book a demo" → `https://skoobee.in/contact`. Email `contact@skoobee.in`.
- **Partner program**: Bee-Bud — a "honey drop" every month per school brought in.
- **Tone**: calm, dependable, warm, friendly. Bee/hive/honey motif. No ALL-CAPS screaming, no hype. Confident and understated.
- **Palette**: navy ink `#0d0e1a`, honey accent `#ffc93c`, indigo primary `#4a3aff`, muted text `#5e6377`, light bg `#f7f7fa`, border `#e3e3ea`.
- **Typography**: Inter / Helvetica / Arial; uppercase mono labels for eyebrows/section labels.

## Audiences

| Channel | Audience | Angle |
|---|---|---|
| Email | School leadership (principal, owner, director, admin) | Admin burden, fee collection, control, staff hours, parent satisfaction |
| Instagram | Broader + parent-facing | Teacher relief, parent peace of mind, student outcomes, emotional hooks |

## Workflow (task list)

Follow these steps in order for every generation:

1. **Capture the goal.** Ask (or infer): channel (email / Instagram / both), audience (leadership / parent), theme or event (seasonal, module spotlight, feature launch), any specific school name to personalize. Default: both channels.
2. **Pick topics.** Select 1–2 topics from the Topic & subject-line bank below, or accept a custom theme from the user.
3. **Draft the copy.**
   - Email: 3 subject-line options + preheader + headline + body (pain → solution → 3 feature points → proof) + CTA + P.S. + footer.
   - Instagram: caption (hook → 2–3 short paras → CTA) + 10–15 hashtags + story frames + reels hook + carousel slide copy.
4. **Render the visuals** with `Bun.WebView` (see Image generation below): email hero banner (1200×630) and Instagram square post (1080×1080). Optional story 1080×1920.
5. **Save the pack** to `/marketing/YYYY-MM-DD-<slug>/`:
   - `email-<slug>.html`
   - `email-hero.png`
   - `instagram-pack.md`
   - `ig-post.png`
   - `README.md` (pack contents + how to re-render images)
6. **Validate** every line against the brand reference: correct facts, working links, `contact@skoobee.in`, brand tone, exact hex colors. Fix anything off-brand.

## Topic & subject-line bank

Seed set — reuse, remix, and grow. Each topic ships an email subject line + an IG hook.

### Attendance / teacher time
- Email: "Give your teachers 30 minutes back every day"
- IG: "POV: roll call just took 3 seconds"
- Email: "Your staff don't clock out. Your ERP should help."
- IG: "Teachers didn't sign up to be data entry clerks."

### Fees & collections
- Email: "Fee collections that stop chasing themselves"
- IG: "The fee chase ends today."
- Email: "Every pending fee, tracked. Every parent, reminded."
- IG: "Your accountant's new favourite app."

### AI / Oppa
- Email: "Turn every textbook in your school into a teacher"
- IG: "Your books, your AI tutor."
- Email: "Oppa already knows the syllabus. Your students can ask it anything."
- IG: "Homework help that stays on-syllabus."

### Parent communication
- Email: "Parents actually opened the app. Here's why."
- IG: "Absent? Parents know in seconds, not days."
- Email: "One daily update that parents look forward to"
- IG: "The parent app that parents actually open."

### Report cards & results
- Email: "What if report cards wrote themselves?"
- IG: "AI report card comments. Teachers stay teachers."
- Email: "Results week, without the all-nighter"
- IG: "Results week just got calm."

### Operations / admin calm
- Email: "One dashboard. Every department. Zero spreadsheet chaos."
- IG: "One source of truth. No more duplicate ledgers."
- Email: "The school ERP that runs quietly in the background"
- IG: "When admin runs quietly, teaching gets louder."

### Seasonal
- New academic year: "A fresh year. A fresh operating system for your school."
- Exam season: "Exam season survival, for the office too"
- Admissions season: "Admissions season without the spreadsheet pile-up"
- Fee payment window: "Fee season made painless for parents and office alike"

### Social proof / Bee-Bud
- Email: "Join schools already running the hive"
- IG: "The hive is growing. Your school could be next."
- Email: "Earn a honey drop every month with Bee-Bud"
- IG: "Turn school referrals into a monthly honey drop."

## Template structures

### Email (HTML, school leadership)
1. Preheader text.
2. Header: SkooBee wordmark + honey accent bar.
3. Hero: curiosity/value headline + `email-hero.png` banner — wrap the `<img>` in `<a href="https://skoobee.in/contact">` so the image itself is clickable (a PNG carries no link; the surrounding HTML does).
4. Body: pain line → solution line → 3 feature cards → proof line.
5. CTA button "Book a demo" → `https://skoobee.in/contact`.
6. P.S. line (urgency / seasonal hook).
7. Footer: `contact@skoobee.in` · Vidhiworks · unsubscribe note.

Style the HTML like the existing repo templates (`lib/emailTemplates.ts`): `#f7f7fa` outer bg, white 600px card, `#0d0e1a` header, honey `#ffc93c` top bar, indigo `#4a3aff` CTA.

### Instagram (parent-facing)
- **Caption**: hook line → 2–3 short paras → CTA ("Book a demo → skoobee.in/contact") → 10–15 hashtags.
- **Carousel**: 4–6 slides; each slide = one headline + one supporting line (brand palette).
- **Story**: 3–4 frames; text + "Book a demo" CTA sticker.
- **Reel**: 20–30s script; opening hook, 3 quick beats, CTA. Include on-screen text suggestions.
- **Post visual**: `ig-post.png`, 1080×1080 (Bun.WebView rendered).

## Image generation via Bun.WebView

`Bun.WebView` is a built-in headless browser (Bun ≥ 1.4). It loads a local HTML file and screenshots it to PNG — no Puppeteer/Playwright.

Reusable script shipped in this skill: `render.ts`.

**Every art file MUST include the constant SkooBee icon lockup** (mark icon + "SkooBee" wordmark + tagline) in the header — copy the inline SVG block from the sample art templates (`marketing/2026-08-28-school-operations-hive/*-art.html`) so the icon stays identical across all generations. Instagram art adds the `@skoobee` handle in the header too. The "Book a demo" CTA button must be a real link: `<a class="btn" href="https://skoobee.in">Book a demo</a>`.

```bash
# Usage
bun render.ts <art.html> <out.png> <width> <height>
```

Example art-flow for one image:
1. Write a self-contained HTML art file: inline CSS, exact `width`/`height` on a wrapper `<div>`, brand palette, headline + CTA.
2. Run `bun render.ts art.html out.png 1200 630` (in root/container environments set `CHROME_PATH=/usr/bin/chromium`).
3. `render.ts` (shipped in this skill) does:
   ```ts
   await using view = new Bun.WebView({ width, height }); // + chrome backend when CHROME_PATH set
   await view.navigate(`file://${resolve(htmlPath)}`);
   await Bun.write(resolve(outPath), await view.screenshot({ format: "png" }));
   ```

Sizes:
- Email hero: 1200×630
- Instagram post: 1080×1080
- Instagram story: 1080×1920

### Runtime requirements
- **Bun ≥ 1.4** (provides `Bun.WebView`). Install: `curl -fsSL https://bun.sh/install | bash` (then restart shell or use full path `~/.bun/bin/bun`).
- **Linux**: needs a Chrome-family binary on `$PATH` or via `BUN_CHROME_PATH` / `CHROME_PATH` (`google-chrome-stable`, `chromium-browser`, `chromium`, `brave-browser`, `microsoft-edge`). Install: `apt-get install -y chromium` (Debian) or `chromium-browser` (Ubuntu). macOS uses system WebKit — nothing to install.
- **Root / containers**: Chromium refuses to start as root without `--no-sandbox`. `render.ts` passes `--no-sandbox` automatically when a `CHROME_PATH`/`BUN_CHROME_PATH` is set (set it to `CHROME_PATH=/usr/bin/chromium`). Set `NO_SANDBOX=0` to disable.
- Verify: `bun --version` prints ≥ 1.4, and `which chromium chromium-browser google-chrome-stable` finds something (Linux).
- If Bun or Chrome is missing, install them first (unattended), then re-run the render step.

## Example output layout

```
marketing/2026-08-28-school-operations-hive/
├── README.md
├── email-school-operations-hive.html
├── email-hero.png
├── instagram-pack.md
├── ig-post.png
└── render.ts
```

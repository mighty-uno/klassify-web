# SkooBee Marketing Pack — School Operations / "Join the Hive"

Date: 2026-08-28
Topic: Give every school team one calm system (attendance spotlight)
Audience: Email → school leadership · Instagram → parent-facing

## What's in this pack

| File | Description |
|---|---|
| `email-school-operations-hive.html` | Copy-paste-ready HTML email (principal audience) |
| `email-hero.png` | Email hero banner (1200×630) |
| `instagram-pack.md` | Post caption + hashtags, carousel, story, reel script |
| `ig-post.png` | Instagram square post visual (1080×1080) |
| `render.ts` | Reusable Bun.WebView render script (same as the skill's) |
| `email-hero-art.html` | Source art for the email banner |
| `ig-post-art.html` | Source art for the IG post |
| `skoobee-icon.png` | Official SkooBee bee icon (brand lockup, same in every image) |

## Email subject-line options

1. Give your teachers 30 minutes back every day
2. One dashboard. Every department. Zero spreadsheet chaos.
3. Your school already has the people. Give them one calm system.

## How to re-render the images

Requires Bun ≥ 1.4 (provides `Bun.WebView`) and, on Linux, a Chrome-family browser.

```bash
# Install bun (once)
curl -fsSL https://bun.sh/install | bash

# Render images (set CHROME_PATH in root/container environments)
CHROME_PATH=/usr/bin/chromium bun render.ts email-hero-art.html email-hero.png 1200 630
CHROME_PATH=/usr/bin/chromium bun render.ts ig-post-art.html ig-post.png 1080 1080
```

Edit the `*-art.html` files to change headline, copy, or colors, then re-run the matching render command.

## Contact / CTA

- Book a demo: https://skoobee.in/contact
- Email: contact@skoobee.in
- Brand palette: navy #0d0e1a · honey #ffc93c · indigo #4a3aff

## Regenerate a fresh pack

Ask for another pack (new topic, subject lines, and visuals) and the `skoobee-marketing` skill will produce one under `marketing/`.

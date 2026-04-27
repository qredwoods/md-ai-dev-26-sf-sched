# AI Dev 26 x SF — Schedule, in Markdown
A repo to help you and your agent to discuss this AI Dev conference. Claude couldn't get schedule details from the official [AI Dev 26 SF](https://ai-dev.deeplearning.ai/) schedule, as it loads via JS. So I had Claude iteratively generate a Playwright-based scraper that clicks all the dropdowns and generates a single flat markdown file, until it was satisfied.

## What's here

- [`schedule.md`](./schedule.md) — the conference schedule, rendered as Markdown
- [`scrape.cjs`](./scrape.cjs) — Playwright script that produced it
- [`conference-sponsors.md`](./conference-sponsors.md) — sponsor list, derived from a screenshot (see below)

## Run the scraper

```bash
npm install
npx playwright install chromium
npm run scrape
```

Flags:
- `npm run scrape:debug` — also writes raw extracted data to `schedule.raw.json`
- `npm run scrape:headed` — runs Chromium with a visible window

## How `conference-sponsors.md` was made

The sponsor list contains helpful information, but in this simple repo I decided to just generate it once from the screenshot of the logos, and the logo grid is easier to screenshot than to scrape. So I took a screenshot of the sponsor section and asked Claude to read it ala "Convert this to markdown" - you may wish to include "do not make up tiers or sponsor levels" - it hallucinated Gold / Silver / Startup tiers.

## Caveats

- Scrapers age out. `schedule.md`'s header has the scrape timestamp; if the conference site has changed since, this script may break.
- Row grouping in `conference-sponsors.md` reflects logo size in the source image (bigger logo = larger row).
- This is a one-time artifact for this specific event. Generic site-to-Markdown tools exist (Firecrawl); for an accordion-gated single-page schedule and a 30-minute window, a 230-line script was the more fun path.

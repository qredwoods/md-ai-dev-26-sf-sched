# AI Dev 26 x SF — Schedule, in Markdown

[Markdown Schedule](./schedule.md) to help attendees and their agents prepare for [AI Dev 26 SF](https://ai-dev.deeplearning.ai/), April 28-29, 2026. 

Problem: The original schedule loads via heavy JS interaction, which can lead AI agents to say there is no schedule posted or hallucinate. 

Solution: I had Claude Opus 4.7 iteratively generate a Playwright-based scraper that clicks all the description expansions and generates a single flat markdown file. It generates the schedule here in one run. A GitHub Action written by Claude will run before and during the conference to ensure the schedule is up to date.

## What's here

- [`schedule.md`](./schedule.md) — the conference schedule, rendered as Markdown
- [`scrape.cjs`](./scrape.cjs) — Playwright script that produces it
- [`conference-sponsors.md`](./conference-sponsors.md) — generated once from a screenshot of sponsor logo list.
- [`watch-schedule.yaml`](./github/watch-schedule.yaml) - GitHub Action, commits if schedule content changes. 

## Run the scraper

```bash
npm install
npx playwright install chromium
npm run scrape
```

Flags:
- `npm run scrape:debug` — also writes raw extracted data to `schedule.raw.json`
- `npm run scrape:headed` — runs Chromium with a visible window


## Notes

- **Freshness**: Before and during the conference, from Mon Apr 27 6am PT through Wed Apr 29 6pm PT, a GitHub Action re-runs the scraper. If the schedule changes (it may not), it [commits to `schedule.md`](https://github.com/qredwoods/md-ai-dev-26-sf-sched/commits/main/schedule.md).
- If the conference site structurally changes, this script may break.
- This is a one-time artifact for this specific event. Generic site-to-Markdown tools exist (Firecrawl); for an accordion-gated single-page schedule and a 30-minute window, a 230-line script was more fun, in flow, and on theme.

## Author 
I'm Quinn Redwoods, a CS student, career changer, internship seeker, contemplator and explorer of AI. Hope to see you at the conference! Feel free say hi via my [site](https://qredwoods.com) or [LinkedIn](https://linkedin.com/in/qredwoods) an 

#!/usr/bin/env node
// Scrapes https://ai-dev.deeplearning.ai/ schedule (loaded via JS) and writes schedule.md.
//
// Setup:
//   npm install
//   npx playwright install chromium
// Run:
//   node scrape.cjs
// Flags:
//   --headed   open a visible browser (helpful for tuning)
//   --debug    dump raw extracted JSON next to the markdown

const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');

const URL = 'https://ai-dev.deeplearning.ai/';
const OUT_MD = path.join(__dirname, 'schedule.md');
const OUT_JSON = path.join(__dirname, 'schedule.raw.json');

const HEADED = process.argv.includes('--headed');
const DEBUG = process.argv.includes('--debug');

const TIME_RE_BODY = String.raw`\d{1,2}:\d{2}\s*(?:AM|PM)\s*[-–]\s*\d{1,2}:\d{2}\s*(?:AM|PM)`;

(async () => {
  const browser = await chromium.launch({ headless: !HEADED });
  const page = await browser.newContext({ viewport: { width: 1600, height: 1000 } }).then(c => c.newPage());

  console.log('→ loading', URL);
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });

  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y);
      await new Promise(r => setTimeout(r, 100));
    }
    window.scrollTo(0, 0);
  });

  await page.waitForFunction((re) => new RegExp(re, 'i').test(document.body.innerText), TIME_RE_BODY, { timeout: 30000 });

  // Step 1: locate every card wrapper and its chevron button. Card = outermost element whose
  // innerText contains exactly one time pattern AND starts with that time.
  const cardCount = await page.evaluate((reBody) => {
    // Two forms of the regex: ^anchored for "starts with time" checks, /g for counting matches.
    // Can't combine them — /^.../g only matches string start, so the count is always ≤ 1.
    const startRE = new RegExp('^' + reBody, 'i');
    const globalRE = new RegExp(reBody, 'gi');
    const all = Array.from(document.querySelectorAll('*'));
    const cands = [];
    for (const el of all) {
      const t = (el.innerText || '').trim();
      if (!startRE.test(t)) continue;
      if ((t.match(globalRE) || []).length !== 1) continue;
      cands.push(el);
    }
    const drop = new Set();
    for (let i = 0; i < cands.length; i++) {
      for (let j = 0; j < cands.length; j++) {
        if (i === j) continue;
        if (cands[j].contains(cands[i]) && cands[j] !== cands[i]) { drop.add(i); break; }
      }
    }
    window.__cards = cands.filter((_, i) => !drop.has(i));
    return window.__cards.length;
  }, TIME_RE_BODY);
  console.log(`→ found ${cardCount} cards`);

  // Step 2: expand each card and capture its text immediately. The cards are accordion-style —
  // clicking the next card collapses this one — so we MUST read text inside the same evaluate
  // call as the click. Reading after the loop would only see whichever card was opened last.
  console.log('→ expanding cards');
  const cardTexts = [];
  let expanded = 0;
  for (let i = 0; i < cardCount; i++) {
    const result = await page.evaluate(async (idx) => {
      const card = window.__cards[idx];
      if (!card) return null;
      // Find a cursor-pointer descendant or the card itself.
      let target = card;
      try {
        if (getComputedStyle(card).cursor !== 'pointer') {
          const inner = Array.from(card.querySelectorAll('*'))
            .find(d => getComputedStyle(d).cursor === 'pointer');
          if (inner) target = inner;
        }
      } catch {}
      target.scrollIntoView({ block: 'center', behavior: 'instant' });
      const before = (card.innerText || '').length;
      target.click();
      await new Promise(r => setTimeout(r, 200));
      const r = card.getBoundingClientRect();
      const text = (card.innerText || '').trim();
      return {
        x: Math.round(r.left + r.width / 2),
        y: Math.round(r.top + window.scrollY),
        w: Math.round(r.width),
        text,
        grew: text.length > before + 20,
      };
    }, i);
    if (result) {
      cardTexts.push(result);
      if (result.grew) expanded++;
    }
  }
  console.log(`  → ${expanded}/${cardCount} cards expanded with new content`);

  // Step 3: extract headers + stage labels (cards are already captured above).
  const auxData = await page.evaluate((reBody) => {

    // Stage labels (e.g., "Stage 1\nNext-Gen Tools").
    const stages = [];
    document.querySelectorAll('*').forEach(el => {
      const t = (el.innerText || '').trim();
      if (!t || t.length > 80) return;
      if (!/^Stage\s*\d\b/i.test(t)) return;
      if ([...el.children].some(c => /^Stage\s*\d\b/i.test((c.innerText || '').trim()))) return;
      const r = el.getBoundingClientRect();
      stages.push({
        x: Math.round(r.left + r.width / 2),
        y: Math.round(r.top + window.scrollY),
        name: t.split('\n')[0].trim(),
        theme: t.split('\n').slice(1).join(' ').trim(),
      });
    });

    // Section headers: lines like "April 28", "April 29", "Day 1", "Breakout Sessions ...", "Lunch", etc.
    // Catch any prominent heading-ish element near the schedule.
    const headers = [];
    const headerRE = /^(April\s*2[89]|Apr\s*2[89]|Day\s*[12]\s*[—\-–:]|Tuesday\b|Wednesday\b|Breakout Sessions[^\n]*)/i;
    document.querySelectorAll('h1,h2,h3,h4,h5,h6,p,span,div').forEach(el => {
      const t = (el.innerText || '').trim();
      if (!t || t.length > 120) return;
      const firstLine = t.split('\n')[0].trim();
      if (!headerRE.test(firstLine)) return;
      // only leaves
      if ([...el.children].some(c => (c.innerText || '').trim() === t)) return;
      const r = el.getBoundingClientRect();
      headers.push({ y: Math.round(r.top + window.scrollY), x: Math.round(r.left + r.width / 2), text: firstLine });
    });

    return { stages, headers };
  }, TIME_RE_BODY);

  const data = { cards: cardTexts, stages: auxData.stages, headers: auxData.headers };

  // Drop cards whose text has no newlines — those come from a compact rendering elsewhere on the page.
  data.cards = data.cards.filter(c => c.text.includes('\n'));

  // Dedupe by (y, first 80 chars).
  const seenCards = new Set();
  data.cards = data.cards.filter(c => {
    const k = `${c.y}|${c.text.slice(0, 80)}`;
    if (seenCards.has(k)) return false;
    seenCards.add(k);
    return true;
  });

  // Dedupe headers by text+y bucket.
  const seenH = new Set();
  data.headers = data.headers.filter(h => {
    const k = `${Math.round(h.y / 30)}|${h.text.toLowerCase()}`;
    if (seenH.has(k)) return false;
    seenH.add(k);
    return true;
  }).sort((a, b) => a.y - b.y);

  if (DEBUG) fs.writeFileSync(OUT_JSON, JSON.stringify(data, null, 2));

  // Group cards into rows by y-bucket. Cards rendered within ~40px of each other vertically
  // are parallel tracks across stages at the same time slot; we'll split them by x-position
  // (left-to-right) and match each to the nearest stage label below.
  const sortedCards = [...data.cards].sort((a, b) => a.y - b.y || a.x - b.x);
  const rows = [];
  for (const c of sortedCards) {
    const last = rows[rows.length - 1];
    if (last && Math.abs(c.y - last.y) < 40) {
      last.cards.push(c);
      last.y = (last.y * (last.cards.length - 1) + c.y) / last.cards.length;
    } else {
      rows.push({ y: c.y, cards: [c] });
    }
  }

  // For multi-card rows, label each card with the closest stage at similar y.
  for (const row of rows) {
    if (row.cards.length < 2) continue;
    const nearStages = data.stages
      .filter(s => s.y < row.y && row.y - s.y < 800)
      .sort((a, b) => (row.y - a.y) - (row.y - b.y));
    const stagesByX = nearStages.length
      ? Array.from(new Map(nearStages.map(s => [s.name, s])).values()).sort((a, b) => a.x - b.x)
      : [];
    for (const c of row.cards) {
      if (!stagesByX.length) continue;
      let best = stagesByX[0], bd = Math.abs(c.x - best.x);
      for (const s of stagesByX) {
        const d = Math.abs(c.x - s.x);
        if (d < bd) { best = s; bd = d; }
      }
      c.stage = best.name;
      c.theme = best.theme;
    }
  }

  // Render markdown by walking rows + headers in y-order.
  const items = [];
  for (const r of rows) items.push({ y: r.y, type: 'row', row: r });
  for (const h of data.headers) items.push({ y: h.y, type: 'header', header: h });
  items.sort((a, b) => a.y - b.y);

  let md = `# AI Dev 26 x SF — Schedule\n\n_Scraped from ${URL}_\n\n`;
  let lastHeaderText = '';
  for (const it of items) {
    if (it.type === 'header') {
      if (it.header.text === lastHeaderText) continue;
      lastHeaderText = it.header.text;
      const lvl = /April|Day\s*\d|Tuesday|Wednesday/i.test(it.header.text) ? '##' : '###';
      md += `\n${lvl} ${it.header.text}\n\n`;
    } else {
      const r = it.row;
      if (r.cards.length === 1) {
        md += renderCard(r.cards[0], false);
      } else {
        for (const c of r.cards) md += renderCard(c, true);
      }
      md += '\n';
    }
  }

  fs.writeFileSync(OUT_MD, md);
  console.log(`✓ wrote ${OUT_MD}`);
  if (DEBUG) console.log(`✓ wrote ${OUT_JSON}`);

  await browser.close();
})().catch(e => { console.error(e); process.exit(1); });

function renderCard(c, multi) {
  // Raw shape: "<time>\n<duration?>\n<title>\n<Name>\n\n<Company>\n\n<Name>\n\n<Company>\n\n[<Role>\n\n]<description?>"
  const lines = c.text.split('\n').map(l => l.trim()).filter(Boolean); // drop blank lines
  const time = lines[0] || '';
  let i = 1;
  let duration = '';
  if (/^\d+\s*MIN$/i.test(lines[i] || '')) { duration = lines[i]; i++; }
  const title = lines[i++] || '';

  // Remaining lines are speakers (alternating Name/Company, sometimes with a "Moderator" role)
  // followed by an optional description (a single long sentence/paragraph).
  // Heuristic: a line is "description" if it's longer than 100 chars OR contains sentence punctuation.
  const isDescLine = (l) => l.length > 100 || /[.?!] /.test(l);

  const beforeDesc = [];
  const descLines = [];
  let inDesc = false;
  for (; i < lines.length; i++) {
    if (!inDesc && isDescLine(lines[i])) inDesc = true;
    (inDesc ? descLines : beforeDesc).push(lines[i]);
  }

  // Pair speakers: (Name, Company), with optional "Moderator" role attached to the previous pair.
  const speakers = [];
  for (let j = 0; j < beforeDesc.length; ) {
    const name = beforeDesc[j++];
    const company = beforeDesc[j++] || '';
    const role = (beforeDesc[j] && /^(Moderator|Host|MC)$/i.test(beforeDesc[j])) ? beforeDesc[j++] : '';
    speakers.push({ name, company, role });
  }

  let out = `**${time}**`;
  if (duration) out += ` · ${duration.toLowerCase()}`;
  if (multi && c.stage) out += ` · _${c.stage}${c.theme ? ' — ' + c.theme : ''}_`;
  out += `  \n`;
  if (title) out += `${title}\n`;
  if (speakers.length) {
    const fmt = speakers.map(s => {
      let r = s.name;
      if (s.company) r += ` (${s.company}${s.role ? `, ${s.role}` : ''})`;
      else if (s.role) r += ` (${s.role})`;
      return r;
    });
    out += `_${fmt.join(', ')}_\n`;
  }
  if (descLines.length) out += `\n${descLines.join(' ').trim()}\n`;
  return out + '\n';
}

# Allana Foster-Finley — Personal Site

Three-page static site: **Bio** (`index.html`), **CUR8AFRICA** (`cur8africa.html`),
**VisaDiva.Global** (`visadiva.html`). No build step — open `index.html` or serve the
folder with any static server.

## Before going live: replace the placeholders

| What | Where | Currently |
|---|---|---|
| Consultation booking link | `visadiva.html` hero button (see PLACEHOLDER comment) — point at Calendly etc. | Scrolls to the form |

Done: email (`info@allanafosterfinley.com`), WhatsApp (`+27 78 870 1417`), Instagram
and LinkedIn (`@allanafosterfinley`), studio headshot in the Bio hero, candid photos
(Michelle Obama, ALU graduation) in the Bio sidebar, and the official CUR8AFRICA
logo (`assets/brand/cur8africa-logo.jpg`, displayed via CSS blend modes so it works
on both light and dark themes).

## Content notes

- Bio text is transcribed from the official one-pager.
- Artwork images live in `assets/art/<artist>/` (downloaded from the shared Google
  Drive folder, resized to max 1600px for the web).
- Michael Selekane titles/years/editions come from the inventory document in his
  Drive folder. Prices were intentionally **not** published — the lightbox invites
  collectors to enquire instead.
- The consultation form has no backend: it validates, then opens a pre-filled email.
  Swap in Formspree/Netlify Forms later if server-side handling is wanted.

## Door intro

The Bio page opens behind a pair of doors ("I exist to open doors"). Click, tap, or
press Enter to open them. It shows once per browser session and is skipped entirely
for visitors with reduced-motion enabled... they get a simple fade.

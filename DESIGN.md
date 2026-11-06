# Design: Página de Mercados

The portfolio is printed as the markets page of a business daily. Every achievement is a quoted figure with its ▲▼ change. Brief: `.impeccable/surfaces/page-tsx.md`.

## Tokens (`app/globals.css`)

| Token | Day | Night | Use |
|---|---|---|---|
| `--background` | newsprint `39 41% 93%` | `30 6% 7%` | page ground |
| `--foreground` | ink `0 0% 8%` | `40 31% 89%` | text, rules |
| `--paper-2` | `40 32% 88%` | `30 5% 11%` | ticker, table stripes |
| `--muted-foreground` | `37 9% 32%` | `38 10% 66%` | datelines, captions |
| `--border` | `37 12% 74%` | `30 5% 26%` | hairline column rules |
| `--gain` / `--loss` | green / red | lighter pair | **deltas only**, always next to ▲▼ |

Day edition is the default (`defaultTheme="light"`); night is opt-in from the masthead.

## Type (`app/layout.tsx`)

- **Bodoni Moda** (`font-display`): headlines only.
- **Libre Franklin** (`font-sans`): figures, tables, controls, datelines. Use tabular numbers for figures.
- **Source Serif 4** (`font-serif`): body copy.

## Rules

- Square corners, no shadows, no gradients. A rule (border) does the work of elevation.
- One ink color. Green and red appear only on deltas.
- Motion: indicator figures count up once on load, ledger rows expand (`<details>`), project images zoom slightly on hover, and the modal fades in. Nothing else moves, and `prefers-reduced-motion` turns all of it off.
- Contact (email, copy, LinkedIn, CV) shows in the first viewport and again at the end. Never put a fake form here.
- All copy comes from `app/i18n.tsx` (ES/EN) and `app/data/*.json`. Every figure must trace back to `experience.json`.

## Rasters

- `public/assets/user-profile.jpg`: the owner's photo.
- `public/assets/projects/**`: real screenshots of the owner's projects.
- `app/icon.svg`: a hand-written "JT" monogram on newsprint.

# Design: Impact sheet

A sober portfolio built around measured impact. The first screen shows a plain headline with a real figure, an impact table with sources, and the contact box. It grew out of the "Página de Mercados" concept (`.impeccable/surfaces/page-tsx.md`) and keeps its structure without the newspaper styling. The previous classic design is tagged `v1-clasico`.

## Tokens (`app/globals.css`)

| Token | Light | Dark | Use |
|---|---|---|---|
| `--background` | `0 0% 99%` | `222 22% 7%` | page ground |
| `--foreground` | ink `222 40% 10%` | `210 20% 94%` | text, rules |
| `--paper-2` | `220 16% 95%` | `222 16% 11%` | image wells, stripes |
| `--muted-foreground` | `220 9% 38%` | `218 11% 66%` | captions, labels |
| `--border` | `220 13% 86%` | `220 10% 22%` | hairline rules |
| `--gain` / `--loss` | green / red | lighter pair | **deltas only**, always next to ▲▼ |

Light is the default; dark is opt-in from the header.

## Type (`app/layout.tsx`)

- **Inter Tight** (`font-display`): headlines, tight tracking, 700 to 800.
- **Inter** (`font-sans`, and `font-serif` maps to it too): body, tables, controls. Use tabular numbers for figures (`.num`).

## Rules

- Square corners, no shadows, no gradients. A rule (border) does the work of elevation.
- One ink color. Green and red appear only on deltas.
- Plain labels: Experience, Projects, Stack, Measured impact. No metaphors a recruiter has to decode.
- Motion: indicator figures count up once on load, experience rows expand (`<details>`), project images zoom slightly on hover, and the modal fades in. `prefers-reduced-motion` turns all of it off.
- Contact (email, copy, LinkedIn, CV) shows in the first viewport and again at the end. Never put a fake form here.
- Language: the server picks it from the `lang` cookie (saved by the switch), then the browser's `Accept-Language`, then English (`app/seo.ts`). Title, description and `<html lang>` follow it.
- All copy comes from `app/i18n.tsx` (ES/EN) and `app/data/*.json`. Every figure must trace back to `experience.json`.

## Rasters

- `public/assets/user-profile.jpg`: the owner's photo.
- `public/assets/projects/**`: real screenshots of the owner's projects.
- `app/icon.svg`: a hand-written "JT" monogram.

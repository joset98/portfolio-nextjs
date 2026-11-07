# Jose Tovar · Portfolio

Personal portfolio of Jose Miguel Tovar, Fullstack Software Engineer. Single page, bilingual (ES/EN), built around measured impact.

**Stack:** Next.js 14 (App Router) · React 18 · TypeScript · Tailwind CSS · next-themes · Playwright

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run test:e2e   # builds, starts on :3100 and runs the Playwright suite
```

## Where things live

| Path | What |
|---|---|
| `app/page.tsx` | the page; `?project=<id>` opens a project's gallery modal |
| `app/i18n.tsx` | ES/EN copy, impact figures, `useLang()` |
| `app/data/*.json` | experience, projects and skills (Spanish); `en.json` holds the English versions |
| `public/assets/` | photo, CV and project screenshots |
| `DESIGN.md` | design tokens and rules |
| `docs/project-readmes/` | README drafts for each project repository |

## Deploy

Set `NEXT_PUBLIC_SITE_URL` to the public domain so social previews resolve the OG image.

The previous design is tagged `v1-clasico`.

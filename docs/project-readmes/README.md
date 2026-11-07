# Project README drafts

One folder per GitHub repository. To publish one:

1. Copy `<repo>/README.md` to the root of that repository.
2. Create `docs/screenshots/` there and copy in the images the README references. They are already in this portfolio:

| Repository | Screenshots in this repo |
|---|---|
| octo-condo-api-engine, octo-condo-manager | `public/assets/projects/condo/` |
| choppi-api-engine, choppi-web-app | `public/assets/projects/choppi/` |
| workspot | `public/assets/projects/workspot/` |
| academic-react | `public/assets/projects/academic/` |
| medic-hmc | `public/assets/projects/medic/` |

3. Fill any `TODO` cell. The HTML comment above each table has the command that measures it, then delete the comment.

## Where the numbers come from

- **Octo-Condo**: measured from the local repositories on 2026-11-06 (endpoint decorators, `*.module.ts`, `*.entity.ts`, `@Roles` guards, `jest --coverage`: 119 tests pass, 58% lines). One suite, `src/common/filters/query-failed.filter.spec.ts`, fails to compile (TS2493 on `mock.calls[0][0]`); fix it before quoting "all tests pass".
- **Everything else**: taken from the project descriptions in `app/data/projects.json` (roles, wizard steps, entities, clients) and the screenshot count. Re-check them against each repo before publishing.

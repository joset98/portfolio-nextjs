# Octo-Condo API Engine

REST API that runs the money side of a condominium: it splits common expenses across units by their ownership share, issues monthly quotas, validates payments and renders PDF receipts in USD and bolívares at the official exchange rate.

Frontend: [octo-condo-manager](https://github.com/joset98/octo-condo-manager)

![Admin dashboard](docs/screenshots/condo_dashboard.PNG)

## By the numbers

| | |
|---|---|
| **58** REST endpoints | across **14** NestJS modules |
| **20** TypeORM entities | PostgreSQL, versioned migrations and seeds |
| **31** role-guarded endpoints | `ADMIN` and `OWNER` scopes via JWT |
| **119** unit tests passing | **58%** line coverage (`npm run test:cov`) |
| **2** currencies per receipt | USD and Bs., rate pulled live from [DolarAPI](https://ve.dolarapi.com) |

## What it does

- **Quota engine.** Prorates common expenses by each unit's aliquot, adds private charges, and generates the whole condominium's monthly quotas in one call.
- **Payments.** Owners report payments; admins validate them; balances update per unit.
- **PDF receipts and reports.** HTML templates rendered to PDF with Puppeteer, so receipts match the web view exactly.
- **Exchange rates.** Fetches the official BCV rate so every amount shows in both currencies, which matters in Venezuela.
- **Security.** JWT auth, bcrypt password hashing, role and permission guards, CORS allow-list, and a filter that turns database errors into clean HTTP responses.

## Stack

NestJS 11 · TypeScript · PostgreSQL · TypeORM · Passport/JWT · Puppeteer · Swagger · Jest

## Architecture

```
src/
├── auth/            JWT login, guards, role decorators
├── condos/ units/ owners/ unitOwners/
├── expenses/        common and private expenses
├── quotas/          quota generation + pdf.service.ts (Puppeteer)
├── payments/        payment reports and validation
├── exchange-rates/  BCV rate client
├── roles/ permissions/ users/
└── common/          database config, migrations, seeds, filters
```

## Run it

```bash
cp .env.example .env          # Postgres credentials, JWT_SECRET_ENCRYPTION, PORT, CORS_ORIGINS
npm install
npm run typeorm:build migration:run
npm run build && npm run seed:run
npm run start:dev             # API on $PORT, Swagger UI at /documentation
npm test                      # unit tests
```

## Author

Jose Miguel Tovar · [Portfolio](https://github.com/joset98/portfolio-nextjs) · [LinkedIn](https://www.linkedin.com/in/jose-miguel-tovar/)

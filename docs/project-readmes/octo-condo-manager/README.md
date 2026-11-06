# Octo-Condo Manager

Web app for running a condominium: admins record expenses and issue every unit's monthly quota in one click; owners check their balance and download PDF receipts.

API: [octo-condo-api-engine](https://github.com/joset98/octo-condo-api-engine)

![Admin dashboard](docs/screenshots/condo_dashboard.PNG)

## By the numbers

| | |
|---|---|
| **2** portals in one app | admin panel and owner portal, split by JWT role |
| **10** routes | per-condo dashboard, units, owners, expenses, quotas, payments, plus auth |
| **1 click** | generates the whole condominium's monthly quotas |
| **58** API endpoints consumed | from a NestJS backend with 119 unit tests |
| **2** currencies | every amount in USD and Bs. at the official rate |

## Features

- **Admin panel:** register condos, units and owners, record common and private expenses, generate quotas, validate reported payments, manage common areas.
- **Owner portal:** account statement, quota breakdown, payment reporting and PDF receipt download.
- **Dashboard:** unit, owner and reservation totals plus pending and overdue quotas at a glance.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS · shadcn/ui (Radix) · React Hook Form · Recharts

## Screenshots

| | |
|---|---|
| ![Add condo](docs/screenshots/condo_add_condo.PNG) | ![Common areas](docs/screenshots/condo_common_areas.PNG) |

## Run it

```bash
cp .env.example .env.local    # NEXT_PUBLIC_API_URL=http://localhost:5000
npm install
npm run dev                   # http://localhost:3000 (start the API first)
```

## Author

Jose Miguel Tovar · [Portfolio](https://github.com/joset98/portfolio-nextjs) · [LinkedIn](https://www.linkedin.com/in/jose-miguel-tovar/)

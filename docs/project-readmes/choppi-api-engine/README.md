# Choppi API Engine

REST API for a multi-store marketplace: stores, products, stock and orders, with role-based access and self-documenting endpoints.

Web app: [choppi-web-app](https://github.com/joset98/choppi-web-app)

![Admin products](docs/screenshots/choppi_admin_products.PNG)

## By the numbers

<!-- Fill the TODO cells, then delete this comment:
     endpoints:  grep -rhoE "@(Get|Post|Put|Patch|Delete)\(" src | wc -l
     modules:    find src -name "*.module.ts" | wc -l
     tests:      npm test -- --coverage --coverageReporters=text-summary -->

| | |
|---|---|
| **TODO** REST endpoints | across **TODO** NestJS modules, documented in Swagger |
| **2** roles | `ADMIN` and `USER`, enforced with JWT guards |
| **0** tokens in JavaScript | the JWT lives in an HttpOnly cookie behind a Next.js proxy |
| **TODO** unit tests | **TODO**% coverage |

## What it does

- **Catalog:** stores and their products, with stock tracked per product.
- **Admin CRUD:** protected endpoints for managing stores and products.
- **Auth:** registration and login with bcrypt-hashed passwords, JWT via Passport, role guards on every write.
- **Docs:** Swagger generated from the controllers and DTOs.

## Stack

NestJS · TypeScript · PostgreSQL · TypeORM · Passport/JWT · bcrypt · Swagger

## Run it

```bash
cp .env.example .env    # Postgres credentials and JWT secret
npm install
npm run start:dev       # Swagger UI is served by the API
npm test
```

## Author

Jose Miguel Tovar · [Portfolio](https://github.com/joset98/portfolio-nextjs) · [LinkedIn](https://www.linkedin.com/in/jose-miguel-tovar/)

# Choppi Web App

Storefront and admin panel for a multi-store marketplace. Shoppers browse stores, fill a cart that recalculates price and stock live, and check out; admins manage stores and products.

API: [choppi-api-engine](https://github.com/joset98/choppi-api-engine)

![Landing](docs/screenshots/choppi_landing.PNG)

## By the numbers

| | |
|---|---|
| **2** experiences in one app | public storefront and protected admin panel |
| **0** tokens readable by JS | auth goes through Next.js API routes that set an HttpOnly cookie |
| **Schema-validated** forms | React Hook Form + Zod, the same rules on every input |
| **Live** cart totals | price and stock recalculated on every change, persisted across reloads |

## Features

- **Storefront:** store list, products per store, cart with persistent state.
- **Admin panel:** create and edit stores and products, protected by role.
- **Secure by design:** the browser never talks to the API directly; a proxy layer in API routes forwards requests with the cookie.

## Stack

Next.js (App Router, SSR + CSR) · React · TypeScript · Tailwind CSS · shadcn/ui · React Context · React Hook Form · Zod

## Screenshots

| | |
|---|---|
| ![Stores](docs/screenshots/choppi_shops.PNG) | ![Cart](docs/screenshots/choppi_purchase_cart.PNG) |
| ![Admin stores](docs/screenshots/choppi_admin_stores.PNG) | ![Create product](docs/screenshots/choppi_admin_create_product.PNG) |

## Run it

```bash
cp .env.example .env.local   # API base URL
npm install
npm run dev                  # http://localhost:3000 (start the API first)
```

## Author

Jose Miguel Tovar · [Portfolio](https://github.com/joset98/portfolio-nextjs) · [LinkedIn](https://www.linkedin.com/in/jose-miguel-tovar/)

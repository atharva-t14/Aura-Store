# Ecom UI v2

Frontend-only E-Commerce application built with React, Vite, React Router, Redux Toolkit, TailwindCSS. Uses FakeStoreAPI for data.

## Features
- Auth (Login/Signup) with validation, localStorage persistence, toasts
- Products listing with filters (price slider, debounced search, rating)
- Product detail with gallery, rating, quantity selector
- Cart with quantity updates and order summary
- Protected routes for Cart and Checkout
- Checkout wizard (Address → Payment → Summary)
- Sticky header, skeleton loaders, responsive UI

## Quick Start

```bash
cd ecom_ui_v2
npm install
npm run dev
```

Open the local URL printed by Vite. Use Signup or Login to proceed; after auth you’ll be redirected to Products.

## Scripts
- `npm run dev`: start dev server
- `npm run build`: production build
- `npm run preview`: preview build

## Notes
- Data is fetched from https://fakestoreapi.com
- Prices shown in ₹ approximate by multiplying USD × 83

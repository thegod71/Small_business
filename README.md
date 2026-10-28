# Phoolwari web (React + Tailwind)

Frontend for selling plants, flowers, garden services and corporate gifting. Runs on dummy data today; ready for a backend and payments later.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
```

## Structure

```
src/
  config/        site.js: business details, nav, static copy (edit here first)
  components/
    ui/          Button, Container, Field, ProductImage, Icons (reusable, no business logic)
    layout/      Header, Footer, Logo, AnnouncementBar, ScrollToTop
    product/     ProductCard, ProductGrid
    cart/        CartDrawer
    forms/       EnquiryForm, NewsletterForm
    home/        one file per home-page section
  pages/         one file per route (lazy loaded)
  layouts/       MainLayout (header + footer + cart drawer)
  routes/        AppRoutes
  context/       CartContext (cart state saved in localStorage)
  hooks/         useAsync
  services/      the ONLY place that talks to data (mock or real API)
  mocks/         dummy data + fake API (delete when the backend is live)
  utils/         formatPrice, cn
  styles/        Tailwind entry + Indian lattice (jaali) patterns
```

Design tokens (colours, fonts) are in `tailwind.config.js`.

## Connecting your backend later

1. Copy `.env.example` to `.env` and set `VITE_API_BASE_URL`.
2. Build endpoints returning the same JSON shape as `src/mocks/data/*`:

| Method | Path | Notes |
| --- | --- | --- |
| GET | `/products` | query: `category`, `sort` (`price-asc`, `price-desc`), `featured`, `limit` |
| GET | `/products/:slug` | single product |
| GET | `/categories`, `/services`, `/corporate-offers`, `/testimonials` | lists |
| POST | `/enquiries` | body from `EnquiryForm` |
| POST | `/newsletter` | `{ email }` |

No component changes are needed: `services/catalogService.js` switches from mock to API automatically.

## Adding payments later

Add `services/orderService.js` and `services/paymentService.js`, then build out `pages/CheckoutPage.jsx` (steps are in its header comment). Razorpay or any UPI gateway fits here. Never put gateway secret keys in the frontend.

## Real images

Put files in `public/images/` and set `image: '/images/name.jpg'` on a product (or in `HERO_TILES`). Items without an image show a coloured emoji tile.

# Gue Moni website

Run `npm install` at the repository root, then `npm run dev`. Use `npm run build` and `npm start` for a production build.

The public website uses `react-router-dom`. Routes live in `src/App.jsx`, page components in `src/pages`, shared components in `src/components`, and plain CSS in `src/styles.css`. Images are served from `public/media`. The existing Next host and API routes are retained in `src/app`; `.jsx` files belong to React Router, while Next uses `.js`. Rewrites allow public routes to load directly and refresh correctly.

Public routes: `/`, `/about`, `/services`, `/become-agent`, `/contact`, and `/faq`.

The existing Next.js server is retained to serve the contact, orders, and payment APIs. `src/ClientApp.jsx` mounts the React Router application, and `next.config.mjs` forwards public page requests to it so direct links and refreshes work. The legacy engineering pages remain in `app` but are not part of the new navigation.

The contact form posts to `/api/contact`. Enquiries use the existing lead storage and optional SMTP configuration in `.env.example`. Email notifications require those SMTP settings. Exact location details, operating hours, and programme terms should be confirmed with the business before publication.

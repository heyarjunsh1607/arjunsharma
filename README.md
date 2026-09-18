# Arjun Sharma

A statically prerendered Next.js App Router landing page. TypeScript, Tailwind CSS v4, server components and native HTML FAQ controls. Two small client components handle the discovery demo and booking form. Inter and JetBrains Mono are self-hosted through next/font with Latin subsets and font-swap support. No runtime font requests to Google, trackers, animation libraries, calendar embeds or stock imagery.

## Run

```sh
npm ci
cp .env.example .env.local
npm run dev
```

## Before launch

The default booking URL is `https://cal.com/arjun-sharma/discovery-call`. Override it with `CAL_BOOKING_URL` if needed. The footer links to the supplied X and LinkedIn profiles. Override LinkedIn with `NEXT_PUBLIC_LINKEDIN_URL` if needed. Rebuild after changing either value.

All discovery-call CTAs lead to the name-and-email form. The submit button redirects to Cal.com with encoded `name` and `email` parameters while preserving existing event settings. The form mentions occasional studio-growth updates. It does not save submissions to a separate email list: Cal.com retains information through its booking process, and independent lead capture requires a chosen email platform or database.

Replace the initial-based portrait placeholder in `app/page.tsx` with a real image using `next/image`, explicit width/height and responsive sizes. Do not substitute a fake portrait.

Add verified results to `proof` and a verified quote, name and role to `testimonial` in `lib/content.ts`. Empty results stay out of the rendered page. Optional source URLs should point to actual evidence.

## Checks

```sh
npm test
npm run lint
npm run typecheck
npm run build
npm start
```

The production server defaults to port 3000. Use `npm start -- --port 3001` to choose another port.

## SEO

- Title, description, canonical, Open Graph and Twitter metadata.
- Generated social images, favicon, robots.txt and a single-URL sitemap.
- Person, WebSite, Service and FAQPage JSON-LD. No fabricated address, reviews or LocalBusiness details. FAQ markup is not a promise of Google rich results.
- One H1, question-form H2s, H3s for subtopics, visible FAQ text matching JSON-LD.
- Reusable layout and content modules support future pages without creating thin duplicate routes.
- Use route-specific titles, descriptions and canonicals when adding future pages; update the sitemap.

Deploy on a Next.js-compatible host. Connect arjunsharma.co, redirect www and any alternate hosts to the canonical HTTPS domain, and register the sitemap in Search Console after deployment. Hosting-level redirects and production Core Web Vitals need verification on the live domain.

## Editing

- `lib/content.ts`: service/process/FAQ copy, destination URLs and evidence.
- `app/page.tsx`: page sections and structured data.
- `components/ui.tsx`: shared CTA, section label and icons.
- `app/globals.css`: responsive design, focus states and reduced-motion support.
- `app/layout.tsx`: shared metadata.

No production deployment or external publishing is performed by local builds.

## Discovery desktop identity

The Heyclicky reference informs the window chrome and tactile controls. Original search-themed illustrations, violet and lime colors, and a pixel crawler give this page its own identity. The search window switches between Google and AI discovery examples. Click the crawler for field notes or open the field-notes folder for an easter egg. All work by keyboard and respect reduced-motion preferences. Illustrations are explicitly labeled and do not present fabricated results.

- `components/discovery-desktop.tsx`: channel switch, crawler and secret folder.
- `components/booking-form.tsx`: accessible booking fields and redirect state.
- `lib/booking.ts`: validated Cal.com destination and query encoding.
- `tests/booking.test.mjs`: destination/input validation and prefill tests.

## Typography and navigation

Inter uses tight tracking (-0.045em for body, -0.075em for the hero). Main body text is 16–18px. JetBrains Mono is used for heading labels. A fixed bottom dock replaces the top navigation, with persistent labels, keyboard focus states, hover magnification and reduced-motion support. The page has bottom padding so footer content clears the dock.

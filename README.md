# Arjun Sharma

A statically prerendered Next.js App Router site. `/` is a dark, minimal personal homepage with a newsletter form, PIXELUP LABS and email links, social profiles and small SEO/AI Search details. TypeScript, Tailwind CSS v4 and server components. Albert Sans, Inter, Inter Display and JetBrains Mono are self-hosted through next/font with Latin subsets and font-swap support. No runtime font requests to Google, trackers, calendar embeds or stock imagery.

## Run

```sh
npm ci
cp .env.example .env.local
npm run dev
```

## Before launch

The footer links to the supplied X and LinkedIn profiles. Override LinkedIn with `NEXT_PUBLIC_LINKEDIN_URL` if needed. Rebuild after changing the value.

The homepage's “Get notes” form opens `https://arjunsh1607.substack.com/subscribe` with the entered email prefilled. Readers confirm their subscription on Substack, which handles the subscriber list and email delivery. The form works without JavaScript and does not claim an email is subscribed before that confirmation. Edit `site.substackUrl` in `lib/content.ts` to change publications. No newsletter API keys or separate subscriber storage are needed.

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
- Homepage social images, favicon, robots.txt, a sitemap covering `/`, and `/llms.txt` (a plain-text summary for AI crawlers, generated from `lib/content.ts`).
- Person and WebSite JSON-LD on the homepage. No fabricated address, reviews or LocalBusiness details.
- One H1 and a question-form H2.
- Reusable layout and content modules support future pages without creating thin duplicate routes.
- Use route-specific titles, descriptions and canonicals when adding future pages; update the sitemap.

Deploy on a Next.js-compatible host. Connect www.arjunsharma.co as the canonical host, redirect the apex arjunsharma.co and any alternate hosts to it over HTTPS, and register the sitemap in Search Console after deployment. Hosting-level redirects and production Core Web Vitals need verification on the live domain.

## Editing

- `lib/content.ts`: homepage metadata, destination URLs, the "How can I help?" list and the search bar's example queries, plus retained service copy for future use.
- `app/page.tsx` and `app/home.module.css`: dark homepage layout, signup and links.
- `components/mark.tsx` and `app/icon.svg`: the magnifier-and-sparkle mark used as the avatar and favicon. Keep the two in sync.
- `components/query-bar.tsx`, `components/scramble-text.tsx` and `components/copy-email.tsx`: the typing search bar, decoding section labels and copy-email button. All respect reduced motion and work without JavaScript.
- `components/ui.tsx`: shared CTA, section label and icons.
- `app/globals.css`: responsive design, focus states and reduced-motion support.
- `app/layout.tsx`: shared metadata.

No production deployment or external publishing is performed by local builds.

The removed services page's components and copy remain in the repository for future use. They are not exposed by a route. The homepage newsletter form is in `components/newsletter-form.tsx`. Font source and license notes are in `app/fonts/README.md`.

> The Lighthouse scores below describe the earlier redesign, before the self-hosted fonts and bottom dock. They have not been rerun for the latest typography/navigation changes.

# Local verification: discovery desktop redesign

Verified the production build locally on 2026-09-19 (Asia/Kolkata).

## Passed

- Next.js production build: all routes statically prerendered.
- ESLint and TypeScript: no errors.
- Browser layouts: desktop 1440 × 1050, tablet 768 × 1024, mobile 390 × 844.
- Tablet/mobile: document width equals viewport width; no horizontal overflow.
- Visual inspection of desktop hero, full mobile page, tablet hero and mobile booking form.
- One H1; all seven rendered H2s end in questions.
- Every in-page anchor resolves to an existing target.
- Native FAQ expands using Enter; answers remain in server-rendered HTML.
- FAQ JSON-LD answers match visible content.
- Canonical, description, Open Graph and Twitter image metadata present.
- Generated social image returns HTTP 200 and image/png.
- robots.txt and sitemap.xml contain the correct canonical domain.
- Empty evidence/testimonial entries are absent from the page.
- Browser reports no runtime errors.
- Final Lighthouse accessibility audit: 100, no failing accessibility audits. Automated checks do not replace full assistive-technology testing.
- Google/AI switch updates the example and pressed state.
- Crawler click cycles messages; field-notes folder opens by keyboard.
- Booking input labels, invalid-email validation and missing-calendar disabled state verified.
- Three redirect tests pass: encoded name/email with existing event parameters, unsafe destination rejection and input validation.

## Lighthouse mobile

Default simulated mobile audit against the local production server:

| Category | Score |
| --- | ---: |
| Performance | 97 |
| Accessibility | 100 |
| Best practices | 100 |
| SEO | 100 |

- First Contentful Paint: 0.8 s
- Largest Contentful Paint: 1.6 s
- Total Blocking Time: 180 ms
- Cumulative Layout Shift: 0
- Total transfer: 167 KiB

Saved report: `artifacts/lighthouse-v2-mobile.report.html` and JSON alongside it. Artifacts are ignored by Git.

## Remaining launch requirements

The supplied Cal.com event URL is now configured. Redirect construction and input validation pass three unit tests. Independent email-list capture is not implemented; a provider or database has not been selected. LinkedIn remains hidden until configured.

## Typography and dock checks

- Inter and JetBrains Mono load through next/font; verified computed fonts in the browser.
- Body copy: 17px desktop prose and 16px mobile prose, 18px base body.
- Tight Inter letter spacing; mono labels retain their own spacing.
- Production build and lint pass.
- Desktop and mobile layout inspections repeated after dock changes; no horizontal overflow.
- Final axe accessibility scan reports no violations.
- Submitted synthetic Alex Test / alex+preview@example.com through the form. Browser reached the correct live Cal.com event with both values URL-encoded. Opened the attendee-details step and verified that Your name and Email address are prefilled correctly. No appointment was booked.


Supply a real portrait and verified proof when available. Proof is optional and hidden by default. Configure the production domain, canonical redirects and hosting, then check live HTTP behavior, booking flow and field Core Web Vitals. Local Lighthouse is not a live-domain performance guarantee or ranking guarantee.

## Inter Display, founder copy and extended accents

Latest production build and lint pass. Verified real Inter Display in computed heading styles with retained -0.075em hero tracking. Desktop/mobile views checked; no horizontal overflow. All H2s remain questions. Axe scan: zero violations.

Local mobile Lighthouse: performance 94, accessibility 100, best practices 100, SEO 100. LCP 3.1 s; CLS 0; total blocking time 20 ms. Report: artifacts/lighthouse-display-mobile.report.html. These are local lab results.

## Six illustrated services and updated hero

Verified locally on 2026-09-19. Hero text matches: “Get a consistent flow of leads with Google & AI Search”. The six service cards use distinct inline SVG illustrations and concise design-studio copy. No new client-side JavaScript or illustration library was added.

- ESLint and production build pass; homepage remains statically prerendered.
- Browser checks at 1440px, 768px and 390px confirm three, two and one service columns respectively, with no horizontal overflow.
- Desktop and mobile hero/service screenshots inspected; all six titles present and all H2s remain questions.
- This change is local. Lighthouse scores above predate these latest illustrations and were not rerun.

## Minimal dock and interactive outcome footer

Verified locally on 2026-09-19. The dock has four links and no Home item. Eight dimensional SEO outcome blocks support pointer dragging, release velocity, gravity, collisions, keyboard movement/tossing, and reset. The client component uses no additional dependencies; transient positions live outside React render state, animation stops after settling and while offscreen, and reduced motion disables automatic movement.

- Production build and lint pass.
- Real browser mouse drag and throw, touch drag, reset, keyboard movement and toss, and reduced motion checks pass without runtime errors.
- Layouts checked at 320, 390, 650, 768, 1024 and 1440px; no horizontal overflow. Intermediate-width blocks remain inside their stage.
- Final axe scan reports zero violations, with gradient/overlap contrast items left for manual review. This is not a complete assistive-technology audit.
- Changes are local; no push or deployment performed for this update.

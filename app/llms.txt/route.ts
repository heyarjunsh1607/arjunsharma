import { faqs, homepage, services, site, steps } from "@/lib/content";

export const dynamic = "force-static";

// Plain-text summary for AI crawlers and answer engines, built from the same
// content module as the page so the two never drift.
export function GET() {
  const body = [
    `# ${site.name}`,
    "",
    `> ${homepage.description}`,
    "",
    `${site.name} is a Growth Engineer at PixelUp Labs and an independent SEO and AI Search consultant for design studios and agencies. The homepage is at ${site.url}, and the full services, process, FAQ and booking page is at ${site.url}/services.`,
    "",
    "## Services",
    "",
    ...services.map((s) => `- ${s.title}: ${s.line}`),
    "",
    "## Process",
    "",
    ...steps.map(([title, detail], i) => `${i + 1}. ${title} — ${detail}`),
    "",
    "## FAQ",
    "",
    ...faqs.flatMap((f) => [`### ${f.question}`, "", f.answer, ""]),
    "## Links",
    "",
    `- Website: ${site.url}`,
    `- Services: ${site.url}/services`,
    `- PixelUp Labs: ${site.pixelupUrl}`,
    `- Book a discovery call: ${site.bookingUrl}`,
    `- LinkedIn: ${site.linkedinUrl}`,
    `- X / Twitter: ${site.twitterUrl}`,
    `- Sitemap: ${site.url}/sitemap.xml`,
    "",
  ].join("\n");
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

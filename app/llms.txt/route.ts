import { homepage, site } from "@/lib/content";

export const dynamic = "force-static";

// Plain-text summary for AI crawlers and answer engines, built from the same
// content module as the page so the two never drift.
export function GET() {
  const body = [
    `# ${site.name}`,
    "",
    `> ${homepage.description}`,
    "",
    `${site.name} is Head of Growth at PIXELUP LABS. The homepage at ${site.url} includes notes on turning search into clients and links to his newsletter, email and social profiles.`,
    "",
    "## Links",
    "",
    `- Website: ${site.url}`,
    `- PIXELUP LABS: ${site.pixelupUrl}`,
    `- Email: ${site.email}`,
    `- Newsletter: ${site.substackUrl}`,
    `- LinkedIn: ${site.linkedinUrl}`,
    `- X / Twitter: ${site.twitterUrl}`,
    `- Sitemap: ${site.url}/sitemap.xml`,
    "",
  ].join("\n");
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

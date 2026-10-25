import type { Metadata, Viewport } from "next";
import { Arrow } from "@/components/ui";
import { CopyEmail } from "@/components/copy-email";
import { Mark } from "@/components/mark";
import { NewsletterForm } from "@/components/newsletter-form";
import { QueryBar } from "@/components/query-bar";
import { ScrambleText } from "@/components/scramble-text";
import { homepage, site } from "@/lib/content";
import styles from "./home.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#080808" };

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.name,
        url: site.url,
        jobTitle: "Head of Growth",
        description: homepage.description,
        email: `mailto:${site.email}`,
        worksFor: {
          "@type": "Organization",
          name: "PIXELUP LABS",
          url: site.pixelupUrl,
        },
        knowsAbout: ["SEO", "AI Search", "Organic growth for B2B startups"],
        sameAs: [site.linkedinUrl, site.twitterUrl],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        publisher: { "@id": `${site.url}/#person` },
      },
    ],
  };

  return (
    <main id="main" className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <div className={styles.column}>
        <header className={styles.hero}>
          <Mark size={40} />
          <div>
            <p className={styles.name}>{site.name}</p>
            <h1 className={styles.tagline}>
              <span className={styles.mono}>Head of Growth</span> at PIXELUP
              LABS{" "}
              <span className={styles.dim}>
                helping B2B startups get found on Google and AI Search, and
                turn that visibility into client conversations.
              </span>
            </h1>
          </div>
        </header>

        <div className={styles.section}>
          <QueryBar queries={homepage.queries} />
        </div>

        <section className={`${styles.section} ${styles.columns}`}>
          <div>
            <h2 className={styles.label}>
              <ScrambleText text="Work" />
            </h2>
            <ul className={styles.list}>
              <li>
                <a href={site.pixelupUrl} target="_blank" rel="noopener noreferrer">
                  <span>PIXELUP LABS</span>
                  <Arrow diagonal />
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`}>
                  <span>{site.email}</span>
                  <Arrow diagonal />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className={styles.label}>
              <ScrambleText text="How can I help?" />
            </h2>
            <ul className={styles.list}>
              {homepage.help.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.label}>
            <ScrambleText text="Notes" />
          </h2>
          <p>Get my notes on turning search into clients:</p>
          <NewsletterForm />
        </section>

        <section className={styles.section}>
          <h2 className={styles.label}>
            <ScrambleText text="Channels" />
          </h2>
          <ul className={styles.channels}>
            <li>
              <a href={site.twitterUrl} target="_blank" rel="noopener noreferrer">
                x.com
              </a>
            </li>
            <li>
              <a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer">
                linkedin
              </a>
            </li>
            <li>
              <a href={site.substackUrl} target="_blank" rel="noopener noreferrer">
                substack
              </a>
            </li>
          </ul>
        </section>

        <footer className={`${styles.section} ${styles.footer}`}>
          <div className={styles.footerRow}>
            <p className={styles.status}>
              <span className={styles.pulse} aria-hidden="true" />
              Open to search &amp; AI crawlers
            </p>
            <CopyEmail email={site.email} />
          </div>
          <div className={styles.meta}>
            <p>© {new Date().getFullYear()}</p>
            <nav aria-label="Crawler files">
              <a href="/llms.txt">llms.txt</a>
              <a href="/sitemap.xml">sitemap.xml</a>
              <a href="/robots.txt">robots.txt</a>
            </nav>
          </div>
        </footer>
      </div>
    </main>
  );
}

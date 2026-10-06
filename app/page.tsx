import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Arrow } from "@/components/ui";
import { homepage, newsletter, site } from "@/lib/content";
import styles from "./home.module.css";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#fafaf9" };

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.name,
        url: site.url,
        jobTitle: "Growth Engineer",
        description: homepage.description,
        worksFor: {
          "@type": "Organization",
          name: "PixelUp Labs",
          url: site.pixelupUrl,
        },
        knowsAbout: ["SEO", "AI Search", "Organic growth for design studios"],
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
      <div className={styles.content}>
        <header className={styles.profile}>
          <p className={styles.name}>{site.name}</p>
          <p className={styles.role}>Growth Engineer</p>
        </header>

        <section className={styles.intro} aria-labelledby="intro-title">
          <h1 id="intro-title">
            B2B growth with
            <br />
            SEO + AI Search
          </h1>
          <p>
            I help design studios get found on Google and AI Search, and turn
            that visibility into client conversations.
          </p>
        </section>

        <section className={styles.links} aria-labelledby="links-title">
          <h2 id="links-title">How can I help you?</h2>
          <a href={site.pixelupUrl} target="_blank" rel="noopener noreferrer">
            <span>Growth Engineer at PixelUp Labs</span>
            <Arrow diagonal />
          </a>
          <Link href="/services">
            <span>Work with me for SEO + AI Search Funnel</span>
            <Arrow diagonal />
          </Link>
        </section>

        <section className={styles.notes} aria-label="Arjun’s notes">
          <p>Get my notes on turning search into clients:</p>
          <form
            action={newsletter.formAction || undefined}
            method="post"
            className={styles.signup}
            aria-label="Subscribe to Arjun’s notes"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Your email address
            </label>
            <input
              id="newsletter-email"
              name={newsletter.emailField}
              type="email"
              autoComplete="email"
              placeholder="Email"
              required
              maxLength={254}
              disabled={!newsletter.formAction}
              aria-describedby={!newsletter.formAction ? "newsletter-status" : undefined}
            />
            <button type="submit" disabled={!newsletter.formAction}>
              Get notes
            </button>
          </form>
          {!newsletter.formAction ? (
            <p id="newsletter-status" className={styles.signupStatus}>
              Newsletter signup opens soon.
            </p>
          ) : null}
        </section>

        <footer className={styles.footer}>
          <nav aria-label="Social profiles">
            <a href={site.twitterUrl} aria-label="Arjun Sharma on X" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.5 5.4 22H2.2l7.3-8.5L1.5 2H8l4.5 6.9L18.9 2Zm-1.1 18h1.7L7 3.9H5.2L17.8 20Z" />
              </svg>
            </a>
            <a href={site.linkedinUrl} aria-label="Arjun Sharma on LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M5.4 7.8H1.8V22h3.6V7.8ZM3.6 2a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2ZM22.2 13.8c0-4.3-2.3-6.3-5.3-6.3a4.5 4.5 0 0 0-4 2.2V7.8H9.3V22h3.6v-7.1c0-1.9.4-3.7 2.8-3.7s2.9 2.1 2.9 3.8v7h3.6v-8.2Z" />
              </svg>
            </a>
          </nav>
        </footer>
      </div>
    </main>
  );
}

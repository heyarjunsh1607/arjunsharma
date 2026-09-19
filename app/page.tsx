import {
  SearchObject,
  JourneyObject,
  CursorObject,
  ChatObject,
  HeroTokens,
  TargetObject,
  EnvelopeObject,
  BookmarkObject,
} from "@/components/search-accents";
import { ServiceVisual } from "@/components/service-visual";
import { BottomDock } from "@/components/bottom-dock";
import { OutcomePlayground } from "@/components/outcome-playground";
import { DiscoveryDesktop } from "@/components/discovery-desktop";
import { BookingForm } from "@/components/booking-form";
import Link from "next/link";
import { Arrow, BookCall, Eyebrow } from "@/components/ui";
import { faqs, proof, services, site, steps, testimonial } from "@/lib/content";

export default function Home() {
  const results = proof.filter(
    (item) => item.result.trim() && item.context.trim(),
  );
  const hasTestimonial = testimonial.quote && testimonial.name;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.name,
        url: site.url,
        description: site.description,
        worksFor: { "@type": "Organization", name: "PixelUp Labs" },
        knowsAbout: [
          "SEO for design studios",
          "AI Search",
          "Positioning",
          "Organic growth for design agencies",
        ],
        sameAs: [site.linkedinUrl, site.twitterUrl],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        publisher: { "@id": `${site.url}/#person` },
      },
      {
        "@type": "Service",
        name: "SEO and organic growth for design studios",
        serviceType: "SEO consulting for design agencies",
        provider: { "@id": `${site.url}/#person` },
        url: site.url,
        description: site.description,
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <BottomDock />
      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <Link
            href="/"
            className="wordmark hero-wordmark"
            aria-label="Arjun Sharma home"
          >
            <span className="brand-glyph" aria-hidden="true">
              ⌕
            </span>{" "}
            arjun sharma<span className="brand-dot">.</span>
          </Link>
          <p className="hero-kicker">
            <span className="status-dot" /> YOUR STUDIO. FOUND BY THE RIGHT
            PEOPLE.
          </p>
          <HeroTokens />
          <h1 id="hero-title">
            Get a consistent flow of leads{" "}
            <br className="desktop-break" />with <span className="serif">Google &amp; AI Search</span>
          </h1>
          <p className="hero-description">
            Your studio does great work.{" "}
            <strong className="copy-highlight">
              Your next client should know that.
            </strong>{" "}
            I help design studios get found on Google and AI Search, so more of
            the right buyers come to you.
          </p>
          <div className="hero-actions">
            <BookCall />
            <a className="text-link" href="#approach">
              See how I work <span aria-hidden="true">↓</span>
            </a>
          </div>
          <DiscoveryDesktop />
          <div className="hero-bottom">
            <span>BUILT AROUND YOUR NEXT CLIENT.</span>
            <span>NOT YOUR NEXT TRAFFIC SPIKE.</span>
          </div>
        </section>
        <section
          className="section wrap problem"
          aria-labelledby="problem-title"
        >
          <Eyebrow number="01">THE DISCOVERY GAP</Eyebrow>
          <div className="split">
            <div className="problem-intro">
              <h2 id="problem-title">
                Does your pipeline
                <br />
                depend on your
                <br />
                <span className="serif">next referral?</span>
              </h2>
              <SearchObject />
            </div>
            <div className="prose">
              <p>
                You’ve built a portfolio you’re proud of. Clients like working
                with you. But when a project wraps up, you’re back to asking:{" "}
                <strong>where does the next one come from?</strong>
              </p>
              <p>
                Referrals got you here.{" "}
                <strong className="copy-highlight">
                  They don’t give you control over what comes next.
                </strong>{" "}
                Your buyers are also searching for studios with your exact
                expertise.
              </p>
              <div className="search-example">
                <span className="search-label">
                  YOUR NEXT CLIENT IS SEARCHING
                </span>
                <p>
                  <span aria-hidden="true">↗</span> “best design agency for B2B
                  SaaS”
                </p>
                <p>
                  <span aria-hidden="true">✳</span> “best branding agencies for
                  AI startups”
                </p>
              </div>
              <p className="strong">
                They can’t shortlist a studio they never find. I help you{" "}
                <strong>show up before they’ve decided who to hire.</strong>
              </p>
            </div>
          </div>
        </section>
        <section
          className="section wrap"
          id="services"
          aria-labelledby="services-title"
        >
          <Eyebrow number="02">WHAT I DO</Eyebrow>
          <div className="section-heading">
            <h2 id="services-title">
              How do we turn
              <br />
              search into <span className="serif">client conversations?</span>
            </h2>
            <p>
              Get found. Make your fit clear.
              <br />
              <strong>Give buyers a reason to get in touch.</strong>
            </p>
          </div>
          <div className="services services-six">
            {services.map((service) => (
              <article className="service service-illustrated" key={service.number}>
                <div className="service-art-panel">
                  <span className="service-art-number">{service.number}</span>
                  <ServiceVisual type={service.symbol} />
                </div>
                <div className="service-card-copy">
                  <h3>{service.title}</h3>
                  <p className="service-line">{service.line}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="service-close">
            <p>
              Let’s look at{" "}
              <strong>how your next client could find you.</strong>
            </p>
            <BookCall />
          </div>
        </section>
        <section
          className="approach-band"
          id="approach"
          aria-labelledby="approach-title"
        >
          <div className="wrap section">
            <Eyebrow number="03">HOW I WORK</Eyebrow>
            <div className="split">
              <div className="approach-intro">
                <h2 id="approach-title">
                  Why start with keywords
                  <br />
                  when we can start
                  <br />
                  with <span className="serif">your buyers?</span>
                </h2>
                <p>
                  First, we get clear on{" "}
                  <strong className="copy-highlight">
                    which projects you want more of.
                  </strong>{" "}
                  Then we build around how those clients choose a studio.
                </p>
                <JourneyObject />
              </div>
              <ol className="steps">
                {steps.map(([title, description], index) => (
                  <li key={title}>
                    <span className="step-number">0{index + 1}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
        <section
          className="section wrap"
          id="about"
          aria-labelledby="about-title"
        >
          <Eyebrow number="04">A LITTLE CONTEXT</Eyebrow>
          <div className="about-grid">
            <div
              className="portrait-placeholder"
              role="img"
              aria-label="Portrait placeholder for Arjun Sharma"
            >
              <CursorObject />
              <BookmarkObject />
              <span className="portrait-monogram" aria-hidden="true">
                as.
              </span>
              <span className="portrait-caption">
                ARJUN SHARMA
                <br />
                <span>Websites → organic growth</span>
              </span>
            </div>
            <div className="prose">
              <h2 id="about-title">
                Why work with someone
                <br />
                who knows <span className="serif">studio life?</span>
              </h2>
              <p>
                I started as a <strong>Webflow and Framer developer</strong>,
                working around design studios. I know how much thinking goes
                into the work, and how little of that a buyer sees at first
                glance.
              </p>
              <p>
                A good-looking website matters. But I became more interested in
                the question behind it:
              </p>
              <blockquote>
                How do the right people find you, trust you, and become a
                client?
              </blockquote>
              <p>
                That question led me into SEO, AI Search, positioning and
                organic growth. Today, I work on these problems at{" "}
                <strong>PixelUp Labs</strong>, a design studio for B2B and AI
                companies.
              </p>
              <p>
                That’s the perspective I bring:{" "}
                <strong className="copy-highlight">
                  make your expertise easier to find, understand and choose.
                </strong>
              </p>
              <span className="signature">Arjun.</span>
            </div>
          </div>
        </section>
        {results.length || hasTestimonial ? (
          <section className="section wrap" aria-labelledby="proof-title">
            <Eyebrow number="05">THE EVIDENCE</Eyebrow>
            <h2 id="proof-title">What does that look like in practice?</h2>
            <div className="proof-grid">
              {results.map((item) => (
                <article key={item.label}>
                  <p className="eyebrow">{item.label}</p>
                  <h3>{item.result}</h3>
                  <p>{item.context}</p>
                  {item.sourceUrl ? (
                    <a href={item.sourceUrl}>
                      See the result <Arrow />
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
            {hasTestimonial ? (
              <figure>
                <blockquote>{testimonial.quote}</blockquote>
                <figcaption>
                  {testimonial.name}
                  {testimonial.role ? `, ${testimonial.role}` : ""}
                </figcaption>
              </figure>
            ) : null}
          </section>
        ) : null}
        <section className="section wrap fit" aria-labelledby="fit-title">
          <Eyebrow number={results.length || hasTestimonial ? "06" : "05"}>
            THE RIGHT FIT
          </Eyebrow>
          <h2 id="fit-title">
            Is this the right next step
            <br />
            for <span className="serif">your studio?</span>
          </h2>
          <TargetObject />
          <div className="fit-grid">
            <div>
              <h3>We’ll probably work well together if...</h3>
              <ul className="check-list">
                {[
                  "You run a design, branding, Webflow or creative studio.",
                  "You have good work and real clients to show for it.",
                  "You still carry most of the responsibility for finding the next client.",
                  "You want qualified enquiries, without posting every day.",
                  "You want buyers to find you on Google and through AI Search.",
                  "Your portfolio gets compliments, but too few client enquiries.",
                ].map((text) => (
                  <li key={text}>
                    <span aria-hidden="true">✓</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="not-fit">
              <h3>Probably not a fit if...</h3>
              <ul className="check-list">
                {[
                  "You’re just starting your studio.",
                  "You haven’t defined your service or ideal client yet.",
                  "You want thousands of visitors, regardless of fit.",
                  "You expect SEO to generate leads overnight.",
                ].map((text) => (
                  <li key={text}>
                    <span aria-hidden="true">−</span>
                    {text}
                  </li>
                ))}
              </ul>
              <p>
                The foundation:{" "}
                <strong>
                  a clear offer, real expertise and the patience to build.
                </strong>
              </p>
            </div>
          </div>
        </section>
        <section
          className="section wrap faq-section"
          id="faq"
          aria-labelledby="faq-title"
        >
          <div>
            <Eyebrow number={results.length || hasTestimonial ? "07" : "06"}>
              A FEW ANSWERS
            </Eyebrow>
            <h2 id="faq-title">
              What else is
              <br />
              on <span className="serif">your mind?</span>
            </h2>
            <ChatObject />
          </div>
          <div className="faqs">
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  <h3>{faq.question}</h3>
                  <span className="faq-plus" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
        <section
          className="contact-band"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="wrap contact-inner">
            <p className="eyebrow">
              <span className="status-dot" /> YOUR NEXT CHAPTER
            </p>
            <h2 id="contact-title">
              Ready to be found by
              <br />
              <span className="serif">your next right-fit client?</span>
            </h2>
            <p>
              Tell me about your studio, the projects you want, and{" "}
              <strong>where new business gets stuck.</strong>
            </p>
            <EnvelopeObject />
            <BookingForm bookingUrl={site.bookingUrl} />

          </div>
        </section>
      </main>
      <footer className="outcome-footer">
        <OutcomePlayground />
        <div className="wrap footer">
        <Link className="wordmark" href="/">
          <span className="brand-glyph" aria-hidden="true">
            ⌕
          </span>{" "}
          arjun sharma<span className="brand-dot">.</span>
        </Link>
        <nav className="footer-socials" aria-label="Social profiles">
          <a href={site.twitterUrl} target="_blank" rel="noopener noreferrer">
            X / Twitter <Arrow diagonal />
          </a>
          <a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer">
            LinkedIn <Arrow diagonal />
          </a>
        </nav>
        <span>© {new Date().getFullYear()} Arjun Sharma</span>
        </div>
      </footer>
    </>
  );
}

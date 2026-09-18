import { ServiceVisual } from "@/components/service-visual";
import { BottomDock } from "@/components/bottom-dock";
import { DiscoveryDesktop } from "@/components/discovery-desktop";
import { BookingForm } from "@/components/booking-form";
import Link from "next/link";
import { Arrow, BookCall, Eyebrow, ServiceIcon } from "@/components/ui";
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
          <Link href="/" className="wordmark hero-wordmark" aria-label="Arjun Sharma home"><span className="brand-glyph" aria-hidden="true">⌕</span> arjun sharma<span className="brand-dot">.</span></Link>
          <p className="hero-kicker">
            <span className="status-dot" /> YOUR STUDIO. FOUND BY THE RIGHT
            PEOPLE.
          </p>
          <h1 id="hero-title">
            SEO and organic growth
            <br className="desktop-break" /> for{" "}
            <span className="serif">design studios.</span>
          </h1>
          <p className="hero-description">
            I help design studios turn Google, AI Search and a clearer website
            into a source of qualified inbound leads.
          </p>
          <div className="hero-actions">
            <BookCall />
            <a className="text-link" href="#approach">
              See how I work <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-credit">
            <span className="mini-mark" aria-hidden="true">
              ↗
            </span>
            <p>
              Currently building organic growth systems at{" "}
              <strong>PixelUp Labs.</strong>
            </p>
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
            <h2 id="problem-title">
              Great work.
              <br />
              But are the right
              <br />
              <span className="muted">people finding it?</span>
            </h2>
            <div className="prose">
              <p>
                You have the work. The clients. The case studies. But most new
                business still comes from someone knowing someone.
              </p>
              <p>
                Referrals are great. Building your entire pipeline around them
                is unpredictable.
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
                If your studio isn’t in the conversation, your work never gets a
                chance. That’s the gap I help close.
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
              discovery into <span className="serif">demand?</span>
            </h2>
            <p>
              Three connected pieces.{" "}
              <br />
              One goal: more of the right conversations.
            </p>
          </div>
          <div className="services">
            {services.map((service) => (
              <article className="service" key={service.number}>
                <div className="service-top">
                  <ServiceIcon type={service.symbol} />
                  <span>{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p className="service-line">{service.line}</p>
                <ServiceVisual type={service.symbol} />
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="service-close">
            <p>Let’s find out where your next opportunity is.</p>
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
                  A search strategy should come from your business.
                  <br />
                  Not a spreadsheet full of keywords.
                </p>
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
                How did a website
                <br />
                developer end up <span className="serif">here?</span>
              </h2>
              <p>
                I started as a Webflow and Framer developer, working around
                design studios. I cared about how websites looked and how they
                worked.
              </p>
              <p>
                Then I got more interested in what happened before someone
                landed on the website.
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
                I’m building, testing and documenting what I learn along the
                way.
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
          <div className="fit-grid">
            <div>
              <h3>We’ll probably work well together if...</h3>
              <ul className="check-list">
                {[
                  "You run a design, branding, Webflow or creative studio.",
                  "You have good work and real clients to show for it.",
                  "Most business still comes from referrals or founder outreach.",
                  "You want more inbound without becoming a content machine.",
                  "You want buyers to find you on Google and through AI Search.",
                  "Your website looks good but creates too few opportunities.",
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
                Good organic growth takes a clear offer,
                <br />
                good work and a little patience.
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
              Your next client is looking.
              <br />
              <span className="serif">Will they find you?</span>
            </h2>
            <p>Let’s make sure the right people see what you can do.</p>
            <BookingForm bookingUrl={site.bookingUrl} />
            {site.linkedinUrl ? (
              <a className="linkedin-link" href={site.linkedinUrl}>
                Or connect with me on LinkedIn <Arrow diagonal />
              </a>
            ) : null}
          </div>
        </section>
      </main>
      <footer className="wrap footer">
        <Link className="wordmark" href="/">
          <span className="brand-glyph" aria-hidden="true">
            ⌕
          </span>{" "}
          arjun sharma<span className="brand-dot">.</span>
        </Link>
        <nav className="footer-socials" aria-label="Social profiles">
          <a href={site.twitterUrl} target="_blank" rel="noopener noreferrer">X / Twitter <Arrow diagonal /></a>
          <a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn <Arrow diagonal /></a>
        </nav>
        <span>© {new Date().getFullYear()} Arjun Sharma</span>
      </footer>
      <div className="footer-wordmark" aria-hidden="true">
        get found<span>↗</span>
      </div>
    </>
  );
}

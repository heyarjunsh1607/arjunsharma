"use client";

import { useState } from "react";

export function WindowBar({ title }: { title: string }) {
  return (
    <div className="window-bar">
      <span className="window-dots" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span>{title}</span>
      <span aria-hidden="true">↗</span>
    </div>
  );
}

const notes = [
  "Still crawling. Still curious.",
  "Found: good work hiding on page two.",
  "Reminder: humans are the real algorithm.",
  "Secret unlocked: useful beats more.",
];
export function DiscoveryDesktop() {
  const [mode, setMode] = useState<"google" | "ai">("google");
  const [crawl, setCrawl] = useState(0);
  return (
    <div className="discovery-desktop">
      <div className="desktop-float float-query" aria-hidden="true">
        <WindowBar title="buyer-intent.txt" />
        <p>
          “a design studio that
          <br />
          <strong>gets our industry”</strong>
        </p>
        <span className="file-caption">A better place to start.</span>
      </div>
      <div className="desktop-float float-note" aria-hidden="true">
        <span>note to self ↙</span>
        <p>
          More of the
          <br />
          right people.
          <br />
          <s>More traffic.</s>
        </p>
      </div>
      <div className="desktop-float float-signal" aria-hidden="true">
        <WindowBar title="signal, not noise" />
        <div className="signal-bars">
          {[18, 35, 23, 48, 37, 58, 45, 70].map((height, i) => (
            <i key={i} style={{ height }} />
          ))}
        </div>
        <span className="file-caption">A direction. Not a results claim.</span>
      </div>
      <div className="discovery-window">
        <WindowBar title="discovery.exe" />
        <div className="discovery-toolbar">
          <span className="address-label">your-next-client / discovery</span>
          <span className="demo-badge">INTERACTIVE DEMO</span>
        </div>
        <div className="discovery-content">
          <div
            className="discovery-switch"
            role="group"
            aria-label="Explore discovery channels"
          >
            <button
              type="button"
              aria-pressed={mode === "google"}
              onClick={() => setMode("google")}
            >
              ⌕ Google Search
            </button>
            <button
              type="button"
              aria-pressed={mode === "ai"}
              onClick={() => setMode("ai")}
            >
              ✳ AI Search
            </button>
          </div>
          <div className="query-box">
            <span aria-hidden="true">{mode === "google" ? "⌕" : "✳"}</span>
            <span>
              {mode === "google"
                ? "B2B SaaS design studio"
                : "Who should design our AI startup’s website?"}
            </span>
            <span aria-hidden="true">↵</span>
          </div>
          <div className="discovery-result" aria-live="polite">
            <span className="result-icon" aria-hidden="true">
              {mode === "google" ? "↗" : "✦"}
            </span>
            <div>
              <p className="result-label">
                {mode === "google"
                  ? "THE RIGHT SEARCH. THE RIGHT STUDIO."
                  : "CLEAR EXPERTISE. CREDIBLE REFERENCES."}
              </p>
              <p className="result-title">
                {mode === "google"
                  ? "Your work belongs in the conversation."
                  : "Give buyers a reason to shortlist you."}
              </p>
              <p className="result-copy">
                {mode === "google"
                  ? "Useful service pages. Relevant case studies. A clear reason to get in touch."
                  : "Make your expertise easy to understand, with useful content and trusted third-party mentions."}
              </p>
            </div>
          </div>
          <div className="discovery-footer">
            <span>
              <i /> Built for discovery. Designed for people.
            </span>
            <span>Illustration, not a live search result.</span>
          </div>
        </div>
      </div>
      <div className="crawler-dock">
        <button
          type="button"
          className="crawler"
          aria-label="Say hello to the search crawler"
          onClick={() => setCrawl((value) => (value + 1) % notes.length)}
        >
          <span className="crawler-body" aria-hidden="true">
            <i />
            <i />
          </span>
          <span className="crawler-feet" aria-hidden="true">
            ┛ ┗
          </span>
        </button>
        <span className="crawler-bubble" aria-live="polite">
          {notes[crawl]}
        </span>
      </div>
      <details className="secret-folder">
        <summary>
          <span aria-hidden="true">▰</span>
          <span>field-notes</span>
        </summary>
        <p>
          psst. Your best case study might be a better growth asset than your
          next ten blog posts.
        </p>
      </details>
    </div>
  );
}

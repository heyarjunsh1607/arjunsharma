"use client";

import { useEffect, useRef, useState } from "react";

const glyphs = "abcdefghijklmnopqrstuvwxyz0123456789&+/?";
const duration = 700;

// Decodes the text from random glyphs the first time it scrolls into view.
// The real text stays in the page throughout, so crawlers and screen readers
// always read it once; the glyphs are a brief overlay marked data-scrambling.
export function ScrambleText({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [overlay, setOverlay] = useState<string | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    // A timer rather than animation frames, so the decode still finishes if
    // the tab is hidden partway through.
    let timer = 0;
    const run = () => {
      const start = performance.now();
      const tick = () => {
        const progress = Math.min((performance.now() - start) / duration, 1);
        if (progress === 1) {
          window.clearInterval(timer);
          setOverlay(null);
          return;
        }
        const settled = Math.floor(progress * text.length);
        setOverlay(
          [...text]
            .map((char, i) =>
              i < settled || char === " "
                ? char
                : glyphs[Math.floor(Math.random() * glyphs.length)],
            )
            .join(""),
        );
      };
      tick();
      timer = window.setInterval(tick, 45);
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      run();
    });
    observer.observe(node);
    return () => {
      observer.disconnect();
      window.clearInterval(timer);
    };
  }, [text]);

  return (
    <span ref={ref} style={{ position: "relative" }}>
      <span style={overlay === null ? undefined : { color: "transparent" }}>
        {text}
      </span>
      {overlay !== null && (
        <span
          aria-hidden="true"
          data-scrambling
          style={{ position: "absolute", top: 0, left: 0, whiteSpace: "nowrap" }}
        >
          {overlay}
        </span>
      )}
    </span>
  );
}

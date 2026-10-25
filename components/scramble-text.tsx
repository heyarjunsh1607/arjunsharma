"use client";

import { useEffect, useRef, useState } from "react";

const glyphs = "abcdefghijklmnopqrstuvwxyz0123456789&+/?";
const duration = 700;

// Decodes the text from random glyphs the first time it scrolls into view.
// Screen readers get the plain text; the animated copy is hidden from them.
export function ScrambleText({ text }: { text: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    let frame = 0;
    let last = 0;
    const run = (start: number) => (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      if (now - last > 45 || progress === 1) {
        last = now;
        const settled = Math.floor(progress * text.length);
        setDisplay(
          [...text]
            .map((char, i) =>
              i < settled || char === " "
                ? char
                : glyphs[Math.floor(Math.random() * glyphs.length)],
            )
            .join(""),
        );
      }
      if (progress < 1) frame = requestAnimationFrame(run(start));
    };
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      frame = requestAnimationFrame((now) => run(now)(now));
    });
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [text]);

  return (
    <>
      <span className="sr-only">{text}</span>
      <span ref={ref} aria-hidden="true">
        {display}
      </span>
    </>
  );
}

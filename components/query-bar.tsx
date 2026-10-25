"use client";

import { useEffect, useState } from "react";
import styles from "@/app/home.module.css";
import { PixelSearch } from "./pixel-icons";

type Query = { mode: string; text: string };

// Decorative search bar that types through example searches. Reduced
// motion keeps the first query still.
export function QueryBar({ queries }: { queries: Query[] }) {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(queries[0].text.length);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let query = 0;
    let typed = queries[0].text.length;
    let deleting = true;
    let timer: number;
    const tick = () => {
      let delay = deleting ? 22 : 48;
      if (deleting) {
        typed -= 1;
        if (typed === 0) {
          deleting = false;
          query = (query + 1) % queries.length;
          setIndex(query);
          delay = 320;
        }
      } else {
        typed += 1;
        if (typed === queries[query].text.length) {
          deleting = true;
          delay = 2400;
        }
      }
      setLength(typed);
      timer = window.setTimeout(tick, delay);
    };
    timer = window.setTimeout(tick, 2400);
    return () => window.clearTimeout(timer);
  }, [queries]);

  const current = queries[index];
  const modes = [...new Set(queries.map((query) => query.mode))];

  return (
    <div className={styles.query} aria-hidden="true">
      <PixelSearch />
      <span className={styles.queryText}>
        {current.text.slice(0, length)}
        <span className={styles.caret} />
      </span>
      <span className={styles.modes}>
        {modes.map((mode) => (
          <span key={mode} className={mode === current.mode ? styles.active : undefined}>
            {mode}
          </span>
        ))}
      </span>
    </div>
  );
}

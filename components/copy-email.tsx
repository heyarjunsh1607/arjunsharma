"use client";

import { useState } from "react";
import styles from "@/app/home.module.css";

// A mailto link that copies the address instead when the clipboard is
// available, so it still works without JavaScript.
export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  function copy(event: React.MouseEvent<HTMLAnchorElement>) {
    if (!navigator.clipboard) return;
    event.preventDefault();
    navigator.clipboard.writeText(email).then(
      () => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1600);
      },
      () => {
        window.location.href = `mailto:${email}`;
      },
    );
  }

  return (
    <>
      <a className={styles.copy} href={`mailto:${email}`} onClick={copy}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          {copied ? (
            <path d="m5 12.5 4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
          ) : (
            <>
              <rect x="8.5" y="8.5" width="11" height="11" rx="1.5" />
              <path d="M15.5 8.5v-3a1.5 1.5 0 0 0-1.5-1.5H6A1.5 1.5 0 0 0 4.5 5.5V14A1.5 1.5 0 0 0 6 15.5h2.5" />
            </>
          )}
        </svg>
        <span>{copied ? "Copied" : email}</span>
      </a>
      <span className="sr-only" role="status">
        {copied ? "Email address copied" : ""}
      </span>
    </>
  );
}

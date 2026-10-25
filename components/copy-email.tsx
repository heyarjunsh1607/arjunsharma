"use client";

import { useState } from "react";
import styles from "@/app/home.module.css";
import { PixelCheck, PixelCopy } from "./pixel-icons";

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
        {copied ? <PixelCheck /> : <PixelCopy />}
        <span>{copied ? "Copied" : email}</span>
      </a>
      <span className="sr-only" role="status">
        {copied ? "Email address copied" : ""}
      </span>
    </>
  );
}

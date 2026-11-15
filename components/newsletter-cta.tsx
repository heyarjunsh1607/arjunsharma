import { site } from "@/lib/content";
import styles from "@/app/home.module.css";
import { PixelArrow } from "@/components/pixel-icons";

export function NewsletterCta() {
  return (
    <a
      href={site.substackUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.cta}
    >
      <span>Read the latest SEO advice</span>
      <PixelArrow />
    </a>
  );
}

import { site } from "@/lib/content";
import styles from "@/app/home.module.css";

export function NewsletterForm() {
  return (
    <>
      <form
        action={`${site.substackUrl}/subscribe`}
        method="get"
        className={styles.signup}
        aria-label="Subscribe to Arjun’s notes"
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Your email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email"
          required
          maxLength={254}
          aria-describedby="newsletter-status"
        />
        <button type="submit">Get notes</button>
      </form>
      <p id="newsletter-status" className={styles.signupStatus}>
        Confirm your subscription on Substack.
      </p>
    </>
  );
}

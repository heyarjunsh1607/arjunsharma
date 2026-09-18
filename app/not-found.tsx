import Link from "next/link";
export default function NotFound() {
  return (
    <main className="wrap section">
      <p className="eyebrow">404 · PAGE NOT FOUND</p>
      <h1>This page isn’t here.</h1>
      <p className="hero-description">Let’s get you back to the right place.</p>
      <Link href="/" className="button" style={{ marginTop: 24 }}>
        Back to home
      </Link>
    </main>
  );
}

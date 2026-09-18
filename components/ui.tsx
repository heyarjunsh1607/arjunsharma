export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      {diagonal ? (
        <path d="M6 18 18 6M6 6h12v12" />
      ) : (
        <path d="M4 12h15m-6-6 6 6-6 6" />
      )}
    </svg>
  );
}
export function BookCall({ light = false }: { light?: boolean }) {
  return (
    <a className={`button ${light ? "button-light" : ""}`} href="#booking">
      Book a discovery call <Arrow diagonal />
    </a>
  );
}
export function Eyebrow({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <p className="eyebrow">
      <span className="section-number">{number}</span>
      {children}
    </p>
  );
}
export function ServiceIcon({ type }: { type: string }) {
  return (
    <svg
      className="service-icon"
      width="30"
      height="30"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      {type === "search" ? (
        <>
          <circle cx="13" cy="13" r="8" />
          <path d="m19 19 8 8" />
        </>
      ) : type === "spark" ? (
        <>
          <path d="M16 3c0 9-4 13-13 13 9 0 13 4 13 13 0-9 4-13 13-13-9 0-13-4-13-13Z" />
          <path d="M26 1v7m-3.5-3.5h7" />
        </>
      ) : (
        <>
          <path d="M3 5h26L19 17v9l-6 3V17L3 5Z" />
          <path d="M8 10h16" />
        </>
      )}
    </svg>
  );
}

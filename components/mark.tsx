// A magnifier holding an AI sparkle. Matches app/icon.svg.
export function Mark({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <rect width="64" height="64" rx="14" fill="#080808" />
      <rect
        x=".5"
        y=".5"
        width="63"
        height="63"
        rx="13.5"
        stroke="#fff"
        strokeOpacity=".16"
      />
      <circle cx="28" cy="28" r="14" stroke="#fff" strokeWidth="5" />
      <path
        d="m38.5 38.5 11 11"
        stroke="#fff"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M28 20.5c.9 4.4 3.1 6.6 7.5 7.5-4.4.9-6.6 3.1-7.5 7.5-.9-4.4-3.1-6.6-7.5-7.5 4.4-.9 6.6-3.1 7.5-7.5Z"
        fill="#fff"
      />
    </svg>
  );
}

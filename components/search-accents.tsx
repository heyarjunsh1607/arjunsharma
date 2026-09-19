import Image from "next/image";

export function BrandTile({ brand }: { brand: "google" | "chatgpt" }) {
  return (
    <span className={`brand-tile brand-tile-${brand}`} aria-hidden="true">
      <Image src={`/brands/${brand}.svg`} width={29} height={29} alt="" />
    </span>
  );
}

export function SearchObject() {
  return (
    <div className="search-object" aria-hidden="true">
      <span className="object-orbit orbit-one" />
      <span className="object-orbit orbit-two" />
      <span className="object-spark spark-one">✦</span>
      <span className="object-spark spark-two">+</span>
      <span className="lens-handle" />
      <span className="lens-ring">
        <span className="lens-glint" />
      </span>
      <span className="object-shadow" />
      <span className="little-key">↵</span>
    </div>
  );
}

export function JourneyObject() {
  return (
    <div className="journey-object" aria-hidden="true">
      <svg viewBox="0 0 260 95" fill="none">
        <path
          d="M31 62C80 62 56 23 113 23s38 44 109 44"
          stroke="#b9a6d4"
          strokeWidth="1.5"
          strokeDasharray="3 5"
        />
        <circle cx="32" cy="62" r="13" fill="#eee5fa" stroke="#bc9edd" />
        <circle cx="32" cy="62" r="4" fill="#9272c6" />
        <circle cx="126" cy="25" r="18" fill="#fcfaff" stroke="#bb9bdf" />
        <path
          d="m120 25 4 4 8-9"
          stroke="#9c7acc"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="222" cy="66" r="22" fill="#e1f0c9" stroke="#bbcea0" />
        <circle cx="222" cy="66" r="13" stroke="#abc38d" />
        <circle cx="222" cy="66" r="4" fill="#819e60" />
        <path
          d="m222 66 20-24m-9 2 9-2v9"
          stroke="#819e60"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="journey-key">↗</span>
    </div>
  );
}

export function CursorObject() {
  return (
    <span className="cursor-object" aria-hidden="true">
      <svg viewBox="0 0 60 72" fill="none">
        <path
          d="m12 5 36 34-18 2-9 18Z"
          fill="#9c83ca"
          stroke="#735994"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="m8 2 36 34-18 2-9 18Z"
          fill="#e1d5f3"
          stroke="#ad92cf"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="m13 9 22 22"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

export function ChatObject() {
  return (
    <div className="chat-object" aria-hidden="true">
      <span className="chat-bubble-back">✦</span>
      <span className="chat-bubble-front">
        <i />
        <i />
        <i />
      </span>
      <span className="chat-spark">+</span>
    </div>
  );
}

export function HeroTokens() {
  return (
    <div className="hero-tokens" aria-hidden="true">
      <span className="hero-token-left">
        <BrandTile brand="google" />
        <span className="token-trail">⌁</span>
      </span>
      <span className="hero-token-right">
        <BrandTile brand="chatgpt" />
        <span className="token-star">✦</span>
      </span>
    </div>
  );
}
export function TargetObject() {
  return (
    <div className="target-object" aria-hidden="true">
      <span className="target-disc">
        <i />
        <b />
      </span>
      <span className="target-arrow">↗</span>
      <span className="target-spark">✦</span>
    </div>
  );
}
export function EnvelopeObject() {
  return (
    <div className="envelope-object" aria-hidden="true">
      <span className="letter-sheet">
        <i />
        <i />
        <i />
      </span>
      <span className="envelope-pocket" />
      <span className="envelope-stamp">↗</span>
      <span className="envelope-star">✦</span>
    </div>
  );
}
export function BookmarkObject() {
  return (
    <span className="bookmark-object" aria-hidden="true">
      ✦
    </span>
  );
}

import { pixelPath } from "./pixel-icons";

// A pixel magnifier ("#") with an AI sparkle ("*") on a 12-cell grid.
// app/icon.svg draws the same cells.
const mark = [
  ".........*..",
  "........***.",
  "...###...*..",
  "..#...#.....",
  ".#.....#....",
  ".#.....#....",
  ".#.....#....",
  "..#...#.....",
  "...###.#....",
  "........#...",
  ".........#..",
  "..........#.",
];

// Muted lens with a white sparkle, for the avatar tile. Render at 24px so
// each cell is 2px.
export function MarkGlyph() {
  return (
    <svg width="24" height="24" viewBox="0 0 12 12" shapeRendering="crispEdges" aria-hidden="true">
      <path d={pixelPath(mark)} fill="currentColor" />
      <path d={pixelPath(mark, "*")} fill="#fff" />
    </svg>
  );
}

// The full mark on a dark tile, as used for the favicon and social image.
// Render at multiples of 16px so cells stay whole pixels.
export function Mark({ size = 64 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <rect width="64" height="64" rx="12" fill="#080808" />
      <rect x=".5" y=".5" width="63" height="63" rx="11.5" stroke="#fff" strokeOpacity=".16" />
      <path
        transform="translate(8 8) scale(4)"
        d={pixelPath(mark, "#*")}
        fill="#fff"
        shapeRendering="crispEdges"
      />
    </svg>
  );
}

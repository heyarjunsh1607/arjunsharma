// Pixel-art icons drawn from text grids, where each filled character is one
// cell. Each icon renders at a whole multiple of its grid with crisp edges,
// so every cell stays square.
export function pixelPath(rows: string[], filled = "#") {
  return rows
    .flatMap((row, y) =>
      [...row].map((cell, x) => (filled.includes(cell) ? `M${x} ${y}h1v1h-1z` : "")),
    )
    .join("");
}

function PixelIcon({ rows, size }: { rows: string[]; size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${rows[0].length} ${rows.length}`}
      fill="currentColor"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <path d={pixelPath(rows)} />
    </svg>
  );
}

export function PixelSearch() {
  return (
    <PixelIcon
      size={18}
      rows={[
        ".####....",
        "#....#...",
        "#....#...",
        "#....#...",
        "#....#...",
        ".####....",
        "......#..",
        ".......#.",
        "........#",
      ]}
    />
  );
}

export function PixelArrow() {
  return (
    <PixelIcon
      size={14}
      rows={[
        "..#####",
        ".....##",
        "....#.#",
        "...#..#",
        "..#...#",
        ".#.....",
        "#......",
      ]}
    />
  );
}

export function PixelCopy() {
  return (
    <PixelIcon
      size={16}
      rows={[
        "#####...",
        "#...#...",
        "#...#...",
        "#..#####",
        "####...#",
        "...#...#",
        "...#...#",
        "...#####",
      ]}
    />
  );
}

export function PixelCheck() {
  return (
    <PixelIcon
      size={16}
      rows={[
        "........",
        "........",
        ".......#",
        "......#.",
        "#....#..",
        ".#..#...",
        "..##....",
        "........",
      ]}
    />
  );
}

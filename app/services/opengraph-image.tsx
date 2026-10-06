import { ImageResponse } from "next/og";
export const alt = "Arjun Sharma. SEO and organic growth for design studios.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#f6f6f8",
        color: "#202128",
        display: "flex",
        flexDirection: "column",
        padding: "70px 80px",
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", fontSize: 28 }}>arjun sharma.</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 66, letterSpacing: -3, lineHeight: 1.12 }}>
          SEO and organic growth
        </div>
        <div style={{ fontSize: 66, letterSpacing: -3, color: "#7154dc" }}>
          for design studios.
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 22 }}>
        Good work deserves to be found. · arjunsharma.co
      </div>
    </div>,
    size,
  );
}

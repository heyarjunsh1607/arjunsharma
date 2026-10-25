import { ImageResponse } from "next/og";
export const alt = "Arjun Sharma. B2B growth with SEO and AI Search.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#fafaf9",
        color: "#20201e",
        display: "flex",
        flexDirection: "column",
        padding: "70px 80px",
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex", fontSize: 28 }}>Arjun Sharma</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 66, letterSpacing: -3, lineHeight: 1.12 }}>
          B2B growth with
        </div>
        <div style={{ fontSize: 66, letterSpacing: -3 }}>
          SEO + AI Search
        </div>
      </div>
      <div style={{ display: "flex", fontSize: 22 }}>
        Head of Growth at PIXELUP LABS · arjunsharma.co
      </div>
    </div>,
    size,
  );
}

import { ImageResponse } from "next/og";
import { Mark } from "@/components/mark";
export const alt = "Arjun Sharma. B2B growth with SEO and AI Search.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
const line = "rgba(255, 255, 255, 0.1)";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#080808",
        color: "#fff",
        display: "flex",
        width: "100%",
        height: "100%",
        padding: "0 140px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          padding: "64px 28px",
          borderLeft: `1px solid ${line}`,
          borderRight: `1px solid ${line}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <Mark size={56} />
          <div style={{ display: "flex", fontSize: 28, color: "rgba(255, 255, 255, 0.62)" }}>
            Arjun Sharma
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 66, letterSpacing: -3, lineHeight: 1.12 }}>
            B2B growth with
          </div>
          <div style={{ fontSize: 66, letterSpacing: -3 }}>
            SEO + AI Search
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "rgba(255, 255, 255, 0.62)" }}>
          Head of Growth at PIXELUP LABS · arjunsharma.co
        </div>
      </div>
    </div>,
    size,
  );
}

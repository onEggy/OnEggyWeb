import { ImageResponse } from "next/og";

export const alt = "OnEggy Technologies — Cloud-Native Engineering & DevOps Consulting";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#0E2A2C",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(245,158,11,0.18), transparent 45%), radial-gradient(circle at 10% 90%, rgba(27,142,146,0.35), transparent 45%)",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "9999px",
              backgroundColor: "#F59E0B",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: "30px",
              letterSpacing: "6px",
              textTransform: "uppercase",
              color: "#7FE3E6",
              fontWeight: 700,
              display: "flex",
            }}
          >
            OnEggy Technologies
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ fontSize: "74px", fontWeight: 800, lineHeight: 1.05, display: "flex" }}>
            Cloud-Native Engineering
          </div>
          <div style={{ fontSize: "74px", fontWeight: 800, lineHeight: 1.05, display: "flex", color: "#FBBF24" }}>
            &amp; DevOps Consulting
          </div>
          <div style={{ width: "180px", height: "10px", backgroundColor: "#F59E0B", borderRadius: "9999px", display: "flex" }} />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: "28px", color: "#C9D6D7" }}>
          <span style={{ display: "flex" }}>AWS</span>
          <span style={{ display: "flex", color: "#5C7173" }}>·</span>
          <span style={{ display: "flex" }}>Kubernetes</span>
          <span style={{ display: "flex", color: "#5C7173" }}>·</span>
          <span style={{ display: "flex" }}>DevOps</span>
          <span style={{ display: "flex", color: "#5C7173" }}>·</span>
          <span style={{ display: "flex" }}>Platform Engineering</span>
        </div>
      </div>
    ),
    { ...size }
  );
}

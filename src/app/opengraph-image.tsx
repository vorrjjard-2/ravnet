import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ruben Saulog — ML Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            color: "#737373",
            fontSize: 16,
            marginBottom: 24,
          }}
        >
          {"// hello world"}
        </div>
        <div
          style={{
            color: "#ffffff",
            fontSize: 64,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          Ruben Saulog
        </div>
        <div
          style={{
            color: "#e5e5e5",
            fontSize: 28,
            marginTop: 16,
          }}
        >
          ML Engineer
        </div>
        <div
          style={{
            color: "#737373",
            fontSize: 18,
            marginTop: 32,
            maxWidth: 700,
            lineHeight: 1.6,
          }}
        >
          Building production ML systems — from time series forecasting to
          distributed pipelines.
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 80,
            left: 80,
            color: "#262626",
            fontSize: 14,
            display: "flex",
            gap: 16,
          }}
        >
          <span>github.com/vorrjjard-2</span>
          <span>·</span>
          <span>linkedin.com/in/ruben-saulog</span>
        </div>
        <div
          style={{
            position: "absolute",
            top: 80,
            right: 80,
            color: "#ffffff",
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          rs.
        </div>
      </div>
    ),
    { ...size }
  );
}

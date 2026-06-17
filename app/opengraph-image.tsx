import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/data";

export const runtime = "edge";
export const alt = `${siteConfig.name} — Software Developer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #080b0a 0%, #08201a 55%, #06261c 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontFamily: "monospace",
            color: "#34d399",
            letterSpacing: 4,
          }}
        >
          PORTFOLIO
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 88,
            fontWeight: 700,
            marginTop: 16,
            background: "linear-gradient(90deg, #10b981, #34d399)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 36,
            marginTop: 8,
            color: "#a9b2d6",
          }}
        >
          {siteConfig.role}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            marginTop: 28,
            color: "#7c84ab",
            maxWidth: 900,
          }}
        >
          Building responsive web apps and AI-powered platforms with React,
          Firebase, and AI APIs.
        </div>
      </div>
    ),
    { ...size }
  );
}

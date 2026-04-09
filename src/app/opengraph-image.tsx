import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MrPrompts — Build with AI. No dev background required.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#18181b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              background: "#059669",
              borderRadius: "12px",
              width: "56px",
              height: "56px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            MP
          </div>
          <span style={{ color: "white", fontSize: "32px", fontWeight: 700 }}>
            Mr
            <span style={{ color: "#059669" }}>Prompts</span>
          </span>
        </div>
        <h1
          style={{
            color: "white",
            fontSize: "64px",
            fontWeight: 700,
            lineHeight: 1.1,
            marginTop: "40px",
            maxWidth: "800px",
          }}
        >
          Build with AI.
        </h1>
        <h2
          style={{
            color: "#a1a1aa",
            fontSize: "48px",
            fontWeight: 700,
            lineHeight: 1.1,
            marginTop: "8px",
          }}
        >
          No dev background required.
        </h2>
        <p
          style={{
            color: "#71717a",
            fontSize: "24px",
            marginTop: "32px",
            maxWidth: "700px",
          }}
        >
          Frameworks, tools, and guides for smart professionals. 4,000+ builders.
        </p>
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "80px",
            color: "#52525b",
            fontSize: "20px",
          }}
        >
          mrprompts.ai
        </div>
      </div>
    ),
    { ...size }
  );
}

import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "The LLM Instruction Set: Stop Prompting, Start Operating";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div style={{ background: "#18181b", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ color: "white", fontSize: "28px", fontWeight: 700 }}>Mr<span style={{ color: "#059669" }}>Prompts</span></span>
        </div>
        <p style={{ color: "#059669", fontSize: "18px", fontWeight: 600, marginTop: "32px", textTransform: "uppercase", letterSpacing: "2px" }}>Framework</p>
        <h1 style={{ color: "white", fontSize: "52px", fontWeight: 700, lineHeight: 1.1, marginTop: "12px", maxWidth: "900px" }}>The LLM Instruction Set</h1>
        <p style={{ color: "#a1a1aa", fontSize: "24px", marginTop: "16px", maxWidth: "700px" }}>15 instructions you type into any AI tool. DefineOutcome. ForceAction. CheckGaps.</p>
        <div style={{ display: "flex", gap: "8px", marginTop: "32px", flexWrap: "wrap" }}>
          {["DefineOutcome", "ForceAction", "CheckGaps", "AddContext", "Simplify"].map((tag) => (
            <span key={tag} style={{ background: "#27272a", color: "#a1a1aa", padding: "6px 14px", borderRadius: "20px", fontSize: "14px", fontFamily: "monospace" }}>{tag}</span>
          ))}
        </div>
        <div style={{ position: "absolute", bottom: "40px", right: "80px", color: "#52525b", fontSize: "20px" }}>mrprompts.ai</div>
      </div>
    ),
    { ...size }
  );
}

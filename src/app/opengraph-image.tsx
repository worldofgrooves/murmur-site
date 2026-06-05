import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// App Router file-convention OG image. Rendered at build time so the
// shared-link preview always matches the live headline. Brand palette
// mirrors the landing page: #0d0d0d background, #C8845A copper accent.
export const runtime = "nodejs";
export const alt = "Murmur — Stop Typing. Start Speaking.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Inline the app icon as a data URL (read from /public at build time) so
// satori doesn't need a network/file fetch while rendering.
const iconSrc = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public", "icon.png"),
).toString("base64")}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0d0d0d",
          backgroundImage:
            "radial-gradient(circle at 50% 36%, rgba(200,132,90,0.28), rgba(13,13,13,0) 58%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={iconSrc}
          width={132}
          height={132}
          style={{ borderRadius: 30, marginBottom: 44 }}
          alt="Murmur"
        />
        <div
          style={{
            display: "flex",
            fontSize: 84,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: -2,
            textAlign: "center",
            lineHeight: 1.05,
          }}
        >
          Stop Typing. Start Speaking.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 32,
            color: "#999999",
          }}
        >
          Native macOS dictation. 100% local.
        </div>
      </div>
    ),
    { ...size },
  );
}

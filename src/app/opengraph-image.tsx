import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "PerfectTales - Personalized AI Bedtime Stories for Kids";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1a1033 0%, #2d1b69 40%, #7c3aed 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Stars decoration */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: `${3 + Math.random() * 5}px`,
              height: `${3 + Math.random() * 5}px`,
              background: "#fbbf24",
              borderRadius: "50%",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.3 + Math.random() * 0.5,
            }}
          />
        ))}

        {/* Moon */}
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 80,
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
            opacity: 0.4,
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #7c3aed, #ec4899, #f59e0b)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "32px",
              fontWeight: 800,
            }}
          >
            P
          </div>
          <div
            style={{
              color: "white",
              fontSize: "36px",
              fontWeight: 800,
            }}
          >
            PerfectTales
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            color: "white",
            fontSize: "52px",
            fontWeight: 800,
            textAlign: "center",
            lineHeight: 1.2,
            maxWidth: "900px",
            marginBottom: "16px",
          }}
        >
          Personalized AI Bedtime Stories for Kids
        </div>

        {/* Subtitle */}
        <div
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "24px",
            textAlign: "center",
            maxWidth: "700px",
            marginBottom: "32px",
          }}
        >
          Magical tales with your child&apos;s name • 8 themes • 4 art styles • 55 languages
        </div>

        {/* Badges */}
        <div
          style={{
            display: "flex",
            gap: "16px",
          }}
        >
          {["📖 Ages 3-11", "✨ AI Generated", "🎨 Illustrated", "🔒 Private"].map(
            (badge) => (
              <div
                key={badge}
                style={{
                  padding: "8px 20px",
                  background: "rgba(255,255,255,0.1)",
                  borderRadius: "999px",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "18px",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                {badge}
              </div>
            )
          )}
        </div>

        {/* App Store badge */}
        <div
          style={{
            position: "absolute",
            bottom: 30,
            color: "rgba(255,255,255,0.4)",
            fontSize: "16px",
          }}
        >
          Free on the App Store
        </div>
      </div>
    ),
    { ...size }
  );
}

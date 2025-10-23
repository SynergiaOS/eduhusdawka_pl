import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = "image/png"

// Image generation
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 120,
  background: "#ffffff", // Główne białe tło z palety
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "32px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Main "E" letter */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontSize: 100,
          color: "#fed102", // Żółty akcent CTA
          fontFamily: "serif",
          position: "relative",
          zIndex: 2,
        }}
      >
        E
      </div>
      {/* Puzzle piece accent */}
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          width: 40,
          height: 40,
          borderRadius: "50%",
          background: "#1ebaf1", // Cyan secondary akcent
          zIndex: 1,
        }}
      />
      {/* Second puzzle piece accent */}
      <div
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
          width: 30,
          height: 30,
          borderRadius: "50%",
          background: "#a4efeb", // Jasny cyan z palety
          zIndex: 1,
        }}
      />
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  )
}

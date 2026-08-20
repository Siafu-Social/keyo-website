export const ogImageSize = { width: 1200, height: 630 }
export const ogImageContentType = "image/png"

export function KeyoOgImage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: "linear-gradient(135deg, #5A8DEE 0%, #F8FBFF 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 120,
          fontWeight: 700,
          color: "#0D1B3E",
          letterSpacing: "-0.02em",
        }}
      >
        KEYO
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 34,
          fontWeight: 500,
          color: "#1A2E55",
          marginTop: 16,
        }}
      >
        Build. Launch. Scale. Faster with Keyo.
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 24,
          color: "#3A4F80",
          marginTop: 40,
        }}
      >
        keyo.co.ke
      </div>
    </div>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { JobAlertBubble } from "@/components/job-alert-bubble"
import "./globals.css"

const manrope = Manrope({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Keyo Limited | Software Development Company in Kenya",
  description:
    "Keyo Limited helps startups and enterprises build, launch, and scale applications faster. We offer web, mobile, and enterprise software development services across Africa and beyond.",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} font-sans antialiased`}>
        {children}
        <JobAlertBubble />
        <Analytics />
      </body>
    </html>
  )
}

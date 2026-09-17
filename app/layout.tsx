import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import { JobAlertBubble } from "@/components/job-alert-bubble"
import "./globals.css"

const manrope = Manrope({ subsets: ["latin"] })

const GA_MEASUREMENT_ID = "G-1YBRPSZWJ4"

const siteDescription =
  "Keyo Limited is a Nairobi-based software development company helping startups and enterprises build, launch, and scale web, mobile, and enterprise applications faster."

export const metadata: Metadata = {
  metadataBase: new URL("https://www.keyo.co.ke"),
  title: {
    default: "Keyo Limited | Software Development Company in Kenya",
    template: "%s | Keyo Limited",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Keyo Limited | Software Development Company in Kenya",
    description: siteDescription,
    url: "/",
    siteName: "Keyo Limited",
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keyo Limited | Software Development Company in Kenya",
    description: siteDescription,
  },
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Keyo Limited",
  url: "https://www.keyo.co.ke",
  logo: "https://www.keyo.co.ke/logos/NewLogo.png",
  description: siteDescription,
  email: "info@keyo.co.ke",
  telephone: "+254720204403",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mogadishu Road, Industrial Area",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "info@keyo.co.ke",
    telephone: "+254720204403",
    areaServed: "KE",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        {children}
        <JobAlertBubble />
        <Analytics />
      </body>
    </html>
  )
}

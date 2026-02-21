import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

const siteUrl = "https://neuralchromium.dev"

export const metadata: Metadata = {
  title: {
    default: "Glazyr Viz — The Agentic Web Runtime",
    template: "%s | Glazyr Viz",
  },
  description:
    "Glazyr Viz is an agentic web runtime built on Chromium, NATS JetStream, and Python. Designed from the ground up for programmatic control by AI agents.",
  keywords: [
    "Glazyr Viz",
    "agentic web runtime",
    "AI agents",
    "Chromium",
    "NATS JetStream",
    "Python",
    "browser automation",
    "Senti-001",
    "OpenClaw",
    "programmatic browser",
  ],
  authors: [{ name: "Senti-001", url: "https://github.com/senti-001" }],
  creator: "Senti-001",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: "/Untitled design (7).png",
    shortcut: "/Untitled design (7).png",
    apple: "/Untitled design (7).png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Glazyr Viz",
    title: "Glazyr Viz — The Agentic Web Runtime",
    description: "Sovereign intelligence dispersal and agentic web execution.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Glazyr Viz Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    description:
      "An agentic web runtime built on Chromium, NATS JetStream, and Python. Designed for programmatic control by AI agents.",
    images: ["/Untitled design (7).png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1120" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Glazyr Viz",
              description:
                "An agentic web runtime built on Chromium, NATS JetStream, and Python.",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Cross-platform",
              author: {
                "@type": "Organization",
                name: "Senti-001",
                url: "https://github.com/senti-001",
              },
              url: siteUrl,
              codeRepository:
                "https://github.com/senti-001/neural-chromium-website",
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

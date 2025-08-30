import type React from "react"
import ClientLayout from "./client-layout"
import StructuredData from "@/components/structured-data"
import './globals.css'

export const metadata = {
  metadataBase: new URL('https://eduhustawka.pl'),
  title: 'EduHustawka - Terapia Dziecka Białystok, Pomigacze | Pedagog Specjalny',
  description: 'Profesjonalna terapia pedagogiczna, terapia ręki, TUS w Pomigaczach k. Białegostoku. Pedagog specjalny z 15-letnim doświadczeniem. Dojazd na terenie woj. podlaskiego.',
  generator: 'v0.dev',
  keywords: 'terapia pedagogiczna Białystok, pedagog specjalny Pomigacze, terapia ręki Podlaskie, TUS Białystok, centrum terapii dziecka, wsparcie rozwoju dziecka województwo podlaskie',
  authors: [{ name: 'Joanna Świrydowicz', url: 'https://eduhustawka.pl/o-mnie' }],
  creator: 'Joanna Świrydowicz',
  publisher: 'EduHustawka',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: 'pi1Uo8VFnU9PdbFUjuthQwEDxP-0OW7zGvxUhiT22fE',
  },
  openGraph: {
    title: 'EduHustawka - Centrum Terapii Dziecka Białystok, Pomigacze',
    description: 'Profesjonalna terapia pedagogiczna, terapia ręki, TUS w Pomigaczach k. Białegostoku. Pedagog specjalny z wieloletnim doświadczeniem.',
    url: 'https://eduhustawka.pl',
    siteName: 'EduHustawka',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'EduHustawka - Wsparcie Rozwoju Twojego Dziecka',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EduHustawka - Centrum Terapii Dziecka Białystok',
    description: 'Profesjonalna terapia pedagogiczna, terapia ręki, TUS w Pomigaczach k. Białegostoku. Pedagog specjalny z wieloletnim doświadczeniem.',
    images: ['/opengraph-image.png'],
    creator: '@eduhustawka',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <head>

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0d9488" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="EduHustawka" />
        <link rel="apple-touch-icon" href="/images/logo-eduhustawka.png" />

        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/images/joanna.png" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="dns-prefetch" href="//maps.google.com" />

        <StructuredData />
      </head>
      <body suppressHydrationWarning>
        {/* Skip link for screen readers */}
        <a
          href="#main-content"
          className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-teal-600 text-white px-4 py-2 rounded-md z-50"
        >
          Przejdź do głównej treści
        </a>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}

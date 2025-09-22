import type React from "react"
import ClientLayout from "./client-layout"
import StructuredData from "@/components/common/structured-data"
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
        <link rel="preload" href="/images/joanna.png" as="image" />
        <link rel="preload" href="/images/hero-children.png" as="image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />

        {/* Resource hints for better performance */}
        <link rel="preload" href="/images/logo-eduhustawka.png" as="image" />
        <link rel="preload" href="/images/autism-therapy.png" as="image" />
        <link rel="prefetch" href="/uslugi" />
        <link rel="prefetch" href="/rezerwacja" />
        <link rel="prefetch" href="/o-mnie" />

        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="dns-prefetch" href="//maps.google.com" />

        {/* Critical CSS - Inline for fastest FCP */}
        <style dangerouslySetInnerHTML={{
          __html: `
            :root{--background:0 0% 100%;--foreground:222.2 84% 4.9%;--primary:173 80% 40%;--primary-foreground:210 40% 98%;--border:214.3 31.8% 91.4%;--teal-50:#f0fdfa;--teal-600:#0d9488;--teal-700:#0f766e;--gray-100:#f3f4f6;--gray-600:#4b5563;--gray-700:#374151;--white:#ffffff}*{box-sizing:border-box;margin:0;padding:0}html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif}body{margin:0;line-height:inherit;background-color:hsl(var(--background));color:hsl(var(--foreground))}.min-h-screen{min-height:100vh}.container{width:100%;margin-left:auto;margin-right:auto;padding-left:1rem;padding-right:1rem}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}.flex{display:flex}.items-center{align-items:center}.justify-between{justify-content:space-between}.space-x-3>:not([hidden])~:not([hidden]){margin-left:.75rem}.space-x-8>:not([hidden])~:not([hidden]){margin-left:2rem}.header-fixed{position:fixed;top:0;left:0;right:0;z-index:50;transition:all .3s ease}.header-bg{background-color:rgba(255,255,255,.8);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px)}.header-scrolled{background-color:rgba(255,255,255,.95);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);box-shadow:0 10px 15px -3px rgba(0,0,0,.1);border-bottom:1px solid var(--gray-100)}.h-16{height:4rem}.h-20{height:5rem}@media (min-width:1024px){.lg\\:h-20{height:5rem}}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}@media (min-width:1024px){.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}}.text-teal-600{color:var(--teal-600)}.text-teal-700{color:var(--teal-700)}.text-gray-600{color:var(--gray-600)}.text-gray-700{color:var(--gray-700)}.bg-gradient-to-br{background-image:linear-gradient(to bottom right,var(--teal-50),var(--white))}.bg-gradient-to-r{background-image:linear-gradient(to right,var(--teal-600),var(--teal-600))}.bg-clip-text{-webkit-background-clip:text;background-clip:text}.text-transparent{color:transparent}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:200ms}.transition-shadow{transition-property:box-shadow;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:300ms}.duration-200{transition-duration:200ms}.duration-300{transition-duration:300ms}.loading-spinner{width:3rem;height:3rem;border:4px solid var(--teal-600);border-top-color:transparent;border-radius:50%;animation:spin 1s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}.skip-link{position:absolute;top:-40px;left:6px;background:var(--teal-600);color:var(--white);padding:8px;text-decoration:none;border-radius:4px;z-index:100}.skip-link:focus{top:6px}.hidden{display:none}@media (min-width:640px){.sm\\:block{display:block}}@media (min-width:1024px){.lg\\:flex{display:flex}}img{max-width:100%;height:auto}.w-12{width:3rem}.h-12{height:3rem}.w-14{width:3.5rem}.h-14{height:3.5rem}@media (min-width:1024px){.lg\\:w-14{width:3.5rem}.lg\\:h-14{height:3.5rem}}.rounded-full{border-radius:9999px}.shadow-lg{box-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)}.hover\\:text-teal-600:hover{color:var(--teal-600)}.hover\\:shadow-xl:hover{box-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 10px 10px -5px rgba(0,0,0,.04)}.group:hover .group-hover\\:w-full{width:100%}.relative{position:relative}.absolute{position:absolute}.-bottom-1{bottom:-.25rem}.left-0{left:0}.-mt-1{margin-top:-.25rem}.w-0{width:0}.w-full{width:100%}.h-0\\.5{height:.125rem}.bg-teal-600{background-color:var(--teal-600)}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:150ms}
          `
        }} />

        {/* Preload non-critical CSS */}
        <link
          rel="preload"
          href="/styles/non-critical.css"
          as="style"
        />
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var link = document.createElement('link');
              link.rel = 'stylesheet';
              link.href = '/styles/non-critical.css';
              document.head.appendChild(link);
            })();
          `
        }} />
        <noscript>
          <link rel="stylesheet" href="/styles/non-critical.css" />
        </noscript>

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

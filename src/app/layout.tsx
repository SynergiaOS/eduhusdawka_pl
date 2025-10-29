import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EduHuśtawka — Empatyczne wsparcie dla rozwoju Twojego dziecka",
  description:
    "Indywidualne terapie, diagnostyka i wsparcie edukacyjne w Białymstoku. Pomagam dzieciom budować pewność siebie i spokojniejsze relacje w domu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="description" content={metadata.description || undefined} />
        <meta property="og:title" content={String(metadata.title || "")} />
        <meta property="og:description" content={metadata.description || undefined} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.eduhustawka.pl" />
        <meta property="og:image" content="https://www.eduhustawka.pl/images/logo.svg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={String(metadata.title || "")} />
        <meta name="twitter:description" content={metadata.description || undefined} />

        {/* JSON-LD organization schema for Google */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "EduHuśtawka",
          url: "https://www.eduhustawka.pl",
          logo: "https://www.eduhustawka.pl/images/logo.svg",
          telephone: "+48 531 509 008"
        }) }} />

        {/* Canonical */}
        <link rel="canonical" href="https://www.eduhustawka.pl" />
        {/* Sitemap */}
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
      </head>
      <body className={`${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

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
      <body className={`${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

import type React from "react"
import ClientLayout from "./client-layout"
import './globals.css'

export const metadata = {
  metadataBase: new URL('https://eduhustawka.pl'),
  title: 'EduHustawka - Terapia pedagogiczna i rozwój dziecka',
  description: 'Profesjonalna terapia pedagogiczna, diagnoza KORP, trening słuchowy Johansena i inne usługi wspierające rozwój dzieci.',
  generator: 'v0.dev',
  openGraph: {
    title: 'EduHustawka - Terapia pedagogiczna i rozwój dziecka',
    description: 'Profesjonalna terapia pedagogiczna, diagnoza KORP, trening słuchowy Johansena i inne usługi wspierające rozwój dzieci.',
    url: 'https://eduhustawka.pl',
    siteName: 'EduHustawka',
    locale: 'pl_PL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EduHustawka - Terapia pedagogiczna i rozwój dziecka',
    description: 'Profesjonalna terapia pedagogiczna, diagnoza KORP, trening słuchowy Johansena i inne usługi wspierające rozwój dzieci.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}

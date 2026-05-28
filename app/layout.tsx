import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Jost, Dancing_Script } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const jost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['400', '600'],
  style: ['normal', 'italic'],
})

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  weight: '600',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://belly-dance-plum.vercel.app'),

  applicationName: 'Vox Mundi ASD',
  title: 'Vox Mundi ASD | Scuola di danza Napoli',
  description:
    'Vox Mundi Napoli, scuola di danza orientale e belly dance. Danza del Ventre, Tribal Fusion, Bollywood Dance e discipline artistiche nel cuore di Napoli.',
  keywords: [
    'Vox Mundi Napoli',
    'belly dance Napoli',
    'danza del ventre Napoli',
    'danza orientale Napoli',
    'Tribal Fusion Napoli',
    'Bollywood Dance Napoli',
    'Flamenco Arabo',
    'scuola di danza Napoli',
  ],
  creator: 'Vox Mundi ASD',
  publisher: 'Vox Mundi ASD',
  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    url: 'https://belly-dance-plum.vercel.app',
    siteName: 'Vox Mundi ASD',
    title: 'Vox Mundi ASD | Scuola di danza Napoli',
    description:
      'Danza del Ventre, Tribal Fusion, Bollywood Dance e discipline artistiche in uno spazio elegante, femminile e accogliente nel cuore di Napoli.',
    images: [
      {
        url: 'https://belly-dance-plum.vercel.app/additional/OG_image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vox Mundi ASD - Scuola di danza Napoli',
        type: 'image/jpeg',
      },
    ],
    locale: 'it_IT',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Vox Mundi ASD | Scuola di danza Napoli',
    description:
      'Danza del Ventre, Tribal Fusion, Bollywood Dance e discipline artistiche in uno spazio elegante e accogliente nel cuore di Napoli.',
    images: [
      {
        url: 'https://belly-dance-plum.vercel.app/additional/OG_image.jpg',
        alt: 'Vox Mundi ASD - Scuola di danza Napoli',
      },
    ],
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },

  robots: {
    index: true,
    follow: true,
  },
}
export const viewport: Viewport = {
  themeColor: '#D4A853',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${jost.variable} ${cormorant.variable} ${dancingScript.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning={true}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

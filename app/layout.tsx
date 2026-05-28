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
  metadataBase: new URL('https://dance-studio-prototype.vercel.app'),

  title: 'Lovely Dance Beauty & Fitness  Vomero, Napoli',
  description:
    'Corsi di danza, fitness e benessere nel cuore del Vomero. ' +
    'Uno spazio accogliente dove movimento, energia e femminilità si incontrano.',

  openGraph: {
    type: 'website',
    url: 'https://dance-studio-prototype.vercel.app',
    siteName: 'Lovely Dance Beauty & Fitness',
    title: 'Lovely Dance Beauty & Fitness  Vomero, Napoli',
    description:
      'Corsi di danza, fitness e benessere nel cuore del Vomero. ' +
      'Uno spazio accogliente dove movimento, energia e femminilità si incontrano.',
    images: [
      {
        url: '/additional/OG_image.jpg',
        width: 1200,
        height: 630,
        alt: 'Lovely Dance Beauty & Fitness  Vomero, Napoli',
      },
    ],
    locale: 'it_IT',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Lovely Dance Beauty & Fitness  Vomero, Napoli',
    description:
      'Corsi di danza, fitness e benessere nel cuore del Vomero. ' +
      'Uno spazio accogliente dove movimento, energia e femminilità si incontrano.',
    images: ['/additional/OG_image.jpg'],
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

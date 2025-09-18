import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KidsStories - Fun Educational Tales for Children',
  description: 'Discover magical stories for kids with valuable life lessons. Interactive storytelling that educates and entertains young minds.',
  keywords: 'kids stories, children\'s books, educational stories, moral lessons, reading activities, interactive stories',
  authors: [{ name: 'KidsStories' }],
  openGraph: {
    title: 'KidsStories - Fun Educational Tales for Children',
    description: 'Discover magical stories for kids with valuable life lessons. Interactive storytelling that educates and entertains young minds.',
    type: 'website',
    images: [
      {
        url: 'https://lovable.dev/opengraph-image-p98pqg.png',
        width: 1200,
        height: 630,
        alt: 'KidsStories - Educational Tales for Children',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@kidsstories',
    images: ['https://lovable.dev/opengraph-image-p98pqg.png'],
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&family=Fredoka+One&display=swap"
          rel="stylesheet"
        />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="msapplication-TileColor" content="#7c3aed" />
      </head>
      <body className={`${inter.className} min-h-screen bg-background flex flex-col`}>
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
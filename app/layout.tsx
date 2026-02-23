import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import AdSenseScript from './components/AdSenseScript'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NewsBot Network - AI-Powered News Network',
  description: 'Daily AI-generated news articles covering technology, business, and innovation. Automated news website with Google AdSense integration.',
  keywords: ['AI news', 'technology', 'business', 'innovation', 'daily news', 'automated news', 'newsbot'],
  authors: [{ name: 'NewsBot Network' }],
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://newsbot-network.vercel.app',
    title: 'NewsBot Network - AI-Powered News Network',
    description: 'Daily AI-generated news articles covering technology, business, and innovation.',
    siteName: 'NewsBot Network',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NewsBot Network - AI-Powered News Network',
    description: 'Daily AI-generated news articles covering technology, business, and innovation.',
  },
  verification: {
    google: 'your-google-verification-code', // You'll add this after AdSense approval
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <AdSenseScript />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" // Add your GA ID
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
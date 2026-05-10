import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://acadine.com'),
  title: 'Acadine Solutions | AI Consulting & Business Transformation',
  description: 'Transform your business with practical AI consulting. We diagnose workflows, design solutions, and implement systems that drive real operational improvement across healthcare, finance, logistics, and more.',
  keywords: ['AI consulting', 'business transformation', 'operational improvement', 'AI implementation', 'digital transformation'],
  authors: [{ name: 'Acadine Solutions' }],
  creator: 'Acadine Solutions',
  publisher: 'Acadine Solutions',
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://acadine.com',
    siteName: 'Acadine Solutions',
    title: 'Acadine Solutions | AI Consulting & Business Transformation',
    description: 'Transform your business with practical AI consulting that delivers real operational improvement.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Acadine Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acadine Solutions | AI Consulting & Business Transformation',
    description: 'Transform your business with practical AI consulting that delivers real operational improvement.',
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
  themeColor: '#0f1929',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

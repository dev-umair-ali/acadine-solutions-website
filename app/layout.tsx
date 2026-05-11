import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Manrope } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })

export const metadata: Metadata = {
  metadataBase: new URL('https://acadine.com'),
  title: {
    default: 'Acadine Solutions | Practical AI & Operations Consulting',
    template: '%s | Acadine Solutions',
  },
  description:
    'Practical AI consulting and operational improvement — assessments, process redesign, disciplined adoption, and measurable automation.',
  keywords: [
    'AI consulting',
    'business operations',
    'process improvement',
    'workflow automation',
    'AI implementation',
    'AI rescue',
    'enterprise consulting',
  ],
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
    title: 'Acadine Solutions | Practical AI & Operations Consulting',
    description:
      'Identify where AI creates value, strengthen workflows, and implement systems leadership can trust.',
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
    title: 'Acadine Solutions | Practical AI & Operations Consulting',
    description: 'Business-first consulting for AI readiness, automation, and recovery.',
  },
  icons: {
    icon: [{ url: '/logo.png', type: 'image/png' }],
    apple: [{ url: '/logo.png' }],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8f9fb' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0e1a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn(geist.variable, geistMono.variable, manrope.variable)} suppressHydrationWarning>
      <body className="font-sans antialiased bg-background">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Acadine Solutions',
  description:
    'Book a consultation or send a brief on your business challenge. We respond within one business day.',
  openGraph: {
    title: 'Contact | Acadine Solutions',
    description: 'Reach the Acadine Solutions team to discuss priorities and next steps.',
    url: 'https://acadine.com/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}

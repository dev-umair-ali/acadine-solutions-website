import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Consulting Services | Acadine Solutions',
  description:
    'Business assessment, process improvement, AI opportunity discovery, readiness roadmaps, automation, implementation, and AI rescue — grounded in operational outcomes.',
  openGraph: {
    title: 'Consulting Services | Acadine Solutions',
    description:
      'Practical services from workflow assessment through measured AI implementation.',
    url: 'https://acadine.com/services',
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}

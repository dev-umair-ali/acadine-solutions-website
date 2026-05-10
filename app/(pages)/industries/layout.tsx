import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industries | Acadine Solutions',
  description:
    'Operational and AI consulting across healthcare, finance, logistics, operations, customer support, and professional services.',
  openGraph: {
    title: 'Industries | Acadine Solutions',
    description: 'Industry-specific challenges, improvements, and engagement patterns.',
    url: 'https://acadine.com/industries',
  },
}

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return children
}

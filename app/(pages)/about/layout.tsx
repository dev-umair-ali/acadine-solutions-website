import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Acadine Solutions',
  description:
    'Execution-focused consulting: business problems first, practical AI only where it earns its place, and measurable operational improvement.',
  openGraph: {
    title: 'About | Acadine Solutions',
    description: 'How we work with leadership teams to deliver durable operational change.',
    url: 'https://acadine.com/about',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}

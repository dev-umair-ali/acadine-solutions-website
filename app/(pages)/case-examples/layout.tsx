import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: 'Selected Team Experience | AI, Data & Technology | Acadine',
  },
  description:
    'Explore prior professional experience of Acadine\u2019s founding team across artificial intelligence, enterprise analytics, systems architecture, life sciences, cybersecurity, technology modernization, and complex program execution.',
  openGraph: {
    title: 'Selected Team Experience | Acadine Solutions',
    description:
      'Senior experience across AI, enterprise data, architecture, cybersecurity, life sciences, modernization, and complex program execution.',
    url: 'https://www.acadine.io/case-examples/',
  },
}

export default function CaseExamplesLayout({ children }: { children: React.ReactNode }) {
  return children
}

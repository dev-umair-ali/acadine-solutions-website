import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Process | Diagnose, Design, Implement | Acadine Solutions',
  description:
    'How we work: diagnose workflows and constraints, design the right solutions, implement what delivers measurable value.',
  openGraph: {
    title: 'Our Process | Acadine Solutions',
    description: 'A clear three-phase consulting methodology built for enterprise adoption.',
    url: 'https://acadine.com/process',
  },
}

export default function ProcessLayout({ children }: { children: React.ReactNode }) {
  return children
}

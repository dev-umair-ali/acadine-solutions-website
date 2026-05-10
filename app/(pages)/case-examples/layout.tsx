import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Examples | Acadine Solutions',
  description:
    'Illustrative engagements structured as problem, solution, and outcome — executive reporting style.',
  openGraph: {
    title: 'Case Examples | Acadine Solutions',
    description: 'Representative results from workflow and AI modernization work.',
    url: 'https://acadine.com/case-examples',
  },
}

export default function CaseExamplesLayout({ children }: { children: React.ReactNode }) {
  return children
}

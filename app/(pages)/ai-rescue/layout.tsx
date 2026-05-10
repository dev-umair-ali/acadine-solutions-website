import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Rescue & Rework | Acadine Solutions',
  description:
    'Assessment and recovery for AI initiatives that missed expectations — strategy alignment, data readiness, adoption, and production reliability.',
  openGraph: {
    title: 'AI Rescue & Rework | Acadine Solutions',
    description: 'Fix failing AI implementations with a business-first recovery approach.',
    url: 'https://acadine.com/ai-rescue',
  },
}

export default function AIRescueLayout({ children }: { children: React.ReactNode }) {
  return children
}

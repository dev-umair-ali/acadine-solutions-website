import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/home/hero-section'
import { ProblemsSection } from '@/components/home/problems-section'
import { PhilosophySection } from '@/components/home/philosophy-section'
import { ServicesSection } from '@/components/home/services-section'
import { ProcessSection } from '@/components/home/process-section'
import { AiRescueHighlightSection } from '@/components/home/ai-rescue-highlight-section'
import { UseCasesSection } from '@/components/home/use-cases-section'
import { FinalCtaSection } from '@/components/home/final-cta-section'

export const metadata: Metadata = {
  title: 'Acadine Solutions | Practical AI & Operations Consulting',
  description:
    'Make your business AI-ready without the hype. We fix operational gaps first, then implement AI and automation where it creates measurable value.',
  openGraph: {
    title: 'Acadine Solutions | Practical AI & Operations Consulting',
    description:
      'Business-first assessments, process improvement, disciplined AI adoption, and rescue for initiatives that missed expectations.',
    url: 'https://acadine.com',
    type: 'website',
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemsSection />
        <PhilosophySection />
        <ServicesSection />
        <ProcessSection />
        <AiRescueHighlightSection />
        <UseCasesSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  )
}

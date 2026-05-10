import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/home/hero-section'
import { ProblemsSection } from '@/components/home/problems-section'
import { ServicesSection } from '@/components/home/services-section'
import { ProcessSection } from '@/components/home/process-section'
import { UseCasesSection } from '@/components/home/use-cases-section'
import { FinalCtaSection } from '@/components/home/final-cta-section'

export const metadata: Metadata = {
  title: 'Acadine Solutions | AI Consulting & Business Transformation',
  description: 'Practical AI consulting that drives real business value. We diagnose workflows, design solutions, and implement systems that deliver measurable operational improvements.',
  openGraph: {
    title: 'Acadine Solutions | AI Consulting & Business Transformation',
    description: 'Practical AI consulting that drives real business value.',
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
        <ServicesSection />
        <ProcessSection />
        <UseCasesSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  )
}

'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SectionHeader } from '@/components/section/section-header'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { siteContainer } from '@/lib/site-layout'

const caseStudies = [
  {
    company: 'Healthcare Network',
    industry: 'Healthcare',
    challenge: 'Administrative burden consuming 40% of clinical staff time on documentation and scheduling.',
    solution: 'Implemented AI-assisted documentation, automated scheduling, and intelligent workflow routing.',
    results: [
      { metric: '35% reduction', description: 'in administrative time per provider' },
      { metric: '2 hours/day', description: 'additional clinical time per provider' },
      { metric: '92% adoption', description: 'rate among clinical staff' },
    ],
  },
  {
    company: 'Financial Institution',
    industry: 'Finance',
    challenge: 'Manual transaction reconciliation taking 15,000+ hours annually with frequent errors.',
    solution: 'Built AI-powered reconciliation engine with automated exception handling and real-time monitoring.',
    results: [
      { metric: '99.2% accuracy', description: 'improvement in reconciliation' },
      { metric: '12,000 hours', description: 'saved annually' },
      { metric: '$2.1M', description: 'annual cost savings' },
    ],
  },
  {
    company: 'Logistics Provider',
    industry: 'Logistics',
    challenge: 'Inefficient route planning resulting in 18% higher fuel costs and late deliveries.',
    solution: 'Deployed AI routing optimization considering real-time traffic, weather, and delivery constraints.',
    results: [
      { metric: '16% reduction', description: 'in fuel costs' },
      { metric: '12% fewer', description: 'late deliveries' },
      { metric: '24% increase', description: 'in daily delivery volume' },
    ],
  },
  {
    company: 'Manufacturing Facility',
    industry: 'Operations',
    challenge: 'Quality control issues causing 8% reject rate and customer complaints.',
    solution: 'Implemented computer vision-based quality assurance with real-time defect detection.',
    results: [
      { metric: '94% reduction', description: 'in defect rate' },
      { metric: '99.2% accuracy', description: 'in quality detection' },
      { metric: '$4.8M', description: 'saved in waste reduction' },
    ],
  },
  {
    company: 'Customer Support Center',
    industry: 'Support',
    challenge: '45-minute average resolution time with high support team turnover.',
    solution: 'Deployed AI chatbots for tier-1 support and intelligent ticket routing to specialists.',
    results: [
      { metric: '68% reduction', description: 'in resolution time for tier-1 issues' },
      { metric: '42% fewer', description: 'support tickets requiring human intervention' },
      { metric: '35% increase', description: 'in team satisfaction' },
    ],
  },
  {
    company: 'Professional Services Firm',
    industry: 'Professional Services',
    challenge: 'Resource allocation inefficiencies leading to 20% staff utilization variance.',
    solution: 'Built AI-powered resource planning system with project forecasting and skill matching.',
    results: [
      { metric: '18% increase', description: 'in billable hours' },
      { metric: '8% improvement', description: 'in resource utilization consistency' },
      { metric: '$5.2M', description: 'increased annual revenue' },
    ],
  },
]

const HEADLINE_STATS = [
  { value: '6', label: 'Engagements' },
  { value: '$12M+', label: 'Cost Savings' },
  { value: '95%+', label: 'Adoption Rates' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function CaseExamplesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative border-b border-border/40 bg-muted/20 bg-dot-grid py-14 md:py-18">
          <div className={siteContainer}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <SectionHeader
                index="01"
                eyebrow="Evidence"
                title="Results we can point to, structured as we'd report them internally"
                description="Illustrative engagements organized as problem, approach, and outcome. Each case reflects real operating constraints — not best-case lab conditions."
              />
            </motion.div>
          </div>
        </section>

        {/* Headline Metrics Strip */}
        <section className="border-b border-border/40 bg-muted/20 texture-grain">
          <div className={siteContainer}>
            <div className="grid grid-cols-3 divide-x divide-border/40">
              {HEADLINE_STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="py-10 text-center md:py-12"
                >
                  <p className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies — Alternating Layout */}
        <section className="py-14 md:py-18">
          <div className={siteContainer}>
            <SectionHeader
              index="02"
              eyebrow="Case Studies"
              title="Six engagements, six operating realities"
              className="mb-14"
            />

            <div className="space-y-16 md:space-y-20">
              {caseStudies.map((study, index) => {
                const isEven = index % 2 === 1
                const heroResult = study.results[0]
                const secondaryResults = study.results.slice(1)

                return (
                  <motion.article
                    key={index}
                    custom={index}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    className="grid items-start gap-8 border-t border-border/40 pt-12 first:border-t-0 first:pt-0 md:grid-cols-2 md:gap-14"
                  >
                    {/* Challenge + Solution side */}
                    <div className={isEven ? 'md:order-2' : 'md:order-1'}>
                      <span className="inline-block rounded-full border border-accent/25 bg-accent/8 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-accent">
                        {study.industry}
                      </span>
                      <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                        {study.company}
                      </h3>

                      <div className="mt-6">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-destructive/70">
                          Challenge
                        </p>
                        <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                          {study.challenge}
                        </p>
                      </div>

                      <div className="mt-5">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent/80">
                          Approach
                        </p>
                        <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    {/* Results side */}
                    <div className={isEven ? 'md:order-1' : 'md:order-2'}>
                      <div className="rounded-2xl border border-border/45 bg-linear-to-br from-primary/3 via-background to-accent/4 p-6 shadow-[0_24px_64px_-36px_rgba(15,23,42,0.35)] md:p-8">
                        {/* Hero metric */}
                        <div className="mb-6 border-b border-border/40 pb-6">
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                            Key Result
                          </p>
                          <p className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                            {heroResult.metric}
                          </p>
                          <p className="mt-1.5 text-sm text-muted-foreground">
                            {heroResult.description}
                          </p>
                        </div>

                        {/* Secondary metrics */}
                        <div className="grid grid-cols-2 gap-4">
                          {secondaryResults.map((result, j) => (
                            <div key={j} className="rounded-xl border border-border/40 bg-background/60 p-4">
                              <p className="text-xl font-bold tracking-tight text-accent md:text-2xl">
                                {result.metric}
                              </p>
                              <p className="mt-1 text-[13px] leading-snug text-muted-foreground">
                                {result.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 md:py-18">
          <div className={siteContainer}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border/45 bg-linear-to-br from-primary/3 via-background to-accent/4 p-1 shadow-[0_24px_64px_-36px_rgba(15,23,42,0.35)]"
            >
              <div className="rounded-[14px] bg-background/80 px-8 py-12 text-center backdrop-blur-sm md:px-14 md:py-14">
                <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  Ready to build your own case study?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                  Your success story starts with a diagnosis. We&apos;ll scope the engagement around measurable outcomes — not generic promises.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-[0_6px_22px_-6px_rgba(15,23,42,0.45)] transition hover:brightness-[1.07]"
                >
                  Start Your Project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

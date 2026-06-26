'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SectionHeader } from '@/components/section/section-header'
import { motion } from 'framer-motion'
import { INDUSTRIES, POSITIONING } from '@/lib/constants'
import Link from 'next/link'
import {
  ArrowRight,
  Building2,
  Heart,
  Landmark,
  Truck,
  Settings,
  Headphones,
  Briefcase,
  ChevronDown,
} from 'lucide-react'
import { siteContainer } from '@/lib/site-layout'
import { cn } from '@/lib/utils'
import { useState } from 'react'

const INDUSTRY_ICONS: Record<string, React.ElementType> = {
  healthcare: Heart,
  finance: Landmark,
  logistics: Truck,
  operations: Settings,
  support: Headphones,
  professional: Briefcase,
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
}

function IndustryCard({ industry, index }: { industry: (typeof INDUSTRIES)[number]; index: number }) {
  const [open, setOpen] = useState(false)
  const Icon = INDUSTRY_ICONS[industry.id] ?? Building2

  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn(
        'overflow-hidden rounded-2xl border border-border/45 bg-background/90 shadow-md transition-all duration-300',
        open && 'border-accent/35 shadow-lg',
      )}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start gap-4 p-6 text-left transition hover:bg-muted/10 md:p-7"
        aria-expanded={open}
      >
        <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border/50 bg-muted/25">
          <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-bold tracking-tight text-foreground md:text-2xl">{industry.title}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{industry.description}</p>
          {!open && (
            <p className="mt-4 text-[13px] font-bold text-accent">Learn more</p>
          )}
        </div>
        <ChevronDown
          className={cn('mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300', open && 'rotate-180')}
          aria-hidden
        />
      </button>

      <div
        className={cn(
          'grid transition-[grid-template-rows] duration-300 ease-out',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <div className="space-y-8 border-t border-border/40 px-6 pb-7 pt-2 md:px-7">
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-foreground/45">Common Pain Points</h4>
              <ul className="mt-4 space-y-2.5">
                {industry.painPoints.map((point) => (
                  <li key={point} className="flex gap-2.5 text-[14px] leading-relaxed text-foreground/70">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-destructive/60" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-foreground/45">Usual Engagement Areas</h4>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {industry.engagementAreas.map((area) => (
                  <li key={area} className="flex gap-2 text-[13px] leading-snug text-foreground/65">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {area}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-foreground/45">Example Starting Points</h4>
              <ul className="mt-4 flex flex-wrap gap-2">
                {industry.startingPoints.map((point) => (
                  <li
                    key={point}
                    className="rounded-lg border border-border/50 bg-muted/20 px-3 py-1.5 text-[12px] font-medium text-foreground/70"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-[13px] font-bold text-primary-foreground shadow-sm transition hover:brightness-105"
            >
              {industry.cta}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative border-b border-border/40 bg-muted/20 py-14 md:py-18 lg:py-20">
          <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40" aria-hidden />
          <div className={`relative ${siteContainer}`}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-foreground/45">Industries</p>
              <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
                Industries We Serve
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
                We work across industries to help businesses improve operations and adopt AI where it makes sense — with practical, sector-specific examples.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-14 md:py-18">
          <div className={siteContainer}>
            <SectionHeader
              index="02"
              eyebrow="Focus Areas"
              title="Six sectors, one operating standard"
              description="Click any industry to explore common pain points, engagement areas, and practical starting points."
              className="mb-10"
            />

            <div className="space-y-4">
              {INDUSTRIES.map((industry, i) => (
                <IndustryCard key={industry.id} industry={industry} index={i} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border/40 bg-muted/15 py-14 md:py-18">
          <div className={`${siteContainer} mx-auto max-w-4xl`}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border/45 bg-background/90 p-8 shadow-md md:p-10"
            >
              <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Not Sure Where AI Fits In Your Industry?
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                Every industry has different workflows, systems, risks, and opportunities. If your organization is unsure where to begin, Acadine can help through either:
              </p>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-border/50 bg-muted/15 p-6">
                  <h3 className="text-lg font-bold text-foreground">AI Opportunity Audit</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                    A deeper review to identify where AI, automation, reporting, or process improvement may create practical business value.
                  </p>
                  <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-foreground/45">Best for organizations that want to understand:</p>
                  <ul className="mt-3 space-y-2">
                    {[
                      'Which opportunities are most valuable',
                      'Which workflows are ready for AI',
                      'What data or process gaps may exist',
                      'Where to begin before implementation',
                    ].map((item) => (
                      <li key={item} className="flex gap-2 text-[13px] text-foreground/70">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border border-border/50 bg-muted/15 p-6">
                  <h3 className="text-lg font-bold text-foreground">AI Education &amp; Enablement</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                    A practical education session for leadership teams and employees.
                  </p>
                  <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.16em] text-foreground/45">Best for organizations that want to understand:</p>
                  <ul className="mt-3 space-y-2">
                    {[
                      'What AI can realistically do',
                      'How AI may apply to their industry',
                      'Where teams can use AI safely and effectively',
                      'How to identify use cases without overcomplicating the process',
                    ].map((item) => (
                      <li key={item} className="flex gap-2 text-[13px] text-foreground/70">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-sm transition hover:brightness-105"
              >
                Explore AI Opportunities for Your Industry
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="py-14 md:py-18">
          <div className={`${siteContainer} mx-auto max-w-3xl text-center`}>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">Our approach</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">{POSITIONING.headline}</h2>
              <div className="mt-6 space-y-2 text-[15px] leading-relaxed text-muted-foreground">
                {POSITIONING.paragraphs.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-t border-border/40 bg-muted/20 py-14 md:py-18">
          <div className={`${siteContainer} mx-auto max-w-3xl`}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-border/45 bg-background/90 p-8 text-center shadow-md md:p-10"
            >
              <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">Not Seeing Your Industry?</h2>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                AI opportunities are not limited to one sector. If your organization relies on people, processes, documents, data, reporting, customers, or repetitive workflows, there may be practical opportunities to improve how work gets done.
              </p>
              <p className="mt-6 text-[14px] font-semibold text-foreground">Acadine can help through:</p>
              <ul className="mx-auto mt-4 max-w-md space-y-2 text-left text-[14px] text-foreground/70">
                {[
                  'An initial discovery conversation',
                  'A paid AI Opportunity Audit',
                  'AI education and enablement',
                  'A formal Diagnose → Design → Implement engagement',
                ].map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-sm transition hover:brightness-105"
              >
                Explore Where AI Fits
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

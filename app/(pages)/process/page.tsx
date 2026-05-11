'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SectionHeader } from '@/components/section/section-header'
import { motion } from 'framer-motion'
import { PROCESS_STEPS } from '@/lib/constants'
import Link from 'next/link'
import { ArrowRight, Clock, Compass, PenTool, Rocket } from 'lucide-react'
import { siteContainer } from '@/lib/site-layout'

const PHASE_DETAILS: Record<
  number,
  {
    icon: typeof Compass
    extended: string
    activities: string[]
    duration: string
    output: string
  }
> = {
  1: {
    icon: Compass,
    extended:
      'We immerse in how work actually happens — systems, handoffs, data flows, and decision points — so recommendations are grounded in reality rather than assumptions.',
    activities: [
      'Comprehensive workflow analysis and mapping',
      'Stakeholder interviews across departments',
      'Data landscape and system assessment',
      'Pain point and opportunity identification',
    ],
    duration: '4–6 weeks',
    output: 'Diagnostic Report',
  },
  2: {
    icon: PenTool,
    extended:
      'We translate diagnosis into a prescriptive plan — prioritized use cases, architecture decisions, and a phased timeline your leadership team can sponsor with confidence.',
    activities: [
      'AI use-case identification and prioritization',
      'Solution architecture and technical design',
      'Implementation roadmap and timeline planning',
      'Resource and budget requirements definition',
    ],
    duration: '3–5 weeks',
    output: 'Roadmap & Strategy',
  },
  3: {
    icon: Rocket,
    extended:
      'We build, integrate, and harden — then train your teams so the solution runs under their ownership with measurable, ongoing performance.',
    activities: [
      'System development and integration',
      'Staff training and change management',
      'Deployment and performance monitoring',
      'Optimization and continuous improvement',
    ],
    duration: '8–16 weeks',
    output: 'Live System & Training',
  },
}

const PRINCIPLES = [
  {
    icon: Compass,
    title: 'Business context first',
    description:
      'Every recommendation traces back to a workflow, a KPI, or a constraint your leadership can verify. We never prescribe technology without an operational reason.',
    bg: 'bg-linear-to-br from-accent/5 via-background to-transparent',
  },
  {
    icon: PenTool,
    title: 'Iterate, don\u2019t overcommit',
    description:
      'We build and test in phases with explicit decision gates — so scope stays honest and investments are validated before they scale.',
    bg: 'bg-linear-to-br from-primary/4 via-background to-accent/3',
  },
  {
    icon: Rocket,
    title: 'Transfer ownership early',
    description:
      'Training, runbooks, and operating cadences are embedded from day one. We succeed when your teams run the solution without us.',
    bg: 'bg-linear-to-br from-muted/40 via-background to-primary/4',
  },
]

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero ── */}
        <section className="relative border-b border-border/40 bg-muted/20 py-14 md:py-18 lg:py-20">
          <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40" aria-hidden />
          <div className={`relative ${siteContainer}`}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-foreground/45">Process</p>
              <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
                Diagnose &rarr; Design &rarr; Implement
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
                Our three-step process: understand workflows, data, and problems.
                Define the right solutions. Build and deploy what works.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Process Timeline — alternating ── */}
        <section className="py-14 md:py-18 lg:py-24">
          <div className={siteContainer}>
            <SectionHeader
              index="01"
              eyebrow="Three phases"
              title="How we move from diagnosis to delivery"
              description="Each phase has explicit deliverables, durations, and decision gates — so you always know where things stand."
              align="center"
              className="mb-14 md:mb-18"
            />

            <div className="relative">
              {/* Center connecting line */}
              <div
                className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-linear-to-b from-accent/40 via-accent/20 to-transparent lg:block"
                aria-hidden
              />

              <div className="space-y-12 lg:space-y-20">
                {PROCESS_STEPS.map((step, index) => {
                  const detail = PHASE_DETAILS[step.number]
                  const Icon = detail.icon
                  const isLeft = index % 2 === 0

                  return (
                    <motion.div
                      key={step.number}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.55, delay: index * 0.1 }}
                      className="relative"
                    >
                      {/* Timeline dot — desktop */}
                      <div className="absolute left-1/2 top-10 z-10 hidden h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border-2 border-accent/40 bg-background shadow-md lg:flex">
                        <span className="font-mono text-sm font-bold text-accent">
                          {String(step.number).padStart(2, '0')}
                        </span>
                      </div>

                      {/* Animated connector pulse — desktop */}
                      {index < PROCESS_STEPS.length - 1 && (
                        <motion.div
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                          className="absolute left-1/2 top-15 hidden h-[calc(100%-1rem)] w-px origin-top -translate-x-1/2 bg-linear-to-b from-accent/30 to-transparent lg:block"
                          aria-hidden
                        />
                      )}

                      <div
                        className={`lg:grid lg:grid-cols-2 lg:gap-16 ${
                          isLeft ? '' : 'lg:direction-rtl'
                        }`}
                      >
                        {/* Card side */}
                        <div
                          className={`${
                            isLeft
                              ? 'lg:col-start-1'
                              : 'lg:col-start-2 lg:direction-ltr'
                          }`}
                        >
                          <div className="rounded-2xl border border-border/45 bg-linear-to-br from-primary/3 via-background to-accent/4 p-6 shadow-[0_24px_64px_-36px_rgba(15,23,42,0.35)] md:p-8">
                            {/* Mobile phase number */}
                            <div className="mb-4 flex items-center gap-3 lg:hidden">
                              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/40 bg-background">
                                <span className="font-mono text-sm font-bold text-accent">
                                  {String(step.number).padStart(2, '0')}
                                </span>
                              </div>
                              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                                Phase {step.number}
                              </span>
                            </div>

                            <div className="mb-3 flex items-center gap-3">
                              <Icon className="h-5 w-5 text-accent" aria-hidden />
                              <h3 className="text-2xl font-bold text-foreground sm:text-[1.7rem]">
                                {step.title}
                              </h3>
                            </div>
                            <p className="text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
                              {detail.extended}
                            </p>

                            {/* Activities */}
                            <div className="mt-5 border-t border-border/30 pt-4">
                              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                                Key activities
                              </span>
                              <ul className="mt-2.5 space-y-1.5">
                                {detail.activities.map((a) => (
                                  <li
                                    key={a}
                                    className="flex items-center gap-2 text-[13px] text-foreground sm:text-[14px]"
                                  >
                                    <span className="h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                                    {a}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Badges */}
                            <div className="mt-5 flex flex-wrap gap-3">
                              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/6 px-3 py-1 text-[11px] font-bold text-accent">
                                <Clock className="h-3 w-3" aria-hidden />
                                {detail.duration}
                              </span>
                              <span className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-muted/30 px-3 py-1 text-[11px] font-bold text-foreground/70">
                                {detail.output}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Empty side — spacer on desktop */}
                        <div className="hidden lg:block" />
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── Principles ── */}
        <section className="relative bg-muted/20 py-14 md:py-18 lg:py-20">
          <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden />

          <div className={`relative ${siteContainer}`}>
            <SectionHeader
              index="02"
              eyebrow="Principles"
              title="What guides every engagement"
              description="The beliefs that shape how we work — and why outcomes stick."
              className="mb-12 md:mb-14"
            />

            <div className="space-y-5">
              {PRINCIPLES.map((p, index) => {
                const Icon = p.icon
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, delay: index * 0.1 }}
                    className={`rounded-2xl border border-border/45 ${p.bg} p-6 shadow-md md:flex md:items-start md:gap-6 md:p-8`}
                  >
                    <div className="mb-4 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/8 md:mb-0">
                      <Icon className="h-5 w-5 text-accent" aria-hidden />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground sm:text-xl">
                        {p.title}
                      </h3>
                      <p className="mt-2 max-w-3xl text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
                        {p.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative border-t border-border/50 pb-14 pt-12 md:pb-16 md:pt-14 lg:pb-18 lg:pt-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,oklch(0.62_0.12_200/0.12),transparent_60%)]" aria-hidden />

          <div className={`relative ${siteContainer}`}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-[1.25rem] border border-border/50 bg-linear-to-b from-muted/50 to-background p-px shadow-[0_32px_80px_-40px_rgba(15,23,42,0.35)]"
            >
              <div className="texture-grain absolute inset-0 rounded-[1.2rem] opacity-25" aria-hidden />
              <div className="relative rounded-[1.15rem] bg-background/95 px-6 py-10 text-center md:px-14 md:py-12">
                <div className="mx-auto flex max-w-3xl flex-col items-center">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] font-medium text-accent">03</span>
                    <span className="h-px w-12 bg-border" aria-hidden />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                      Next step
                    </span>
                  </div>
                  <h2 className="mt-5 text-balance text-[1.75rem] font-bold leading-[1.15] tracking-tight text-foreground sm:text-3xl lg:text-[2.35rem]">
                    Ready to start your transformation?
                  </h2>
                  <p className="mt-4 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground">
                    Let&apos;s begin with a diagnosis of your current state — we&apos;ll
                    respond with a grounded view of fit, risk, and a path forward.
                  </p>
                  <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-[13px] font-bold text-primary-foreground shadow-[0_16px_44px_-14px_rgba(15,23,42,0.55)] transition hover:brightness-105"
                      >
                        Schedule diagnosis
                        <ArrowRight className="h-4 w-4 opacity-90" aria-hidden />
                      </Link>
                    </motion.div>
                    <Link
                      href="/case-examples"
                      className="inline-flex items-center rounded-lg border border-border/55 px-6 py-3 text-[13px] font-bold text-foreground transition hover:border-accent/40 hover:bg-muted/40"
                    >
                      Case examples
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

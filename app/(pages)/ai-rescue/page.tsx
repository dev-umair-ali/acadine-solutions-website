'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SectionHeader } from '@/components/section/section-header'
import { motion } from 'framer-motion'
import { COMMON_PROBLEMS } from '@/lib/constants'
import Link from 'next/link'
import { ArrowRight, AlertTriangle, ShieldCheck, Clock, TrendingUp } from 'lucide-react'
import { siteContainer } from '@/lib/site-layout'

const ASSESSMENT_PHASES = [
  {
    number: '01',
    title: 'Diagnosis',
    description:
      'Deep-dive into the failed implementation to isolate root causes — technical debt, data gaps, process mismatches, or adoption barriers.',
    deliverables: [
      'Root-cause analysis report',
      'Technical & data audit findings',
      'Stakeholder impact assessment',
    ],
  },
  {
    number: '02',
    title: 'Assessment',
    description:
      'Evaluate what is salvageable. Score existing infrastructure, models, and integrations against the operational requirements that were missed.',
    deliverables: [
      'Asset viability scorecard',
      'Gap analysis vs. business requirements',
      'Risk register with severity ratings',
    ],
  },
  {
    number: '03',
    title: 'Redesign',
    description:
      'Architect a recovery plan that addresses every failure mode — with near-term stabilization steps and a sustainable long-term path.',
    deliverables: [
      'Recovery roadmap with milestones',
      'Revised architecture & integration plan',
      'Change management playbook',
    ],
  },
]

const TRUST_STATS = [
  { value: '94%', label: 'Recovery rate', icon: TrendingUp },
  { value: '6 wks', label: 'Avg. time to stabilize', icon: Clock },
  { value: '20+', label: 'Engagements completed', icon: ShieldCheck },
]

export default function AIRescuePage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden border-b border-border/40 bg-muted/20 py-16 md:py-20 lg:py-24">
          <div className="texture-grain pointer-events-none absolute inset-0 opacity-30" aria-hidden />

          <div className={`relative ${siteContainer}`}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent/8 px-4 py-2">
                <AlertTriangle className="h-4 w-4 text-accent" aria-hidden />
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">
                  Recovery · Rework
                </span>
              </div>

              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
                AI Rescue & Rework
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-[15px] leading-relaxed text-muted-foreground sm:text-base lg:text-lg">
                Focused on fixing failed AI projects. We assess and fix AI implementations
                that are not delivering value — stabilize outcomes, rebuild on a foundation that works.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Problems & Solutions ── */}
        <section className="py-14 md:py-18 lg:py-20">
          <div className={siteContainer}>
            <SectionHeader
              index="01"
              eyebrow="Failure patterns"
              title="Why AI projects fail — and how we fix each one"
              description="Every rescue starts with pattern recognition. These are the failure modes we see most, paired with the corrective approach."
            />

            <div className="mt-12 space-y-0 md:mt-14">
              {COMMON_PROBLEMS.map((problem, index) => (
                <motion.div
                  key={problem.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative grid items-start gap-6 border-b border-border/30 py-8 first:pt-0 last:border-b-0 md:grid-cols-[1fr_auto_1fr] md:gap-10 md:py-10"
                >
                  {/* Left — problem */}
                  <div>
                    <span className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-md bg-foreground/5 font-mono text-[11px] font-bold text-muted-foreground">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-foreground sm:text-xl">
                      {problem.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
                      {problem.description}
                    </p>
                  </div>

                  {/* Center divider */}
                  <div className="hidden h-full w-px bg-accent/25 md:block" aria-hidden />

                  {/* Right — solution */}
                  <div className="rounded-xl border border-accent/15 bg-accent/4 px-5 py-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent">
                      Corrective approach
                    </span>
                    <p className="mt-2 text-[14px] font-medium leading-relaxed text-foreground sm:text-[15px]">
                      {problem.solution}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Assessment Timeline ── */}
        <section className="relative bg-muted/20 py-14 md:py-18 lg:py-20">
          <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden />

          <div className={`relative ${siteContainer}`}>
            <SectionHeader
              index="02"
              eyebrow="Assessment process"
              title="A systematic path from failure to recovery"
              description="Three phases, each with concrete deliverables — so you always know where things stand."
            />

            {/* Vertical timeline */}
            <div className="relative mt-12 md:mt-16">
              {/* Connecting line */}
              <div
                className="absolute left-5 top-0 hidden h-full w-px bg-linear-to-b from-accent/50 via-accent/20 to-transparent md:left-8 md:block"
                aria-hidden
              />

              <div className="space-y-10 md:space-y-14">
                {ASSESSMENT_PHASES.map((phase, index) => (
                  <motion.div
                    key={phase.number}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    className="relative md:pl-20"
                  >
                    {/* Phase number dot */}
                    <div className="absolute left-0 top-0 hidden h-10 w-10 items-center justify-center rounded-full border-2 border-accent/40 bg-background font-mono text-sm font-bold text-accent md:left-[13px] md:flex lg:left-[18px]">
                      {phase.number}
                    </div>

                    <div className="rounded-2xl border border-border/45 bg-background/90 p-6 shadow-md md:p-8">
                      <span className="mb-2 inline-block font-mono text-sm font-bold text-accent md:hidden">
                        Phase {phase.number}
                      </span>
                      <h3 className="text-xl font-bold text-foreground sm:text-2xl">
                        {phase.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
                        {phase.description}
                      </p>

                      <div className="mt-5 border-t border-border/30 pt-4">
                        <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                          Deliverables
                        </span>
                        <ul className="mt-2.5 space-y-1.5">
                          {phase.deliverables.map((d) => (
                            <li
                              key={d}
                              className="flex items-center gap-2 text-[13px] text-foreground sm:text-[14px]"
                            >
                              <span className="h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust Strip ── */}
        <section className="section-invert border-y border-border/40 bg-primary py-12 md:py-14">
          <div className={siteContainer}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid gap-8 sm:grid-cols-3 sm:gap-6"
            >
              {TRUST_STATS.map((stat) => {
                const Icon = stat.icon
                return (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center text-center"
                  >
                    <Icon className="mb-3 h-5 w-5 text-accent" aria-hidden />
                    <span className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 text-[12px] font-semibold uppercase tracking-[0.18em] text-primary-foreground/55">
                      {stat.label}
                    </span>
                  </div>
                )
              })}
            </motion.div>
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
                    <span className="font-mono text-[11px] font-medium text-accent">04</span>
                    <span className="h-px w-12 bg-border" aria-hidden />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
                      Next step
                    </span>
                  </div>
                  <h2 className="mt-5 text-balance text-[1.75rem] font-bold leading-[1.15] tracking-tight text-foreground sm:text-3xl lg:text-[2.35rem]">
                    Ready to rescue your AI investment?
                  </h2>
                  <p className="mt-4 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground">
                    Don&apos;t write off what you&apos;ve built. Share context on the
                    project — we&apos;ll respond with an honest assessment and a path forward.
                  </p>
                  <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-[13px] font-bold text-primary-foreground shadow-[0_16px_44px_-14px_rgba(15,23,42,0.55)] transition hover:brightness-105"
                      >
                        Start rescue assessment
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

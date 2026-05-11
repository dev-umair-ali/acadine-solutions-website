'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { ArrowRight, TrendingUp, TrendingDown, Clock, DollarSign, Users, Target, Zap, BarChart3, CheckCircle2, AlertTriangle } from 'lucide-react'
import { siteContainer } from '@/lib/site-layout'

const caseStudies = [
  {
    company: 'Healthcare Network',
    industry: 'Healthcare',
    color: 'from-teal-500/15 to-accent/5',
    accentColor: 'text-teal-600 dark:text-teal-400',
    iconBg: 'bg-teal-500/10',
    challenge: 'Administrative burden consuming 40% of clinical staff time on documentation and scheduling.',
    solution: 'Implemented AI-assisted documentation, automated scheduling, and intelligent workflow routing.',
    approach: [
      'Mapped end-to-end clinical workflows across 12 departments',
      'Identified 23 automation opportunities, prioritized by impact',
      'Phased rollout with staff training at each stage',
    ],
    heroMetric: { value: 35, suffix: '%', label: 'reduction in admin time' },
    results: [
      { icon: Clock, metric: '2 hrs/day', description: 'additional clinical time per provider' },
      { icon: Users, metric: '92%', description: 'adoption rate among staff' },
    ],
  },
  {
    company: 'Financial Institution',
    industry: 'Finance',
    color: 'from-blue-500/15 to-primary/5',
    accentColor: 'text-blue-600 dark:text-blue-400',
    iconBg: 'bg-blue-500/10',
    challenge: 'Manual transaction reconciliation taking 15,000+ hours annually with frequent errors.',
    solution: 'Built AI-powered reconciliation engine with automated exception handling and real-time monitoring.',
    approach: [
      'Audited reconciliation workflows and exception patterns',
      'Designed rules-first engine; ML only for ambiguous cases',
      'Deployed with governance auditors reviewing every threshold',
    ],
    heroMetric: { value: 99.2, suffix: '%', label: 'reconciliation accuracy' },
    results: [
      { icon: Clock, metric: '12,000 hrs', description: 'saved annually' },
      { icon: DollarSign, metric: '$2.1M', description: 'annual cost savings' },
    ],
  },
  {
    company: 'Logistics Provider',
    industry: 'Logistics',
    color: 'from-amber-500/15 to-orange-500/5',
    accentColor: 'text-amber-600 dark:text-amber-400',
    iconBg: 'bg-amber-500/10',
    challenge: 'Inefficient route planning resulting in 18% higher fuel costs and late deliveries.',
    solution: 'Deployed AI routing optimization considering real-time traffic, weather, and delivery constraints.',
    approach: [
      'Baseline analysis of 6 months of delivery data',
      'Built constraint model with driver, vehicle, and SLA rules',
      'Live A/B testing against existing routes for 4 weeks',
    ],
    heroMetric: { value: 16, suffix: '%', label: 'reduction in fuel costs' },
    results: [
      { icon: TrendingDown, metric: '12% fewer', description: 'late deliveries' },
      { icon: TrendingUp, metric: '24% more', description: 'daily delivery volume' },
    ],
  },
  {
    company: 'Manufacturing Facility',
    industry: 'Operations',
    color: 'from-violet-500/15 to-purple-500/5',
    accentColor: 'text-violet-600 dark:text-violet-400',
    iconBg: 'bg-violet-500/10',
    challenge: 'Quality control issues causing 8% reject rate and customer complaints.',
    solution: 'Implemented computer vision-based quality assurance with real-time defect detection.',
    approach: [
      'Catalogued defect types across 3 production lines',
      'Trained detection model on 50,000+ labeled samples',
      'Integrated into existing conveyor systems non-disruptively',
    ],
    heroMetric: { value: 94, suffix: '%', label: 'reduction in defect rate' },
    results: [
      { icon: Target, metric: '99.2%', description: 'detection accuracy' },
      { icon: DollarSign, metric: '$4.8M', description: 'saved in waste reduction' },
    ],
  },
  {
    company: 'Customer Support Center',
    industry: 'Support',
    color: 'from-rose-500/15 to-pink-500/5',
    accentColor: 'text-rose-600 dark:text-rose-400',
    iconBg: 'bg-rose-500/10',
    challenge: '45-minute average resolution time with high support team turnover.',
    solution: 'Deployed AI chatbots for tier-1 support and intelligent ticket routing to specialists.',
    approach: [
      'Analyzed 18 months of ticket data for pattern clusters',
      'Built tiered response system: rules first, then AI assist',
      'Human-in-the-loop escalation for complex queries',
    ],
    heroMetric: { value: 68, suffix: '%', label: 'faster resolution time' },
    results: [
      { icon: Zap, metric: '42% fewer', description: 'tickets needing humans' },
      { icon: Users, metric: '35% better', description: 'team satisfaction score' },
    ],
  },
  {
    company: 'Professional Services Firm',
    industry: 'Professional Services',
    color: 'from-emerald-500/15 to-green-500/5',
    accentColor: 'text-emerald-600 dark:text-emerald-400',
    iconBg: 'bg-emerald-500/10',
    challenge: 'Resource allocation inefficiencies leading to 20% staff utilization variance.',
    solution: 'Built AI-powered resource planning system with project forecasting and skill matching.',
    approach: [
      'Mapped resource flows across 8 practice areas',
      'Built demand forecasting tied to pipeline and skill profiles',
      'Weekly operating cadence embedded into leadership rhythm',
    ],
    heroMetric: { value: 18, suffix: '%', label: 'increase in billable hours' },
    results: [
      { icon: BarChart3, metric: '8% better', description: 'utilization consistency' },
      { icon: DollarSign, metric: '$5.2M', description: 'annual revenue increase' },
    ],
  },
]

const HEADLINE_STATS = [
  { value: 6, label: 'Engagements', suffix: '' },
  { value: 12, label: 'Cost Savings', prefix: '$', suffix: 'M+' },
  { value: 95, label: 'Adoption Rates', suffix: '%+' },
]

function AnimatedCounter({ value, prefix, suffix }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionVal = useMotionValue(0)
  const rounded = useTransform(motionVal, (v) =>
    Number.isInteger(value) ? Math.round(v) : v.toFixed(1),
  )

  useEffect(() => {
    const controls = animate(motionVal, value, { duration: 1.8, ease: [0.22, 1, 0.36, 1] })
    return controls.stop
  }, [motionVal, value])

  useEffect(() => {
    const unsub = rounded.on('change', (v) => {
      if (ref.current) ref.current.textContent = `${prefix ?? ''}${v}${suffix ?? ''}`
    })
    return unsub
  }, [rounded, prefix, suffix])

  return <span ref={ref}>{prefix ?? ''}{Number.isInteger(value) ? 0 : '0.0'}{suffix ?? ''}</span>
}

export default function CaseExamplesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative border-b border-border/40 bg-muted/20 py-14 md:py-18 lg:py-20">
          <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40" aria-hidden />
          <div className={`relative ${siteContainer}`}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-foreground/45">Case Examples</p>
              <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
                Problem &rarr; Solution &rarr; Outcome
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
                Real examples of how we help businesses identify problems, design solutions, and deliver measurable results.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Animated Stats Strip */}
        <section className="section-invert border-b border-white/10 bg-primary text-primary-foreground">
          <div className={siteContainer}>
            <div className="grid grid-cols-3 divide-x divide-white/10">
              {HEADLINE_STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="py-10 text-center md:py-12"
                >
                  <p className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                    <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.22em] text-primary-foreground/50">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 md:py-20 lg:py-24">
          <div className={siteContainer}>
            <div className="space-y-20 md:space-y-28">
              {caseStudies.map((study, index) => {
                const isEven = index % 2 === 1

                return (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="relative"
                  >
                    {/* Case number */}
                    <div className="pointer-events-none absolute -left-2 -top-6 font-mono text-[6rem] font-black leading-none text-foreground/[0.03] sm:text-[8rem] md:-left-4 md:-top-8 lg:text-[10rem]">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div className={`relative grid gap-8 md:grid-cols-[1fr_1.1fr] md:gap-12 lg:gap-16 ${isEven ? 'md:[direction:rtl] md:*:[direction:ltr]' : ''}`}>
                      {/* Left — Info */}
                      <div className="flex flex-col">
                        <div className="flex items-center gap-3">
                          <span className="inline-block rounded-full border border-accent/25 bg-accent/8 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-accent">
                            {study.industry}
                          </span>
                          <span className="font-mono text-[11px] font-bold text-foreground/25">
                            Case {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>

                        <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                          {study.company}
                        </h3>

                        {/* Challenge */}
                        <div className="mt-6 rounded-xl border border-destructive/15 bg-destructive/[0.03] p-5">
                          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-destructive/70">
                            <AlertTriangle className="h-3.5 w-3.5" />
                            Challenge
                          </div>
                          <p className="mt-2.5 text-[15px] leading-relaxed text-foreground/75">
                            {study.challenge}
                          </p>
                        </div>

                        {/* Solution */}
                        <div className="mt-3 rounded-xl border border-accent/15 bg-accent/[0.03] p-5">
                          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-accent/80">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            Solution
                          </div>
                          <p className="mt-2.5 text-[15px] leading-relaxed text-foreground/75">
                            {study.solution}
                          </p>
                        </div>

                        {/* Approach steps */}
                        <div className="mt-5 space-y-2">
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/35">Approach</p>
                          {study.approach.map((step, j) => (
                            <div key={j} className="flex items-start gap-3">
                              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-muted/50 text-[10px] font-bold text-foreground/40">
                                {j + 1}
                              </span>
                              <p className="text-[13px] leading-relaxed text-muted-foreground">{step}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right — Results card */}
                      <div className="flex flex-col gap-4">
                        {/* Hero metric card */}
                        <div className={`relative overflow-hidden rounded-2xl bg-linear-to-br ${study.color} border border-border/40 p-8 shadow-[0_28px_72px_-32px_rgba(15,23,42,0.3)] md:p-10`}>
                          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl" aria-hidden />
                          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-foreground/40">Key Result</p>
                          <div className="mt-4 flex items-baseline gap-1">
                            <span className="text-6xl font-black tracking-tight text-foreground md:text-7xl">
                              {study.heroMetric.value}
                            </span>
                            <span className="text-3xl font-bold text-foreground/60 md:text-4xl">{study.heroMetric.suffix}</span>
                          </div>
                          <p className="mt-2 text-[15px] font-medium text-muted-foreground">{study.heroMetric.label}</p>

                          {/* Mini bar chart */}
                          <div className="mt-6 flex h-16 items-end gap-1">
                            {Array.from({ length: 12 }).map((_, k) => {
                              const progress = (k + 1) / 12
                              const h = 20 + progress * 80
                              return (
                                <motion.div
                                  key={k}
                                  initial={{ height: 0 }}
                                  whileInView={{ height: `${h}%` }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.4, delay: 0.03 * k }}
                                  className="flex-1 rounded-sm bg-foreground/10"
                                />
                              )
                            })}
                          </div>
                        </div>

                        {/* Secondary metrics */}
                        <div className="grid grid-cols-2 gap-4">
                          {study.results.map((result, j) => {
                            const Icon = result.icon
                            return (
                              <div
                                key={j}
                                className="rounded-xl border border-border/45 bg-background p-5 shadow-sm transition-all hover:border-accent/30 hover:shadow-md"
                              >
                                <div className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg ${study.iconBg}`}>
                                  <Icon className={`h-4 w-4 ${study.accentColor}`} />
                                </div>
                                <p className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                                  {result.metric}
                                </p>
                                <p className="mt-1 text-[13px] leading-snug text-muted-foreground">
                                  {result.description}
                                </p>
                              </div>
                            )
                          })}
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
              className="section-invert relative overflow-hidden rounded-[1.25rem] bg-primary p-10 text-primary-foreground shadow-[0_40px_100px_-48px_rgba(15,23,42,0.85)] md:p-14 lg:p-16"
            >
              <div className="pointer-events-none absolute inset-0 texture-grain opacity-15" aria-hidden />
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-[80px]" aria-hidden />

              <div className="relative mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Ready to build your own success story?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-primary-foreground/65">
                  Every engagement starts with a diagnosis. We scope the project around measurable outcomes your leadership can defend.
                </p>
                <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary-foreground px-8 py-3.5 text-[14px] font-bold text-primary shadow-xl transition hover:bg-white"
                  >
                    Start Your Project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/process"
                    className="inline-flex items-center rounded-xl border border-primary-foreground/20 bg-primary-foreground/5 px-6 py-3.5 text-[14px] font-semibold text-primary-foreground transition hover:bg-primary-foreground/10"
                  >
                    See our process
                  </Link>
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

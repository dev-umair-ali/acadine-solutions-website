'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Search, PenTool, Rocket, FileCheck, FileText, BarChart3 } from 'lucide-react'
import { siteContainer, sectionY } from '@/lib/site-layout'
import { SectionHeader } from '@/components/section/section-header'
import { cn } from '@/lib/utils'

const phases = [
  {
    number: '01',
    title: 'Diagnose',
    subtitle: 'Weeks 1–4',
    icon: Search,
    description:
      'Map how work actually happens — systems, handoffs, approvals, and information flows. Surface where value leaks before recommending anything.',
    deliverables: [
      { icon: FileCheck, label: 'Evidence pack with operational metrics' },
      { icon: FileText, label: 'Prioritized findings & trade-off matrix' },
    ],
    accent: 'from-accent/15 to-accent/5',
    iconBg: 'bg-accent/10 ring-accent/20',
  },
  {
    number: '02',
    title: 'Design',
    subtitle: 'Weeks 4–8',
    icon: PenTool,
    description:
      'Define the right solutions with explicit scope, owners, and decision gates. Your leadership team reviews every recommendation before a line of code is written.',
    deliverables: [
      { icon: FileText, label: 'Decision memo for executive review' },
      { icon: BarChart3, label: 'Implementation roadmap with milestones' },
    ],
    accent: 'from-primary/10 to-primary/5',
    iconBg: 'bg-primary/8 ring-primary/15',
  },
  {
    number: '03',
    title: 'Implement',
    subtitle: 'Weeks 8–16',
    icon: Rocket,
    description:
      'Build and deploy what works — with runbooks, monitoring, and handover so your team can operate confidently from day one.',
    deliverables: [
      { icon: BarChart3, label: 'Live dashboards tied to KPIs' },
      { icon: FileCheck, label: 'Operations runbook & team handover' },
    ],
    accent: 'from-foreground/8 to-foreground/3',
    iconBg: 'bg-foreground/6 ring-foreground/12',
  },
]

function TimelinePhase({
  phase,
  index,
  isLast,
}: {
  phase: (typeof phases)[0]
  index: number
  isLast: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const Icon = phase.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-0"
    >
      {/* Content — alternating sides */}
      <div className={cn('lg:pr-12', index % 2 === 1 && 'lg:order-3 lg:pl-12 lg:pr-0')}>
        <div className={cn(
          'rounded-2xl border border-border/45 bg-linear-to-br p-6 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.25)] lg:p-7',
          phase.accent,
        )}>
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] font-bold text-accent">{phase.number}</span>
            <span className="rounded-full border border-border/40 bg-background/80 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground/45">
              {phase.subtitle}
            </span>
          </div>
          <h3 className="mt-4 text-xl font-bold tracking-tight">{phase.title}</h3>
          <p className="mt-2.5 text-[14px] leading-[1.7] text-muted-foreground">{phase.description}</p>

          {/* Deliverables */}
          <div className="mt-5 space-y-2 border-t border-border/30 pt-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-foreground/35">Deliverables</p>
            {phase.deliverables.map((d) => {
              const DIcon = d.icon
              return (
                <div key={d.label} className="flex items-center gap-2.5 rounded-lg bg-background/60 px-3 py-2">
                  <DIcon className="h-3.5 w-3.5 shrink-0 text-accent/70" strokeWidth={1.6} />
                  <span className="text-[12px] font-medium text-foreground/65">{d.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Center timeline node */}
      <div className="hidden flex-col items-center lg:flex">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.12 + 0.2, type: 'spring', stiffness: 300 }}
          className={cn(
            'relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-background shadow-[0_8px_32px_-8px_rgba(15,23,42,0.3)] ring-1',
            phase.iconBg,
          )}
        >
          <Icon className="h-6 w-6 text-foreground/80" strokeWidth={1.6} />
        </motion.div>
        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 0.8, delay: index * 0.12 + 0.3, ease: 'easeOut' }}
            className="w-px flex-1 bg-linear-to-b from-accent/40 via-border/50 to-transparent"
          />
        )}
      </div>

      {/* Empty column for alternating layout */}
      <div className={cn('hidden lg:block', index % 2 === 1 && 'lg:order-1')} />
    </motion.div>
  )
}

export function ProcessSection() {
  return (
    <section className={`relative border-y border-border/40 bg-muted/20 ${sectionY}`}>
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.3]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 texture-grain opacity-[0.2]" aria-hidden />

      <div className={`relative ${siteContainer}`}>
        <SectionHeader
          index="05"
          eyebrow="Method"
          title="Diagnose → design → implement — with executive checkpoints"
          description="No black-box delivery: each phase ends with artifacts your leadership team can scrutinize."
          align="center"
          className="mb-14 lg:mb-16"
        />

        {/* Desktop timeline */}
        <div className="hidden lg:block">
          <div className="space-y-0">
            {phases.map((phase, i) => (
              <TimelinePhase
                key={phase.number}
                phase={phase}
                index={i}
                isLast={i === phases.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Mobile: vertical stack */}
        <div className="space-y-4 lg:hidden">
          {phases.map((phase, i) => {
            const Icon = phase.icon
            return (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative"
              >
                {/* Connecting line */}
                {i < phases.length - 1 && (
                  <div className="absolute left-[27px] top-[68px] h-[calc(100%+1rem)] w-px bg-linear-to-b from-accent/30 to-transparent" />
                )}
                <div className={cn(
                  'relative rounded-2xl border border-border/45 bg-linear-to-br p-5 shadow-md',
                  phase.accent,
                )}>
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      'flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-xl bg-background shadow-md ring-1',
                      phase.iconBg,
                    )}>
                      <Icon className="h-5 w-5 text-foreground/80" strokeWidth={1.6} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] font-bold text-accent">{phase.number}</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">{phase.subtitle}</span>
                      </div>
                      <h3 className="mt-1.5 text-[17px] font-bold tracking-tight">{phase.title}</h3>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{phase.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-1.5 border-t border-border/30 pt-3">
                    {phase.deliverables.map((d) => {
                      const DIcon = d.icon
                      return (
                        <div key={d.label} className="flex items-center gap-2 text-[11px] text-foreground/55">
                          <DIcon className="h-3 w-3 shrink-0 text-accent/60" strokeWidth={1.6} />
                          {d.label}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center lg:mt-16"
        >
          <Link
            href="/process"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3 text-[13px] font-bold text-primary-foreground shadow-[0_16px_44px_-14px_rgba(15,23,42,0.5)] transition hover:brightness-105"
          >
            Full methodology
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

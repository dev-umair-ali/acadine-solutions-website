'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Boxes, GitBranch, Hand, HelpCircle, ArrowRight, Search, Workflow, Lightbulb } from 'lucide-react'
import { siteContainer, sectionY } from '@/lib/site-layout'
import { SectionHeader } from '@/components/section/section-header'
import { cn } from '@/lib/utils'

const problems = [
  {
    icon: Boxes,
    title: 'Too many tools, no results',
    description: 'SaaS sprawl creates integration debt, unclear ownership, and reporting that never quite reconciles.',
    signal: 'Signal: tool inventory vs. outcomes',
    tint: 'from-sky-500/12 via-background to-background',
    iconBg: 'bg-sky-500/12 text-sky-700 dark:text-sky-300 border-sky-500/25',
  },
  {
    icon: Hand,
    title: 'Manual processes',
    description: 'High-touch workflows consume leadership attention, especially close cycles, compliance checks, and approval chains that should run themselves.',
    signal: 'Signal: hours per cycle × frequency',
    tint: 'from-amber-500/12 via-background to-background',
    iconBg: 'bg-amber-500/12 text-amber-700 dark:text-amber-300 border-amber-500/25',
  },
  {
    icon: HelpCircle,
    title: 'AI confusion',
    description: 'Teams struggle to separate feasible automation from vendor theater. Every pitch sounds transformative; nothing ships.',
    signal: 'Signal: pilot count vs. production count',
    tint: 'from-violet-500/12 via-background to-background',
    iconBg: 'bg-violet-500/12 text-violet-700 dark:text-violet-300 border-violet-500/25',
  },
  {
    icon: GitBranch,
    title: 'Poor workflows',
    description: 'Handoffs and exceptions are invisible, so improvement has no baseline and no accountability.',
    signal: 'Signal: exception rate × resolution time',
    tint: 'from-teal-500/12 via-background to-background',
    iconBg: 'bg-teal-500/12 text-teal-700 dark:text-teal-300 border-teal-500/25',
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

function ChallengesVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="relative mt-8 overflow-hidden rounded-2xl border border-border/60 bg-linear-to-br from-primary/5 via-card to-accent/8 p-5 shadow-[0_24px_64px_-36px_rgba(15,23,42,0.35)]"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-accent/15 blur-3xl" aria-hidden />
      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/55">
        How we approach it
      </p>
      <div className="relative mt-4 grid gap-2.5">
        {[
          { icon: Search, label: 'Map the real workflow', tone: 'bg-sky-500/15 text-sky-700 dark:text-sky-300' },
          { icon: Workflow, label: 'Find the friction points', tone: 'bg-amber-500/15 text-amber-700 dark:text-amber-300' },
          { icon: Lightbulb, label: 'Prescribe the right fix', tone: 'bg-teal-500/15 text-teal-700 dark:text-teal-300' },
        ].map((step, i) => {
          const Icon = step.icon
          return (
            <div
              key={step.label}
              className="flex items-center gap-3 rounded-xl border border-border/55 bg-background/90 px-3.5 py-3 shadow-sm"
            >
              <span className={cn('flex h-9 w-9 shrink-0 items-center justify-center rounded-lg', step.tone)}>
                <Icon className="h-4 w-4" strokeWidth={1.8} aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[13px] font-bold text-foreground">{step.label}</p>
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-foreground/45">
                  Step {String(i + 1).padStart(2, '0')}
                </p>
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-4 flex items-end gap-1.5 px-1">
        {[42, 58, 48, 72, 64, 86, 78, 94].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm bg-linear-to-t from-primary/25 via-accent/45 to-accent/70"
            style={{ height: `${h * 0.45}px` }}
            aria-hidden
          />
        ))}
      </div>
      <p className="mt-2 text-[11px] font-medium text-foreground/55">
        Clarity first. Technology second.
      </p>
    </motion.div>
  )
}

export function ProblemsSection() {
  return (
    <section className={`relative ${sectionY}`}>
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.35] mask-[linear-gradient(180deg,white_30%,transparent)]" aria-hidden />

      <div className={`relative ${siteContainer}`}>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14 xl:gap-20">
          {/* Left column — sticky header + graphic to fill blank space */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeader
              index="02"
              eyebrow="Pain Points"
              title="Common business challenges we solve"
              description="These are the problems we see most often, and fix before recommending any technology."
              align="left"
            />
            <ChallengesVisual />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-6"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[13px] font-bold text-accent transition hover:gap-3"
              >
                See how we diagnose
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </motion.div>
          </div>

          {/* Right column — aligned 2×2 grid (Manual processes & AI confusion line up) */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4"
          >
            {problems.map((p) => {
              const Icon = p.icon
              return (
                <motion.article
                  key={p.title}
                  variants={item}
                  className={cn(
                    'group flex h-full flex-col rounded-2xl border border-border/60 bg-linear-to-br p-6 shadow-[0_16px_48px_-32px_rgba(15,23,42,0.28)] backdrop-blur-sm transition hover:border-accent/35 hover:shadow-md',
                    p.tint,
                  )}
                >
                  <div className={cn('flex h-12 w-12 items-center justify-center rounded-xl border', p.iconBg)}>
                    <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                  </div>
                  <h3 className="mt-4 text-[16px] font-bold tracking-tight text-foreground lg:text-[17px]">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-foreground/70 lg:text-[14px]">
                    {p.description}
                  </p>
                  <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-foreground/50">
                    {p.signal}
                  </p>
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

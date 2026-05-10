'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { siteContainer } from '@/lib/site-layout'

function DashboardVisual() {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 380, damping: 28 }}
      className="relative"
    >
      <div className="absolute -inset-[2px] rounded-[14px] bg-linear-to-br from-accent/30 via-transparent to-primary/25 opacity-90 blur-[2px]" aria-hidden />
      <div className="relative overflow-hidden rounded-xl border border-white/25 bg-card/95 shadow-[0_32px_100px_-36px_rgba(15,23,42,0.55)] ring-1 ring-black/[0.04] backdrop-blur-md">
        <div className="flex items-center justify-between border-b border-border/40 bg-linear-to-r from-muted/60 via-muted/25 to-transparent px-4 py-2.5">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/40 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-[11px] font-semibold tracking-wide text-foreground/80">Operations overview</span>
          </div>
          <span className="rounded border border-border/50 bg-background/80 px-2 py-0.5 font-mono text-[9px] font-medium uppercase tracking-widest text-foreground/45">
            Live
          </span>
        </div>
        <div className="grid gap-3 p-3 sm:gap-4 sm:p-5 lg:grid-cols-[1fr_min(200px,38%)]">
          <div className="space-y-3">
            <div className="flex flex-wrap gap-1.5">
              {['Throughput', 'Quality', 'Cost'].map((label) => (
                <span
                  key={label}
                  className="rounded-md border border-border/45 bg-background/95 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-foreground/65"
                >
                  {label}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[
                { label: 'Cycle time', value: '−18%', accent: true },
                { label: 'Manual hrs', value: '−32%', accent: false },
                { label: 'Exceptions', value: '−41%', accent: false },
              ].map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-lg border border-border/40 bg-linear-to-b from-muted/35 to-background/90 p-2.5 shadow-inner sm:p-3"
                >
                  <p className="text-[9px] font-semibold uppercase tracking-wider text-foreground/40">{kpi.label}</p>
                  <p
                    className={`mt-0.5 font-semibold tabular-nums tracking-tight sm:text-lg ${kpi.accent ? 'text-accent' : 'text-foreground'}`}
                  >
                    {kpi.value}
                  </p>
                </div>
              ))}
            </div>
            <div className="rounded-lg border border-border/40 bg-background p-3 shadow-inner">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-[11px] font-bold tracking-tight text-foreground">Workflow health</p>
                <p className="font-mono text-[10px] text-foreground/40">90d</p>
              </div>
              <div className="flex h-[5.25rem] items-end gap-1">
                {[42, 55, 48, 62, 58, 70, 66, 74, 80, 77, 84, 88].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.55, delay: 0.03 * i, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-1 rounded-[2px] bg-linear-to-t from-primary/30 to-accent/60"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-2 rounded-lg border border-border/40 bg-muted/20 p-3">
            <p className="text-[11px] font-bold tracking-tight text-foreground">Next actions</p>
            {[
              'Approve vendor onboarding workflow',
              'Review exception queue (finance)',
              'Validate data definitions with IT',
            ].map((line) => (
              <div key={line} className="flex gap-2 rounded-md border border-border/35 bg-background/95 p-2 shadow-sm">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
                <p className="text-[10px] leading-snug text-foreground/72 sm:text-[11px]">{line}</p>
              </div>
            ))}
            <div className="rounded-md border border-dashed border-border/55 bg-background/40 p-2.5 font-mono text-[9px] leading-relaxed text-foreground/48">
              Exec lens: outcomes → tooling → adoption.
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const stats = [
  { label: 'Engagement model', value: 'Diagnose → design → ship' },
  { label: 'Typical window', value: '8–16 wks to value' },
  { label: 'Focus', value: 'Ops truth, not demos' },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/50">
      <div className="pointer-events-none absolute inset-0 texture-grain opacity-[0.35]" aria-hidden />
      <div className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-accent/14 blur-[100px]" />
      <div className="pointer-events-none absolute -left-32 bottom-[-80px] h-[340px] w-[340px] rounded-full bg-primary/12 blur-[90px]" />

      <div className={`relative ${siteContainer}`}>
        {/* Stats strip — consulting report tone */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-3 border-b border-border/40 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
        >
          <div className="flex items-center gap-2 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/40">
            <span className="h-1 w-1 rounded-full bg-accent" />
            Advisory · Implementation
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-8 lg:gap-12">
            {stats.map((s) => (
              <div key={s.label} className="border-l border-border/60 pl-3 sm:border-l-0 sm:border-t-0 sm:pl-0 sm:first:border-l sm:first:pl-3">
                <p className="font-mono text-[9px] font-medium uppercase tracking-[0.22em] text-foreground/38">{s.label}</p>
                <p className="mt-0.5 text-[13px] font-semibold tracking-tight text-foreground/88">{s.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-10 py-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-14 lg:py-12 xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-baseline gap-3">
              <span className="font-mono text-[11px] font-medium tabular-nums text-accent">01</span>
              <span className="h-px w-10 bg-border" aria-hidden />
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-foreground/42">Intro</span>
            </div>

            <h1 className="mt-5 text-balance text-[2rem] font-semibold leading-[1.08] tracking-tight text-foreground sm:text-[2.35rem] lg:text-[2.85rem] xl:text-[3.1rem]">
              Make your business{' '}
              <span className="bg-linear-to-r from-foreground via-foreground to-foreground/55 bg-clip-text text-transparent">
                AI-ready
              </span>{' '}
              — without the hype.
            </h1>

            <p className="mt-5 max-w-xl text-pretty text-[15px] leading-[1.65] text-muted-foreground md:text-[17px]">
              We identify where intelligence and automation actually earn their cost: workflows, data discipline, adoption —
              then implement with measurable checkpoints.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-[13px] font-semibold text-primary-foreground shadow-[0_14px_40px_-12px_rgba(15,23,42,0.55)] transition hover:brightness-[1.06]"
                >
                  Book a consultation
                  <ArrowRight className="h-4 w-4 opacity-90" aria-hidden />
                </Link>
              </motion.div>
              <Link
                href="/process"
                className="inline-flex items-center rounded-lg border border-border/60 bg-background/70 px-5 py-3 text-[13px] font-semibold text-foreground shadow-sm backdrop-blur-sm transition hover:border-accent/40 hover:bg-muted/40"
              >
                Operating model
              </Link>
            </div>

            <div className="mt-8 flex flex-col gap-3 border-l-[3px] border-accent pl-5 sm:flex-row sm:items-start sm:gap-8 sm:border-l-0 sm:border-t sm:border-accent sm:pl-0 sm:pt-5">
              <div className="sm:flex-1">
                <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-foreground/48">Principle</p>
                <p className="mt-1.5 text-[14px] font-medium leading-snug text-foreground">Not every problem needs AI.</p>
              </div>
              <p className="max-w-md text-[13px] leading-relaxed text-muted-foreground sm:flex-[1.35]">
                We tell you when to standardize, when to automate with rules, and when models are justified — with explicit
                trade-offs for leadership.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="min-w-0"
          >
            <DashboardVisual />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

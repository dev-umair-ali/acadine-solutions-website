'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Shield, Zap } from 'lucide-react'
import { siteContainer } from '@/lib/site-layout'

function ConsultingVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -inset-8 rounded-full bg-accent/10 blur-[60px]" aria-hidden />

      {/* Main deliverable card — the "assessment report" */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 overflow-hidden rounded-2xl border border-border/50 bg-card shadow-[0_40px_120px_-50px_rgba(15,23,42,0.45)]"
      >
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-border/40 bg-linear-to-r from-muted/60 to-muted/20 px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
            </div>
            <span className="text-[11px] font-bold tracking-wide text-foreground/70">
              Operational Assessment
            </span>
          </div>
          <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[9px] font-bold uppercase tracking-widest text-accent">
            Phase 1
          </span>
        </div>

        {/* Metrics row */}
        <div className="grid grid-cols-3 gap-px bg-border/30 border-b border-border/30">
          {[
            { label: 'Cycle time', value: '−34%', trend: 'down' },
            { label: 'Manual hours', value: '−52%', trend: 'down' },
            { label: 'Error rate', value: '−61%', trend: 'down' },
          ].map((m) => (
            <div key={m.label} className="bg-card px-4 py-3.5">
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-foreground/35">{m.label}</p>
              <p className="mt-1 text-xl font-bold tabular-nums tracking-tight text-foreground">{m.value}</p>
            </div>
          ))}
        </div>

        {/* Chart area */}
        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[12px] font-bold text-foreground/80">Workflow efficiency — 90 days</p>
            <div className="flex items-center gap-1 text-accent">
              <TrendingUp className="h-3 w-3" />
              <span className="font-mono text-[10px] font-bold">+28%</span>
            </div>
          </div>
          <div className="flex h-20 items-end gap-[3px]">
            {[28, 35, 32, 42, 38, 52, 48, 58, 55, 64, 62, 70, 68, 76, 74, 82, 80, 88].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.5, delay: 0.02 * i, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1 rounded-sm bg-linear-to-t from-primary/25 via-accent/50 to-accent/70"
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating insight card — top right, overlapping */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -right-4 -top-6 z-20 w-52 rounded-xl border border-border/50 bg-card/95 p-3.5 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.35)] backdrop-blur-md sm:-right-6 lg:-right-8"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/15">
            <Shield className="h-3.5 w-3.5 text-accent" />
          </div>
          <span className="text-[11px] font-bold text-foreground/80">Governance</span>
        </div>
        <p className="mt-2 text-[10px] leading-snug text-foreground/55">
          3 workflows flagged for control gaps — fix before automation.
        </p>
        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-border/40">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '72%' }}
            transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
            className="h-full rounded-full bg-accent"
          />
        </div>
      </motion.div>

      {/* Floating action card — bottom left, overlapping */}
      <motion.div
        initial={{ opacity: 0, x: -16, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-5 -left-4 z-20 w-56 rounded-xl border border-border/50 bg-card/95 p-3.5 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.35)] backdrop-blur-md sm:-left-6 lg:-left-8"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
            <Zap className="h-3.5 w-3.5 text-primary" />
          </div>
          <span className="text-[11px] font-bold text-foreground/80">Quick wins identified</span>
        </div>
        <div className="mt-2.5 space-y-1.5">
          {['Automate invoice routing', 'Consolidate 3 reporting tools'].map((a) => (
            <div key={a} className="flex items-center gap-2 rounded-md bg-muted/40 px-2 py-1">
              <span className="h-1 w-1 rounded-full bg-accent" />
              <span className="text-[10px] font-medium text-foreground/65">{a}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
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
      <div className="pointer-events-none absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-accent/12 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 bottom-[-80px] h-[380px] w-[380px] rounded-full bg-primary/10 blur-[100px]" />

      <div className={`relative ${siteContainer}`}>
        {/* Stats strip */}
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
                <p className="mt-0.5 text-[13px] font-bold tracking-tight text-foreground/88">{s.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-10 py-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16 lg:py-14 xl:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-baseline gap-3">
              <span className="font-mono text-[11px] font-medium tabular-nums text-accent">01</span>
              <span className="h-px w-10 bg-border" aria-hidden />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-foreground/42">Intro</span>
            </div>

            <h1 className="mt-5 text-balance text-[2.1rem] font-bold leading-[1.06] tracking-[-0.03em] text-foreground sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.35rem]">
              Make your business{' '}
              <span className="bg-linear-to-r from-foreground via-foreground to-foreground/50 bg-clip-text text-transparent">
                AI-ready
              </span>{' '}
              — without the hype.
            </h1>

            <p className="mt-5 max-w-xl text-pretty text-[15px] leading-[1.7] text-muted-foreground md:text-[17px]">
              We identify where intelligence and automation actually earn their cost: workflows, data discipline, adoption —
              then implement with measurable checkpoints.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-[13px] font-bold text-primary-foreground shadow-[0_16px_48px_-12px_rgba(15,23,42,0.55)] transition hover:brightness-[1.06]"
                >
                  Book a consultation
                  <ArrowRight className="h-4 w-4 opacity-90" aria-hidden />
                </Link>
              </motion.div>
              <Link
                href="/process"
                className="inline-flex items-center rounded-xl border border-border/60 bg-background/70 px-6 py-3.5 text-[13px] font-bold text-foreground shadow-sm backdrop-blur-sm transition hover:border-accent/40 hover:bg-muted/40"
              >
                Operating model
              </Link>
            </div>

            {/* Principle block — editorial feel */}
            <div className="mt-10 rounded-2xl border border-border/40 bg-muted/20 p-5 sm:p-6">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/8 ring-1 ring-primary/15">
                  <span className="text-base font-bold text-primary">!</span>
                </div>
                <div>
                  <p className="text-[14px] font-bold text-foreground">Not every problem needs AI.</p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">
                    We tell you when to standardize, when to automate with rules, and when models are justified —
                    with explicit trade-offs for leadership.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-w-0 py-8 lg:py-12"
          >
            <ConsultingVisual />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

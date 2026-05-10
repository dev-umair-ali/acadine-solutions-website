'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

function DashboardVisual() {
  return (
    <div className="relative rounded-2xl border border-border/60 bg-card shadow-[0_24px_80px_-24px_rgba(15,25,41,0.35)] overflow-hidden">
      <div className="flex items-center justify-between border-b border-border/60 px-4 py-3 bg-muted/30">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent/80" />
          <span className="text-xs font-medium text-foreground/70">Operations overview</span>
        </div>
        <span className="text-[10px] uppercase tracking-wider text-foreground/45">Live</span>
      </div>
      <div className="grid gap-4 p-4 md:p-6 lg:grid-cols-[1fr_220px]">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {['Throughput', 'Quality', 'Cost'].map((label) => (
              <span
                key={label}
                className="rounded-full border border-border/60 bg-background px-3 py-1 text-[11px] font-medium text-foreground/70"
              >
                {label}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Cycle time', value: '−18%', tone: 'text-accent' },
              { label: 'Manual hours', value: '−32%', tone: 'text-foreground' },
              { label: 'Exceptions', value: '−41%', tone: 'text-foreground' },
            ].map((kpi) => (
              <div key={kpi.label} className="rounded-xl border border-border/50 bg-muted/20 p-3">
                <p className="text-[10px] font-medium uppercase tracking-wide text-foreground/45">{kpi.label}</p>
                <p className={`mt-1 text-xl font-semibold tabular-nums ${kpi.tone}`}>{kpi.value}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-border/50 bg-background p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-semibold text-foreground">Workflow health</p>
              <p className="text-[10px] text-foreground/45">Last 90 days</p>
            </div>
            <div className="flex h-24 items-end gap-1.5">
              {[42, 55, 48, 62, 58, 70, 66, 74, 80, 77, 84, 88].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.6, delay: 0.04 * i, ease: [0.22, 1, 0.36, 1] }}
                  className="flex-1 rounded-sm bg-gradient-to-t from-primary/25 to-accent/55"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-3 rounded-xl border border-border/50 bg-muted/15 p-4">
          <p className="text-xs font-semibold text-foreground">Next actions</p>
          {[
            'Approve vendor onboarding workflow',
            'Review exception queue (finance)',
            'Validate data definitions with IT',
          ].map((line, i) => (
            <div key={line} className="flex gap-2 rounded-lg border border-border/40 bg-background/80 p-2.5">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent/80" />
              <p className="text-[11px] leading-snug text-foreground/75">{line}</p>
            </div>
          ))}
          <div className="rounded-lg border border-dashed border-border/60 p-3 text-[11px] text-foreground/55">
            Executive view: outcomes first — tools second.
          </div>
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(56,189,198,0.12),transparent)]" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:py-24 lg:flex-row lg:items-center lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
            Acadine Solutions
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            Make Your Business AI-Ready — Without the Hype
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-foreground/65">
            We identify where AI actually creates value, fix operational gaps, and implement solutions that improve
            efficiency and decision-making.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/process"
              className="inline-flex items-center justify-center rounded-xl border border-border/70 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted/40"
            >
              How we work
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-10 max-w-md rounded-2xl border border-border/60 bg-background/80 p-5 shadow-sm backdrop-blur-sm"
          >
            <p className="text-sm font-semibold text-foreground">Not every problem needs AI.</p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/65">
              We help determine when it does — and when it doesn&apos;t.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 w-full"
        >
          <DashboardVisual />
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'

export function PhilosophySection() {
  return (
    <section className="border-b border-border/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">Core philosophy</p>
            <blockquote className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              We don&apos;t start with AI.
              <span className="block text-foreground/75">We start with your business.</span>
            </blockquote>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-foreground/60">
              AI is a lever — not a strategy. We establish facts about workflows, constraints, and outcomes first, then
              introduce automation and intelligent systems where they reduce risk, cost, or cycle time with clear owners
              and measurable targets.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl border border-border/60 bg-muted/20 p-8">
              <ul className="space-y-5 text-sm leading-relaxed text-foreground/70">
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80" />
                  Practical implementations your operators can run — not experiments disconnected from P&amp;L.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80" />
                  Decisions documented so procurement, IT, and finance can support delivery without ambiguity.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80" />
                  A cadence for measurement: baselines, milestones, and honest review when reality diverges from plan.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function AiRescueHighlightSection() {
  return (
    <section className="border-b border-border/40 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-3xl border border-border/60 bg-primary px-6 py-10 text-primary-foreground shadow-[0_28px_90px_-40px_rgba(15,25,41,0.65)] md:px-12 md:py-12"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_90%_0%,rgba(56,189,198,0.22),transparent)]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">AI Rescue</p>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Already tried AI and it didn&apos;t work?
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/78">
                We assess and fix AI implementations that are not delivering value — aligning objectives, data, workflows,
                and adoption so investments translate into operational outcomes.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end lg:flex-col lg:items-end">
              <Link
                href="/ai-rescue"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition hover:opacity-95"
              >
                Explore AI Rescue
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-primary-foreground/25 px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-foreground/10"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

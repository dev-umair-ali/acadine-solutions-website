'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { siteContainer, sectionY } from '@/lib/site-layout'

export function AiRescueHighlightSection() {
  return (
    <section className={`relative ${sectionY}`}>
      <div className={siteContainer}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[1.25rem] border border-border/40 bg-linear-to-br from-primary via-primary to-[oklch(0.14_0.03_255)] p-px shadow-[0_40px_100px_-48px_rgba(15,23,42,0.85)]"
        >
          <div className="section-invert relative overflow-hidden rounded-[1.2rem] bg-primary px-6 py-9 text-primary-foreground md:px-10 md:py-11 lg:px-14">
            <div className="pointer-events-none absolute inset-0 texture-grain opacity-[0.15]" aria-hidden />
            <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-accent/25 blur-[80px]" aria-hidden />
            <div className="pointer-events-none absolute bottom-0 left-1/4 h-px w-1/2 bg-linear-to-r from-transparent via-white/20 to-transparent" aria-hidden />

            <div className="relative grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-12">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] font-medium text-accent">06</span>
                  <span className="h-px w-10 bg-primary-foreground/25" aria-hidden />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary-foreground/50">
                    AI Rework
                  </span>
                </div>
                <h2 className="mt-4 max-w-xl text-balance text-2xl font-semibold tracking-tight md:text-3xl lg:text-[2.2rem] lg:leading-tight">
                  Already tried AI and it didn&apos;t work?
                </h2>
                <p className="mt-4 max-w-[52ch] text-[14px] leading-relaxed text-primary-foreground/72 md:text-[15px]">
                  We assess and fix AI implementations that are not delivering value.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end lg:flex-col lg:items-stretch">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/ai-rescue"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-foreground px-6 py-3 text-[13px] font-semibold text-primary shadow-xl transition hover:bg-white sm:w-auto"
                  >
                    AI Rescue playbook
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </motion.div>
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-lg border border-primary-foreground/25 bg-primary-foreground/5 px-6 py-3 text-[13px] font-semibold text-primary-foreground backdrop-blur-sm transition hover:bg-primary-foreground/12 sm:w-auto"
                >
                  Executive briefing
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

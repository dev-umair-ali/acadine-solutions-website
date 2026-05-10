'use client'

import { motion } from 'framer-motion'
import { PROCESS_STEPS } from '@/lib/constants'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { siteContainer, sectionY } from '@/lib/site-layout'
import { SectionHeader } from '@/components/section/section-header'

export function ProcessSection() {
  return (
    <section className={`relative border-y border-border/40 bg-muted/30 ${sectionY}`}>
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.35]" aria-hidden />
      <div className={`relative ${siteContainer}`}>
        <SectionHeader
          index="05"
          eyebrow="Method"
          title="Diagnose → design → implement — with executive checkpoints"
          description="No black-box delivery: each phase ends with artifacts your leadership team can scrutinize."
          align="center"
          className="mb-12 lg:mb-14"
        />

        {/* Desktop: horizontal runway */}
        <div className="relative hidden lg:block">
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-[52px] h-px bg-linear-to-r from-transparent via-accent/45 to-transparent" aria-hidden />
          <div className="grid grid-cols-3 gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative pt-2 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-border/55 bg-background font-mono text-lg font-bold text-foreground shadow-[0_12px_36px_-18px_rgba(15,23,42,0.35)] ring-1 ring-black/[0.04]">
                  {step.number}
                </div>
                <h3 className="mt-6 text-lg font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">{step.description}</p>
                <p className="mt-4 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/38">
                  {step.number === 1 && 'Evidence pack'}
                  {step.number === 2 && 'Decision memo'}
                  {step.number === 3 && 'Release + KPIs'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet: stacked */}
        <div className="relative space-y-8 lg:hidden">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex gap-4 rounded-2xl border border-border/45 bg-background/90 p-5 shadow-sm"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border/50 bg-muted/35 font-mono text-base font-bold">
                {step.number}
              </div>
              <div>
                <h3 className="text-[17px] font-semibold">{step.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-11 flex justify-center lg:mt-14"
        >
          <Link
            href="/process"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-[13px] font-semibold text-primary-foreground shadow-lg transition hover:brightness-105"
          >
            Full methodology
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { PROCESS_STEPS } from '@/lib/constants'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

export function ProcessSection() {
  return (
    <section className="border-b border-border/40 bg-muted/25 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-[2.5rem]">
            A simple operating rhythm — built for clarity
          </h2>
          <p className="mt-4 text-pretty text-lg text-foreground/60">
            Three phases your teams can explain back: diagnose reality, design what fits, implement what holds up under
            pressure.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mx-auto mt-16 max-w-3xl space-y-10"
        >
          {PROCESS_STEPS.map((step, index) => (
            <motion.div key={step.number} variants={itemVariants} className="relative">
              {index < PROCESS_STEPS.length - 1 && (
                <div
                  aria-hidden
                  className="absolute left-[31px] top-[52px] hidden h-[calc(100%+2.25rem)] w-px bg-gradient-to-b from-accent/55 to-transparent md:block"
                />
              )}
              <div className="flex gap-6 md:gap-8">
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-border/60 bg-background text-lg font-semibold text-foreground shadow-sm">
                  {step.number}
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-foreground/65">{step.description}</p>
                  <p className="mt-3 text-sm text-foreground/50">
                    {step.number === 1 && 'Interviews, systems mapping, and baseline metrics.'}
                    {step.number === 2 && 'Prioritized roadmap with explicit trade-offs and owners.'}
                    {step.number === 3 && 'Delivery, training, monitoring, and iteration tied to KPIs.'}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mt-14 text-center"
        >
          <Link
            href="/process"
            className="inline-flex items-center gap-2 rounded-xl border border-border/70 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-background"
          >
            Read the full process
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_120%,rgba(56,189,198,0.14),transparent)]" />
      <div className="relative mx-auto max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
            Find Where AI Can Actually Improve Your Business
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-foreground/60">
            Bring your constraints — we&apos;ll help separate practical wins from distraction, and define an execution path
            leadership can support.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/case-examples"
              className="inline-flex items-center justify-center rounded-xl border border-border/70 px-8 py-3.5 text-sm font-semibold text-foreground transition hover:bg-muted/40"
            >
              View case examples
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { siteContainer } from '@/lib/site-layout'

export function FinalCtaSection() {
  return (
    <section className="relative border-t border-border/50 pb-14 pt-12 md:pb-16 md:pt-14 lg:pb-[4.5rem] lg:pt-[4rem]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,oklch(0.62_0.12_200/0.12),transparent_60%)]" aria-hidden />

      <div className={`relative ${siteContainer}`}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[1.25rem] border border-border/50 bg-linear-to-b from-muted/50 to-background p-px shadow-[0_32px_80px_-40px_rgba(15,23,42,0.35)]"
        >
          <div className="texture-grain absolute inset-0 rounded-[1.2rem] opacity-[0.25]" aria-hidden />
          <div className="relative rounded-[1.15rem] bg-background/95 px-6 py-10 text-center md:px-14 md:py-12">
            <div className="mx-auto flex max-w-3xl flex-col items-center">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] font-medium text-accent">08</span>
                <span className="h-px w-12 bg-border" aria-hidden />
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Next step</span>
              </div>
              <h2 className="mt-5 text-balance text-[1.75rem] font-semibold leading-[1.15] tracking-tight text-foreground sm:text-3xl lg:text-[2.35rem]">
                Find where AI can actually improve your business
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground">
                Send context on workflows and constraints — we&apos;ll respond with a grounded view of fit, risk, and a path
                leadership can sponsor.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-[13px] font-semibold text-primary-foreground shadow-[0_16px_44px_-14px_rgba(15,23,42,0.55)] transition hover:brightness-105"
                  >
                    Book a consultation
                    <ArrowRight className="h-4 w-4 opacity-90" aria-hidden />
                  </Link>
                </motion.div>
                <Link
                  href="/case-examples"
                  className="inline-flex items-center rounded-lg border border-border/55 px-6 py-3 text-[13px] font-semibold text-foreground transition hover:border-accent/40 hover:bg-muted/40"
                >
                  Case examples
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

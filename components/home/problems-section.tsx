'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Boxes, GitBranch, Hand, HelpCircle, ArrowRight } from 'lucide-react'
import { siteContainer, sectionY } from '@/lib/site-layout'
import { SectionHeader } from '@/components/section/section-header'
import { cn } from '@/lib/utils'

const problems = [
  {
    icon: Boxes,
    title: 'Too many tools, no results',
    description: 'SaaS sprawl creates integration debt, unclear ownership, and reporting that never quite reconciles.',
    signal: 'Signal: tool inventory vs. outcomes',
  },
  {
    icon: Hand,
    title: 'Manual processes draining leadership',
    description: 'High-touch workflows consume leadership attention — especially close cycles, compliance checks, and approval chains that should run themselves.',
    signal: 'Signal: hours per cycle × frequency',
  },
  {
    icon: HelpCircle,
    title: 'AI confusion',
    description: 'Teams struggle to separate feasible automation from vendor theater. Every pitch sounds transformative; nothing ships.',
    signal: 'Signal: pilot count vs. production count',
  },
  {
    icon: GitBranch,
    title: 'Opaque workflows',
    description: 'Handoffs and exceptions are invisible — so improvement has no baseline and no accountability.',
    signal: 'Signal: exception rate × resolution time',
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export function ProblemsSection() {
  return (
    <section className={`relative ${sectionY}`}>
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.35] mask-[linear-gradient(180deg,white_30%,transparent)]" aria-hidden />

      <div className={`relative ${siteContainer}`}>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-14 xl:gap-20">
          {/* Left column — sticky header */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader
              index="02"
              eyebrow="Diagnostics"
              title="Where execution quietly leaks value"
              description="Common failure modes we map in the first weeks — before recommending tools or models."
              align="left"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[13px] font-bold text-accent transition hover:gap-3"
              >
                See how we diagnose
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </motion.div>
          </div>

          {/* Right column — asymmetric card stack */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col gap-3"
          >
            {/* Feature card — large, distinct */}
            <motion.article
              variants={item}
              className="group relative overflow-hidden rounded-2xl border border-border/45 bg-linear-to-br from-primary/3 via-background to-accent/4 p-7 shadow-[0_28px_80px_-40px_rgba(15,23,42,0.3)] lg:p-8"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/6 blur-3xl" />
              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border/50 bg-muted/40 text-accent shadow-inner">
                  <Boxes className="h-6 w-6" strokeWidth={1.6} aria-hidden />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold tracking-tight text-foreground">{problems[0].title}</h3>
                  <p className="mt-2.5 text-[14px] leading-[1.7] text-muted-foreground lg:text-[15px]">
                    {problems[0].description}
                  </p>
                  <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-foreground/30">
                    {problems[0].signal}
                  </p>
                </div>
              </div>
            </motion.article>

            {/* Two cards side by side */}
            <div className="grid gap-3 sm:grid-cols-2">
              {[problems[1], problems[2]].map((p, i) => {
                const Icon = p.icon
                return (
                  <motion.article
                    key={p.title}
                    variants={item}
                    className={cn(
                      'group rounded-2xl border border-border/45 bg-background/90 p-6 shadow-[0_16px_48px_-32px_rgba(15,23,42,0.25)] backdrop-blur-sm transition hover:border-accent/30',
                      i === 1 && 'sm:translate-y-4',
                    )}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/40 bg-muted/35 text-accent">
                      <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                    </div>
                    <h3 className="mt-4 text-[16px] font-bold tracking-tight">{p.title}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{p.description}</p>
                    <p className="mt-4 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-foreground/25">
                      {p.signal}
                    </p>
                  </motion.article>
                )
              })}
            </div>

            {/* Full-width bottom card — horizontal layout */}
            <motion.article
              variants={item}
              className="group relative overflow-hidden rounded-2xl border border-border/45 bg-linear-to-r from-muted/25 to-background p-6 shadow-md lg:flex lg:items-center lg:gap-8 lg:p-7"
            >
              <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-xl border border-border/50 bg-background text-accent shadow-sm">
                <GitBranch className="h-6 w-6" strokeWidth={1.6} aria-hidden />
              </div>
              <div className="mt-4 flex-1 lg:mt-0">
                <h3 className="text-[16px] font-bold tracking-tight lg:text-[17px]">{problems[3].title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted-foreground lg:text-[14px]">{problems[3].description}</p>
              </div>
              <div className="mt-4 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-foreground/25 lg:mt-0 lg:text-right">
                Map → measure → improve
              </div>
            </motion.article>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

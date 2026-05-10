'use client'

import { motion } from 'framer-motion'
import { Boxes, GitBranch, Hand, HelpCircle } from 'lucide-react'
import { siteContainer, sectionY } from '@/lib/site-layout'
import { SectionHeader } from '@/components/section/section-header'

const problems = [
  {
    icon: Boxes,
    title: 'Too many tools, no results',
    description: 'SaaS sprawl creates integration debt, unclear ownership, and reporting that never quite reconciles.',
  },
  {
    icon: Hand,
    title: 'Manual processes',
    description: 'High-touch workflows consume leadership attention — especially close cycles and compliance.',
  },
  {
    icon: HelpCircle,
    title: 'AI confusion',
    description: 'Teams struggle to separate feasible automation from vendor theater.',
  },
  {
    icon: GitBranch,
    title: 'Poor workflows',
    description: 'Handoffs and exceptions are opaque — so improvement has no baseline.',
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

export function ProblemsSection() {
  return (
    <section className={`relative ${sectionY}`}>
      <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.4] [mask-image:linear-gradient(180deg,white,transparent)]" aria-hidden />
      <div className={`relative ${siteContainer}`}>
        <SectionHeader
          index="02"
          eyebrow="Diagnostics"
          title="Where execution quietly leaks value"
          description="Common failure modes we map in the first weeks — before recommending tools or models."
          align="center"
          className="mb-9 lg:mb-11"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-12 lg:gap-4"
        >
          <motion.article
            variants={item}
            className="group relative overflow-hidden rounded-2xl border border-border/50 bg-linear-to-br from-background via-background to-muted/40 p-6 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] lg:col-span-7 lg:row-span-2 lg:flex lg:min-h-[280px] lg:flex-col lg:justify-between lg:p-8"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/[0.07] blur-3xl transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border/50 bg-muted/50 text-accent shadow-inner">
                <Boxes className="h-5 w-5" strokeWidth={1.75} aria-hidden />
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">{problems[0].title}</h3>
              <p className="mt-3 max-w-xl text-[14px] leading-relaxed text-muted-foreground lg:text-[15px]">
                {problems[0].description}
              </p>
            </div>
            <p className="relative mt-6 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-foreground/35 lg:mt-0">
              Signal: tool inventory vs. outcomes
            </p>
          </motion.article>

          <motion.article
            variants={item}
            className="group rounded-2xl border border-border/50 bg-background/90 p-6 shadow-md backdrop-blur-sm transition hover:border-accent/35 lg:col-span-5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/45 bg-muted/35 text-accent">
              <Hand className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden />
            </div>
            <h3 className="mt-4 text-[17px] font-semibold tracking-tight">{problems[1].title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{problems[1].description}</p>
          </motion.article>

          <motion.article
            variants={item}
            className="group rounded-2xl border border-border/50 bg-background/90 p-6 shadow-md backdrop-blur-sm transition hover:border-accent/35 lg:col-span-5"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/45 bg-muted/35 text-accent">
              <HelpCircle className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden />
            </div>
            <h3 className="mt-4 text-[17px] font-semibold tracking-tight">{problems[2].title}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{problems[2].description}</p>
          </motion.article>

          <motion.article
            variants={item}
            className="group relative overflow-hidden rounded-2xl border border-border/50 bg-linear-to-br from-muted/30 to-background p-6 shadow-md lg:col-span-12 lg:grid lg:grid-cols-[auto_1fr] lg:items-center lg:gap-10 lg:p-8"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border/50 bg-background text-accent shadow-sm">
              <GitBranch className="h-6 w-6" strokeWidth={1.75} aria-hidden />
            </div>
            <div>
              <h3 className="text-[17px] font-semibold tracking-tight lg:text-lg">{problems[3].title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground lg:text-[14px]">{problems[3].description}</p>
            </div>
            <div className="mt-5 hidden font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/35 lg:mt-0 lg:block lg:text-right">
              Map → measure → improve
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  )
}

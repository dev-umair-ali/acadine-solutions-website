'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { SERVICES } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'
import { siteContainer, sectionY } from '@/lib/site-layout'
import { SectionHeader } from '@/components/section/section-header'
import { cn } from '@/lib/utils'

const accents = [
  { card: 'from-sky-500/14 via-background to-background border-sky-500/25', icon: 'bg-sky-500/15 text-sky-700 dark:text-sky-300 border-sky-500/30', glow: 'bg-sky-500/20' },
  { card: 'from-teal-500/14 via-background to-background border-teal-500/25', icon: 'bg-teal-500/15 text-teal-700 dark:text-teal-300 border-teal-500/30', glow: 'bg-teal-500/20' },
  { card: 'from-violet-500/14 via-background to-background border-violet-500/25', icon: 'bg-violet-500/15 text-violet-700 dark:text-violet-300 border-violet-500/30', glow: 'bg-violet-500/20' },
  { card: 'from-amber-500/14 via-background to-background border-amber-500/25', icon: 'bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30', glow: 'bg-amber-500/20' },
  { card: 'from-rose-500/14 via-background to-background border-rose-500/25', icon: 'bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/30', glow: 'bg-rose-500/20' },
  { card: 'from-indigo-500/14 via-background to-background border-indigo-500/25', icon: 'bg-indigo-500/15 text-indigo-700 dark:text-indigo-300 border-indigo-500/30', glow: 'bg-indigo-500/20' },
  { card: 'from-cyan-500/14 via-background to-background border-cyan-500/25', icon: 'bg-cyan-500/15 text-cyan-700 dark:text-cyan-300 border-cyan-500/30', glow: 'bg-cyan-500/20' },
  { card: 'from-orange-500/14 via-background to-background border-orange-500/25', icon: 'bg-orange-500/15 text-orange-700 dark:text-orange-300 border-orange-500/30', glow: 'bg-orange-500/20' },
  { card: 'from-emerald-500/14 via-background to-background border-emerald-500/25', icon: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30', glow: 'bg-emerald-500/20' },
]

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

export function ServicesSection() {
  return (
    <section className={`relative ${sectionY}`}>
      <div className={`relative ${siteContainer}`}>
        <SectionHeader
          index="04"
          eyebrow="Services"
          title="Services"
          description="We help companies improve operations and implement the right solutions, AI included only when it adds real value."
          align="center"
          className="mb-10 lg:mb-12"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5"
        >
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            const accent = accents[i % accents.length]
            return (
              <motion.div
                key={service.id}
                variants={item}
                whileHover={{ y: -4 }}
                className={cn(
                  'group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-linear-to-br p-6 shadow-[0_20px_56px_-32px_rgba(15,23,42,0.35)] transition-[border-color,box-shadow] hover:shadow-lg',
                  accent.card,
                )}
              >
                <div className={cn('pointer-events-none absolute -right-10 top-0 h-28 w-28 rounded-full blur-2xl opacity-70 transition-opacity group-hover:opacity-100', accent.glow)} />
                <div className="relative flex items-start justify-between gap-3">
                  <div
                    className={cn(
                      'flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-sm',
                      accent.icon,
                    )}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                  </div>
                  <span className="font-mono text-[11px] font-bold tabular-nums text-foreground/45">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="relative mt-4 text-[16px] font-bold leading-snug tracking-tight text-foreground lg:text-[17px]">
                  {service.title}
                </h3>
                <p className="relative mt-2 flex-1 text-[13px] leading-relaxed text-foreground/70 lg:text-[14px]">
                  {service.description}
                </p>
                {service.highlights && (
                  <ul className="relative mt-4 space-y-1.5">
                    {service.highlights.slice(0, 2).map((h) => (
                      <li key={h} className="flex items-start gap-2 text-[12px] text-foreground/65">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
                <Link
                  href="/services"
                  className="relative mt-5 inline-flex items-center gap-1.5 text-[13px] font-bold text-accent transition group-hover:gap-2.5"
                >
                  Detail
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center border-t border-border/50 pt-10"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl border border-border/60 bg-muted/30 px-7 py-3.5 text-[14px] font-bold text-foreground shadow-sm transition hover:border-accent/40 hover:bg-muted/50"
          >
            Full service breakdown
            <ArrowRight className="h-4 w-4 opacity-80" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

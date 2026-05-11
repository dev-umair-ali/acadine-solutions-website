'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { SERVICES } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'
import { siteContainer, sectionY } from '@/lib/site-layout'
import { SectionHeader } from '@/components/section/section-header'
import { cn } from '@/lib/utils'

const layout: { span: string; featured?: boolean }[] = [
  { span: 'lg:col-span-7', featured: true },
  { span: 'lg:col-span-5' },
  { span: 'lg:col-span-4' },
  { span: 'lg:col-span-4' },
  { span: 'lg:col-span-4' },
  { span: 'lg:col-span-5' },
  { span: 'lg:col-span-7', featured: true },
]

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
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
          eyebrow="Capability set"
          title="Engagements scoped like an operating plan — not a slide deck"
          description="Seven parallel tracks; most clients begin with assessment and discovery, then converge on implementation or rescue."
          align="center"
          className="mb-10 lg:mb-12"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 gap-3 md:gap-4 lg:grid-cols-12"
        >
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            const { span, featured } = layout[i]
            return (
              <motion.div
                key={service.id}
                variants={item}
                whileHover={{ y: -3 }}
                className={cn(
                  'group relative overflow-hidden rounded-2xl border transition-[border-color,box-shadow] hover:border-accent/30',
                  span,
                  featured
                    ? 'border-border/50 bg-linear-to-br from-primary/3 via-background to-accent/4 p-6 shadow-[0_24px_64px_-36px_rgba(15,23,42,0.35)] md:p-7'
                    : 'border-border/45 bg-background/90 p-5 shadow-[0_16px_48px_-32px_rgba(15,23,42,0.25)] md:p-6',
                )}
              >
                <div className="pointer-events-none absolute -right-12 top-0 h-32 w-32 rounded-full bg-accent/5 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="relative flex items-start justify-between gap-3">
                  <div
                    className={cn(
                      'flex shrink-0 items-center justify-center rounded-xl border border-border/40 text-accent shadow-inner',
                      featured ? 'h-12 w-12 bg-muted/45' : 'h-10 w-10 bg-muted/35',
                    )}
                  >
                    <Icon className={cn(featured ? 'h-5 w-5' : 'h-[18px] w-[18px]')} strokeWidth={1.6} aria-hidden />
                  </div>
                  <span className="font-mono text-[10px] font-bold tabular-nums text-foreground/22">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className={cn(
                  'mt-4 font-bold leading-snug tracking-tight text-foreground',
                  featured ? 'text-[17px] lg:text-[18px]' : 'text-[15px] lg:text-[16px]',
                )}>
                  {service.title}
                </h3>
                <p className={cn(
                  'mt-2 leading-relaxed text-muted-foreground',
                  featured ? 'text-[14px]' : 'text-[13px]',
                )}>
                  {featured ? service.longDescription : service.description}
                </p>
                {featured && service.highlights && (
                  <ul className="mt-4 space-y-1.5">
                    {service.highlights.slice(0, 2).map((h) => (
                      <li key={h} className="flex items-start gap-2 text-[12px] text-foreground/60">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
                <Link
                  href="/services"
                  className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-bold text-accent transition group-hover:gap-2.5"
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
          className="mt-10 flex justify-center border-t border-border/40 pt-10"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl border border-border/50 bg-muted/20 px-7 py-3 text-[13px] font-bold text-foreground shadow-sm transition hover:border-accent/40 hover:bg-muted/40"
          >
            Full service breakdown
            <ArrowRight className="h-4 w-4 opacity-80" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { SERVICES } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'
import { siteContainer, sectionY } from '@/lib/site-layout'
import { SectionHeader } from '@/components/section/section-header'
import { cn } from '@/lib/utils'

const spans = [
  'lg:col-span-6',
  'lg:col-span-6',
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-4',
  'lg:col-span-6',
  'lg:col-span-6',
]

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
}

const item = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
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
            return (
              <motion.div
                key={service.id}
                variants={item}
                whileHover={{ y: -4 }}
                className={cn(
                  'group relative overflow-hidden rounded-2xl border border-border/50 bg-linear-to-br from-background via-background to-muted/25 p-5 shadow-[0_18px_50px_-34px_rgba(15,23,42,0.33)] transition-[border-color,box-shadow] hover:border-accent/35 hover:shadow-[0_26px_60px_-34px_rgba(15,23,42,0.38)] md:p-6',
                  spans[i],
                )}
              >
                <div className="pointer-events-none absolute -right-12 top-0 h-32 w-32 rounded-full bg-accent/[0.06] blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/45 bg-muted/40 text-accent shadow-inner">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} aria-hidden />
                  </div>
                  <span className="font-mono text-[10px] font-medium tabular-nums text-foreground/28">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-4 text-[15px] font-semibold leading-snug tracking-tight text-foreground lg:text-[16px]">
                  {service.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{service.description}</p>
                <Link
                  href="/services"
                  className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold text-accent transition group-hover:gap-2.5"
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
            className="inline-flex items-center gap-2 rounded-lg border border-border/55 bg-muted/25 px-6 py-2.5 text-[13px] font-semibold text-foreground shadow-sm transition hover:border-accent/40 hover:bg-muted/40"
          >
            Full service breakdown
            <ArrowRight className="h-4 w-4 opacity-80" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

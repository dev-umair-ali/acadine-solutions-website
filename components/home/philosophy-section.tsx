'use client'

import { motion } from 'framer-motion'
import { siteContainer } from '@/lib/site-layout'
import { SectionHeader } from '@/components/section/section-header'

export function PhilosophySection() {
  return (
    <section className="relative border-y border-white/10 bg-primary text-primary-foreground">
      <div className="pointer-events-none absolute inset-0 texture-grain opacity-[0.2]" aria-hidden />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_80%_20%,rgba(56,189,198,0.14),transparent_55%)]" aria-hidden />

      <div className={`relative py-14 md:py-16 lg:py-18 ${siteContainer}`}>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16 xl:gap-24">
          <div>
            <SectionHeader
              index="03"
              eyebrow="Positioning"
              title="We don’t start with AI. We start with your business."
              description="Intelligent systems only matter when workflows, ownership, and measurement are credible — otherwise you automate confusion faster."
              dark
              className="text-left!"
            />

            <motion.blockquote
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-10 border-l-2 border-accent pl-6 font-serif text-[1.35rem] italic leading-snug text-primary-foreground/85 sm:text-[1.5rem] lg:text-[1.65rem]"
            >
              “Executives don’t need more AI slides — they need operating truth and a delivery path they can defend.”
            </motion.blockquote>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-2xl border border-white/10 bg-white/6 p-6 shadow-2xl backdrop-blur-md md:p-8"
          >
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-primary-foreground/45">
              Delivery criteria
            </p>
            <ul className="mt-6 space-y-5 border-t border-white/10 pt-6">
              {[
                { t: 'Operational baseline', d: 'Measured cycle-time, exceptions, and rework — before tooling debates.' },
                { t: 'Decision logs', d: 'Explicit trade-offs for procurement, IT security, and finance.' },
                { t: 'Adoption cadence', d: 'Training and monitoring treated as scope — not an afterthought.' },
              ].map((row) => (
                <li key={row.t} className="flex gap-4">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_12px_rgba(56,189,198,0.55)]" />
                  <div>
                    <p className="text-[13px] font-semibold tracking-tight">{row.t}</p>
                    <p className="mt-1 text-[13px] leading-relaxed text-primary-foreground/65">{row.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SectionHeader } from '@/components/section/section-header'
import { motion } from 'framer-motion'
import { INDUSTRIES } from '@/lib/constants'
import Link from 'next/link'
import { ArrowRight, AlertTriangle, Building2, Heart, Landmark, Truck, Settings, Headphones, Briefcase } from 'lucide-react'
import { siteContainer } from '@/lib/site-layout'

const INDUSTRY_ICONS: Record<string, React.ElementType> = {
  healthcare: Heart,
  finance: Landmark,
  logistics: Truck,
  operations: Settings,
  support: Headphones,
  professional: Briefcase,
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

const STATS = [
  { value: '6', label: 'Sectors' },
  { value: '40+', label: 'Engagements' },
  { value: '3.2×', label: 'Avg ROI' },
]

export default function IndustriesPage() {
  const featured = INDUSTRIES.slice(0, 2)
  const rest = INDUSTRIES.slice(2)

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative border-b border-border/40 bg-muted/20 bg-dot-grid py-14 md:py-18">
          <div className={siteContainer}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <SectionHeader
                index="01"
                eyebrow="Industries"
                title="Industries We Serve"
                description="We work across industries to help businesses improve operations and adopt AI where it makes sense — with practical, sector-specific examples."
              />
            </motion.div>
          </div>
        </section>

        {/* Bento Grid */}
        <section className="py-14 md:py-18">
          <div className={siteContainer}>
            <SectionHeader
              index="02"
              eyebrow="Focus Areas"
              title="Six sectors, one operating standard"
              className="mb-12"
            />

            {/* Featured row — 2 large cards */}
            <div className="grid gap-5 md:grid-cols-12">
              {featured.map((industry, i) => {
                const Icon = INDUSTRY_ICONS[industry.id] ?? Building2
                const span = i === 0 ? 'md:col-span-7' : 'md:col-span-5'
                return (
                  <motion.div
                    key={industry.id}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <Link
                      href="/contact"
                      className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border/45 bg-linear-to-br from-primary/3 via-background to-accent/4 p-7 shadow-[0_24px_64px_-36px_rgba(15,23,42,0.35)] transition-all duration-300 hover:border-accent/40 hover:shadow-[0_28px_72px_-32px_rgba(15,23,42,0.4)] ${span}`}
                    >
                      <div>
                        <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border/50 bg-muted/25">
                          <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight text-foreground">
                          {industry.title}
                        </h3>
                        <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                          {industry.description}
                        </p>

                        <div className="mt-6 space-y-3">
                          {industry.painPoints.slice(0, 2).map((point, j) => (
                            <div key={j} className="flex items-start gap-2.5">
                              <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-destructive/70" strokeWidth={2} />
                              <span className="text-sm leading-snug text-foreground/65">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8 flex items-center gap-2 text-sm font-bold text-accent transition-all group-hover:gap-3">
                        Discuss this sector
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>

            {/* Remaining 4 — 3-col grid */}
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((industry, i) => {
                const Icon = INDUSTRY_ICONS[industry.id] ?? Building2
                return (
                  <motion.div
                    key={industry.id}
                    custom={i + 2}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <Link
                      href="/contact"
                      className="group flex h-full flex-col justify-between rounded-2xl border border-border/45 bg-background/90 p-6 shadow-md transition-all duration-300 hover:border-accent/40 hover:shadow-lg"
                    >
                      <div>
                        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/50 bg-muted/25">
                          <Icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                        </div>
                        <h3 className="text-lg font-bold tracking-tight text-foreground">
                          {industry.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {industry.description}
                        </p>

                        <div className="mt-5 space-y-2.5">
                          {industry.painPoints.slice(0, 2).map((point, j) => (
                            <div key={j} className="flex items-start gap-2">
                              <AlertTriangle className="mt-0.5 h-3 w-3 shrink-0 text-destructive/60" strokeWidth={2} />
                              <span className="text-[13px] leading-snug text-foreground/60">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 flex items-center gap-2 text-[13px] font-bold text-accent transition-all group-hover:gap-3">
                        Learn more
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="border-y border-border/40 bg-muted/20 texture-grain">
          <div className={siteContainer}>
            <div className="grid grid-cols-3 divide-x divide-border/40">
              {STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="py-10 text-center md:py-12"
                >
                  <p className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 md:py-18">
          <div className={siteContainer}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border/45 bg-linear-to-br from-primary/3 via-background to-accent/4 p-1 shadow-[0_24px_64px_-36px_rgba(15,23,42,0.35)]"
            >
              <div className="rounded-[14px] bg-background/80 px-8 py-12 text-center backdrop-blur-sm md:px-14 md:py-14">
                <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  Your industry, our operating discipline
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                  We bring deep sector understanding combined with a bias for measurement. Start with a conversation — no slide decks, no generic proposals.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-[0_6px_22px_-6px_rgba(15,23,42,0.45)] transition hover:brightness-[1.07]"
                >
                  Discuss Your Industry
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

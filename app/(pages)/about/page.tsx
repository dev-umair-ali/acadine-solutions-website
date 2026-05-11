'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SectionHeader } from '@/components/section/section-header'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Users, FileCheck, BarChart3 } from 'lucide-react'
import { siteContainer } from '@/lib/site-layout'

const values = [
  {
    name: 'Integrity',
    description:
      "We're honest about what AI can and can't do. We say no when a project isn't right for you — even if it means walking away from revenue.",
  },
  {
    name: 'Excellence',
    description:
      'High standards in every deliverable. Every implementation reflects a commitment to quality that outlasts the engagement.',
  },
  {
    name: 'Partnership',
    description:
      "Your success is our success. We're invested in long-term outcomes, not project completion metrics.",
  },
]

const engagementCards = [
  {
    icon: Users,
    title: 'Executive clarity',
    description:
      'Direct access to senior practitioners who speak CFO, CIO, and COO — with traceable assumptions and governance-ready artifacts.',
  },
  {
    icon: FileCheck,
    title: 'Operational truth-telling',
    description:
      'We document trade-offs explicitly: what must change in process before tools can help — and what should not be automated.',
  },
  {
    icon: BarChart3,
    title: 'Measured adoption',
    description:
      'Training, monitoring, and iteration are part of scope — not an afterthought purchased separately.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden border-b border-border/40 bg-muted/20">
          <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-50" aria-hidden />

          <div className={`relative ${siteContainer} py-16 md:py-20 lg:py-24`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-baseline gap-3">
                <span className="font-mono text-[11px] font-medium tabular-nums text-accent">01</span>
                <span className="h-px w-10 bg-border" aria-hidden />
                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-foreground/42">
                  Company
                </span>
              </div>

              <h1 className="mt-5 text-balance text-[2rem] font-bold leading-[1.08] tracking-[-0.03em] text-foreground sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.35rem]">
                About Acadine Solutions
              </h1>

              <p className="mt-5 max-w-2xl text-pretty text-[15px] leading-[1.7] text-muted-foreground md:text-[17px]">
                Practical expertise. Execution-focused. Business-first mindset.
                We help companies make smart, practical decisions about AI — not sell AI tools.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Story — editorial two-column ── */}
        <section className="py-14 md:py-20 lg:py-24">
          <div className={siteContainer}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 xl:gap-20"
            >
              {/* Left — pull quote */}
              <div className="flex items-start">
                <blockquote className="border-l-[3px] border-accent pl-6 lg:pl-8">
                  <p className="text-[1.35rem] font-bold leading-[1.35] tracking-tight text-foreground sm:text-[1.5rem] lg:text-[1.65rem]">
                    Most AI consulting sells technology. We started because no one was
                    selling operational truth.
                  </p>
                </blockquote>
              </div>

              {/* Right — short paragraphs */}
              <div className="space-y-5">
                <p className="text-[15px] leading-[1.75] text-muted-foreground md:text-base">
                  We watched intelligent companies invest millions in AI projects that
                  failed because they weren&apos;t grounded in operational reality.
                  Systems built without understanding how work actually gets done.
                  Implementation plans that didn&apos;t account for organizational
                  change. Success measured by technical metrics instead of business
                  impact.
                </p>
                <p className="text-[15px] leading-[1.75] text-muted-foreground md:text-base">
                  So we built something different — a firm that diagnoses before
                  designing, involves your teams from day one, and measures success by
                  outcomes leadership can actually sponsor: cost reduction, efficiency
                  gains, quality improvement.
                </p>
                <p className="text-[15px] leading-[1.75] text-muted-foreground md:text-base">
                  Today, Acadine Solutions helps organizations across industries
                  transform their operations through AI that works in reality — not
                  just in demos.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Values — horizontal stacked cards ── */}
        <section className="border-t border-border/40 bg-muted/20 py-14 md:py-20 lg:py-24">
          <div className={siteContainer}>
            <SectionHeader
              index="02"
              eyebrow="Principles"
              title="What we stand on"
              description="Three convictions that shape every engagement — from scoping to post-launch."
              className="mb-12"
            />

            <div className="space-y-4">
              {values.map((v, i) => (
                <motion.div
                  key={v.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className={`grid items-baseline gap-4 rounded-2xl border border-border/45 p-6 shadow-md sm:grid-cols-[minmax(0,1fr)_minmax(0,2.5fr)] sm:gap-8 sm:p-8 ${
                    i % 2 === 0
                      ? 'bg-background/90'
                      : 'bg-muted/30'
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[12px] font-medium tabular-nums text-accent/70">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-[1.25rem] font-bold tracking-tight text-foreground sm:text-[1.5rem]">
                      {v.name}
                    </h3>
                  </div>
                  <p className="text-[15px] leading-[1.75] text-muted-foreground">
                    {v.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Engagement model — dark section ── */}
        <section className="section-invert bg-primary py-14 md:py-20 lg:py-24">
          <div className={siteContainer}>
            <SectionHeader
              index="03"
              eyebrow="Engagement"
              title="How leadership teams engage us"
              description="No inflated metrics — just a delivery model designed for governance-heavy environments."
              dark
              className="mb-12"
            />

            <div className="grid gap-5 md:grid-cols-3">
              {engagementCards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/4 p-7 backdrop-blur-sm"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/10">
                    <card.icon className="h-5 w-5 text-primary-foreground/80" />
                  </div>
                  <h3 className="text-[1.1rem] font-bold text-primary-foreground">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-primary-foreground/65">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA — premium card ── */}
        <section className="py-14 md:py-20 lg:py-24">
          <div className={siteContainer}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-[1.25rem] border border-border/50 bg-linear-to-b from-muted/50 to-background p-px shadow-[0_32px_80px_-40px_rgba(15,23,42,0.35)]"
            >
              <div className="texture-grain pointer-events-none absolute inset-0 rounded-[1.2rem] opacity-[0.25]" aria-hidden />

              <div className="relative rounded-[1.15rem] bg-background/95 px-6 py-12 text-center md:px-14 md:py-16">
                <div className="mx-auto flex max-w-2xl flex-col items-center">
                  <h2 className="text-balance text-[1.75rem] font-bold leading-[1.12] tracking-tight text-foreground sm:text-3xl lg:text-[2.35rem]">
                    Ready to partner with practitioners — not presenters?
                  </h2>
                  <p className="mt-4 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground">
                    Send context on your workflows and constraints — we&apos;ll respond
                    with a grounded view of fit, risk, and a path leadership can
                    sponsor.
                  </p>
                  <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-[13px] font-bold text-primary-foreground shadow-[0_16px_44px_-14px_rgba(15,23,42,0.55)] transition hover:brightness-105"
                      >
                        Book a consultation
                        <ArrowRight className="h-4 w-4 opacity-90" aria-hidden />
                      </Link>
                    </motion.div>
                    <Link
                      href="/case-examples"
                      className="inline-flex items-center rounded-xl border border-border/55 px-6 py-3.5 text-[13px] font-bold text-foreground transition hover:border-accent/40 hover:bg-muted/40"
                    >
                      Case examples
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

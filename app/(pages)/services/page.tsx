'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { POSITIONING, SERVICES } from '@/lib/constants'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { siteContainer } from '@/lib/site-layout'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

function ServiceVisual({ serviceId }: { serviceId: string }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-muted/15 p-6 shadow-[0_22px_70px_-34px_rgba(15,25,41,0.35)]">
      <div className="mb-4 flex items-center justify-between border-b border-border/50 pb-3">
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/45">Workflow view</span>
        <span className="text-[10px] text-foreground/40">{serviceId}</span>
      </div>

      {serviceId === 'ai-audit' && (
        <div className="space-y-3">
          {[
            'Where AI may create business value',
            'Which opportunities are worth pursuing first',
            'Which workflows should not be automated yet',
            'What the best starting point should be',
          ].map((row, i) => (
            <div key={row} className="flex items-center gap-3 rounded-xl border border-border/50 bg-background/80 px-3 py-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/12 text-[11px] font-semibold text-accent">
                {i + 1}
              </span>
              <span className="text-xs font-medium text-foreground/75">{row}</span>
            </div>
          ))}
        </div>
      )}

      {serviceId === 'ai-education' && (
        <div className="space-y-2">
          {[
            'What AI can and cannot do',
            'Where AI may fit within current workflows',
            'How to identify practical use cases',
            'How to avoid over-automating the wrong problems',
          ].map((row) => (
            <div key={row} className="rounded-lg border border-border/50 bg-background/70 px-3 py-2.5 text-[11px] font-medium text-foreground/70">
              {row}
            </div>
          ))}
        </div>
      )}

      {serviceId === 'assessment' && (
        <div className="space-y-3">
          {['Systems map', 'Stakeholder interviews', 'Baseline KPIs'].map((row, i) => (
            <div key={row} className="flex items-center gap-3 rounded-xl border border-border/50 bg-background/80 px-3 py-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/12 text-[11px] font-semibold text-accent">
                {i + 1}
              </span>
              <span className="text-xs font-medium text-foreground/75">{row}</span>
            </div>
          ))}
        </div>
      )}

      {serviceId === 'improvement' && (
        <div className="grid grid-cols-3 gap-2">
          {['As-is', 'Design', 'Controls'].map((c) => (
            <div key={c} className="rounded-lg border border-border/50 bg-background/70 px-2 py-6 text-center text-[10px] font-semibold text-foreground/65">
              {c}
            </div>
          ))}
          <div className="col-span-3 mt-2 rounded-xl border border-dashed border-border/60 p-3 text-[11px] text-foreground/55">
            Target cycle-time and exception paths agreed before tooling discussions.
          </div>
        </div>
      )}

      {serviceId === 'discovery' && (
        <div className="space-y-2">
          {[
            { label: 'Rules-first candidates', w: '78%' },
            { label: 'ML-fit candidates', w: '46%' },
            { label: 'Do not automate', w: '22%' },
          ].map((row) => (
            <div key={row.label}>
              <div className="mb-1 flex justify-between text-[10px] text-foreground/55">
                <span>{row.label}</span>
              </div>
              <div className="h-2 rounded-full bg-primary/10">
                <div className="h-full rounded-full bg-accent/45" style={{ width: row.w }} />
              </div>
            </div>
          ))}
        </div>
      )}

      {serviceId === 'roadmap' && (
        <div className="space-y-3">
          {[
            { t: 'Phase 1 — Foundations', d: 'Data access + owners' },
            { t: 'Phase 2 — Pilots', d: 'Measured adoption gates' },
            { t: 'Phase 3 — Scale', d: 'Operate + improve' },
          ].map((p) => (
            <div key={p.t} className="rounded-xl border border-border/50 bg-background/75 p-3">
              <p className="text-[11px] font-semibold text-foreground">{p.t}</p>
              <p className="mt-1 text-[10px] text-foreground/55">{p.d}</p>
            </div>
          ))}
        </div>
      )}

      {serviceId === 'automation' && (
        <div className="rounded-xl border border-border/50 bg-background/75 p-4">
          <div className="flex gap-2">
            {[42, 58, 52, 70, 66, 74].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm bg-linear-to-t from-primary/15 to-accent/45" style={{ height: `${h}px` }} />
            ))}
          </div>
          <p className="mt-3 text-[11px] text-foreground/55">Dashboards tied to decisions — weekly operating review.</p>
        </div>
      )}

      {serviceId === 'implementation' && (
        <div className="space-y-3">
          <div className="rounded-xl border border-border/50 bg-background/75 p-3">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-foreground/45">Evaluation</p>
            <div className="mt-2 grid grid-cols-3 gap-2 text-center text-[10px] text-foreground/65">
              <span className="rounded-lg bg-muted/40 px-2 py-2">Precision</span>
              <span className="rounded-lg bg-muted/40 px-2 py-2">Drift</span>
              <span className="rounded-lg bg-muted/40 px-2 py-2">Escalation</span>
            </div>
          </div>
          <p className="text-[11px] text-foreground/55">Guardrails + ownership documented for audit and IT review.</p>
        </div>
      )}

      {serviceId === 'rescue' && (
        <div className="space-y-3">
          <div className="rounded-xl border border-amber-500/25 bg-background/75 p-3">
            <p className="text-[11px] font-semibold text-foreground">Stabilize</p>
            <p className="mt-1 text-[10px] text-foreground/55">Contain defects, restore trust, clarify outcomes.</p>
          </div>
          <div className="rounded-xl border border-border/50 bg-background/75 p-3">
            <p className="text-[11px] font-semibold text-foreground">Rebuild plan</p>
            <p className="mt-1 text-[10px] text-foreground/55">What ships next — and what stops shipping.</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative border-b border-border/40 bg-muted/20 py-14 md:py-18 lg:py-20">
          <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40" aria-hidden />
          <div className={`relative ${siteContainer}`}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-foreground/45">Services</p>
              <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
                Services
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
                We help companies improve operations and implement the right solutions — AI included only when it adds real value.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-14">
          <div className={siteContainer}>
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-20">
              {SERVICES.map((service, index) => {
                const IconComponent = service.icon
                const isEven = index % 2 === 0
                const bestFor = 'bestFor' in service ? service.bestFor : undefined
                return (
                  <motion.article
                    key={service.id}
                    variants={itemVariants}
                    className="grid gap-10 border-t border-border/40 pt-16 first:border-t-0 first:pt-0 md:grid-cols-2 md:items-start md:gap-14"
                  >
                    <div className={isEven ? 'md:order-1' : 'md:order-2'}>
                      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border/60 bg-muted/30">
                        <IconComponent className="h-6 w-6 text-accent" strokeWidth={1.75} aria-hidden />
                      </div>
                      <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{service.title}</h2>
                      <p className="mt-3 text-[15px] font-medium text-foreground/80">{service.description}</p>
                      <p className="mt-4 leading-relaxed text-foreground/65">{service.longDescription}</p>

                      {bestFor && bestFor.length > 0 && (
                        <div className="mt-8">
                          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-foreground/45">Best for</p>
                          <ul className="mt-4 space-y-3">
                            {bestFor.map((line) => (
                              <li key={line} className="flex gap-3 text-foreground/70">
                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80" />
                                <span className="leading-relaxed">{line}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <ul className="mt-8 space-y-4">
                        {service.highlights.map((line) => (
                          <li key={line} className="flex gap-3 text-foreground/70">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80" />
                            <span className="leading-relaxed">{line}</span>
                          </li>
                        ))}
                      </ul>

                      {(service.id === 'ai-audit' || service.id === 'ai-education') && (
                        <Link
                          href="/contact"
                          className="mt-8 inline-flex items-center gap-2 rounded-xl border border-accent/30 bg-accent/5 px-5 py-2.5 text-[13px] font-bold text-accent transition hover:bg-accent/10"
                        >
                          {service.id === 'ai-audit' ? 'Start With an AI Opportunity Audit' : 'Schedule an AI Education Session'}
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                        </Link>
                      )}
                    </div>

                    <div className={isEven ? 'md:order-2' : 'md:order-1'}>
                      <ServiceVisual serviceId={service.id} />
                    </div>
                  </motion.article>
                )
              })}
            </motion.div>
          </div>
        </section>

        <section className="border-t border-border/40 bg-muted/15 py-12 md:py-16">
          <div className={`${siteContainer} mx-auto max-w-3xl text-center`}>
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent">Our approach</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">{POSITIONING.headline}</h2>
              <div className="mt-6 space-y-2 text-[15px] leading-relaxed text-muted-foreground">
                {POSITIONING.paragraphs.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section-invert border-t border-border/40 bg-primary py-12 text-primary-foreground md:py-14">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Choose the entry point that matches reality</h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/75">
                Not sure where to begin? Start with a free discovery conversation, a paid AI Opportunity Audit, or an AI education session — before committing to implementation.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary-foreground px-8 py-3.5 text-sm font-semibold text-primary transition hover:opacity-95"
                >
                  Book a Discovery Conversation
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-primary-foreground/25 px-8 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-foreground/10"
                >
                  Start With an AI Opportunity Audit
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

'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { SERVICES } from '@/lib/constants'
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
        <section className="relative border-b border-border/40 bg-muted/25 py-12 md:py-14">
          <div className={siteContainer}>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="max-w-3xl"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">Services</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                From assessment to implementation — and recovery when needed
              </h1>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-foreground/65">
                Each section below expands what we deliver, how decisions are made, and what “done” looks like in operating
                terms — not slide terms.
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
                      <p className="mt-4 leading-relaxed text-foreground/65">{service.longDescription}</p>

                      <ul className="mt-8 space-y-4">
                        {service.highlights.map((line) => (
                          <li key={line} className="flex gap-3 text-foreground/70">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/80" />
                            <span className="leading-relaxed">{line}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="/contact"
                        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
                      >
                        Book a Consultation
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
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

        <section className="border-t border-border/40 bg-primary py-12 text-primary-foreground md:py-14">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Choose the entry point that matches reality</h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-primary-foreground/75">
                If you are unsure where to start, we typically begin with diagnosis — even for implementation-heavy asks —
                so scope stays anchored to measurable outcomes.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary-foreground px-8 py-3.5 text-sm font-semibold text-primary transition hover:opacity-95"
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

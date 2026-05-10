'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { CalendarClock, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    challenge: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', company: '', challenge: '' })
    }, 3200)
  }

  return (
    <>
      <Header />
      <main>
        <section className="border-b border-border/40 bg-muted/25 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/45">Contact</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">Start with context — not a sales script</h1>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-foreground/65">
                Share the operational problem, constraints, and what success would look like for your leadership team. We respond within one business day.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-12 lg:grid-cols-3">
              <motion.div initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
                <h2 className="text-lg font-semibold text-foreground">Direct lines</h2>
                <div className="mt-8 space-y-8 text-sm">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-muted/30">
                      <Mail className="h-5 w-5 text-accent" aria-hidden />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-foreground/45">Email</p>
                      <a href="mailto:hello@acadine.com" className="mt-1 block text-base font-semibold text-foreground hover:text-accent">
                        hello@acadine.com
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-muted/30">
                      <Phone className="h-5 w-5 text-accent" aria-hidden />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-foreground/45">Phone</p>
                      <a href="tel:+14155551234" className="mt-1 block text-base font-semibold text-foreground hover:text-accent">
                        +1 (415) 555-1234
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-muted/30">
                      <MapPin className="h-5 w-5 text-accent" aria-hidden />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-foreground/45">Office</p>
                      <p className="mt-1 text-base font-semibold text-foreground">
                        San Francisco, CA
                        <span className="block text-sm font-normal text-foreground/60">United States</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 rounded-2xl border border-border/60 bg-muted/15 p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-foreground/45">What to include</p>
                  <ul className="mt-3 space-y-2 text-sm text-foreground/65">
                    <li>Current workflow and where it breaks</li>
                    <li>Systems involved + owners</li>
                    <li>Timeline pressures and risk sensitivities</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="rounded-2xl border border-border/60 bg-muted/15 p-8 lg:col-span-2"
              >
                <h2 className="text-lg font-semibold text-foreground">Send a brief</h2>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                  Fields marked below map directly to how we triage inquiries internally — no gimmicky lead scoring.
                </p>

                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="mt-10 rounded-2xl border border-accent/25 bg-background p-8 text-center">
                    <p className="text-lg font-semibold text-foreground">Received.</p>
                    <p className="mt-2 text-sm text-foreground/65">We&apos;ll reply within one business day with next steps.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-foreground">
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          autoComplete="name"
                          className="mt-2 w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring/40 transition focus:border-accent/50 focus:ring-2"
                          placeholder="Jordan Lee"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-foreground">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          autoComplete="email"
                          className="mt-2 w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring/40 transition focus:border-accent/50 focus:ring-2"
                          placeholder="jordan@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-foreground">
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        autoComplete="organization"
                        className="mt-2 w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring/40 transition focus:border-accent/50 focus:ring-2"
                        placeholder="Northwind Operations"
                      />
                    </div>

                    <div>
                      <label htmlFor="challenge" className="block text-sm font-semibold text-foreground">
                        Business challenge
                      </label>
                      <textarea
                        id="challenge"
                        name="challenge"
                        value={formData.challenge}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="mt-2 w-full resize-y rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring/40 transition focus:border-accent/50 focus:ring-2"
                        placeholder="Describe the operational issue, scope, stakeholders, and what a successful outcome looks like."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95 md:w-auto"
                    >
                      Submit inquiry
                    </button>

                    <p className="text-xs text-foreground/50">
                      For procurement security reviews, use email — we will route documents appropriately.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        <section id="booking" className="border-t border-border/40 bg-muted/20 py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-8 rounded-3xl border border-border/60 bg-background p-8 md:grid-cols-[1.1fr_0.9fr] md:items-center md:p-10">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-foreground/55">
                  <CalendarClock className="h-4 w-4 text-accent" aria-hidden />
                  Calendar briefing
                </div>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">Prefer to align live?</h2>
                <p className="mt-3 max-w-xl text-pretty text-sm leading-relaxed text-foreground/65">
                  After we review your brief, we typically schedule a focused 45-minute session with decision-makers and operators
                  — agenda-driven, no generic product tour.
                </p>
                <p className="mt-4 text-sm text-foreground/55">
                  If your organization uses a standard scheduler (Calendly, Cal.com, Microsoft Bookings), share it in your email
                  — we will coordinate without adding another tool unless you prefer it.
                </p>
              </div>
              <div className="rounded-2xl border border-dashed border-border/70 bg-muted/10 p-6 text-sm text-foreground/65">
                <p className="font-semibold text-foreground">Enterprise scheduling</p>
                <p className="mt-2 leading-relaxed">
                  For teams with procurement or vendor onboarding steps, we follow your process — including NDAs and security
                  questionnaires — before calendar holds.
                </p>
                <Link
                  href="mailto:hello@acadine.com?subject=Calendar%20briefing%20request"
                  className="mt-5 inline-flex rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-95"
                >
                  Email to schedule
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

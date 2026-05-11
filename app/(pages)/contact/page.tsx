'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { CalendarClock, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { siteContainer } from '@/lib/site-layout'

const WEB3FORMS_KEY = '912c7711-ef10-4272-83af-630dc7fe9486'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    challenge: '',
  })

  const [status, setStatus] = useState<FormStatus>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: 'New Contact Form Submission - Acadine Solutions',
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.challenge,
        }),
      })

      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setFormData({ name: '', email: '', company: '', challenge: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Header />
      <main>
        <section className="relative border-b border-border/40 bg-muted/20 py-14 md:py-18 lg:py-20">
          <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40" aria-hidden />
          <div className={`relative ${siteContainer}`}>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-foreground/45">Contact</p>
              <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl">Start with context — not a sales script</h1>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
                Share the operational problem, constraints, and what success would look like for your leadership team. We respond within one business day.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-10 md:py-12">
          <div className={siteContainer}>
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

                {status === 'success' ? (
                  <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="mt-10 rounded-2xl border border-accent/25 bg-background p-8 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                      <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    </div>
                    <p className="mt-4 text-lg font-bold text-foreground">Thank you! Your message has been sent successfully.</p>
                    <p className="mt-2 text-sm text-foreground/65">We&apos;ll reply within one business day with next steps.</p>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="mt-6 inline-flex rounded-xl border border-border/60 bg-muted/20 px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-muted/40"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="rounded-xl border border-destructive/25 bg-destructive/5 px-4 py-3 text-sm font-medium text-destructive"
                      >
                        Something went wrong. Please try again.
                      </motion.div>
                    )}

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
                          disabled={status === 'loading'}
                          autoComplete="name"
                          className="mt-2 w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring/40 transition focus:border-accent/50 focus:ring-2 disabled:cursor-not-allowed disabled:opacity-60"
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
                          disabled={status === 'loading'}
                          autoComplete="email"
                          className="mt-2 w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring/40 transition focus:border-accent/50 focus:ring-2 disabled:cursor-not-allowed disabled:opacity-60"
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
                        disabled={status === 'loading'}
                        autoComplete="organization"
                        className="mt-2 w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring/40 transition focus:border-accent/50 focus:ring-2 disabled:cursor-not-allowed disabled:opacity-60"
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
                        disabled={status === 'loading'}
                        rows={6}
                        className="mt-2 w-full resize-y rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring/40 transition focus:border-accent/50 focus:ring-2 disabled:cursor-not-allowed disabled:opacity-60"
                        placeholder="Describe the operational issue, scope, stakeholders, and what a successful outcome looks like."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
                    >
                      {status === 'loading' ? (
                        <span className="inline-flex items-center gap-2">
                          <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                          Sending...
                        </span>
                      ) : (
                        'Submit inquiry'
                      )}
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

        <section id="booking" className="border-t border-border/40 bg-muted/20 py-10 md:py-12">
          <div className={siteContainer}>
            <div className="rounded-3xl border border-border/60 bg-background p-8 md:p-10">
              <div className="flex items-center gap-2 mb-2">
                <CalendarClock className="h-5 w-5 text-accent" aria-hidden />
                <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">Book a Consultation</h2>
              </div>
              <p className="mb-6 max-w-xl text-sm leading-relaxed text-foreground/65">
                Schedule a focused consultation with our team — no generic product tour, just a practical discussion about your business challenges.
              </p>
              <div className="overflow-hidden rounded-2xl border border-border/40">
                <iframe
                  src="https://cal.com/acadine/consultation"
                  className="h-[600px] w-full border-0"
                  title="Book a consultation with Acadine Solutions"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

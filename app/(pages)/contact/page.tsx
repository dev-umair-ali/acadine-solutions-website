'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SendBriefJourney } from '@/components/contact/send-brief-journey'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Shield,
  Sparkles,
} from 'lucide-react'
import { useState } from 'react'
import { siteContainer } from '@/lib/site-layout'
import { submitToWeb3Forms, WEB3FORMS_RECIPIENT } from '@/lib/web3forms'
import { cn } from '@/lib/utils'

type FormMode = 'quick' | 'guided'
type FormStatus = 'idle' | 'loading' | 'success' | 'error'

const RESPONSE_PROMISES = [
  { icon: Clock, text: 'Response within 1 business day' },
  { icon: Shield, text: 'NDA-ready if required' },
  { icon: CalendarClock, text: 'Structured follow-up after we review' },
]

export default function ContactPage() {
  const [formMode, setFormMode] = useState<FormMode>('guided')
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
      const data = await submitToWeb3Forms({
        subject: 'New Contact Form Submission - Acadine Solutions',
        from_name: formData.name,
        email: formData.email,
        replyto: formData.email,
        name: formData.name,
        company: formData.company,
        message: formData.challenge,
        recipient: WEB3FORMS_RECIPIENT,
        form_type: 'quick_message',
      })

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
        <section className="relative border-b border-border/40 bg-muted/20 py-12 md:py-16">
          <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40" aria-hidden />
          <div className={`relative ${siteContainer}`}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-foreground/45">Contact</p>
              <h1 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Let&apos;s Talk About Your Business
              </h1>
              <p className="mt-4 max-w-2xl text-pretty text-[15px] leading-relaxed text-muted-foreground lg:text-base">
                Share your challenge or use the guided brief to flag areas of interest. We respond within one business day.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className={siteContainer}>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-12 xl:gap-16">
              {/* Left — contact & consultation */}
              <motion.aside
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="flex flex-col gap-4 lg:sticky lg:top-24 lg:self-start"
              >
                <a
                  href="mailto:info@acadine.io"
                  className="group flex items-center gap-4 rounded-2xl border border-border/50 bg-background p-5 shadow-sm transition hover:border-accent/40 hover:shadow-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition group-hover:bg-accent/15">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-foreground/40">Email</p>
                    <p className="mt-0.5 truncate text-[15px] font-semibold text-foreground group-hover:text-accent">
                      info@acadine.io
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-foreground/20 transition group-hover:translate-x-0.5 group-hover:text-accent" />
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-border/50 bg-background p-5 shadow-sm">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted/50 text-foreground/60">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-foreground/40">Office</p>
                    <p className="mt-0.5 text-[15px] font-semibold text-foreground">San Francisco, CA</p>
                    <p className="text-[13px] text-foreground/50">United States</p>
                  </div>
                </div>

                <div className="section-invert rounded-2xl bg-primary p-6 text-primary-foreground shadow-[0_24px_64px_-20px_rgba(15,23,42,0.5)]">
                  <div className="flex items-center gap-2">
                    <CalendarClock className="h-5 w-5 text-accent" />
                    <h3 className="text-lg font-bold">Book a Consultation</h3>
                  </div>
                  <p className="mt-3 text-[14px] leading-relaxed text-primary-foreground/65">
                    Schedule a focused 45-minute session — agenda-driven, no generic product tour.
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {RESPONSE_PROMISES.map((item) => {
                      const Icon = item.icon
                      return (
                        <li key={item.text} className="flex items-center gap-2.5 text-[13px] text-primary-foreground/70">
                          <Icon className="h-3.5 w-3.5 shrink-0 text-accent" />
                          {item.text}
                        </li>
                      )
                    })}
                  </ul>
                  <a
                    href="mailto:info@acadine.io?subject=Consultation%20Request%20-%20Acadine%20Solutions"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary-foreground px-5 py-3 text-[13px] font-bold text-primary transition hover:bg-white"
                  >
                    <Mail className="h-4 w-4" />
                    Email to schedule
                  </a>
                </div>
              </motion.aside>

              {/* Right — form */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
              >
                <div className="rounded-2xl border border-border/50 bg-background shadow-[0_24px_64px_-28px_rgba(15,23,42,0.18)]">
                  <div className="border-b border-border/40 px-6 py-5 md:px-8 md:py-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                          <Send className="h-4 w-4 text-accent" />
                        </div>
                        <div>
                          <h2 className="text-xl font-bold text-foreground">Send a Brief</h2>
                          <p className="text-[13px] text-muted-foreground">
                            We&apos;ll review and respond within 2–5 business days
                          </p>
                        </div>
                      </div>

                      <div className="flex rounded-xl border border-border/50 bg-muted/20 p-1">
                        <button
                          type="button"
                          onClick={() => setFormMode('guided')}
                          className={cn(
                            'flex items-center gap-2 rounded-lg px-4 py-2 text-[13px] font-bold transition',
                            formMode === 'guided'
                              ? 'bg-background text-foreground shadow-sm'
                              : 'text-muted-foreground hover:text-foreground',
                          )}
                        >
                          <Sparkles className="h-4 w-4" />
                          Guided brief
                        </button>
                        <button
                          type="button"
                          onClick={() => setFormMode('quick')}
                          className={cn(
                            'flex items-center gap-2 rounded-lg px-4 py-2 text-[13px] font-bold transition',
                            formMode === 'quick'
                              ? 'bg-background text-foreground shadow-sm'
                              : 'text-muted-foreground hover:text-foreground',
                          )}
                        >
                          <MessageSquare className="h-4 w-4" />
                          Quick message
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 py-6 md:px-8 md:py-7">
                    {formMode === 'guided' ? (
                      <SendBriefJourney />
                    ) : status === 'success' ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col items-center rounded-2xl border border-accent/20 bg-accent/5 p-10 text-center"
                      >
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/15">
                          <CheckCircle2 className="h-8 w-8 text-accent" />
                        </div>
                        <p className="mt-5 text-xl font-bold text-foreground">Message sent successfully!</p>
                        <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-muted-foreground">
                          Thank you for reaching out. We&apos;ll reply within one business day with next steps.
                        </p>
                        <button
                          type="button"
                          onClick={() => setStatus('idle')}
                          className="mt-6 inline-flex rounded-xl border border-border/60 bg-background px-6 py-2.5 text-[13px] font-bold text-foreground transition hover:bg-muted/30"
                        >
                          Send another message
                        </button>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        {status === 'error' && (
                          <div className="rounded-xl border border-destructive/25 bg-destructive/5 px-4 py-3 text-[13px] font-medium text-destructive">
                            Something went wrong. Please try again or email us directly.
                          </div>
                        )}

                        <div className="grid gap-5 sm:grid-cols-2">
                          <div>
                            <label htmlFor="name" className="block text-[13px] font-bold text-foreground">
                              Name <span className="text-destructive">*</span>
                            </label>
                            <input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              disabled={status === 'loading'}
                              autoComplete="name"
                              className="mt-2 w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-[14px] text-foreground shadow-sm outline-none focus:border-accent/50 focus:ring-2 disabled:opacity-60"
                              placeholder="Your name"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-[13px] font-bold text-foreground">
                              Email <span className="text-destructive">*</span>
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
                              className="mt-2 w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-[14px] text-foreground shadow-sm outline-none focus:border-accent/50 focus:ring-2 disabled:opacity-60"
                              placeholder="you@company.com"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="company" className="block text-[13px] font-bold text-foreground">
                            Company
                          </label>
                          <input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            disabled={status === 'loading'}
                            autoComplete="organization"
                            className="mt-2 w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-[14px] text-foreground shadow-sm outline-none focus:border-accent/50 focus:ring-2 disabled:opacity-60"
                            placeholder="Company name"
                          />
                        </div>

                        <div>
                          <label htmlFor="challenge" className="block text-[13px] font-bold text-foreground">
                            Message <span className="text-destructive">*</span>
                          </label>
                          <textarea
                            id="challenge"
                            name="challenge"
                            value={formData.challenge}
                            onChange={handleChange}
                            required
                            disabled={status === 'loading'}
                            rows={5}
                            className="mt-2 w-full resize-y rounded-xl border border-border/60 bg-background px-4 py-3 text-[14px] text-foreground shadow-sm outline-none focus:border-accent/50 focus:ring-2 disabled:opacity-60"
                            placeholder="Describe your business challenge, current workflows, and what a successful outcome looks like..."
                          />
                        </div>

                        <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                          <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-[14px] font-bold text-primary-foreground shadow-[0_12px_36px_-10px_rgba(15,23,42,0.45)] transition hover:brightness-105 disabled:opacity-70"
                          >
                            {status === 'loading' ? (
                              'Sending...'
                            ) : (
                              <>
                                <Send className="h-4 w-4" />
                                Submit Inquiry
                              </>
                            )}
                          </button>
                          <p className="text-[12px] text-foreground/40">
                            Submissions go to {WEB3FORMS_RECIPIENT}
                          </p>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

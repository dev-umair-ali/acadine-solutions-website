'use client'

import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useState } from 'react'

export const metadata: Metadata = {
  title: 'Contact Acadine Solutions | AI Consulting',
  description: 'Get in touch with our AI consulting team. Schedule a consultation to discuss your business transformation needs.',
  openGraph: {
    title: 'Contact Acadine Solutions | AI Consulting',
    description: 'Ready to transform your operations? Let&apos;s start a conversation.',
  },
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    challenge: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', company: '', challenge: '', message: '' })
    }, 3000)
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[400px] flex items-center py-20 bg-secondary/5">
          <div className="max-w-6xl mx-auto px-4 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Get in Touch
              </h1>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Ready to transform your operations? Let&apos;s start a conversation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-bold mb-8">Contact Information</h2>

                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">Email</p>
                      <a
                        href="mailto:hello@acadine.com"
                        className="text-lg font-semibold text-foreground hover:text-accent transition-colors"
                      >
                        hello@acadine.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">Phone</p>
                      <a
                        href="tel:+14155551234"
                        className="text-lg font-semibold text-foreground hover:text-accent transition-colors"
                      >
                        +1 (415) 555-1234
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/60 mb-1">Office</p>
                      <p className="text-lg font-semibold text-foreground">
                        San Francisco, CA
                        <br />
                        USA
                      </p>
                    </div>
                  </div>
                </div>

                {/* Response time */}
                <div className="mt-12 p-6 rounded-xl border border-border/40 bg-accent/5">
                  <p className="text-sm text-foreground/60 mb-2">Response Time</p>
                  <p className="font-semibold text-foreground">Within 24 hours</p>
                  <p className="text-sm text-foreground/60 mt-2">
                    We respond to all inquiries within one business day.
                  </p>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="md:col-span-2"
              >
                <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 rounded-xl bg-accent/10 border border-accent/20 text-center"
                  >
                    <div className="text-5xl mb-4">✓</div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
                    <p className="text-foreground/70">
                      We&apos;ve received your message and will be in touch within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border/40 bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent/60 transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-border/40 bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent/60 transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border/40 bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent/60 transition-colors"
                        placeholder="Acme Corp"
                      />
                    </div>

                    <div>
                      <label htmlFor="challenge" className="block text-sm font-semibold mb-2">
                        What&apos;s Your Main Challenge?
                      </label>
                      <input
                        type="text"
                        id="challenge"
                        name="challenge"
                        value={formData.challenge}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border/40 bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent/60 transition-colors"
                        placeholder="e.g., Manual workflows, data silos, operational bottlenecks"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-border/40 bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent/60 transition-colors resize-none"
                        placeholder="Tell us more about your situation and what you&apos;re hoping to achieve..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                    >
                      Send Message
                    </button>

                    <p className="text-xs text-foreground/50 text-center">
                      We&apos;ll respond within 24 hours. Your information is secure and won&apos;t be shared.
                    </p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Start Your Transformation?</h2>
              <p className="text-lg text-primary-foreground/80 mb-2">
                Whether you&apos;re in early exploration or ready to move forward, we&apos;re here to help.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

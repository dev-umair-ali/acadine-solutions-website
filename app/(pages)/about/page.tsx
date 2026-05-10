'use client'

import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Acadine Solutions | AI Consulting Experts',
  description: 'Learn about our team, approach, and commitment to delivering practical AI solutions that drive real business value.',
  openGraph: {
    title: 'About Acadine Solutions | AI Consulting Experts',
    description: 'Practical AI consulting focused on business outcomes and operational transformation.',
  },
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center py-20 bg-secondary/5">
          <div className="max-w-6xl mx-auto px-4 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About Acadine Solutions
              </h1>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                We're practical AI consultants focused on delivering real business value through proven implementation expertise.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="prose prose-invert max-w-none"
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                Acadine Solutions was founded on a simple observation: most AI consulting focuses on technology and hype, not on the business outcomes that actually matter.
              </p>

              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                We watched intelligent companies invest millions in AI projects that failed because they weren&apos;t grounded in operational reality. Systems were built without understanding how work actually gets done. Implementation plans didn&apos;t account for organizational change. And success was measured by technical metrics instead of business impact.
              </p>

              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                We decided to build something different. A consulting firm that brings deep operational expertise combined with practical AI implementation knowledge. That diagnoses before designing. That involves your teams from day one. That measures success by business outcomes, not technical complexity.
              </p>

              <p className="text-lg text-foreground/70 leading-relaxed">
                Today, Acadine Solutions helps organizations across industries transform their operations through AI that actually works.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20 bg-secondary/5">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">What Sets Us Apart</h2>
              <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
                Our philosophy and approach to AI consulting is fundamentally different.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Operational Expertise First',
                  description: 'We understand how business really works. Our team brings deep operational experience across industries before AI knowledge.',
                },
                {
                  title: 'Business-Driven Design',
                  description: 'Every decision flows from your business context and operational needs, not from what&apos;s technically possible.',
                },
                {
                  title: 'Practical Implementation',
                  description: 'We build solutions that work in reality, considering data quality, integration challenges, and organizational constraints.',
                },
                {
                  title: 'Staff Engagement',
                  description: 'Your teams are partners, not just users. We involve them from day one to ensure smooth adoption and ownership.',
                },
                {
                  title: 'Measurable Outcomes',
                  description: 'Success is defined by business metrics: cost reduction, efficiency gains, revenue growth, or quality improvement.',
                },
                {
                  title: 'Long-Term Partnership',
                  description: 'We stick around post-launch to optimize performance, solve problems, and drive continuous improvement.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="p-6 rounded-xl border border-border/40 bg-background hover:border-accent/40 transition-all"
                >
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  value: 'Integrity',
                  description: 'We&apos;re honest about what AI can and can&apos;t do. We say no when a project isn&apos;t right for you.',
                },
                {
                  value: 'Excellence',
                  description: 'High standards in everything we do. Every implementation reflects our commitment to quality.',
                },
                {
                  value: 'Partnership',
                  description: 'Your success is our success. We&apos;re invested in your long-term outcomes, not just project completion.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 rounded-xl border border-border/40 bg-background text-center hover:border-accent/40 transition-all"
                >
                  <h3 className="text-2xl font-bold text-accent mb-4">{item.value}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Builders */}
        <section className="py-20 bg-secondary/5">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-4">Why Companies Trust Us</h2>
              <p className="text-foreground/60 text-lg max-w-2xl mx-auto mb-12">
                We bring together the expertise, methodology, and commitment that organizations need for successful AI transformation.
              </p>

              <div className="grid md:grid-cols-3 gap-8 text-left">
                {[
                  {
                    metric: '100+',
                    description: 'Successful AI implementations across industries',
                  },
                  {
                    metric: '500M+',
                    description: 'In quantified business impact for our clients',
                  },
                  {
                    metric: '98%',
                    description: 'Client satisfaction rate post-implementation',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-8 rounded-xl border border-border/40 bg-background text-center"
                  >
                    <p className="text-4xl font-bold text-accent mb-2">{item.metric}</p>
                    <p className="text-foreground/70">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
              <h2 className="text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how Acadine Solutions can help transform your operations through practical AI implementation.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary-foreground text-primary font-semibold hover:shadow-lg transition-all"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

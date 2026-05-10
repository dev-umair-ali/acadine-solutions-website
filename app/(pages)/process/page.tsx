'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { PROCESS_STEPS } from '@/lib/constants'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { siteContainer } from '@/lib/site-layout'

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative flex items-center py-12 md:py-16 bg-secondary/5">
          <div className={`${siteContainer} w-full`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our Proven Process
              </h1>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                A systematic, transparent approach to diagnosing your challenges, designing solutions, and implementing lasting change.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Process Section */}
        <section className="py-12 md:py-14">
          <div className="max-w-4xl mx-auto px-4">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-16 last:mb-0"
              >
                {/* Timeline connector */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="flex justify-center mb-16">
                    <div className="w-1 h-16 bg-gradient-to-b from-accent to-transparent" />
                  </div>
                )}

                <div className="grid md:grid-cols-3 gap-8 items-start">
                  {/* Step number */}
                  <div className="flex justify-center md:justify-end">
                    <motion.div
                      whileInView={{ scale: 1.1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="w-24 h-24 rounded-full bg-accent text-background flex items-center justify-center"
                    >
                      <span className="font-bold text-5xl">{step.number}</span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2">
                    <h2 className="text-4xl font-bold mb-4">{step.title}</h2>
                    <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Detailed breakdown */}
                    <div className="space-y-4 mb-8">
                      {step.number === 1 && (
                        <>
                          <div>
                            <p className="font-semibold text-foreground mb-2">Key Activities:</p>
                            <ul className="space-y-2 text-foreground/70">
                              <li className="flex gap-2">
                                <span className="text-accent">•</span>
                                <span>Comprehensive workflow analysis and mapping</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-accent">•</span>
                                <span>Stakeholder interviews across departments</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-accent">•</span>
                                <span>Data landscape and system assessment</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-accent">•</span>
                                <span>Pain point and opportunity identification</span>
                              </li>
                            </ul>
                          </div>
                        </>
                      )}

                      {step.number === 2 && (
                        <>
                          <div>
                            <p className="font-semibold text-foreground mb-2">Key Activities:</p>
                            <ul className="space-y-2 text-foreground/70">
                              <li className="flex gap-2">
                                <span className="text-accent">•</span>
                                <span>AI use case identification and prioritization</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-accent">•</span>
                                <span>Solution architecture and technical design</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-accent">•</span>
                                <span>Implementation roadmap and timeline planning</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-accent">•</span>
                                <span>Resource and budget requirements definition</span>
                              </li>
                            </ul>
                          </div>
                        </>
                      )}

                      {step.number === 3 && (
                        <>
                          <div>
                            <p className="font-semibold text-foreground mb-2">Key Activities:</p>
                            <ul className="space-y-2 text-foreground/70">
                              <li className="flex gap-2">
                                <span className="text-accent">•</span>
                                <span>System development and integration</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-accent">•</span>
                                <span>Staff training and change management</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-accent">•</span>
                                <span>Deployment and performance monitoring</span>
                              </li>
                              <li className="flex gap-2">
                                <span className="text-accent">•</span>
                                <span>Optimization and continuous improvement</span>
                              </li>
                            </ul>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Timeline and outcomes */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                        <p className="text-sm text-foreground/60 mb-2">Duration</p>
                        <p className="text-lg font-semibold">
                          {step.number === 1 && '4-6 weeks'}
                          {step.number === 2 && '3-5 weeks'}
                          {step.number === 3 && '8-16 weeks'}
                        </p>
                      </div>
                      <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                        <p className="text-sm text-foreground/60 mb-2">Key Output</p>
                        <p className="text-lg font-semibold">
                          {step.number === 1 && 'Diagnostic Report'}
                          {step.number === 2 && 'Roadmap & Strategy'}
                          {step.number === 3 && 'Live System & Training'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why This Process Works */}
        <section className="py-12 md:py-14 bg-secondary/5">
          <div className={siteContainer}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why This Process Works
              </h2>
              <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
                Our methodology is grounded in operational reality and designed to maximize adoption and ROI.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Business-Driven Design',
                  description: 'Every decision is grounded in your business context and operational needs.',
                },
                {
                  title: 'Staff Engagement',
                  description: 'We involve your teams from day one, ensuring smooth adoption and ownership.',
                },
                {
                  title: 'Iterative Implementation',
                  description: 'We build and test in phases, learning and adapting as we go.',
                },
                {
                  title: 'Transparent Communication',
                  description: 'Regular updates and honest assessment of progress and challenges.',
                },
                {
                  title: 'Measurable Outcomes',
                  description: 'Clear metrics and KPIs tracked from diagnosis through optimization.',
                },
                {
                  title: 'Long-Term Partnership',
                  description: 'We stay engaged post-launch to optimize performance and drive continuous improvement.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="p-6 rounded-xl border border-border/40 bg-background"
                >
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-14 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Start Your Transformation?</h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Let&apos;s begin with a diagnosis of your current state and opportunities for AI-driven improvement.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary-foreground text-primary font-semibold hover:shadow-lg transition-all"
              >
                Schedule Diagnosis
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

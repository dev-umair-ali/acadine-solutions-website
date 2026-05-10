'use client'

import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { SERVICES } from '@/lib/constants'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Consulting Services | Acadine Solutions',
  description: 'End-to-end AI consulting services including assessment, design, implementation, and optimization. From business assessment to AI deployment.',
  openGraph: {
    title: 'AI Consulting Services | Acadine Solutions',
    description: 'End-to-end AI consulting services tailored to your business needs.',
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function ServicesPage() {
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
                AI Consulting Services
              </h1>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                End-to-end AI solutions tailored to your business needs, from assessment through implementation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-16"
            >
              {SERVICES.map((service, index) => {
                const IconComponent = service.icon
                const isEven = index % 2 === 0

                return (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    className={`grid md:grid-cols-2 gap-12 items-center ${
                      !isEven ? 'md:auto-cols-reverse' : ''
                    }`}
                  >
                    {/* Content */}
                    <div className={isEven ? 'order-1' : 'order-2'}>
                      <div className="mb-4">
                        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-accent" />
                        </div>
                      </div>

                      <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-foreground/70 mb-6 leading-relaxed">
                        {service.longDescription}
                      </p>

                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-accent" />
                          </div>
                          <span className="text-foreground/70">Comprehensive analysis and recommendations</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-accent" />
                          </div>
                          <span className="text-foreground/70">Business-focused implementation approach</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-accent" />
                          </div>
                          <span className="text-foreground/70">Measurable outcomes and ROI tracking</span>
                        </li>
                      </ul>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                      >
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* Visual */}
                    <div className={`order-2 md:order-none ${isEven ? '' : 'md:order-1'}`}>
                      <div className="relative h-80 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center">
                        <div className="relative w-40 h-40">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-0 rounded-full border border-accent/30"
                          />
                          <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                            className="absolute inset-4 rounded-full border border-accent/20"
                          />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <IconComponent className="w-20 h-20 text-accent opacity-40" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
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
              <h2 className="text-4xl font-bold mb-6">Ready to Explore Our Services?</h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Schedule a consultation to discuss your specific challenges and how our services can drive business value.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary-foreground text-primary font-semibold hover:shadow-lg transition-all"
              >
                Schedule a Consultation
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

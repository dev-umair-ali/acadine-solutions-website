'use client'

import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { COMMON_PROBLEMS } from '@/lib/constants'
import Link from 'next/link'
import { ArrowRight, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Rescue Service | Fix Failed AI Projects | Acadine Solutions',
  description: 'Salvage failing AI implementations. We diagnose root causes and rebuild AI projects for success.',
  openGraph: {
    title: 'AI Rescue Service | Fix Failed AI Projects',
    description: 'Turn around struggling AI projects with our rescue service.',
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

export default function AIRescuePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center py-20 bg-destructive/5">
          <div className="max-w-6xl mx-auto px-4 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive mb-4">
                <AlertCircle className="w-4 h-4" />
                <span className="text-sm font-semibold">Salvage Struggling AI Projects</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                AI Rescue for Failed Implementations
              </h1>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                AI projects that missed the mark? We diagnose the root causes and rebuild them for success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Problems & Solutions */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Common AI Project Failures
              </h2>
              <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
                We&apos;ve seen it all. Here are the patterns that lead to failed AI implementations and how we fix them.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {COMMON_PROBLEMS.map((problem) => (
                <motion.div
                  key={problem.id}
                  variants={itemVariants}
                  className="grid md:grid-cols-2 gap-8 items-center p-8 rounded-xl border border-border/40 bg-background hover:border-destructive/40 transition-all"
                >
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      {problem.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>

                  <div className="bg-accent/5 rounded-lg p-6 border border-accent/20">
                    <p className="text-sm text-foreground/60 mb-2">Our Solution:</p>
                    <p className="text-lg font-semibold text-accent">{problem.solution}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Assessment Process */}
        <section className="py-20 bg-secondary/5">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Our Rescue Assessment
              </h2>
              <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
                A systematic approach to understanding what went wrong and how to fix it.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Diagnosis',
                  description: 'Thoroughly analyze the failed project to understand root causes, technical issues, and business misalignments.',
                  step: '01',
                },
                {
                  title: 'Assessment',
                  description: 'Evaluate existing infrastructure, data quality, team capabilities, and organizational readiness.',
                  step: '02',
                },
                {
                  title: 'Redesign',
                  description: 'Create a new implementation plan that addresses root causes and ensures sustainable success.',
                  step: '03',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 rounded-xl border border-border/40 bg-background hover:border-accent/40 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <span className="font-bold text-accent">{item.step}</span>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why We Succeed Where Others Failed
              </h2>
              <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
                Our approach is built on understanding the operational and organizational factors that determine AI success.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                'Deep operational expertise, not just AI knowledge',
                'Business-first approach that prioritizes outcomes',
                'Proven experience rescuing failing projects',
                'Change management expertise for staff adoption',
                'Transparent communication about challenges and timelines',
                'Long-term partnership mindset, not project completion',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <p className="text-lg text-foreground/70">{item}</p>
                </motion.div>
              ))}
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
              <h2 className="text-4xl font-bold mb-6">Ready to Rescue Your AI Project?</h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Don&apos;t abandon your AI investment. Let&apos;s diagnose the issues and rebuild for success.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary-foreground text-primary font-semibold hover:shadow-lg transition-all"
              >
                Start Rescue Assessment
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

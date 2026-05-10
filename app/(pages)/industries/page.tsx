'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { INDUSTRIES } from '@/lib/constants'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

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

export default function IndustriesPage() {
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
                Industry Solutions
              </h1>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                AI consulting tailored to the unique challenges and opportunities of each industry.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-20"
            >
              {INDUSTRIES.map((industry, index) => (
                <motion.div
                  key={industry.id}
                  variants={itemVariants}
                  className="p-8 rounded-xl border border-border/40 bg-background hover:border-accent/40 hover:shadow-lg transition-all"
                >
                  {/* Header */}
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold mb-3">{industry.title}</h2>
                    <p className="text-lg text-foreground/70">{industry.description}</p>
                  </div>

                  {/* Content Grid */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Pain Points */}
                    <div>
                      <h3 className="text-xl font-semibold mb-6 text-destructive flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-destructive" />
                        Common Challenges
                      </h3>
                      <ul className="space-y-4">
                        {industry.painPoints.map((point, i) => (
                          <li key={i} className="flex gap-3 text-foreground/70">
                            <span className="text-destructive font-bold">◆</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Improvements */}
                    <div>
                      <h3 className="text-xl font-semibold mb-6 text-accent flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        Our Solutions
                      </h3>
                      <ul className="space-y-4">
                        {industry.improvements.map((improvement, i) => (
                          <li key={i} className="flex gap-3 text-foreground/70">
                            <span className="text-accent font-bold">✓</span>
                            <span>{improvement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 pt-8 border-t border-border/40 flex justify-between items-center">
                    <p className="text-foreground/60">Ready to transform your {industry.title.toLowerCase()} operations?</p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Cross-Industry Insights */}
        <section className="py-20 bg-secondary/5">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">
                Cross-Industry Patterns
              </h2>
              <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
                Regardless of industry, we see consistent patterns in how organizations can improve.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Workflow Inefficiency',
                  description: 'Manual processes consuming time and creating bottlenecks in every industry.',
                },
                {
                  title: 'Data Silos',
                  description: 'Fragmented information preventing informed decision-making and coordination.',
                },
                {
                  title: 'Scaling Challenges',
                  description: 'Difficulty scaling operations without proportional increases in cost.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl border border-border/40 bg-background"
                >
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
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
              <h2 className="text-4xl font-bold mb-6">Your Industry, Our Expertise</h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                We bring deep industry understanding combined with proven AI implementation expertise.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary-foreground text-primary font-semibold hover:shadow-lg transition-all"
              >
                Discuss Your Industry Challenges
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

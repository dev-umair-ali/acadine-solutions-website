'use client'

import { motion } from 'framer-motion'
import { PROCESS_STEPS } from '@/lib/constants'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
}

export function ProcessSection() {
  return (
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
            How We Work
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            A proven three-step approach to diagnosing challenges and delivering AI solutions that drive real business value.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 max-w-3xl mx-auto"
        >
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline connector */}
              {index < PROCESS_STEPS.length - 1 && (
                <div className="absolute left-8 top-24 w-1 h-16 bg-gradient-to-b from-accent to-transparent" />
              )}

              <div className="flex gap-8 items-start">
                {/* Step number circle */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    whileInView={{ scale: 1.1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="w-16 h-16 rounded-full bg-accent text-background flex items-center justify-center font-bold text-2xl"
                  >
                    {step.number}
                  </motion.div>
                </div>

                {/* Step content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">{step.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            href="/process"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Dive Deeper Into Our Process
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

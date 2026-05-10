'use client'

import { motion } from 'framer-motion'
import { USE_CASES } from '@/lib/constants'

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

export function UseCasesSection() {
  return (
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
            AI Use Cases We Deliver
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            From document automation to predictive analytics, we implement AI solutions across industries and functions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {USE_CASES.map((useCase, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-xl border border-border/40 bg-background hover:border-accent/40 hover:shadow-lg transition-all hover:bg-accent/2"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent font-bold text-lg">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{useCase.title}</h3>
                  <p className="text-foreground/70 text-sm">{useCase.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

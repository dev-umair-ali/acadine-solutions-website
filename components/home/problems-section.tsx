'use client'

import { motion } from 'framer-motion'

const problems = [
  {
    icon: '⚙️',
    title: 'Operational Inefficiency',
    description: 'Manual workflows consuming time and resources with limited visibility into bottlenecks.',
  },
  {
    icon: '📊',
    title: 'Data Silos',
    description: 'Fragmented information across systems preventing informed decision-making.',
  },
  {
    icon: '⏱️',
    title: 'Slow Time-to-Market',
    description: 'Lengthy processes slowing innovation and response to market opportunities.',
  },
  {
    icon: '💰',
    title: 'Rising Costs',
    description: 'Growing operational expenses without corresponding productivity improvements.',
  },
]

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

export function ProblemsSection() {
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
            Common Challenges We Solve
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Businesses of all sizes face operational challenges that limit growth and increase costs. We identify and address root causes with AI-powered solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-xl border border-border/40 bg-background hover:border-accent/40 transition-all hover:shadow-lg"
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{problem.title}</h3>
              <p className="text-foreground/70">{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

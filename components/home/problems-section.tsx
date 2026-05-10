'use client'

import { motion } from 'framer-motion'
import { Boxes, GitBranch, Hand, HelpCircle } from 'lucide-react'

const problems = [
  {
    icon: Boxes,
    title: 'Too many tools, no results',
    description: 'SaaS sprawl creates integration debt, unclear ownership, and reporting that never quite reconciles.',
  },
  {
    icon: Hand,
    title: 'Manual processes',
    description: 'High-touch workflows consume leadership attention and slow execution — especially month-end and compliance cycles.',
  },
  {
    icon: HelpCircle,
    title: 'AI confusion',
    description: 'Teams are unsure what is feasible, what is responsible, and what is simply vendor noise.',
  },
  {
    icon: GitBranch,
    title: 'Poor workflows',
    description: 'Handoffs, approvals, and exceptions are opaque — so improvement efforts lack a baseline.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

export function ProblemsSection() {
  return (
    <section className="border-b border-border/40 bg-muted/25 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-[2.5rem]">
            Operational pain points we see most often
          </h2>
          <p className="mt-4 text-pretty text-lg text-foreground/60">
            These issues rarely resolve with another dashboard — they require clarity, ownership, and disciplined execution.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {problems.map((problem) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={problem.title}
                variants={itemVariants}
                className="group rounded-2xl border border-border/60 bg-background p-6 transition hover:border-accent/35 hover:shadow-[0_18px_50px_-28px_rgba(15,25,41,0.35)] md:p-8"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-muted/30 text-accent transition group-hover:border-accent/30">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{problem.title}</h3>
                <p className="mt-2 leading-relaxed text-foreground/65">{problem.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

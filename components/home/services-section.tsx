'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { SERVICES } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

export function ServicesSection() {
  return (
    <section className="border-b border-border/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-[2.5rem]">
            Services built for executive clarity
          </h2>
          <p className="mt-4 text-pretty text-lg text-foreground/60">
            From assessment to implementation — including rework when prior investments did not land. Each engagement is scoped
            to outcomes, owners, and an honest view of what should remain manual.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {SERVICES.map((service) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group flex flex-col rounded-2xl border border-border/60 bg-background p-7 transition hover:border-accent/35 hover:shadow-[0_18px_50px_-28px_rgba(15,25,41,0.28)]"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-muted/30 text-accent transition group-hover:border-accent/30">
                  <IconComponent className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </div>

                <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/65">{service.description}</p>

                <Link
                  href="/services"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition group-hover:gap-3"
                >
                  View details
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl border border-border/70 px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted/40"
          >
            Explore all services
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

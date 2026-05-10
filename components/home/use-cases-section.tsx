'use client'

import { motion } from 'framer-motion'
import { USE_CASES, type UseCasePreview } from '@/lib/constants'

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

function MiniPreview({ type }: { type: UseCasePreview }) {
  if (type === 'reporting') {
    return (
      <div className="rounded-xl border border-border/50 bg-muted/20 p-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] font-medium text-foreground/55">Executive pack</span>
          <span className="text-[10px] text-foreground/40">Auto</span>
        </div>
        <div className="flex h-14 items-end gap-1">
          {[35, 48, 42, 60, 55, 72, 68, 80].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm bg-primary/15" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="mt-2 grid grid-cols-3 gap-2 text-[9px] text-foreground/45">
          <span>Rev</span>
          <span>Margin</span>
          <span>Cash</span>
        </div>
      </div>
    )
  }
  if (type === 'workflow') {
    return (
      <div className="rounded-xl border border-border/50 bg-muted/20 p-3">
        <p className="mb-2 text-[10px] font-medium text-foreground/55">Approval path</p>
        <div className="space-y-2">
          {['Intake', 'Review', 'Release'].map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-[10px] font-semibold text-accent">
                {i + 1}
              </span>
              <div className="h-2 flex-1 rounded-full bg-primary/10">
                <div className="h-full w-[72%] rounded-full bg-accent/45" />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  if (type === 'customer') {
    return (
      <div className="rounded-xl border border-border/50 bg-muted/20 p-3">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] font-medium text-foreground/55">Service queue</span>
          <span className="rounded-full bg-background px-2 py-0.5 text-[9px] text-foreground/50">SLA</span>
        </div>
        <div className="space-y-2">
          {[72, 88, 64].map((w, i) => (
            <div key={i} className="flex items-center gap-2 rounded-lg border border-border/40 bg-background/70 px-2 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
              <div className="h-1.5 flex-1 rounded-full bg-primary/10">
                <div className="h-full rounded-full bg-primary/25" style={{ width: `${w}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  return (
    <div className="rounded-xl border border-border/50 bg-muted/20 p-3">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[10px] font-medium text-foreground/55">Trusted metrics</span>
        <span className="text-[10px] text-foreground/40">Governed</span>
      </div>
      <div className="flex h-16 items-end gap-1">
        {[40, 44, 48, 52, 58, 62, 70, 76, 82, 88].map((h, i) => (
          <div key={i} className="flex-1 rounded-sm bg-accent/25" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2 text-[9px] text-foreground/45">
        <span>Definition</span>
        <span>Lineage</span>
      </div>
    </div>
  )
}

export function UseCasesSection() {
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
            Where practical automation earns its place
          </h2>
          <p className="mt-4 text-pretty text-lg text-foreground/60">
            Representative patterns from engagements — expressed as operational outcomes, not buzzwords.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          {USE_CASES.map((useCase, index) => (
            <motion.article
              key={useCase.title}
              variants={itemVariants}
              className="flex flex-col rounded-2xl border border-border/60 bg-background p-6 transition hover:border-accent/35 hover:shadow-[0_18px_50px_-28px_rgba(15,25,41,0.28)] md:flex-row md:gap-8 md:p-8"
            >
              <div className="flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/45">
                  Use case {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">{useCase.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/65">{useCase.description}</p>
              </div>
              <div className="mt-6 w-full shrink-0 md:mt-0 md:w-[220px]">
                <MiniPreview type={useCase.preview} />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { USE_CASES, type UseCasePreview } from '@/lib/constants'
import { siteContainer, sectionY } from '@/lib/site-layout'
import { SectionHeader } from '@/components/section/section-header'

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] } },
}

function MiniPreview({ type }: { type: UseCasePreview }) {
  if (type === 'reporting') {
    return (
      <div className="relative h-full min-h-[140px] overflow-hidden rounded-xl border border-border/40 bg-linear-to-b from-muted/50 to-background p-4 shadow-inner">
        <span className="font-mono text-[9px] uppercase tracking-widest text-foreground/35">CFO pack</span>
        <div className="mt-4 flex h-16 items-end gap-1">
          {[38, 52, 45, 62, 58, 74, 70, 82].map((h, i) => (
            <div key={i} className="flex-1 rounded-sm bg-primary/15" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    )
  }
  if (type === 'workflow') {
    return (
      <div className="flex min-h-[140px] flex-col justify-center rounded-xl border border-border/40 bg-muted/25 p-4">
        <p className="font-mono text-[9px] uppercase tracking-widest text-foreground/35">Routing</p>
        <div className="mt-3 space-y-2">
          {['Intake', 'Review', 'Ship'].map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-accent/15 text-[10px] font-bold text-accent">
                {i + 1}
              </span>
              <div className="h-2 flex-1 rounded-full bg-primary/10">
                <div className="h-full w-[68%] rounded-full bg-accent/50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  if (type === 'customer') {
    return (
      <div className="min-h-[140px] rounded-xl border border-border/40 bg-background p-4 shadow-sm">
        <p className="font-mono text-[9px] uppercase tracking-widest text-foreground/35">Queue health</p>
        <div className="mt-4 space-y-2">
          {[80, 92, 71].map((w, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-2 flex-1 rounded-full bg-muted">
                <div className="h-full rounded-full bg-primary/30" style={{ width: `${w}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  return (
    <div className="min-h-[140px] rounded-xl border border-border/40 bg-linear-to-br from-muted/40 to-background p-4">
      <p className="font-mono text-[9px] uppercase tracking-widest text-foreground/35">Metric layer</p>
      <div className="mt-4 flex h-20 items-end gap-0.5">
        {[44, 48, 52, 58, 64, 72, 78, 85, 90].map((h, i) => (
          <div key={i} className="flex-1 rounded-[1px] bg-accent/35" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  )
}

export function UseCasesSection() {
  return (
    <section className={`relative ${sectionY}`}>
      <div className={`relative ${siteContainer}`}>
        <SectionHeader
          index="07"
          eyebrow="Use Cases"
          title="Real-world examples of what we deliver"
          description="Practical outcomes across reporting, workflows, customer processes, and data — not theoretical demos."
          align="center"
          className="mb-10 lg:mb-12"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid gap-4 lg:grid-cols-2 lg:gap-5"
        >
          {USE_CASES.map((useCase, index) => (
            <motion.article
              key={useCase.title}
              variants={item}
              className="group relative grid overflow-hidden rounded-2xl border border-border/45 bg-background shadow-[0_20px_56px_-40px_rgba(15,23,42,0.35)] md:grid-cols-[1fr_200px] lg:grid-cols-[1fr_240px]"
            >
              <div className="pointer-events-none absolute right-4 top-4 font-mono text-5xl font-bold tabular-nums text-foreground/6 transition group-hover:text-foreground/9">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="relative z-1 flex flex-col justify-center p-6 md:p-8">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">Use case</p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight lg:text-xl">{useCase.title}</h3>
                <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground md:text-[14px]">{useCase.description}</p>
              </div>
              <div className="relative border-t border-border/40 bg-muted/15 p-4 md:border-l md:border-t-0 md:p-5">
                <MiniPreview type={useCase.preview} />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

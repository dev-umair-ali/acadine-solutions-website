'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { ArrowRight, TrendingUp, DollarSign, Users, Target, Zap, BarChart3, CheckCircle2, AlertTriangle } from 'lucide-react'
import { siteContainer } from '@/lib/site-layout'

const caseStudies = [
  {
    company: 'AI Enabled Next Generation Medical Technology Platform',
    industry: 'Artificial Intelligence and Product Development',
    color: 'from-teal-500/15 to-accent/5',
    accentColor: 'text-teal-600 dark:text-teal-400',
    iconBg: 'bg-teal-500/10',
    challenge:
      'A global medical technology organization was developing a next generation platform using machine vision and machine learning to evaluate biological samples within demanding clinical, regulatory, performance, cost, and physical design constraints. The AI model was only one part of the problem. The complete system also had to acquire and process high volume instrument data, support model training, manage long term storage, meet cybersecurity and regulatory requirements, integrate hardware and software, operate within physical design constraints, and achieve commercially viable performance and cost targets.',
    solution:
      'A founding team member served as Digital Systems Architect for a next generation hematology initiative at Beckman Coulter, supporting initial technical assessment, concept development, systems architecture, program development, resource planning, and engineering team formation for the multi year, multi million dollar effort. The architecture combined on device technology with AWS cloud capabilities and required decisions around AI accuracy, computation, latency, data volumes, storage, security, integration, physical design, cost, and long term supportability.',
    approach: [
      'Evaluated model accuracy, computational performance, data volumes, storage strategy, architecture, and long term supportability',
      'Helped establish the global product development organization and staff engineering teams against the development roadmap',
      'Supported proofs of concept and development across a hybrid on device and AWS cloud architecture',
    ],
    heroMetric: { number: '~18 months', label: 'initial system architecture established' },
    results: [
      { icon: Users, metric: '75+ people', description: 'global product development organization' },
      { icon: Target, metric: '7+ teams', description: 'engineering teams staffed within approximately 12 months' },
    ],
  },
  {
    company: 'Federal Healthcare Utilization and Operational Analysis',
    industry: 'Enterprise Data Analytics and Decision Support',
    color: 'from-blue-500/15 to-primary/5',
    accentColor: 'text-blue-600 dark:text-blue-400',
    iconBg: 'bg-blue-500/10',
    challenge:
      'Leadership within the U.S. Department of Defense healthcare environment needed to understand how more than 100 geographically distributed hospitals and treatment facilities were being utilized and determine where services should be maintained, expanded, consolidated, relocated, or supported through alternative delivery models. The relevant information existed across different clinical, administrative, financial, staffing, geographic, and operational sources and formats and needed to be converted into a consistent enterprise view.',
    solution:
      'A founding team member, working within U.S. Navy healthcare leadership environments, participated in a large scale utilization and capacity management initiative spanning more than 100 DoD facilities across CONUS and OCONUS locations. Information from EHR and EMR systems, spreadsheets, database queries, operational reports, surveys, financial information, vendor resources, and site assessments was consolidated so facilities could be evaluated individually and against enterprise baselines.',
    approach: [
      'Consolidated fragmented clinical, operational, administrative, financial, and technical information',
      'Analyzed utilization, patient populations, specialty demand, provider resources, capacity, referrals, cost, geography, mission requirements, and projected growth',
      'Converted multi source information into structured assessments supporting executive decisions',
    ],
    heroMetric: { number: '100+ facilities', label: 'included in the enterprise analysis' },
    results: [
      { icon: BarChart3, metric: '20+ facilities', description: 'affected by resulting restructuring or service decisions' },
      { icon: DollarSign, metric: 'Hundreds of millions', description: 'reported savings associated with resulting decisions' },
    ],
  },
  {
    company: 'Multi Site Enterprise Technology Assessment',
    industry: 'Assessment and Modernization',
    color: 'from-amber-500/15 to-orange-500/5',
    accentColor: 'text-amber-600 dark:text-amber-400',
    iconBg: 'bg-amber-500/10',
    challenge:
      'Large organizations accumulate different technologies, vendors, configurations, workflows, licensing structures, support models, security exposures, and lifecycle risks across locations. By the time a major replacement is proposed, leadership may not have a complete picture of what is installed, what depends on it, what it costs to support, or where risk exists. That can lead to unnecessary spending, implementation surprises, and security issues after a decision is already made.',
    solution:
      'A founding team member developed a multi year track record leading nearly 50 enterprise technology assessments across distributed facilities through in person, remote, and hybrid engagements. Technical, operational, financial, cybersecurity, vendor, licensing, workflow, support, and lifecycle information was consolidated into structured assessments and modernization roadmaps designed to support executive investment and replacement decisions. The objective was to produce decision ready analysis, not simply document the current environment.',
    approach: [
      'Evaluated technologies, integrations, configurations, workflows, vendors, licensing, lifecycle status, and security',
      'Determined actual requirements, dependencies, cost implications, and the gaps that would affect implementation',
      'Delivered executive reports, dashboards, recommendations, and prioritized modernization roadmaps',
    ],
    heroMetric: { number: 'Nearly 50', label: 'enterprise assessments led' },
    results: [
      { icon: AlertTriangle, metric: 'Gaps surfaced', description: 'in configuration, licensing, data, cybersecurity, and support' },
      { icon: BarChart3, metric: 'Integrated analysis', description: 'technology, operations, lifecycle, cost, and security considered together' },
    ],
  },
  {
    company: 'Sequencing, Bioinformatics and Scientific Technology Platforms',
    industry: 'Advanced Systems and Data Engineering',
    color: 'from-violet-500/15 to-purple-500/5',
    accentColor: 'text-violet-600 dark:text-violet-400',
    iconBg: 'bg-violet-500/10',
    challenge:
      'Advanced life sciences platforms bring together scientific instrumentation, chemistry and assay development, laboratory automation, algorithms, signal processing, software, data pipelines, analytics, and bioinformatics. These disciplines must operate as one reliable platform while meeting requirements for performance, repeatability, validation, usability, and data quality. The requirements become even more demanding when technologies move into regulated diagnostic applications.',
    solution:
      'A founding team member brings more than two decades of biotechnology and life sciences systems development experience, including approximately seven years at Illumina and senior systems development leadership at Roche Sequencing Solutions, along with director level R&D experience at additional advanced biotechnology organizations. Prior work contributed to multiple generations of next generation sequencing technology, including HiSeq, NextSeq, and MiSeqDx, as well as nanopore sequencing, digital cell biology platforms, and emerging single molecule proteomics technologies. The experience also extends into modern machine learning and advanced AI systems.',
    approach: [
      'Integrated instrumentation, automation, scientific workflows, software, algorithms, and data into complete platforms',
      'Addressed data ingestion, processing, quality, analytical pipelines, bioinformatics, and system level validation',
      'Helped translate scientific concepts into scalable research and diagnostic systems',
    ],
    heroMetric: { number: '20+ years', label: 'life sciences and biotechnology systems experience' },
    results: [
      { icon: Zap, metric: 'Multiple platforms', description: 'contributed to across sequencing and advanced biotechnology' },
      { icon: Target, metric: 'End to end', description: 'instrumentation, automation, software, algorithms, and data systems' },
    ],
  },
  {
    company: 'Multi Facility Technology Delivery, Governance and Adoption',
    industry: 'Program Execution and Operational Transformation',
    color: 'from-rose-500/15 to-pink-500/5',
    accentColor: 'text-rose-600 dark:text-rose-400',
    iconBg: 'bg-rose-500/10',
    challenge:
      'Large technology programs often encounter their greatest challenges beyond the technology itself. Ownership may be unclear, dependencies may remain unresolved until they create downstream delays or risk, working level concerns may not reach leadership in an actionable form, and technical go live may occur without enough attention to operational adoption. Success requires coordination across operations, IT, engineering, cybersecurity, vendors, field teams, data owners, support organizations, and executive leadership.',
    solution:
      'A founding team member has led and supported complex multi facility technology initiatives involving distributed technology assets, multiple facilities, vendors, infrastructure dependencies, cybersecurity requirements, integrations, implementation teams, and operational stakeholders. The work has included coordinating traditionally separate functions around a common implementation strategy and recovering challenged programs where governance, responsibilities, priorities, reporting, or execution needed to be reestablished.',
    approach: [
      'Defined ownership, responsibilities, escalation pathways, decision rights, and support models',
      'Aligned engineering, infrastructure, vendors, cybersecurity, field teams, and operations around common requirements',
      'Surfaced problems early through dashboards, risk registers, implementation plans, and executive reporting',
    ],
    heroMetric: { number: 'Multi facility', label: 'programs coordinated across distributed locations and teams' },
    results: [
      { icon: CheckCircle2, metric: 'Clear accountability', description: 'governance and responsibility frameworks established' },
      { icon: TrendingUp, metric: 'Program recovery', description: 'structure and momentum restored to challenged initiatives' },
    ],
  },
  {
    company: 'Large Scale Systems Integration and Data Modernization',
    industry: 'Enterprise Systems, Cloud and Integration',
    color: 'from-emerald-500/15 to-green-500/5',
    accentColor: 'text-emerald-600 dark:text-emerald-400',
    iconBg: 'bg-emerald-500/10',
    challenge:
      'Enterprise environments operating across dozens or hundreds of facilities face significant complexity when integrating systems, modernizing legacy technology, or consolidating large volumes of data. Architecture must account for interoperability, site specific infrastructure, security, data migration, operational continuity, and the practical realities of deploying technology across a distributed organization.',
    solution:
      'A founding team member has directed cross functional medical device and EHR integration initiatives spanning 48 U.S. Navy hospitals and clinics, provided program management supporting a Department of Defense Medical Device Integration Task Force affecting more than 650 military treatment facilities, and served as chief architect for a GovCloud legacy data consolidation strategy involving petabyte scale DoD health data. The work required coordination across enterprise architecture, data, cloud infrastructure, systems integration, healthcare technology, cybersecurity, program management, vendors, and operational stakeholders in environments where accuracy, security, continuity, and scalability were critical.',
    approach: [
      'Mapped systems, integrations, infrastructure, data sources, technical dependencies, and operational requirements',
      'Architected modernization strategies for distributed facilities, large data volumes, interoperability, and long term expansion',
      'Coordinated technical, operational, vendor, program, and leadership stakeholders around a common roadmap',
    ],
    heroMetric: { number: '48 facilities', label: 'multi site medical device and EHR integration' },
    results: [
      { icon: Users, metric: '650+ facilities', description: 'enterprise program scope supported' },
      { icon: BarChart3, metric: 'Petabyte scale', description: 'federal health data architecture experience' },
    ],
  },
]

const HEADLINE_STATS = [
  { value: 100, suffix: '+', label: 'Hospitals and facilities analyzed in a single enterprise initiative' },
  { value: 50, prefix: 'Nearly ', suffix: '', label: 'Enterprise technology assessments led' },
  { value: 75, suffix: '+', label: 'Professionals in a global product development organization supported' },
]

const CLOSING_CAPABILITIES = [
  'Consolidate fragmented information',
  'Improve visibility into operations',
  'Automate repetitive analysis',
  'Introduce AI where it provides practical value',
  'Modernize technology without unnecessary spending',
  'Strengthen governance and accountability',
  'Turn complex information into decisions leadership can act on',
]

const ATTRIBUTION_NOTE =
  'Experience attribution: the examples, organizations, roles, projects, and metrics on this page reflect prior professional experience of Acadine founding team members performed while employed by, consulting for, or otherwise supporting organizations outside of Acadine Solutions Group. They illustrate the experience those professionals now bring to Acadine engagements and should not be interpreted as projects contracted directly through Acadine Solutions Group.'

function AnimatedCounter({ value, prefix, suffix }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionVal = useMotionValue(0)
  const rounded = useTransform(motionVal, (v) =>
    Number.isInteger(value) ? Math.round(v) : v.toFixed(1),
  )

  useEffect(() => {
    const controls = animate(motionVal, value, { duration: 1.8, ease: [0.22, 1, 0.36, 1] })
    return controls.stop
  }, [motionVal, value])

  useEffect(() => {
    const unsub = rounded.on('change', (v) => {
      if (ref.current) ref.current.textContent = `${prefix ?? ''}${v}${suffix ?? ''}`
    })
    return unsub
  }, [rounded, prefix, suffix])

  return <span ref={ref}>{prefix ?? ''}{Number.isInteger(value) ? 0 : '0.0'}{suffix ?? ''}</span>
}

export default function CaseExamplesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative border-b border-border/40 bg-muted/20 py-14 md:py-18 lg:py-20">
          <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40" aria-hidden />
          <div className={`relative ${siteContainer}`}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-foreground/45">Selected Team Experience</p>
              <h1 className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
                Complex Problems {'\u2192'} Practical Solutions {'\u2192'} Measurable Impact
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground lg:text-lg">
                Acadine brings together senior professionals with experience delivering complex artificial intelligence, data, technology, cybersecurity, and operational transformation initiatives across commercial, healthcare, life sciences, medical technology, and federal environments.
              </p>
              <p className="mt-4 max-w-2xl text-pretty text-[15px] leading-relaxed text-muted-foreground lg:text-base">
                The industries below differ, but the underlying disciplines transfer directly. These experiences shaped how Acadine approaches client work today: understand the problem first, establish what the data can support, determine what is realistically achievable, and design the technology around the business outcome.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Animated Stats Strip */}
        <section className="section-invert border-b border-white/10 bg-primary text-primary-foreground">
          <div className={siteContainer}>
            <div className="grid grid-cols-3 divide-x divide-white/10">
              {HEADLINE_STATS.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="px-2 py-10 text-center md:px-4 md:py-12"
                >
                  <p className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                    <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-[11px] font-bold leading-snug text-primary-foreground/50">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-16 md:py-20 lg:py-24">
          <div className={siteContainer}>
            <p className="mb-12 max-w-3xl text-[12px] leading-relaxed text-foreground/45 md:mb-16">
              {ATTRIBUTION_NOTE}
            </p>
            <div className="space-y-20 md:space-y-28">
              {caseStudies.map((study, index) => {
                const isEven = index % 2 === 1

                return (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="relative"
                  >
                    {/* Case number */}
                    <div className="pointer-events-none absolute -left-2 -top-6 font-mono text-[6rem] font-black leading-none text-foreground/[0.03] sm:text-[8rem] md:-left-4 md:-top-8 lg:text-[10rem]">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div className={`relative grid gap-8 md:grid-cols-[1fr_1.1fr] md:gap-12 lg:gap-16 ${isEven ? 'md:[direction:rtl] md:*:[direction:ltr]' : ''}`}>
                      {/* Left: Info */}
                      <div className="flex flex-col">
                        <div className="flex items-center gap-3">
                          <span className="inline-block rounded-full border border-accent/25 bg-accent/8 px-3.5 py-1 text-[11px] font-bold tracking-[0.08em] text-accent">
                            {study.industry}
                          </span>
                          <span className="font-mono text-[11px] font-bold text-foreground/25">
                            Case {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>

                        <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                          {study.company}
                        </h3>

                        {/* Challenge */}
                        <div className="mt-6 rounded-xl border border-destructive/15 bg-destructive/[0.03] p-5">
                          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-destructive/70">
                            <AlertTriangle className="h-3.5 w-3.5" />
                            Challenge
                          </div>
                          <p className="mt-2.5 text-[15px] leading-relaxed text-foreground/75">
                            {study.challenge}
                          </p>
                        </div>

                        {/* Team Experience */}
                        <div className="mt-3 rounded-xl border border-accent/15 bg-accent/[0.03] p-5">
                          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-accent/80">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            Team Experience
                          </div>
                          <p className="mt-2.5 text-[15px] leading-relaxed text-foreground/75">
                            {study.solution}
                          </p>
                        </div>

                        {/* Approach steps */}
                        <div className="mt-5 space-y-2">
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/35">Approach</p>
                          {study.approach.map((step, j) => (
                            <div key={j} className="flex items-start gap-3">
                              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-muted/50 text-[10px] font-bold text-foreground/40">
                                {j + 1}
                              </span>
                              <p className="text-[13px] leading-relaxed text-muted-foreground">{step}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right: Results card */}
                      <div className="flex flex-col gap-4">
                        {/* Hero metric card */}
                        <div className={`relative overflow-hidden rounded-2xl bg-linear-to-br ${study.color} border border-border/40 p-8 shadow-[0_28px_72px_-32px_rgba(15,23,42,0.3)] md:p-10`}>
                          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl" aria-hidden />
                          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-foreground/40">Key Result</p>
                          <div className="mt-4">
                            <span className="text-5xl font-black tracking-tight text-foreground md:text-6xl lg:text-7xl">
                              {study.heroMetric.number}
                            </span>
                          </div>
                          <p className="mt-2 text-[15px] font-medium text-muted-foreground">{study.heroMetric.label}</p>

                          {/* Mini bar chart */}
                          <div className="mt-6 flex h-16 items-end gap-1">
                            {Array.from({ length: 12 }).map((_, k) => {
                              const progress = (k + 1) / 12
                              const h = 20 + progress * 80
                              return (
                                <motion.div
                                  key={k}
                                  initial={{ height: 0 }}
                                  whileInView={{ height: `${h}%` }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 0.4, delay: 0.03 * k }}
                                  className="flex-1 rounded-sm bg-foreground/10"
                                />
                              )
                            })}
                          </div>
                        </div>

                        {/* Secondary metrics */}
                        <div className="grid grid-cols-2 gap-4">
                          {study.results.map((result, j) => {
                            const Icon = result.icon
                            return (
                              <div
                                key={j}
                                className="rounded-xl border border-border/45 bg-background p-5 shadow-sm transition-all hover:border-accent/30 hover:shadow-md"
                              >
                                <div className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg ${study.iconBg}`}>
                                  <Icon className={`h-4 w-4 ${study.accentColor}`} />
                                </div>
                                <p className="text-xl font-bold tracking-tight text-foreground md:text-2xl">
                                  {result.metric}
                                </p>
                                <p className="mt-1 text-[13px] leading-snug text-muted-foreground">
                                  {result.description}
                                </p>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 md:py-18">
          <div className={siteContainer}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="section-invert relative overflow-hidden rounded-[1.25rem] bg-primary p-10 text-primary-foreground shadow-[0_40px_100px_-48px_rgba(15,23,42,0.85)] md:p-14 lg:p-16"
            >
              <div className="pointer-events-none absolute inset-0 texture-grain opacity-15" aria-hidden />
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-[80px]" aria-hidden />

              <div className="relative mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Bring enterprise experience to your business
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-primary-foreground/65">
                  The scale and industry may change. The fundamentals remain remarkably consistent. Successful transformation begins by understanding the problem, organizing the information, identifying the constraints, defining what success actually means, and then selecting the technology that supports that outcome.
                </p>
                <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-primary-foreground/65">
                  Acadine applies experience developed across AI, data, regulated technology, enterprise systems, cybersecurity, and complex operational environments to help organizations:
                </p>
                <ul className="mx-auto mt-6 grid max-w-2xl gap-2 text-left sm:grid-cols-2">
                  {CLOSING_CAPABILITIES.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[14px] leading-snug text-primary-foreground/70">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-primary-foreground/65">
                  Acadine{'\u2019'}s senior leadership remains directly involved in strategy, architecture, oversight, and delivery. Clients benefit directly from the experience represented on this page throughout the engagement.
                </p>
                <p className="mx-auto mt-8 max-w-2xl text-[16px] font-semibold leading-relaxed text-primary-foreground">
                  Understand the problem. Organize the data. Simplify the workflow. Deliver information leadership can act on.
                </p>
                <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <Link
                    href="/contact/"
                    className="inline-flex items-center gap-2 rounded-xl bg-primary-foreground px-8 py-3.5 text-[14px] font-bold text-primary shadow-xl transition hover:bg-white"
                  >
                    Start With a Discovery Conversation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/process/"
                    className="inline-flex items-center rounded-xl border border-primary-foreground/20 bg-primary-foreground/5 px-6 py-3.5 text-[14px] font-semibold text-primary-foreground transition hover:bg-primary-foreground/10"
                  >
                    See our process
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

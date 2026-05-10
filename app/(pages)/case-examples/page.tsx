'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, TrendingUp } from 'lucide-react'

const caseStudies = [
  {
    company: 'Healthcare Network',
    industry: 'Healthcare',
    challenge: 'Administrative burden consuming 40% of clinical staff time on documentation and scheduling.',
    solution: 'Implemented AI-assisted documentation, automated scheduling, and intelligent workflow routing.',
    results: [
      { metric: '35% reduction', description: 'in administrative time per provider' },
      { metric: '2 hours/day', description: 'additional clinical time per provider' },
      { metric: '92% adoption', description: 'rate among clinical staff' },
    ],
  },
  {
    company: 'Financial Institution',
    industry: 'Finance',
    challenge: 'Manual transaction reconciliation taking 15,000+ hours annually with frequent errors.',
    solution: 'Built AI-powered reconciliation engine with automated exception handling and real-time monitoring.',
    results: [
      { metric: '99.2% accuracy', description: 'improvement in reconciliation' },
      { metric: '12,000 hours', description: 'saved annually' },
      { metric: '$2.1M', description: 'annual cost savings' },
    ],
  },
  {
    company: 'Logistics Provider',
    industry: 'Logistics',
    challenge: 'Inefficient route planning resulting in 18% higher fuel costs and late deliveries.',
    solution: 'Deployed AI routing optimization considering real-time traffic, weather, and delivery constraints.',
    results: [
      { metric: '16% reduction', description: 'in fuel costs' },
      { metric: '12% fewer', description: 'late deliveries' },
      { metric: '24% increase', description: 'in daily delivery volume' },
    ],
  },
  {
    company: 'Manufacturing Facility',
    industry: 'Operations',
    challenge: 'Quality control issues causing 8% reject rate and customer complaints.',
    solution: 'Implemented computer vision-based quality assurance with real-time defect detection.',
    results: [
      { metric: '94% reduction', description: 'in defect rate' },
      { metric: '99.2% accuracy', description: 'in quality detection' },
      { metric: '$4.8M', description: 'saved in waste reduction' },
    ],
  },
  {
    company: 'Customer Support Center',
    industry: 'Support',
    challenge: '45-minute average resolution time with high support team turnover.',
    solution: 'Deployed AI chatbots for tier-1 support and intelligent ticket routing to specialists.',
    results: [
      { metric: '68% reduction', description: 'in resolution time for tier-1 issues' },
      { metric: '42% fewer', description: 'support tickets requiring human intervention' },
      { metric: '35% increase', description: 'in team satisfaction' },
    ],
  },
  {
    company: 'Professional Services Firm',
    industry: 'Professional Services',
    challenge: 'Resource allocation inefficiencies leading to 20% staff utilization variance.',
    solution: 'Built AI-powered resource planning system with project forecasting and skill matching.',
    results: [
      { metric: '18% increase', description: 'in billable hours' },
      { metric: '8% improvement', description: 'in resource utilization consistency' },
      { metric: '$5.2M', description: 'increased annual revenue' },
    ],
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

export default function CaseExamplesPage() {
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
                Case examples
              </h1>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Illustrative engagements structured as problem, solution, and outcome — representative of how we report internally.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-8 rounded-xl border border-border/40 bg-background hover:border-accent/40 hover:shadow-lg transition-all"
                >
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-4 mb-4">
                      <div>
                        <h2 className="text-3xl font-bold text-foreground">{study.company}</h2>
                        <p className="text-foreground/60 text-sm mt-1">{study.industry}</p>
                      </div>
                      <div className="flex items-center gap-2 text-accent font-semibold mt-4 md:mt-0">
                        <TrendingUp className="w-5 h-5" />
                        Measurable Success
                      </div>
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* Challenge */}
                    <div>
                      <h3 className="text-sm font-semibold text-destructive uppercase tracking-wider mb-3">
                        Challenge
                      </h3>
                      <p className="text-foreground/70 leading-relaxed">{study.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                        Solution
                      </h3>
                      <p className="text-foreground/70 leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="border-t border-border/40 pt-8">
                    <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">
                      Results & Impact
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      {study.results.map((result, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-lg bg-accent/5 border border-accent/20"
                        >
                          <p className="text-2xl font-bold text-accent mb-2">{result.metric}</p>
                          <p className="text-sm text-foreground/70">{result.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Key Insights */}
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
                What Success Looks Like
              </h2>
              <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
                Common themes across our successful implementations.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Operational Efficiency',
                  description: 'Average 30% reduction in manual work through intelligent automation.',
                },
                {
                  title: 'Cost Savings',
                  description: 'Typical implementations deliver 2-4x ROI within first 18 months.',
                },
                {
                  title: 'Staff Satisfaction',
                  description: 'Employees spend less time on tedious work, more on strategic tasks.',
                },
                {
                  title: 'Scalability',
                  description: 'Systems designed to grow with your business without proportional cost increases.',
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
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
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
              <h2 className="text-4xl font-bold mb-6">Ready to Achieve Similar Results?</h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Your success story starts with a conversation. Let&apos;s discuss your specific challenges and opportunities.
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary-foreground text-primary font-semibold hover:shadow-lg transition-all"
              >
                Start Your Project
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

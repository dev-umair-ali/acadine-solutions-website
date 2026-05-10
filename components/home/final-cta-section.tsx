'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function FinalCtaSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to Transform Your Operations?
          </h2>

          <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s discuss how practical AI implementation can drive measurable business value for your organization.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg bg-primary-foreground text-primary font-semibold hover:shadow-lg transition-all flex items-center gap-2"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/case-examples"
              className="px-8 py-4 rounded-lg border-2 border-primary-foreground text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-all"
            >
              View Case Studies
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-12 border-t border-primary-foreground/20"
          >
            <p className="text-sm text-primary-foreground/70 mb-6">Trusted by leading enterprises in</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center opacity-80">
              <div>
                <p className="font-semibold">Healthcare</p>
                <p className="text-xs">Leading medical systems</p>
              </div>
              <div>
                <p className="font-semibold">Finance</p>
                <p className="text-xs">Financial institutions</p>
              </div>
              <div>
                <p className="font-semibold">Logistics</p>
                <p className="text-xs">Supply chain leaders</p>
              </div>
              <div>
                <p className="font-semibold">Operations</p>
                <p className="text-xs">Manufacturing leaders</p>
              </div>
              <div>
                <p className="font-semibold">Support</p>
                <p className="text-xs">Customer-centric companies</p>
              </div>
              <div>
                <p className="font-semibold">Professional Services</p>
                <p className="text-xs">Consulting firms</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

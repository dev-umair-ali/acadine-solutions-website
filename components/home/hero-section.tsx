'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center py-20">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider">
                Transform Your Operations
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
              AI That <span className="text-accent">Drives Real</span> Business Value
            </h1>

            <p className="text-lg text-foreground/70 mb-8 leading-relaxed max-w-xl">
              We don&apos;t sell AI hype. We diagnose your workflows, design practical solutions, and implement systems that deliver measurable operational improvements.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all inline-flex items-center justify-center gap-2"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/process"
                className="px-6 py-3 rounded-lg border border-primary/30 text-foreground font-semibold hover:bg-primary/5 transition-all"
              >
                See Our Process
              </Link>
            </div>
          </motion.div>

          {/* Right Side - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block relative"
          >
            <div className="relative h-96 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/20 flex items-center justify-center overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  {/* Outer ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-0 rounded-full border border-accent/30"
                  />
                  {/* Middle ring */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-4 rounded-full border border-accent/20"
                  />
                  {/* Center dot */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-accent" />
                  </div>
                </div>
              </div>

              {/* Stat cards overlaid */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-6 left-6 bg-background/90 backdrop-blur-sm rounded-lg p-4 border border-border/40"
              >
                <div className="text-xs text-foreground/60 mb-1">Typical Implementation</div>
                <div className="text-2xl font-bold text-accent">8-16 weeks</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute top-6 right-6 bg-background/90 backdrop-blur-sm rounded-lg p-4 border border-border/40"
              >
                <div className="text-xs text-foreground/60 mb-1">Average ROI Improvement</div>
                <div className="text-2xl font-bold text-accent">3-5x</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

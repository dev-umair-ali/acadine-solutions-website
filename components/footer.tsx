import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'
import { siteContainer } from '@/lib/site-layout'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60 bg-primary text-primary-foreground">
      <div className={`${siteContainer} py-10 md:py-12`}>
        <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground text-sm font-bold text-primary">
                A
              </span>
              <span className="text-sm font-semibold">Acadine Solutions</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
              Business-first consulting: diagnose workflows, improve operations, and implement intelligent automation where
              it earns measurable outcomes.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a href="mailto:hello@acadine.com" className="flex items-center gap-2 text-primary-foreground/85 hover:text-primary-foreground">
                <Mail className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
                hello@acadine.com
              </a>
              <a href="tel:+14155551234" className="flex items-center gap-2 text-primary-foreground/85 hover:text-primary-foreground">
                <Phone className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
                +1 (415) 555-1234
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/55">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-primary-foreground/75 hover:text-primary-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/75 hover:text-primary-foreground">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/case-examples" className="text-primary-foreground/75 hover:text-primary-foreground">
                  Case examples
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/55">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-primary-foreground/75 hover:text-primary-foreground">
                  All services
                </Link>
              </li>
              <li>
                <Link href="/ai-rescue" className="text-primary-foreground/75 hover:text-primary-foreground">
                  AI Rescue
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-primary-foreground/75 hover:text-primary-foreground">
                  Process
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/55">Industries</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/industries" className="text-primary-foreground/75 hover:text-primary-foreground">
                  Overview
                </Link>
              </li>
              <li className="text-primary-foreground/55">
                Healthcare · Finance · Logistics · Operations · Support · Professional services
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-5 border-t border-primary-foreground/15 pt-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-primary-foreground">Discuss priorities with a practitioner — not a pitch deck.</p>
            <p className="mt-1 text-sm text-primary-foreground/70">Share context on workflows, constraints, and outcomes.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary hover:opacity-95"
          >
            Book a Consultation
          </Link>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-primary-foreground/15 pt-6 text-sm text-primary-foreground/55 md:flex-row md:items-center">
          <p>&copy; {year} Acadine Solutions. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/contact" className="hover:text-primary-foreground/85">
              Privacy request
            </Link>
            <Link href="/contact" className="hover:text-primary-foreground/85">
              Terms inquiry
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

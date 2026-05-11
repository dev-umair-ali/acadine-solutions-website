import Link from 'next/link'
import { Mail, Phone, ArrowUpRight } from 'lucide-react'
import { siteContainer } from '@/lib/site-layout'

const footerNav = {
  company: [
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/case-examples', label: 'Case examples' },
  ],
  services: [
    { href: '/services', label: 'All services' },
    { href: '/ai-rescue', label: 'AI Rescue' },
    { href: '/process', label: 'Process' },
  ],
  industries: [
    { href: '/industries', label: 'Overview' },
  ],
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border/60 bg-primary text-primary-foreground">
      {/* Subtle dot grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 texture-grain opacity-[0.15]" aria-hidden />

      {/* CTA banner */}
      <div className="relative border-b border-primary-foreground/10">
        <div className={`${siteContainer} py-12 md:py-14`}>
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-lg">
              <h3 className="text-[1.35rem] font-bold leading-tight tracking-tight text-primary-foreground md:text-2xl">
                Discuss priorities with a practitioner — not a pitch deck.
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-primary-foreground/60">
                Share context on workflows, constraints, and outcomes. We&apos;ll tell you honestly what&apos;s worth pursuing.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary-foreground px-7 py-3.5 text-[14px] font-bold text-primary shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)] transition hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.35)]"
            >
              Book a Consultation
              <ArrowUpRight className="h-4 w-4 opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="relative">
        <div className={`${siteContainer} py-12 md:py-14`}>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            {/* Brand column */}
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/10 text-[14px] font-bold text-primary-foreground ring-1 ring-primary-foreground/15">
                  A
                </span>
                <div className="leading-tight">
                  <span className="text-[15px] font-bold tracking-tight">Acadine</span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-primary-foreground/45">
                    Solutions
                  </span>
                </div>
              </div>
              <p className="mt-5 max-w-xs text-[13px] leading-[1.7] text-primary-foreground/55">
                Business-first consulting: diagnose workflows, improve operations, and implement intelligent automation
                where it earns measurable outcomes.
              </p>
              <div className="mt-6 space-y-3">
                <a
                  href="mailto:hello@acadine.com"
                  className="flex items-center gap-2.5 text-[13px] text-primary-foreground/70 transition hover:text-primary-foreground"
                >
                  <Mail className="h-4 w-4 shrink-0 opacity-60" aria-hidden />
                  hello@acadine.com
                </a>
                <a
                  href="tel:+14155551234"
                  className="flex items-center gap-2.5 text-[13px] text-primary-foreground/70 transition hover:text-primary-foreground"
                >
                  <Phone className="h-4 w-4 shrink-0 opacity-60" aria-hidden />
                  +1 (415) 555-1234
                </a>
              </div>
            </div>

            {/* Nav columns */}
            <div className="lg:col-span-2">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-foreground/40">
                Company
              </h4>
              <ul className="mt-5 space-y-3">
                {footerNav.company.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[13px] font-medium text-primary-foreground/65 transition hover:text-primary-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-foreground/40">
                Services
              </h4>
              <ul className="mt-5 space-y-3">
                {footerNav.services.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[13px] font-medium text-primary-foreground/65 transition hover:text-primary-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-4">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-foreground/40">
                Industries
              </h4>
              <ul className="mt-5 space-y-3">
                {footerNav.industries.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[13px] font-medium text-primary-foreground/65 transition hover:text-primary-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-xl border border-primary-foreground/10 bg-primary-foreground/4 px-4 py-3.5">
                <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-primary-foreground/35">Sectors</p>
                <p className="mt-1.5 text-[12px] leading-relaxed text-primary-foreground/50">
                  Healthcare · Finance · Logistics · Operations · Support · Professional services
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-primary-foreground/10">
        <div className={`${siteContainer} flex flex-col items-start justify-between gap-3 py-6 md:flex-row md:items-center`}>
          <p className="text-[12px] font-medium text-primary-foreground/40">
            &copy; {year} Acadine Solutions. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[12px] font-medium text-primary-foreground/40">
            <Link href="/contact" className="transition hover:text-primary-foreground/65">
              Privacy
            </Link>
            <Link href="/contact" className="transition hover:text-primary-foreground/65">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

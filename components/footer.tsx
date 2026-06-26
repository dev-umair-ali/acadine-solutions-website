import Link from 'next/link'
import Image from 'next/image'
import { Mail } from 'lucide-react'
import { siteContainer } from '@/lib/site-layout'

const links = [
  { href: '/services', label: 'Services' },
  { href: '/ai-rescue', label: 'AI Rescue' },
  { href: '/process', label: 'Process' },
  { href: '/industries', label: 'Industries' },
  { href: '/case-examples', label: 'Cases' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="section-invert relative border-t border-border/60 bg-primary text-primary-foreground">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden
      />

      <div className={`relative ${siteContainer} py-10 md:py-12`}>
        {/* Top row: brand + nav + contact */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-12">
          {/* Brand */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Acadine Solutions"
                width={160}
                height={48}
                className="h-12 w-auto object-contain brightness-0 invert sm:h-14"
              />
            </Link>
            <p className="mt-4 max-w-[260px] text-[12px] leading-relaxed text-primary-foreground/45">
              Business-first consulting. Diagnose workflows, improve operations, implement what earns measurable outcomes.
            </p>
          </div>

          {/* Nav links — single row on desktop, wrapped grid on mobile */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 md:gap-x-8" aria-label="Footer">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] font-medium text-primary-foreground/55 transition hover:text-primary-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Contact */}
          <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-5 md:flex-col md:items-end md:gap-2.5">
            <a
              href="mailto:info@acadine.io"
              className="inline-flex items-center gap-2 text-[13px] text-primary-foreground/55 transition hover:text-primary-foreground"
            >
              <Mail className="h-3.5 w-3.5 shrink-0 opacity-50" aria-hidden />
              info@acadine.io
            </a>
          </div>
        </div>

        {/* Divider + bottom */}
        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-primary-foreground/10 pt-6 md:flex-row md:items-center">
          <p className="text-[11px] font-medium text-primary-foreground/30">
            &copy; {year} Acadine Solutions Group LLC. All rights reserved.
          </p>
          <div className="flex gap-5 text-[11px] font-medium text-primary-foreground/30">
            <Link href="/contact" className="transition hover:text-primary-foreground/55">Privacy</Link>
            <Link href="/contact" className="transition hover:text-primary-foreground/55">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

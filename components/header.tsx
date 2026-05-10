'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { LayoutGroup, motion } from 'framer-motion'
import { ArrowUpRight, Menu, Phone, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { siteContainer } from '@/lib/site-layout'

const NAV = [
  { href: '/services', label: 'Services' },
  { href: '/ai-rescue', label: 'AI Rescue' },
  { href: '/process', label: 'Process' },
  { href: '/industries', label: 'Industries' },
  { href: '/case-examples', label: 'Cases' },
  { href: '/about', label: 'About' },
]

function DesktopNavLink({
  href,
  label,
  onClick,
}: {
  href: string
  label: string
  onClick?: () => void
}) {
  const pathname = usePathname()
  const active = pathname === href || (href !== '/' && pathname.startsWith(href))

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'relative z-10 rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors',
        active ? 'text-foreground' : 'text-foreground/60 hover:text-foreground',
      )}
    >
      {active && (
        <motion.span
          layoutId="header-nav-pill"
          className="absolute inset-0 z-0 rounded-full bg-linear-to-b from-background to-muted/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.65),0_2px_12px_rgba(15,23,42,0.08)] ring-1 ring-border/70"
          transition={{ type: 'spring', stiffness: 420, damping: 34 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </Link>
  )
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 6)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-[box-shadow,backdrop-filter,border-color,background-color] duration-300',
        isScrolled
          ? 'border-b border-border/55 bg-background/75 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.18)] backdrop-blur-xl backdrop-saturate-150'
          : 'border-b border-transparent bg-background/90 backdrop-blur-sm',
      )}
    >
      {/* Accent hairline */}
      <div
        className="pointer-events-none h-px w-full bg-linear-to-r from-transparent via-accent/35 to-transparent opacity-80"
        aria-hidden
      />

      <div className={cn(siteContainer, 'flex h-16 items-center justify-between gap-4 md:h-[4.25rem]')}>
        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-primary to-primary/85 text-sm font-bold text-primary-foreground shadow-[0_6px_20px_-4px_rgba(15,23,42,0.35)] ring-1 ring-white/15 transition-transform duration-300 group-hover:scale-[1.03]">
            <span className="absolute inset-0 rounded-xl bg-linear-to-t from-white/10 to-transparent opacity-70" />
            A
          </span>
          <span className="hidden leading-tight sm:flex sm:flex-col">
            <span className="text-[15px] font-semibold tracking-tight text-foreground">Acadine</span>
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-foreground/45">Solutions</span>
          </span>
        </Link>

        <LayoutGroup id="main-nav">
          <nav
            className="hidden items-center gap-0.5 rounded-full border border-border/60 bg-muted/35 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)] backdrop-blur-md md:flex"
            aria-label="Primary"
          >
            {NAV.map((item) => (
              <DesktopNavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>
        </LayoutGroup>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="tel:+14155551234"
            className="hidden items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3 py-2 text-[13px] font-medium text-foreground/75 shadow-sm transition hover:border-accent/35 hover:text-foreground lg:inline-flex"
          >
            <Phone className="h-3.5 w-3.5 text-accent" aria-hidden />
            <span className="tabular-nums">415 555‑1234</span>
          </a>

          <Link
            href="/contact"
            className="group relative hidden overflow-hidden rounded-full bg-linear-to-r from-primary via-primary to-primary/92 px-5 py-2.5 text-[13px] font-semibold text-primary-foreground shadow-[0_6px_22px_-6px_rgba(15,23,42,0.45)] transition hover:brightness-[1.07] sm:inline-flex sm:items-center sm:gap-1.5"
          >
            <span className="absolute inset-0 bg-linear-to-t from-white/15 to-transparent opacity-90" aria-hidden />
            <span className="relative">Book a Consultation</span>
            <ArrowUpRight className="relative h-4 w-4 opacity-90 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((v) => !v)}
            className="inline-flex rounded-xl border border-border/60 bg-muted/30 p-2.5 text-foreground shadow-sm transition hover:bg-muted/50 md:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <motion.nav
        id="mobile-nav"
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden border-b border-border/50 bg-background/95 backdrop-blur-xl md:hidden"
        aria-label="Mobile"
      >
        <div className={cn(siteContainer, 'flex flex-col gap-1 py-3')}>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-xl px-4 py-3 text-[15px] font-medium text-foreground/85 transition hover:bg-muted/50 active:scale-[0.99]"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 rounded-xl bg-primary px-4 py-3.5 text-center text-[15px] font-semibold text-primary-foreground"
            onClick={() => setIsOpen(false)}
          >
            Book a Consultation
          </Link>
        </div>
      </motion.nav>
    </header>
  )
}

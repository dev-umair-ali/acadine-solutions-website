'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV = [
  { href: '/services', label: 'Services' },
  { href: '/ai-rescue', label: 'AI Rescue' },
  { href: '/process', label: 'Process' },
  { href: '/industries', label: 'Industries' },
  { href: '/case-examples', label: 'Cases' },
  { href: '/about', label: 'About' },
]

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  const pathname = usePathname()
  const active = pathname === href || (href !== '/' && pathname.startsWith(href))

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'text-sm transition-colors',
        active ? 'font-semibold text-foreground' : 'text-foreground/65 hover:text-foreground',
      )}
    >
      {label}
    </Link>
  )
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-[background,backdrop-filter,border-color]',
        isScrolled ? 'border-border/50 bg-background/80 backdrop-blur-md' : 'border-transparent bg-background',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
            A
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-tight text-foreground">Acadine</span>
            <span className="text-[11px] font-medium text-foreground/45">Solutions</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-95 sm:inline-flex sm:items-center"
          >
            Book a Consultation
          </Link>
          <button
            type="button"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((v) => !v)}
            className="inline-flex rounded-lg p-2 text-foreground hover:bg-muted md:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav
          id="mobile-nav"
          className="border-t border-border/50 bg-background/95 backdrop-blur-md md:hidden"
          aria-label="Mobile"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {NAV.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} onClick={() => setIsOpen(false)} />
            ))}
            <Link
              href="/contact"
              className="mt-3 rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
              onClick={() => setIsOpen(false)}
            >
              Book a Consultation
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { AnimatePresence, LayoutGroup, motion } from 'framer-motion'
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react'
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

function DesktopNavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname()
  const active = pathname === href || (href !== '/' && pathname.startsWith(href))

  return (
    <Link
      href={href}
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

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="h-9 w-9" />

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-foreground/60 transition hover:bg-muted/50 hover:text-foreground"
      aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {resolvedTheme === 'dark' ? (
          <motion.span key="sun" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.15 }}>
            <Sun className="h-[16px] w-[16px]" strokeWidth={2} />
          </motion.span>
        ) : (
          <motion.span key="moon" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.15 }}>
            <Moon className="h-[16px] w-[16px]" strokeWidth={2} />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 6)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setIsOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-[box-shadow,backdrop-filter,border-color,background-color] duration-300',
          isScrolled
            ? 'border-b border-border/55 bg-background/75 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.18)] backdrop-blur-xl backdrop-saturate-150'
            : 'border-b border-transparent bg-background/90 backdrop-blur-sm',
        )}
      >
        <div
          className="pointer-events-none h-px w-full bg-linear-to-r from-transparent via-accent/35 to-transparent opacity-80"
          aria-hidden
        />

        <div className={cn(siteContainer, 'flex h-16 items-center justify-between gap-4 sm:h-17 md:h-18')}>
          {/* Logo */}
          <Link href="/" className="group flex shrink-0 items-center">
            <Image
              src="/logo.png"
              alt="Acadine Solutions"
              width={200}
              height={60}
              className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:h-16 lg:h-18 dark:brightness-0 dark:invert"
              priority
            />
          </Link>

          {/* Desktop nav */}
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

          {/* Right side */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <ThemeToggle />

            <Link
              href="/contact"
              className="group relative hidden overflow-hidden rounded-full bg-linear-to-r from-primary via-primary to-primary/92 px-5 py-2.5 text-[13px] font-bold text-primary-foreground shadow-[0_6px_22px_-6px_rgba(15,23,42,0.45)] transition hover:brightness-[1.07] sm:inline-flex sm:items-center sm:gap-1.5"
            >
              <span className="absolute inset-0 bg-linear-to-t from-white/15 to-transparent opacity-90" aria-hidden />
              <span className="relative">Book a Consultation</span>
              <ArrowUpRight className="relative h-4 w-4 opacity-90 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Mobile toggle */}
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
              className={cn(
                'relative inline-flex h-9 w-9 items-center justify-center rounded-lg text-foreground transition md:hidden',
                isOpen
                  ? 'bg-foreground/8'
                  : 'hover:bg-muted/50',
              )}
            >
              <span className="sr-only">Toggle menu</span>
              <AnimatePresence mode="wait" initial={false}>
                {isOpen ? (
                  <motion.span key="x" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.12 }}>
                    <X className="h-[18px] w-[18px]" strokeWidth={2.2} />
                  </motion.span>
                ) : (
                  <motion.span key="m" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.12 }}>
                    <Menu className="h-[18px] w-[18px]" strokeWidth={2.2} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — sheet overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden
            />

            {/* Sheet */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="fixed left-0 right-0 top-[calc(4rem+1px)] z-50 sm:top-[calc(4.25rem+1px)] md:top-[calc(4.5rem+1px)] md:hidden"
            >
              <div className={siteContainer}>
                <nav
                  className="overflow-hidden rounded-2xl border border-border/50 bg-background shadow-[0_24px_80px_-16px_rgba(15,23,42,0.25)]"
                  aria-label="Mobile"
                >
                  <div className="p-2">
                    {NAV.map((item, i) => {
                      const active = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                      return (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, y: -4 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: 0.04 * i }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              'flex items-center gap-3 rounded-xl px-3.5 py-3 text-[15px] font-semibold transition-colors active:bg-muted/60',
                              active
                                ? 'bg-accent/8 text-foreground'
                                : 'text-foreground/70 hover:bg-muted/30 hover:text-foreground',
                            )}
                          >
                            {active && (
                              <span className="h-4 w-[3px] rounded-full bg-accent" />
                            )}
                            {item.label}
                          </Link>
                        </motion.div>
                      )
                    })}
                  </div>

                  <div className="border-t border-border/40 p-2">
                    <Link
                      href="/contact"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-[14px] font-bold text-primary-foreground"
                    >
                      Book a Consultation
                      <ArrowUpRight className="h-4 w-4 opacity-80" />
                    </Link>
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

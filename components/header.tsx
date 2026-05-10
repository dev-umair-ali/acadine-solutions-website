'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'border-b border-border/40 bg-background/95 backdrop-blur-sm'
          : 'bg-background'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg text-foreground">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold">
            A
          </div>
          <span>Acadine</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/services"
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            Services
          </Link>
          <Link
            href="/ai-rescue"
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            AI Rescue
          </Link>
          <Link
            href="/process"
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            Process
          </Link>
          <Link
            href="/industries"
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            Industries
          </Link>
          <Link
            href="/case-examples"
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            Cases
          </Link>
          <Link
            href="/about"
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            About
          </Link>
        </nav>

        {/* CTA Button and Mobile Menu */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-block px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Start Project
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-sm px-4 py-4 space-y-3">
          <Link
            href="/services"
            className="block text-sm text-foreground/70 hover:text-foreground transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/ai-rescue"
            className="block text-sm text-foreground/70 hover:text-foreground transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            AI Rescue
          </Link>
          <Link
            href="/process"
            className="block text-sm text-foreground/70 hover:text-foreground transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Process
          </Link>
          <Link
            href="/industries"
            className="block text-sm text-foreground/70 hover:text-foreground transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Industries
          </Link>
          <Link
            href="/case-examples"
            className="block text-sm text-foreground/70 hover:text-foreground transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Cases
          </Link>
          <Link
            href="/about"
            className="block text-sm text-foreground/70 hover:text-foreground transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block w-full mt-3 px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity text-center"
            onClick={() => setIsOpen(false)}
          >
            Start Project
          </Link>
        </nav>
      )}
    </header>
  )
}

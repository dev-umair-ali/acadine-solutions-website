import Link from 'next/link'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-primary-foreground flex items-center justify-center text-primary font-bold text-sm">
                A
              </div>
              <span className="font-semibold">Acadine</span>
            </div>
            <p className="text-sm opacity-80">
              Practical AI consulting that transforms business operations through proven implementation expertise.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="opacity-80 hover:opacity-100 transition-opacity">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-80 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/case-examples" className="opacity-80 hover:opacity-100 transition-opacity">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="opacity-80 hover:opacity-100 transition-opacity">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/ai-rescue" className="opacity-80 hover:opacity-100 transition-opacity">
                  AI Rescue
                </Link>
              </li>
              <li>
                <Link href="/process" className="opacity-80 hover:opacity-100 transition-opacity">
                  Our Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/industries" className="opacity-80 hover:opacity-100 transition-opacity">
                  View All
                </Link>
              </li>
              <li>
                <span className="opacity-60 text-xs">Healthcare • Finance • Logistics • Operations • Support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 py-8">
          {/* CTA Section */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Ready to transform your operations?</h3>
              <p className="opacity-80">Let&apos;s discuss how AI can drive real business value.</p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-2 rounded-lg bg-primary-foreground text-primary font-medium hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Start a Conversation
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-70">
          <p>&copy; {year} Acadine Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:opacity-100 transition-opacity">
              Privacy
            </Link>
            <Link href="#" className="hover:opacity-100 transition-opacity">
              Terms
            </Link>
            <Link href="#" className="hover:opacity-100 transition-opacity">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

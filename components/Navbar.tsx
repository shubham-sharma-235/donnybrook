'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { X } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/dining', label: 'Dining & Bar' },
  { href: '/events', label: 'Events' },
  { href: '/accommodation', label: 'Stay' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[800] bg-forest-3 flex flex-col items-center justify-center gap-7 transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-7 right-6 text-white/40 hover:text-white transition-colors"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
        <ul className="flex flex-col items-center gap-5">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-[clamp(28px,5vw,48px)] font-light text-white hover:text-white/70 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="https://book-directonline.com/properties/donnybrookhotelwadirect"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-3.5 bg-gold text-white text-xs font-semibold tracking-[0.12em] uppercase rounded-sm hover:bg-gold-2 transition-colors"
        >
          Book a Room
        </a>
      </div>

      {/* Nav bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[900] transition-all duration-400 ${
          scrolled ? 'bg-white/97 backdrop-blur-md border-b border-border shadow-[0_1px_20px_rgba(0,0,0,0.05)]' : ''
        }`}
      >
        <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-16 flex items-center justify-between py-5">
          <Link href="/" className="leading-none">
            <span className={`block font-serif text-[18px] font-semibold tracking-[0.01em] transition-colors duration-300 ${scrolled ? 'text-dark' : 'text-white'}`}>
              Donnybrook Hotel
            </span>
            <span className={`block font-sans text-[9px] font-medium tracking-[0.26em] uppercase mt-0.5 transition-colors duration-300 ${scrolled ? 'text-gold' : 'text-white/45'}`}>
              Western Australia
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-7">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link font-sans text-[11px] font-medium tracking-[0.08em] uppercase transition-colors duration-200 ${
                    pathname === link.href
                      ? scrolled ? 'text-dark active' : 'text-white active'
                      : scrolled ? 'text-mid hover:text-dark' : 'text-white/65 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="https://book-directonline.com/properties/donnybrookhotelwadirect"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center justify-center px-6 py-3 bg-forest text-white text-[11px] font-semibold tracking-[0.12em] uppercase rounded-sm hover:bg-forest-2 transition-colors"
            >
              Book Now
            </a>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden flex flex-col gap-[5px] p-1"
              aria-label="Open menu"
            >
              {[0, 1, 2].map((i) => (
                <span key={i} className={`block w-[22px] h-[1.5px] rounded-sm transition-colors duration-300 ${scrolled ? 'bg-dark' : 'bg-white'}`} />
              ))}
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

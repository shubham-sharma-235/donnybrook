import Link from 'next/link'
import { Instagram, Facebook } from 'lucide-react'

const exploreLinks = [
  { href: '/', label: 'Home' },
  { href: '/dining', label: 'Dining & Bar' },
  { href: '/events', label: "What's On" },
  { href: '/accommodation', label: 'Stay' },
  { href: '/contact', label: 'Contact' },
]

const facilityLinks = [
  { label: 'Bar' },
  { label: 'Bistro' },
  { label: 'Beer Garden' },
  { label: 'TAB & Sport' },
  { label: 'Pool Tables' },
]

export default function Footer() {
  return (
    <footer className="bg-[#111] pt-[72px] pb-8">
      <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/7 mb-8">
          {/* Brand col */}
          <div>
            <div className="font-serif text-[22px] font-semibold text-white leading-tight mb-3">
              Donnybrook Hotel
              <span className="block font-sans text-[9px] font-medium tracking-[0.26em] uppercase text-sage-3 mt-1">
                Western Australia
              </span>
            </div>
            <p className="text-[13px] text-[#777] leading-[1.75] max-w-[260px] mb-5">
              Your home away from home in Donnybrook — the apple capital of Western
              Australia. Bar, Bistro, Accommodation & Beer Garden.
            </p>
            <div className="flex gap-2">
              <a
                href="https://www.instagram.com/donnybrookhotelwa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[34px] h-[34px] border border-white/10 rounded-full flex items-center justify-center text-white/38 hover:border-sage-3 hover:text-sage-3 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={13} />
              </a>
              <a
                href="https://www.facebook.com/donnybrookhotelwa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[34px] h-[34px] border border-white/10 rounded-full flex items-center justify-center text-white/38 hover:border-sage-3 hover:text-sage-3 transition-all"
                aria-label="Facebook"
              >
                <Facebook size={13} />
              </a>
            </div>
          </div>

          {/* Explore col */}
          <div>
            <h4 className="font-sans text-[9px] font-semibold tracking-[0.22em] uppercase text-sage-3 mb-4">
              Explore
            </h4>
            <ul className="flex flex-col gap-2.5 text-[#777]">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/38 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Facilities col */}
          <div>
            <h4 className="font-sans text-[9px] font-semibold tracking-[0.22em] uppercase text-sage-3 mb-4">
              Facilities
            </h4>
            <ul className="flex flex-col gap-2.5 text-[#777]">
              {facilityLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href="/dining"
                    className="text-[13px] text-white/38 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact col */}
          <div>
            <h4 className="font-sans text-[9px] font-semibold tracking-[0.22em] uppercase text-sage-3 mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-1.5 text-[13px] text-white/38 leading-[1.6] text-[#777]">
              <span>64 South Western Hwy<br />Donnybrook WA 6239</span>
              <a href="tel:0897311017" className="hover:text-white transition-colors">
                08 9731 1017
              </a>
              <a
                href="mailto:admin@donnybrookhotelwa.com.au"
                className="hover:text-white transition-colors"
              >
                admin@donnybrookhotelwa.com.au
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 flex-wrap">
          <p className="text-[11px] text-white/20">
            © {new Date().getFullYear()} Donnybrook Hotel. All rights reserved. Licence No: 601 001 0314 · Isha Australia Pty Ltd
          </p>
          <p className="text-[10px] text-white/18 max-w-[500px] sm:text-right leading-[1.65]">
            Under the Liquor Control Act 1988, it is an offence to sell or supply liquor to
            a person under the age of 18 years on licensed or regulated premises.
          </p>
        </div>
      </div>
    </footer>
  )
}

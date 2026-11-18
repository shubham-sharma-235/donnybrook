'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      <div className="absolute inset-0 img-food">
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=80&fit=crop"
          alt="Donnybrook Hotel dining experience"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-dark/10 via-dark/30 to-dark/88" />

      {/* Destination pill row */}
      <div className="absolute top-0 left-0 right-0 z-10 flex justify-center pt-[100px] pb-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:flex gap-1"
        >
          {['Eat', 'Drink', 'Relax', 'Stay', 'Celebrate'].map((label, i) => (
            <span
              key={label}
              className="bg-white/8 backdrop-blur-sm border border-white/14 px-4 py-1.5 text-[9px] font-semibold tracking-[0.22em] uppercase text-white/70"
            >
              {label}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-site mx-auto w-full px-5 sm:px-10 lg:px-20 pb-16 lg:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-sans text-[11px] font-semibold tracking-[0.28em] uppercase text-gold mb-5 flex items-center gap-2.5"
        >
          <span className="w-8 h-px bg-gold inline-block" />
          Donnybrook&apos;s Destination Venue
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif leading-[0.95] mb-6"
        >
          <span className="block text-[clamp(52px,8vw,116px)] font-light text-white">
            Good food.
          </span>
          <span className="block text-[clamp(52px,8vw,116px)] font-light italic text-white/75">
            Cold drinks.
          </span>
          <span className="block text-[clamp(32px,4vw,60px)] font-light text-white/55 mt-1">
            Great times.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-[clamp(14px,1.4vw,17px)] text-white/55 max-w-[520px] leading-[1.8] mb-10"
        >
          A welcoming destination for working professionals and locals alike —
          fresh bistro meals, cold drinks, comfortable rooms and a space to genuinely unwind,
          two hours south of Perth in the heart of apple country.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex items-center gap-3 flex-wrap"
        >
          <Link
            href="/dining"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-gold text-white text-[11px] font-semibold tracking-[0.12em] uppercase rounded-sm hover:bg-gold-2 transition-colors"
          >
            Explore the Menu
          </Link>
          <a
            href="https://book-directonline.com/properties/donnybrookhotelwadirect"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-[13px] border-[1.5px] border-white/50 text-white text-[11px] font-semibold tracking-[0.12em] uppercase rounded-sm hover:border-white hover:bg-white/12 transition-all"
          >
            Book a Room
          </a>
          <Link
            href="/events"
            className="inline-flex items-center justify-center px-8 py-[13px] border-[1.5px] border-white/25 text-white/70 text-[11px] font-semibold tracking-[0.12em] uppercase rounded-sm hover:border-white/50 hover:text-white transition-all"
          >
            What&apos;s On →
          </Link>
        </motion.div>
      </div>

      {/* Stats bar */}
      <div className="absolute left-5 sm:left-10 lg:left-20 bottom-10 z-10 hidden lg:flex gap-px">
        {[
          { n: 'Bistro', l: 'Open Daily' },
          { n: 'Bar', l: 'Cold Drinks' },
          { n: 'Events', l: 'Weekly' },
          { n: '2 hrs', l: 'From Perth' },
        ].map((chip) => (
          <div key={chip.l} className="bg-white/8 backdrop-blur-sm border border-white/12 px-5 py-3 text-center">
            <span className="block font-serif text-[20px] text-white font-light leading-none">{chip.n}</span>
            <span className="block text-[9px] tracking-[0.14em] uppercase text-white/38 mt-1">{chip.l}</span>
          </div>
        ))}
      </div>

      <div className="absolute right-5 sm:right-10 lg:right-20 bottom-10 z-10 flex flex-col items-center gap-2.5 text-[9px] tracking-[0.2em] uppercase text-white/28">
        <div className="w-px h-12 bg-white/18 scroll-indicator" />
        Scroll
      </div>
    </section>
  )
}

import Image from 'next/image'
import ScrollReveal from '../ScrollReveal'
import Link from 'next/link'

const occasions = [
  'Birthday celebrations',
  'Work end-of-year functions',
  'Private dinners',
  'Team lunches',
  'Sporting club events',
  'Farewell gatherings',
  'Community group meetings',
  'Catered working lunches',
]

export default function FunctionsSection() {
  return (
    <section className="bg-white py-[clamp(72px,10vw,140px)]">
      <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div>
            <ScrollReveal>
              <div className="flex items-center gap-2.5 mb-5 text-[10px] font-semibold tracking-[0.24em] uppercase text-forest">
                <span className="w-6 h-[1.5px] bg-forest inline-block" />
                Functions &amp; Catering
              </div>
              <h2 className="font-serif text-[clamp(36px,4.5vw,66px)] font-normal leading-[1.0] text-dark mb-6">
                Celebrate here.<br />
                <em className="italic text-forest">We&apos;ll take care of it.</em>
              </h2>
              <p className="text-[15px] leading-[1.85] text-mid mb-8">
                The Donnybrook Hotel is Donnybrook's local venue for private functions,
                catered events and small celebrations. From intimate dinners to community
                gatherings, we work with you to make every occasion effortless.
              </p>
            </ScrollReveal>

            {/* Occasions list */}
            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 mb-8">
                {occasions.map((occ) => (
                  <div key={occ} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <span className="text-[13px] text-mid">{occ}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* What's included */}
            <ScrollReveal delay={0.15}>
              <div className="border-t border-border pt-7 mb-8">
                <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-forest mb-4">
                  What we can offer
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { icon: '🍽️', text: 'Dedicated dining space' },
                    { icon: '🧑‍🍳', text: 'Custom set menus' },
                    { icon: '🍺', text: 'Bar tab options' },
                    { icon: '🎵', text: 'Music & AV on request' },
                    { icon: '🅿️', text: 'Ample parking' },
                    { icon: '📞', text: 'Direct planning support' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2.5 text-[13px] text-mid">
                      <span className="text-base">{item.icon}</span>
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-forest text-white text-[11px] font-semibold tracking-[0.12em] uppercase rounded-sm hover:bg-forest-2 transition-colors"
              >
                Enquire About Functions →
              </Link>
            </ScrollReveal>
          </div>

          {/* Right: image mosaic */}
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden col-span-2 img-food">
                <Image
                  src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=900&q=80&fit=crop"
                  alt="Private function dining"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="inline-flex items-center gap-2 bg-gold text-dark px-4 py-2 rounded-sm">
                    <span className="text-[9px] tracking-[0.2em] uppercase font-bold">Up to 60 guests</span>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square rounded-sm overflow-hidden img-food">
                <Image
                  src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80&fit=crop"
                  alt="Catered food platters"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              <div className="relative aspect-square rounded-sm overflow-hidden img-room">
                <Image
                  src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&q=80&fit=crop"
                  alt="Celebration gathering"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

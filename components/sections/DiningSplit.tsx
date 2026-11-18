import Image from 'next/image'
import ScrollReveal from '../ScrollReveal'
import Link from 'next/link'

export default function DiningSplit() {
  return (
    <section className="bg-white py-[clamp(72px,10vw,140px)]">
      <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,6vw,90px)] items-center">
          {/* Images mosaic */}
          <ScrollReveal>
            <div className="grid grid-cols-2 gap-2.5">
              <div className="relative row-span-2 aspect-[3/4] min-h-[300px] rounded-sm overflow-hidden img-food">
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&fit=crop"
                  alt="Bistro dining"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/55 to-transparent" />
                <span className="absolute bottom-3 left-3 text-[9px] tracking-[0.16em] uppercase text-white/65">The Bistro</span>
              </div>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden img-bar">
                <Image
                  src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=600&q=80&fit=crop"
                  alt="Bar"
                  fill
                  className="object-cover"
                  sizes="20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/55 to-transparent" />
                <span className="absolute bottom-3 left-3 text-[9px] tracking-[0.16em] uppercase text-white/65">Bar</span>
              </div>
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden img-garden">
                <Image
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80&fit=crop"
                  alt="Pub food"
                  fill
                  className="object-cover"
                  sizes="20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/55 to-transparent" />
              </div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal delay={0.15}>
            <div className="flex items-center gap-2.5 mb-6 text-[10px] font-semibold tracking-[0.24em] uppercase text-forest">
              <span className="w-6 h-[1.5px] bg-forest inline-block" />
              Food & Drink
            </div>
            <h2 className="font-serif text-[clamp(34px,4vw,56px)] font-normal leading-[1.05] text-dark mb-5">
              Good food, cold drinks &amp;{' '}
              <em className="italic text-forest-2">great company</em>
            </h2>
            <p className="text-[15px] leading-[1.85] text-mid mb-7">
              The Donnybrook Bistro serves honest, satisfying meals made with care. From
              counter lunches to hearty dinners, there's always something worth coming
              back for.
            </p>
            <ul className="flex flex-col gap-2.5 mb-9">
              {[
                'Lunch & dinner service daily',
                'Bar open seven days',
                'TAB & big screen sport',
                'Weekly raffle & weekend DJs',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[14px] text-mid">
                  <span className="w-[18px] h-px bg-forest flex-shrink-0 inline-block" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/dining"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-forest text-white text-[11px] font-semibold tracking-[0.12em] uppercase rounded-sm hover:bg-forest-2 transition-colors"
              >
                View Dining
              </Link>
              <a
                href="https://donnybrookhotelwa.com.au/pdf/25APR_Donnybrook_Menu.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-[13px] border-[1.5px] border-forest text-forest text-[11px] font-semibold tracking-[0.12em] uppercase rounded-sm hover:bg-forest hover:text-white transition-all"
              >
                Download Menu
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

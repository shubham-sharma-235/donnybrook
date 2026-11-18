import Image from 'next/image'
import ScrollReveal from '../ScrollReveal'

const beers = [
  { name: 'Great Northern', type: 'Lager', desc: 'Crisp and refreshing — the go-to on a warm WA afternoon.' },
  { name: 'Furphy', type: 'Refreshing Ale', desc: 'Easy-drinking with a smooth finish. Always ice cold.' },
  { name: 'Carlton Dry', type: 'Full Strength', desc: 'Clean and light with minimal bitterness.' },
  { name: 'James Squire', type: 'Craft Range', desc: 'A rotating selection of craft pours on tap.' },
]

export default function DrinksSection() {
  return (
    <section className="bg-dark py-[clamp(72px,10vw,140px)] overflow-hidden">
      <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: image stack */}
          <ScrollReveal>
            <div className="relative">
              {/* Main bar image */}
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden img-bar">
                <Image
                  src="https://images.unsplash.com/photo-1575367439058-6096bb9cf5e2?w=900&q=80&fit=crop"
                  alt="Donnybrook Hotel bar"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-gold text-dark-900 p-6 rounded-sm shadow-2xl">
                <p className="font-serif text-[36px] leading-none font-normal text-dark">12+</p>
                <p className="text-[9px] tracking-[0.2em] uppercase font-semibold text-dark/70 mt-0.5">Taps on<br />Pour</p>
              </div>
              {/* Second image (beer bottles) */}
              <div className="absolute -top-6 -right-10 w-[38%] aspect-square rounded-sm overflow-hidden border-2 border-dark/40 shadow-2xl img-bar hidden lg:block">
                <Image
                  src="https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&q=80&fit=crop"
                  alt="Cold beers"
                  fill
                  className="object-cover"
                  sizes="20vw"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Right: text + beer list */}
          <div>
            <ScrollReveal delay={0.1}>
              <div className="flex items-center gap-2.5 mb-5 text-[10px] font-semibold tracking-[0.24em] uppercase text-gold">
                <span className="w-6 h-[1.5px] bg-gold inline-block" />
                The Bar
              </div>
              <h2 className="font-serif text-[clamp(36px,4.5vw,66px)] font-normal leading-[1.0] text-white mb-6">
                Cold beer.<br />
                <em className="italic text-gold">Good company.</em>
              </h2>
              <p className="text-[15px] leading-[1.85] text-white/60 mb-8">
                Whether you're winding down after a long week or catching up with mates,
                Whether you&apos;re winding down after a long week or catching up with mates,
                live sport on the big screens, and a weekly raffle that keeps things interesting.
              </p>
            </ScrollReveal>

            {/* Beer tap list */}
            <ScrollReveal delay={0.15}>
              <div className="border-t border-white/10 mb-8">
                {beers.map((beer, i) => (
                  <div
                    key={beer.name}
                    className="flex items-start gap-4 py-4 border-b border-white/10 group"
                  >
                    <span className="text-[11px] text-white/25 font-mono pt-0.5 w-5 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2.5 mb-0.5">
                        <span className="font-serif text-[17px] text-white font-semibold">{beer.name}</span>
                        <span className="text-[9.5px] tracking-[0.14em] uppercase text-gold/70">{beer.type}</span>
                      </div>
                      <p className="text-[12.5px] text-white/45 leading-[1.5]">{beer.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Bar features */}
            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Big Screen', sub: 'Live sport & TAB' },
                  { label: 'Weekly Raffle', sub: 'Every Thursday' },
                  { label: 'Weekend DJs', sub: 'Fri & Sat nights' },
                ].map((item) => (
                  <div key={item.label} className="border border-white/10 rounded-sm p-4 text-center">
                    <p className="font-serif text-[15px] text-white font-semibold mb-0.5">{item.label}</p>
                    <p className="text-[11px] text-white/40 tracking-wide">{item.sub}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

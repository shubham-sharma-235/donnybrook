import Image from 'next/image'
import ScrollReveal from '../ScrollReveal'

const bistroMenu = [
  { name: 'Chicken Parmigiana', tag: 'Classic' },
  { name: 'Schnitzel & Chips', tag: 'Classic' },
  { name: 'Steak & Salad', tag: 'Classic' },
  { name: 'Fish & Chips', tag: 'Classic' },
  { name: 'Daily Specials', tag: 'Ask Staff' },
]

const barMenu = [
  { name: 'Beers on Tap', tag: 'Ice Cold' },
  { name: 'Bottled & Can Range', tag: 'Wide Selection' },
  { name: 'Red, White & Sparkling Wine', tag: 'House & Premium' },
  { name: 'Spirits & Cocktails', tag: 'Full Range' },
  { name: 'Non-Alcoholic Options', tag: 'Available' },
]

const extras = [
  {
    title: 'Big Screen Sport',
    desc: 'AFL, NRL, cricket and racing — all the big games live on our large screens.',
    img: 'https://images.unsplash.com/photo-1522444195799-478538b28823?w=700&q=80&fit=crop',
    alt: 'Sport on big screen',
    cls: 'img-exterior',
  },
  {
    title: 'Weekly Raffle',
    desc: 'Join us for the weekly raffle — a Donnybrook Hotel tradition enjoyed by all.',
    img: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?w=700&q=80&fit=crop',
    alt: 'Raffle tickets',
    cls: 'img-bar',
  },
  {
    title: 'Weekend DJs',
    desc: 'Live DJs on weekends — keeping the energy going all night long.',
    img: 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=700&q=80&fit=crop',
    alt: 'Weekend entertainment',
    cls: 'img-garden',
  },
]

export default function FoodBarSection() {
  return (
    <section className="bg-sage py-[clamp(72px,10vw,140px)]">
      <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
        {/* Header */}
        <ScrollReveal className="text-center max-w-[640px] mx-auto mb-16">
          <div className="flex items-center justify-center gap-2.5 mb-5 text-[10px] font-semibold tracking-[0.24em] uppercase text-forest">
            <span className="w-6 h-[1.5px] bg-forest inline-block" />
            On the Menu
          </div>
          <h2 className="font-serif text-[clamp(36px,4.5vw,66px)] font-normal leading-[1.05] text-dark">
            Food, drinks &amp; <em className="italic text-forest">good times</em>
          </h2>
        </ScrollReveal>

        {/* Two panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          {/* Bistro panel */}
          <ScrollReveal>
            <div className="bg-white rounded-sm overflow-hidden border border-border">
              <div className="relative aspect-[16/9] img-food">
                <Image
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80&fit=crop"
                  alt="Bistro"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/55 to-transparent" />
              </div>
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-2.5 mb-4 text-[10px] font-semibold tracking-[0.24em] uppercase text-forest">
                  <span className="w-6 h-[1.5px] bg-forest inline-block" />
                  Bistro Menu
                </div>
                <h3 className="font-serif text-[30px] font-semibold text-dark leading-tight mb-1.5">
                  Counter Meals & <em className="italic text-forest">Dinner</em>
                </h3>
                <p className="text-[13px] text-muted mb-7">Served fresh daily — lunch & dinner</p>
                <div className="flex flex-col divide-y divide-border">
                  {bistroMenu.map((item) => (
                    <div key={item.name} className="flex justify-between items-center py-2.5">
                      <span className="text-[14px] text-dark">{item.name}</span>
                      <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-forest bg-sage px-2.5 py-1 rounded-sm">
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-7">
                  <a
                    href="https://donnybrookhotelwa.com.au/pdf/25APR_Donnybrook_Menu.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3.5 bg-forest text-white text-[11px] font-semibold tracking-[0.12em] uppercase rounded-sm hover:bg-forest-2 transition-colors"
                  >
                    Full Menu PDF
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Bar panel */}
          <ScrollReveal delay={0.1}>
            <div className="bg-forest-3 rounded-sm overflow-hidden border border-forest-3">
              <div className="relative aspect-[16/9] img-bar">
                <Image
                  src="https://images.unsplash.com/photo-1575444758702-4a6b9222336e?w=900&q=80&fit=crop"
                  alt="Bar"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent" />
              </div>
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-2.5 mb-4 text-[10px] font-semibold tracking-[0.24em] uppercase text-sage-3">
                  <span className="w-6 h-[1.5px] bg-sage-3 inline-block" />
                  The Bar
                </div>
                <h3 className="font-serif text-[30px] font-semibold text-white leading-tight mb-1.5">
                  Cold Drinks, <em className="italic text-white/65">Every Day</em>
                </h3>
                <p className="text-[13px] text-white/45 mb-7">Open 7 days · TAB & Big Screen Sport</p>
                <div className="flex flex-col divide-y divide-white/8">
                  {barMenu.map((item) => (
                    <div key={item.name} className="flex justify-between items-center py-2.5">
                      <span className="text-[14px] text-white/80">{item.name}</span>
                      <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-white/60 bg-white/8 px-2.5 py-1 rounded-sm">
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-7">
                  <a
                    href="tel:0897311017"
                    className="inline-flex items-center justify-center px-8 py-[13px] bg-sage-2 text-forest text-[11px] font-semibold tracking-[0.12em] uppercase rounded-sm hover:bg-sage-3 transition-colors"
                  >
                    Call 08 9731 1017
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Extras row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {extras.map((extra, i) => (
            <ScrollReveal key={extra.title} delay={i * 0.1}>
              <div className="bg-white rounded-sm overflow-hidden border border-border">
                <div className={`relative aspect-[16/9] ${extra.cls}`}>
                  <Image
                    src={extra.img}
                    alt={extra.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/55 to-transparent" />
                </div>
                <div className="p-6">
                  <h4 className="font-serif text-[22px] font-semibold text-dark mb-2">{extra.title}</h4>
                  <p className="text-[13px] leading-[1.65] text-mid">{extra.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

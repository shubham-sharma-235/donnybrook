import Image from 'next/image'
import ScrollReveal from '../ScrollReveal'
import Link from 'next/link'

const offerings = [
  {
    num: '01',
    title: 'Bar',
    desc: 'Cold beers on tap, wines, spirits, and a TAB for the racing fans. Big screen sport and pool tables too.',
    img: 'https://images.unsplash.com/photo-1575444758702-4a6b9222336e?w=700&q=80&fit=crop',
    alt: 'Bar interior',
    cls: 'img-bar',
    href: '/dining',
  },
  {
    num: '02',
    title: 'Bistro',
    desc: 'Country pub classics done right — hearty meals for lunch and dinner, served fresh in a relaxed atmosphere.',
    img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=700&q=80&fit=crop',
    alt: 'Bistro food',
    cls: 'img-food',
    href: '/dining',
  },
  {
    num: '03',
    title: 'Accommodation',
    desc: 'Clean, comfortable rooms right in the heart of Donnybrook — perfect for exploring the Southwest.',
    img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80&fit=crop',
    alt: 'Hotel room',
    cls: 'img-room',
    href: '/accommodation',
  },
  {
    num: '04',
    title: 'Beer Garden',
    desc: 'Kick back outdoors with mates — cold drinks, fresh air and that easy Western Australian sunshine.',
    img: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=700&q=80&fit=crop',
    alt: 'Beer garden',
    cls: 'img-garden',
    href: '/dining',
  },
]

export default function OfferingsGrid() {
  return (
    <section className="bg-sage py-[clamp(72px,10vw,140px)]">
      <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
        {/* Header */}
        <ScrollReveal className="text-center max-w-[640px] mx-auto mb-16">
          <div className="flex items-center justify-center gap-2.5 mb-5 text-[10px] font-semibold tracking-[0.24em] uppercase text-forest">
            <span className="w-6 h-[1.5px] bg-forest inline-block" />
            What We Offer
          </div>
          <h2 className="font-serif text-[clamp(36px,4.5vw,66px)] font-normal leading-[1.05] text-dark">
            Everything under <em className="italic text-forest">one roof</em>
          </h2>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-border">
          {offerings.map((o, i) => (
            <ScrollReveal key={o.num} delay={i * 0.1}>
              <Link
                href={o.href}
                className="card-accent relative block bg-white p-10 border-r border-b border-border hover:bg-sage transition-colors group overflow-hidden"
              >
                {/* Card image */}
                <div className={`relative aspect-video mb-6 rounded-sm overflow-hidden ${o.cls}`}>
                  <Image
                    src={o.img}
                    alt={o.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/55 to-transparent" />
                </div>
                <span className="block font-serif text-[11px] text-border mb-3">{o.num}</span>
                <h3 className="font-serif text-[28px] font-semibold text-dark leading-tight mb-2.5">
                  {o.title}
                </h3>
                <p className="text-[13.5px] leading-[1.72] text-mid">{o.desc}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

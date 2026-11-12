import Image from 'next/image'
import ScrollReveal from '../ScrollReveal'

const rooms = [
  {
    badge: 'Most Popular',
    title: 'Queen Room',
    desc: "Comfortable queen bedroom with private en-suite. Ideal for couples or solo travellers wanting a relaxed night's rest.",
    tags: ['Queen Bed', 'En-suite', 'TV', 'Air-con'],
    img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80&fit=crop',
    alt: 'Queen room',
  },
  {
    badge: 'Great for Pairs',
    title: 'Twin Room',
    desc: 'Two single beds with private en-suite. Perfect for mates or family travelling together.',
    tags: ['2× Singles', 'En-suite', 'TV', 'Air-con'],
    img: 'https://images.unsplash.com/photo-1587985064135-0366536eab42?w=700&q=80&fit=crop',
    alt: 'Twin room',
  },
  {
    badge: 'Great Value',
    title: 'Standard Room',
    desc: "Clean and comfortable for a great night's rest. Perfect for travellers passing through.",
    tags: ['Single/Double', 'Shared Facilities', 'TV'],
    img: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=700&q=80&fit=crop',
    alt: 'Standard room',
  },
]

export default function RoomsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {rooms.map((room, i) => (
        <ScrollReveal key={room.title} delay={i * 0.1}>
          <div className="rounded-sm overflow-hidden border border-border bg-white hover:shadow-[0_8px_40px_rgba(45,90,61,0.12)] transition-shadow">
            {/* Image */}
            <div className="relative aspect-[4/3] img-room">
              <Image
                src={room.img}
                alt={room.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/55 to-transparent" />
              <span className="absolute top-3.5 right-3.5 bg-white/12 backdrop-blur-sm border border-white/20 px-3 py-1.5 text-[9px] font-semibold tracking-[0.12em] uppercase text-white/85 rounded-sm">
                {room.badge}
              </span>
              <span className="absolute bottom-3.5 left-4 text-[9px] tracking-[0.16em] uppercase text-white/65">
                {room.title}
              </span>
            </div>

            {/* Info */}
            <div className="p-6 sm:p-7">
              <span className="block text-[9px] font-semibold tracking-[0.18em] uppercase text-gold mb-1.5">
                {room.badge}
              </span>
              <h3 className="font-serif text-[26px] font-semibold text-dark mb-2">{room.title}</h3>
              <p className="text-[13.5px] leading-[1.72] text-mid mb-4">{room.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {room.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] tracking-[0.08em] uppercase text-mid border border-border px-2.5 py-1.5 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://book-directonline.com/properties/donnybrookhotelwadirect"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.1em] uppercase text-forest hover:gap-3.5 transition-all"
              >
                Book Now →
              </a>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  )
}

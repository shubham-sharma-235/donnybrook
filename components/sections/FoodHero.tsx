import Image from 'next/image'
import ScrollReveal from '../ScrollReveal'
import Link from 'next/link'

const dishes = [
  {
    name: 'Chicken Parmigiana',
    desc: 'House-crumbed, hand-pressed and finished with our signature napolitana sauce.',
    img: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=600&q=80&fit=crop',
    alt: 'Chicken Parmigiana',
    tag: 'Fan Favourite',
  },
  {
    name: 'Char-grilled Steak',
    desc: 'Premium cut, cooked to order — served with chips, salad and your choice of sauce.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop',
    alt: 'Char-grilled steak',
    tag: 'Chef\'s Pick',
  },
  {
    name: 'Crispy Fish & Chips',
    desc: 'Fresh beer-battered fish fillet with chunky chips and house tartare sauce.',
    img: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&q=80&fit=crop',
    alt: 'Fish and chips',
    tag: 'Classic',
  },
  {
    name: 'Sunday Roast',
    desc: 'A proper Sunday tradition — slow-roasted meats with all the trimmings.',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80&fit=crop',
    alt: 'Sunday roast',
    tag: 'Sundays Only',
  },
]

export default function FoodHero() {
  return (
    <section className="bg-white py-[clamp(72px,10vw,140px)]">
      <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-14">
          <ScrollReveal>
            <div className="flex items-center gap-2.5 mb-5 text-[10px] font-semibold tracking-[0.24em] uppercase text-forest">
              <span className="w-6 h-[1.5px] bg-forest inline-block" />
              The Bistro
            </div>
            <h2 className="font-serif text-[clamp(38px,5vw,72px)] font-normal leading-[1.0] text-dark">
              Food that speaks <br />
              <em className="italic text-forest">for itself</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-[15px] leading-[1.85] text-mid mb-6">
              The Donnybrook Bistro serves hearty, satisfying meals crafted from quality
              ingredients. Whether you&apos;re stopping in for a counter lunch or settling in
              for a full evening meal, every dish is made to be remembered.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://donnybrookhotelwa.com.au/pdf/25APR_Donnybrook_Menu.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-forest text-white text-[11px] font-semibold tracking-[0.12em] uppercase rounded-sm hover:bg-forest-2 transition-colors"
              >
                View Full Menu
              </a>
              <Link
                href="/dining"
                className="inline-flex items-center justify-center px-7 py-[13px] border-[1.5px] border-forest text-forest text-[11px] font-semibold tracking-[0.12em] uppercase rounded-sm hover:bg-forest hover:text-white transition-all"
              >
                Dining & Bar →
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Large food image */}
        <ScrollReveal>
          <div className="relative aspect-[21/9] rounded-sm overflow-hidden mb-4 img-food">
            <Image
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=80&fit=crop"
              alt="Donnybrook Bistro dining"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-7 right-7 flex items-end justify-between">
              <div>
                <p className="font-serif text-white text-[clamp(20px,2.5vw,32px)] font-light leading-tight">
                  Lunch &amp; Dinner, served daily<br />
                  <em className="italic text-white/65">Counter meals · Evening dining · Daily specials</em>
                </p>
              </div>
              <div className="hidden sm:flex flex-col items-end gap-1">
                <span className="text-[9px] tracking-[0.2em] uppercase text-white/50">Open</span>
                <span className="font-serif text-white text-xl font-light">7 days</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Dish cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {dishes.map((dish, i) => (
            <ScrollReveal key={dish.name} delay={i * 0.08}>
              <div className="group rounded-sm overflow-hidden border border-border bg-white hover:shadow-[0_6px_28px_rgba(45,90,61,0.1)] transition-shadow">
                <div className={`relative aspect-square overflow-hidden img-food`}>
                  <Image
                    src={dish.img}
                    alt={dish.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="bg-dark/70 backdrop-blur-sm text-white text-[9px] font-semibold tracking-[0.1em] uppercase px-2.5 py-1 rounded-sm">
                      {dish.tag}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-[18px] font-semibold text-dark leading-tight mb-1.5">
                    {dish.name}
                  </h3>
                  <p className="text-[12.5px] text-mid leading-[1.6]">{dish.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

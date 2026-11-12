import type { Metadata } from 'next'
import Image from 'next/image'
import InnerHero from '@/components/InnerHero'
import ScrollReveal from '@/components/ScrollReveal'
import CTABand from '@/components/CTABand'

export const metadata: Metadata = {
  title: 'Dining & Bar — Donnybrook Hotel',
  description:
    'Enjoy hearty bistro meals, cold drinks, beer garden and big screen sport at the Donnybrook Hotel. Bar open 7 days. TAB on-site.',
}

const diningBlocks = [
  {
    label: 'The Bistro',
    titleLeft: 'Honest food,',
    titleRight: 'done well',
    desc: 'The Donnybrook Bistro serves hearty, satisfying meals with that genuine country pub spirit. From counter lunches to evening dinners, the menu covers the classics — made fresh and served with a smile.',
    items: [
      'Lunch served daily',
      'Dinner service nightly',
      'Counter meal classics',
      'Family-friendly dining',
      'Specials & seasonal dishes',
    ],
    img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80&fit=crop',
    alt: 'Bistro food',
    cls: 'img-food',
    vis: 'The Bistro',
    cta: { label: 'Download Menu (PDF)', href: 'https://donnybrookhotelwa.com.au/pdf/25APR_Donnybrook_Menu.pdf', external: true },
    flip: false,
  },
  {
    label: 'The Bar',
    titleLeft: 'Cold drinks,',
    titleRight: 'warm welcome',
    desc: 'A proper Australian pub bar — well-stocked, friendly and always ready. Cold beers on tap, wines, spirits and a great atmosphere any day of the week.',
    items: [
      'Beers on tap & bottled selection',
      'Wines & spirits',
      'TAB on-site for racing',
      'Big screen sport — AFL, NRL & more',
      'Pool tables & weekly raffle',
    ],
    img: 'https://images.unsplash.com/photo-1575444758702-4a6b9222336e?w=800&q=80&fit=crop',
    alt: 'Bar',
    cls: 'img-bar',
    vis: 'The Bar',
    cta: { label: 'Call 08 9731 1017', href: 'tel:0897311017', external: true },
    flip: true,
  },
  {
    label: 'Beer Garden',
    titleLeft: 'Sit back,',
    titleRight: 'relax',
    desc: 'The beer garden is the place to be on a sunny Southwest afternoon. Cold drinks, good company and that easy, unhurried Australian atmosphere.',
    items: [
      'Outdoor seating & relaxed atmosphere',
      'Weekend DJs & entertainment',
      'Community & social events',
      'Perfect for groups',
    ],
    img: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&q=80&fit=crop',
    alt: 'Beer garden',
    cls: 'img-garden',
    vis: 'Beer Garden',
    cta: { label: 'Make an Enquiry', href: '/contact', external: false },
    flip: false,
  },
]

export default function DiningPage() {
  return (
    <>
      <InnerHero
        label="Food & Drink"
        titleLeft="Dining"
        titleRight="& Bar"
        imgSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80&fit=crop"
        imgAlt="Dining at Donnybrook Hotel"
        imgClass="img-food"
      />

      <section className="bg-white py-[clamp(72px,10vw,140px)]">
        <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
          <div className="flex flex-col divide-y divide-border">
            {diningBlocks.map((block) => (
              <div
                key={block.label}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,6vw,90px)] items-center py-[clamp(44px,6vw,72px)] ${
                  block.flip ? 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1' : ''
                }`}
              >
                {/* Image */}
                <ScrollReveal>
                  <div className={`relative aspect-[4/3] rounded-sm overflow-hidden ${block.cls}`}>
                    <Image
                      src={block.img}
                      alt={block.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/52 to-transparent" />
                    <span className="absolute bottom-3.5 left-4 text-[9px] tracking-[0.16em] uppercase text-white/65">
                      {block.vis}
                    </span>
                  </div>
                </ScrollReveal>

                {/* Text */}
                <ScrollReveal delay={0.15}>
                  <div className="flex items-center gap-2.5 mb-5 text-[10px] font-semibold tracking-[0.24em] uppercase text-forest">
                    <span className="w-6 h-[1.5px] bg-forest inline-block" />
                    {block.label}
                  </div>
                  <h2 className="font-serif text-[clamp(32px,3.5vw,50px)] font-normal leading-[1.08] text-dark mb-4">
                    {block.titleLeft}{' '}
                    <em className="italic text-forest-2">{block.titleRight}</em>
                  </h2>
                  <p className="text-[15px] leading-[1.85] text-mid mb-6">{block.desc}</p>
                  <ul className="flex flex-col gap-2.5 mb-8">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-[14px] text-mid">
                        <span className="text-forest text-[12px] flex-shrink-0">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={block.cta.href}
                    target={block.cta.external ? '_blank' : undefined}
                    rel={block.cta.external ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center justify-center px-8 py-3.5 bg-forest text-white text-[11px] font-semibold tracking-[0.12em] uppercase rounded-sm hover:bg-forest-2 transition-colors"
                  >
                    {block.cta.label}
                  </a>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        label="Reservations"
        titleLeft="Come in for a"
        titleRight="cold one"
        subtitle="Open seven days. Bar, bistro, beer garden — we're ready when you are."
        primaryLabel="Book a Room"
        primaryHref="https://book-directonline.com/properties/donnybrookhotelwadirect"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  )
}

import Image from 'next/image'
import ScrollReveal from '../ScrollReveal'

const cards = [
  {
    num: '01',
    title: 'Beer Garden',
    desc: 'A relaxed outdoor space to enjoy a cold drink with friends and soak up the Southwest sunshine.',
    img: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=700&q=80&fit=crop',
    alt: 'Beer garden',
    cls: 'img-garden',
    label: 'Beer Garden',
  },
  {
    num: '02',
    title: 'Live Sport & TAB',
    desc: 'Catch the footy on the big screen. TAB on-site for race day action every week.',
    img: 'https://images.unsplash.com/photo-1522444195799-478538b28823?w=700&q=80&fit=crop',
    alt: 'Big screen sport',
    cls: 'img-exterior',
    label: 'Live Sport & TAB',
  },
  {
    num: '03',
    title: 'Weekend Entertainment',
    desc: 'Weekend DJs and weekly raffles — the Donnybrook Hotel keeps the community going.',
    img: 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=700&q=80&fit=crop',
    alt: 'Weekend entertainment',
    cls: 'img-garden',
    label: 'Weekend Entertainment',
  },
]

export default function CommunitySection() {
  return (
    <section className="bg-sage py-[clamp(72px,10vw,140px)]">
      <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
        {/* Header */}
        <ScrollReveal className="text-center max-w-[600px] mx-auto mb-16">
          <div className="flex items-center justify-center gap-2.5 mb-5 text-[10px] font-semibold tracking-[0.24em] uppercase text-forest">
            <span className="w-6 h-[1.5px] bg-forest inline-block" />
            Entertainment
          </div>
          <h2 className="font-serif text-[clamp(36px,4.5vw,66px)] font-normal leading-[1.05] text-dark">
            The social heart of <em className="italic text-forest">Donnybrook</em>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.1}>
              <div className="bg-white rounded-sm overflow-hidden border border-border">
                <div className={`relative aspect-[16/10] ${card.cls}`}>
                  <Image
                    src={card.img}
                    alt={card.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/58 to-transparent" />
                  <span className="absolute bottom-3.5 left-4 text-[9px] tracking-[0.16em] uppercase text-white/65">
                    {card.label}
                  </span>
                </div>
                <div className="p-7">
                  <span className="block font-serif text-[11px] text-border mb-2">{card.num}</span>
                  <h3 className="font-serif text-[24px] font-semibold text-dark mb-2">{card.title}</h3>
                  <p className="text-[13.5px] leading-[1.72] text-mid">{card.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

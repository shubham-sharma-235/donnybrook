import Image from 'next/image'
import ScrollReveal from '../ScrollReveal'
import Link from 'next/link'

export default function RelaxSection() {
  return (
    <section className="bg-sage py-[clamp(72px,10vw,140px)]">
      <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-2.5 mb-5 text-[10px] font-semibold tracking-[0.24em] uppercase text-forest">
              <span className="w-6 h-[1.5px] bg-forest inline-block" />
              Relax &amp; Unwind
              <span className="w-6 h-[1.5px] bg-forest inline-block" />
            </div>
            <h2 className="font-serif text-[clamp(36px,4.5vw,66px)] font-normal leading-[1.0] text-dark">
              Your pace. <em className="italic text-forest">Your space.</em>
            </h2>
            <p className="mt-5 text-[15px] leading-[1.85] text-mid">
              After a busy week, the Donnybrook Hotel is the kind of place where you can
              properly switch off — cold drink in hand, good food on the table,
              no rush and nowhere else to be.
            </p>
          </div>
        </ScrollReveal>

        {/* 3-col image grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          <ScrollReveal className="md:col-span-2">
            <div className="relative aspect-[16/10] rounded-sm overflow-hidden group img-room">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80&fit=crop"
                alt="Beer garden outdoor seating"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-103"
                sizes="(max-width: 768px) 100vw, 65vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
              <div className="absolute bottom-5 left-6">
                <p className="font-serif text-white text-xl font-light">Beer Garden</p>
                <p className="text-[11px] text-white/60 tracking-wide mt-0.5">Outdoor seating · All weather</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden group img-room">
              <Image
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80&fit=crop"
                alt="Comfortable hotel room"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-103"
                sizes="(max-width: 768px) 100vw, 35vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
              <div className="absolute bottom-5 left-6">
                <p className="font-serif text-white text-xl font-light">Stay Over</p>
                <p className="text-[11px] text-white/60 tracking-wide mt-0.5">9 comfortable rooms</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Feature points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: '🌿',
              title: 'Beer Garden',
              desc: 'Sprawling outdoor area with shade and comfortable seating — perfect for long afternoons.',
            },
            {
              icon: '🍺',
              title: 'Cold Drinks',
              desc: 'A full bar of cold taps, wines, and spirits to keep your glass full from lunch to close.',
            },
            {
              icon: '🛏️',
              title: 'Stay the Night',
              desc: 'Skip the drive. 9 comfortable rooms just steps from the bar — wake up at your own pace.',
            },
            {
              icon: '📺',
              title: 'Live Sport',
              desc: 'Big screens throughout the venue with TAB facilities — never miss a moment of the game.',
            },
          ].map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="bg-white rounded-sm p-6 border border-border hover:shadow-[0_4px_20px_rgba(45,90,61,0.08)] transition-shadow">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-serif text-[18px] font-semibold text-dark mb-2">{item.title}</h3>
                <p className="text-[13px] text-mid leading-[1.65]">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA row */}
        <ScrollReveal delay={0.1}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/accommodation"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-forest text-white text-[11px] font-semibold tracking-[0.12em] uppercase rounded-sm hover:bg-forest-2 transition-colors"
            >
              Book a Room
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-[13px] border-[1.5px] border-forest text-forest text-[11px] font-semibold tracking-[0.12em] uppercase rounded-sm hover:bg-forest hover:text-white transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

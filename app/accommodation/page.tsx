import type { Metadata } from 'next'
import InnerHero from '@/components/InnerHero'
import RoomsGrid from '@/components/sections/RoomsGrid'
import CTABand from '@/components/CTABand'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Accommodation — Donnybrook Hotel',
  description:
    'Stay at Donnybrook Hotel — comfortable rooms in the heart of Donnybrook WA. Queen, twin and standard rooms with direct booking available.',
}

export default function AccommodationPage() {
  return (
    <>
      <InnerHero
        label="Stay With Us"
        titleLeft="Accommo"
        titleRight="dation"
        imgSrc="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1400&q=80&fit=crop"
        imgAlt="Hotel accommodation"
        imgClass="img-room"
      />

      <section className="bg-white py-[clamp(72px,10vw,140px)]">
        <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
          {/* Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-16">
            <ScrollReveal>
              <h2 className="font-serif text-[clamp(34px,4vw,58px)] font-normal leading-[1.05] text-dark">
                Comfortable rooms in the{' '}
                <em className="italic text-forest">heart of town</em>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-[15px] leading-[1.85] text-mid">
                Whether you're in Donnybrook for a quick stopover or making a full weekend
                of it, our rooms offer comfort, convenience and genuine country
                hospitality right on the South Western Highway.
              </p>
            </ScrollReveal>
          </div>

          <RoomsGrid />

          {/* Included */}
          <ScrollReveal className="mt-20">
            <div className="bg-sage border border-border rounded-sm p-8 sm:p-12">
              <div className="flex items-center gap-2.5 mb-6 text-[10px] font-semibold tracking-[0.24em] uppercase text-forest">
                <span className="w-6 h-[1.5px] bg-forest inline-block" />
                What's Included
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { title: 'On-site Parking', desc: 'Free secure parking for all guests' },
                  { title: 'Bar Access', desc: 'Full access to our bar & bistro' },
                  { title: 'Central Location', desc: 'Right on South Western Highway' },
                  { title: 'Country Hospitality', desc: 'Genuine WA country welcome' },
                ].map((item) => (
                  <div key={item.title}>
                    <h4 className="font-serif text-[18px] font-semibold text-dark mb-1.5">{item.title}</h4>
                    <p className="text-[13px] text-mid leading-[1.65]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTABand
        label="Book Direct & Save"
        titleLeft="Ready to"
        titleRight="book your stay?"
        subtitle="Book directly for the best available rate. Questions? Call 08 9731 1017."
        primaryLabel="Book Online"
        primaryHref="https://book-directonline.com/properties/donnybrookhotelwadirect"
        secondaryLabel="Call 08 9731 1017"
        secondaryHref="tel:0897311017"
        secondaryIsExternal
      />
    </>
  )
}

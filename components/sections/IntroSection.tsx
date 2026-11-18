import Image from 'next/image'
import ScrollReveal from '../ScrollReveal'
import Link from 'next/link'
import { MapPin, Phone, Clock } from 'lucide-react'

export default function IntroSection() {
  return (
    <section className="bg-white py-[clamp(72px,10vw,140px)]">
      <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,6vw,100px)] items-center">
          {/* Image */}
          <ScrollReveal>
            <div className="relative aspect-[3/4] min-h-[400px] rounded-sm overflow-hidden img-exterior">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80&fit=crop"
                alt="Donnybrook Hotel"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/55 to-transparent" />
              <span className="absolute bottom-4 left-4 text-[10px] tracking-[0.16em] uppercase text-white/65">
                Donnybrook Hotel · Est. Western Australia
              </span>
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal delay={0.15}>
            <div className="flex items-center gap-2.5 mb-6 text-[10px] font-semibold tracking-[0.24em] uppercase text-forest">
              <span className="w-6 h-[1.5px] bg-forest inline-block" />
              About the Hotel
            </div>
            <h2 className="font-serif text-[clamp(34px,4vw,60px)] font-normal leading-[1.05] text-dark mb-6">
              Genuine country hospitality in the heart of{' '}
              <em className="italic text-forest">apple country</em>
            </h2>
            <p className="text-[15px] leading-[1.85] text-mid mb-4">
              The Donnybrook Hotel is a cornerstone of this picturesque Southwest WA
              community — a proper country pub where locals and travellers are always
              equally at home.
            </p>
            <p className="text-[15px] leading-[1.85] text-mid mb-7">
              Recently renovated and proudly welcoming, we bring you quality food, cold
              drinks, comfortable accommodation and an experience that's authentically,
              unapologetically Australian.
            </p>

            <div className="flex flex-col gap-2.5 mb-8">
              {[
                { icon: MapPin, text: '64 South Western Highway, Donnybrook WA 6239' },
                { icon: Phone, text: '08 9731 1017', href: 'tel:0897311017' },
                { icon: Clock, text: 'Bar & Bistro open 7 days' },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} className="flex items-center gap-3 text-[14px] text-mid">
                  <Icon size={15} className="text-forest flex-shrink-0" strokeWidth={1.75} />
                  {href ? (
                    <a href={href} className="text-forest hover:text-forest-2 transition-colors">
                      {text}
                    </a>
                  ) : (
                    <span>{text}</span>
                  )}
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-[13px] border-[1.5px] border-forest text-forest text-[11px] font-semibold tracking-[0.12em] uppercase rounded-sm hover:bg-forest hover:text-white transition-all"
            >
              Get in Touch
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

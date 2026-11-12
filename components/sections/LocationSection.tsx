import ScrollReveal from '../ScrollReveal'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function LocationSection() {
  return (
    <section className="bg-white py-[clamp(72px,10vw,140px)]">
      <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,6vw,90px)] items-center">
          {/* Info */}
          <ScrollReveal>
            <div className="flex items-center gap-2.5 mb-6 text-[10px] font-semibold tracking-[0.24em] uppercase text-forest">
              <span className="w-6 h-[1.5px] bg-forest inline-block" />
              Find Us
            </div>
            <h2 className="font-serif text-[clamp(34px,4vw,54px)] font-normal leading-[1.08] text-dark mb-9">
              In the heart of <em className="italic text-forest">Donnybrook</em>
            </h2>

            <div className="flex flex-col gap-5 mb-9">
              {[
                {
                  icon: MapPin,
                  label: 'Address',
                  value: '64 South Western Highway, Donnybrook WA 6239',
                },
                {
                  icon: Phone,
                  label: 'Phone',
                  value: '08 9731 1017',
                  href: 'tel:0897311017',
                },
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'admin@donnybrookhotelwa.com.au',
                  href: 'mailto:admin@donnybrookhotelwa.com.au',
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-3.5 items-start">
                  <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center flex-shrink-0">
                    <Icon size={15} className="text-forest" strokeWidth={1.75} />
                  </div>
                  <div>
                    <span className="block text-[9px] font-semibold tracking-[0.2em] uppercase text-gold mb-1">
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        className="text-[14px] text-dark hover:text-forest transition-colors leading-[1.6]"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-[14px] text-dark leading-[1.6]">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://www.google.com/maps/dir//64+South+Western+Highway,+Donnybrook+WA+6239"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-[13px] border-[1.5px] border-forest text-forest text-[11px] font-semibold tracking-[0.12em] uppercase rounded-sm hover:bg-forest hover:text-white transition-all"
            >
              Get Directions
            </a>
          </ScrollReveal>

          {/* Map placeholder */}
          <ScrollReveal delay={0.2}>
            <div className="relative aspect-square rounded-sm overflow-hidden bg-gradient-to-br from-[#c8dcc0] via-[#b0cc98] to-[#98bc78]">
              {/* Road lines */}
              <div className="absolute inset-0 opacity-80">
                <div className="absolute top-1/2 left-0 right-0 h-[1.5%] bg-white/88" style={{ transform: 'translateY(-50%)' }} />
                <div className="absolute top-0 bottom-0 left-[50%] w-[1.5%] bg-white/88" style={{ transform: 'translateX(-50%)' }} />
              </div>
              {/* Pin */}
              <div
                className="absolute w-4 h-4 rounded-tl-full rounded-tr-full rounded-br-full bg-forest shadow-[0_3px_12px_rgba(45,90,61,0.4)]"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -65%) rotate(-45deg)',
                }}
              />
              {/* Label */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-dark text-white px-4 py-2.5 rounded-sm text-[11px] flex items-center gap-2 whitespace-nowrap shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                <span className="w-1.5 h-1.5 rounded-full bg-sage-3" />
                64 South Western Hwy · Donnybrook WA
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

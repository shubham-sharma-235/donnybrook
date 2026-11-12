import type { Metadata } from 'next'
import InnerHero from '@/components/InnerHero'
import ScrollReveal from '@/components/ScrollReveal'
import ContactForm from '@/components/ContactForm'
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact — Donnybrook Hotel',
  description:
    'Get in touch with the Donnybrook Hotel. Located at 64 South Western Highway, Donnybrook WA. Call 08 9731 1017.',
}

export default function ContactPage() {
  return (
    <>
      <InnerHero
        label="Get in Touch"
        titleLeft=""
        titleRight="Contact Us"
        imgSrc="https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=1400&q=80&fit=crop"
        imgAlt="Donnybrook Western Australia"
        imgClass="img-country"
      />

      <section className="bg-white py-[clamp(72px,10vw,140px)]">
        <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(40px,7vw,90px)]">
            {/* Info */}
            <ScrollReveal>
              <h2 className="font-serif text-[clamp(32px,4vw,54px)] font-normal leading-[1.08] text-dark mb-9">
                We'd love to <em className="italic text-forest">hear from you</em>
              </h2>

              <div className="flex flex-col gap-5 mb-9">
                {[
                  {
                    icon: MapPin,
                    label: 'Address',
                    content: (
                      <span className="text-[14px] text-dark leading-[1.6]">
                        64 South Western Highway
                        <br />
                        Donnybrook WA 6239
                      </span>
                    ),
                  },
                  {
                    icon: Phone,
                    label: 'Phone',
                    content: (
                      <a
                        href="tel:0897311017"
                        className="text-[14px] text-dark hover:text-forest transition-colors leading-[1.6]"
                      >
                        08 9731 1017
                      </a>
                    ),
                  },
                  {
                    icon: Mail,
                    label: 'Email',
                    content: (
                      <a
                        href="mailto:admin@donnybrookhotelwa.com.au"
                        className="text-[14px] text-dark hover:text-forest transition-colors leading-[1.6]"
                      >
                        admin@donnybrookhotelwa.com.au
                      </a>
                    ),
                  },
                ].map(({ icon: Icon, label, content }) => (
                  <div key={label} className="flex gap-3.5 items-start">
                    <div className="w-9 h-9 rounded-full bg-forest flex items-center justify-center flex-shrink-0">
                      <Icon size={15} className="text-white" strokeWidth={1.75} />
                    </div>
                    <div>
                      <span className="block text-[9px] font-semibold tracking-[0.2em] uppercase text-gold mb-1">
                        {label}
                      </span>
                      {content}
                    </div>
                  </div>
                ))}

                {/* Social */}
                <div className="flex gap-3.5 items-start">
                  <div className="w-9 h-9 rounded-full bg-forest flex items-center justify-center flex-shrink-0">
                    <Instagram size={15} className="text-white" strokeWidth={1.75} />
                  </div>
                  <div>
                    <span className="block text-[9px] font-semibold tracking-[0.2em] uppercase text-gold mb-2">
                      Social Media
                    </span>
                    <div className="flex gap-2 flex-wrap">
                      {[
                        {
                          label: '@donnybrookhotelwa',
                          href: 'https://www.instagram.com/donnybrookhotelwa',
                          icon: Instagram,
                        },
                        {
                          label: 'Facebook',
                          href: 'https://www.facebook.com/donnybrookhotelwa',
                          icon: Facebook,
                        },
                      ].map(({ label, href, icon: Icon }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[11px] text-mid border border-border px-3.5 py-2 rounded-sm hover:border-forest hover:text-forest transition-all"
                        >
                          <Icon size={12} />
                          {label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/dir//64+South+Western+Highway,+Donnybrook+WA+6239"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-[13px] border-[1.5px] border-forest text-forest text-[11px] font-semibold tracking-[0.12em] uppercase rounded-sm hover:bg-forest hover:text-white transition-all"
              >
                Get Directions
              </a>

              {/* Hours */}
              <div className="mt-10 pt-10 border-t border-border">
                <div className="flex items-center gap-2.5 mb-5 text-[10px] font-semibold tracking-[0.24em] uppercase text-forest">
                  <span className="w-6 h-[1.5px] bg-forest inline-block" />
                  Opening Hours
                </div>
                <div className="flex flex-col gap-2">
                  {[
                    { day: 'Monday – Friday', time: 'Bar from 10am · Bistro Lunch & Dinner' },
                    { day: 'Saturday', time: 'Bar from 10am · Bistro Lunch & Dinner' },
                    { day: 'Sunday', time: 'Bar from 10am · Bistro Lunch & Dinner' },
                  ].map(({ day, time }) => (
                    <div key={day} className="flex flex-col sm:flex-row sm:gap-4">
                      <span className="text-[13px] font-medium text-dark w-40 flex-shrink-0">{day}</span>
                      <span className="text-[13px] text-mid">{time}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[12px] text-muted mt-3">* Hours may vary on public holidays. Call ahead to confirm.</p>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal delay={0.15}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}

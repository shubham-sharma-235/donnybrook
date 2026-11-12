import ScrollReveal from './ScrollReveal'
import Link from 'next/link'

interface CTABandProps {
  label?: string
  titleLeft: string
  titleRight: string
  subtitle: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel: string
  secondaryHref: string
  secondaryIsExternal?: boolean
}

export default function CTABand({
  label = 'Book Direct',
  titleLeft,
  titleRight,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  secondaryIsExternal = false,
}: CTABandProps) {
  return (
    <section className="bg-forest-3 py-[clamp(80px,10vw,160px)] px-5 sm:px-10 lg:px-20 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
      <div className="relative z-10 max-w-site mx-auto">
        <ScrollReveal>
          <div className="flex items-center justify-center gap-2.5 mb-7 text-[10px] font-semibold tracking-[0.24em] uppercase text-sage-3">
            <span className="w-6 h-[1.5px] bg-sage-3 inline-block" />
            {label}
          </div>
          <h2 className="font-serif text-[clamp(44px,7vw,100px)] font-light text-white leading-[0.97] mb-[18px]">
            {titleLeft} <em className="italic">{titleRight}</em>
          </h2>
          <p className="text-[16px] text-white/50 max-w-[380px] mx-auto mb-12 leading-[1.75]">
            {subtitle}
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <a
              href={primaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gold text-white text-[11px] font-semibold tracking-[0.12em] uppercase rounded-sm hover:bg-gold-2 transition-colors"
            >
              {primaryLabel}
            </a>
            {secondaryIsExternal ? (
              <a
                href={secondaryHref}
                className="inline-flex items-center justify-center px-8 py-[13px] border-[1.5px] border-white/50 text-white text-[11px] font-semibold tracking-[0.12em] uppercase rounded-sm hover:border-white hover:bg-white/12 transition-all"
              >
                {secondaryLabel}
              </a>
            ) : (
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center px-8 py-[13px] border-[1.5px] border-white/50 text-white text-[11px] font-semibold tracking-[0.12em] uppercase rounded-sm hover:border-white hover:bg-white/12 transition-all"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

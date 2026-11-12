import Image from 'next/image'

interface InnerHeroProps {
  label: string
  titleLeft: string
  titleRight: string
  imgSrc: string
  imgAlt: string
  imgClass?: string
}

export default function InnerHero({
  label,
  titleLeft,
  titleRight,
  imgSrc,
  imgAlt,
  imgClass = 'img-exterior',
}: InnerHeroProps) {
  return (
    <section className={`relative h-[clamp(300px,42vh,480px)] flex items-end overflow-hidden pt-20 ${imgClass}`}>
      <Image
        src={imgSrc}
        alt={imgAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/88 to-dark/40" />
      <div className="relative z-10 max-w-site mx-auto w-full px-5 sm:px-10 lg:px-20 pb-14">
        <div className="flex items-center gap-2.5 mb-3.5 text-[10px] font-semibold tracking-[0.24em] uppercase text-forest-3">
          <span className="w-6 h-[1.5px] bg-forest-3 inline-block" />
          {label}
        </div>
        <h1 className="font-serif text-[clamp(44px,7vw,96px)] font-light text-white leading-[0.93]">
          {titleLeft}{' '}
          <em className="italic">{titleRight}</em>
        </h1>
      </div>
    </section>
  )
}

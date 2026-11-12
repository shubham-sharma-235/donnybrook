import ScrollReveal from '../ScrollReveal'
import Link from 'next/link'

const weeklyEvents = [
  {
    day: 'Thursday',
    title: 'Weekly Raffle',
    desc: 'Join us every Thursday for the weekly raffle. Tickets available at the bar.',
    time: 'From 6:00 PM',
    color: 'bg-forest',
  },
  {
    day: 'Friday',
    title: 'Happy Hour',
    desc: 'Wind down the week with discounted drinks. Cold taps, great company.',
    time: '5:00 PM – 7:00 PM',
    color: 'bg-gold',
  },
  {
    day: 'Fri & Sat',
    title: 'Weekend DJs',
    desc: 'Live music and DJ sets keeping the vibe going into the evening.',
    time: 'From 8:00 PM',
    color: 'bg-forest-3',
  },
]

const upcomingEvents = [
  {
    date: 'Dec 7',
    title: 'Christmas Party Night',
    desc: 'Join us for a festive evening with great food, drinks and entertainment.',
    tag: 'Special Event',
  },
  {
    date: 'Dec 14',
    title: 'End of Year Celebration',
    desc: 'Send off 2024 in style. DJ, specials on tap and a great crowd.',
    tag: 'Live Music',
  },
  {
    date: 'Dec 31',
    title: "New Year's Eve",
    desc: "Ring in the new year at Donnybrook's local. Countdown, drinks and good times.",
    tag: "NYE Special",
  },
]

export default function EventsPreview() {
  return (
    <section className="bg-sage-2 py-[clamp(72px,10vw,140px)]">
      <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <ScrollReveal>
            <div className="flex items-center gap-2.5 mb-4 text-[10px] font-semibold tracking-[0.24em] uppercase text-forest">
              <span className="w-6 h-[1.5px] bg-forest inline-block" />
              What&apos;s On
            </div>
            <h2 className="font-serif text-[clamp(36px,4.5vw,60px)] font-normal leading-[1.0] text-dark">
              Always something<br />
              <em className="italic text-forest">happening here</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <Link
              href="/events"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-forest text-white text-[11px] font-semibold tracking-[0.12em] uppercase rounded-sm hover:bg-forest-2 transition-colors whitespace-nowrap"
            >
              View All Events →
            </Link>
          </ScrollReveal>
        </div>

        {/* Weekly regulars */}
        <ScrollReveal>
          <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-muted mb-5">
            Weekly Regulars
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          {weeklyEvents.map((ev, i) => (
            <ScrollReveal key={ev.title} delay={i * 0.08}>
              <div className="bg-white rounded-sm overflow-hidden border border-border hover:shadow-[0_4px_20px_rgba(45,90,61,0.1)] transition-shadow group">
                <div className={`${ev.color} px-5 py-3 flex items-center justify-between`}>
                  <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-white/90">{ev.day}</span>
                  <span className="text-[9px] tracking-[0.14em] text-white/60">{ev.time}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-[20px] font-semibold text-dark mb-2">{ev.title}</h3>
                  <p className="text-[13px] text-mid leading-[1.6]">{ev.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Upcoming events */}
        <ScrollReveal>
          <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-muted mb-5">
            Upcoming Events
          </p>
        </ScrollReveal>
        <div className="space-y-3">
          {upcomingEvents.map((ev, i) => (
            <ScrollReveal key={ev.title} delay={i * 0.06}>
              <div className="bg-white rounded-sm border border-border p-5 flex flex-col sm:flex-row sm:items-center gap-5 hover:shadow-[0_4px_20px_rgba(45,90,61,0.08)] transition-shadow group">
                <div className="bg-sage rounded-sm p-3.5 text-center min-w-[64px] shrink-0">
                  <span className="font-serif text-[22px] font-bold text-forest leading-none block">
                    {ev.date.split(' ')[1]}
                  </span>
                  <span className="text-[9px] tracking-[0.14em] uppercase text-forest/60 font-semibold">
                    {ev.date.split(' ')[0]}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <h3 className="font-serif text-[18px] font-semibold text-dark">{ev.title}</h3>
                    <span className="text-[9px] tracking-[0.14em] uppercase font-semibold text-gold bg-gold/10 px-2.5 py-1 rounded-sm shrink-0 mt-0.5">
                      {ev.tag}
                    </span>
                  </div>
                  <p className="text-[13px] text-mid leading-[1.5]">{ev.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

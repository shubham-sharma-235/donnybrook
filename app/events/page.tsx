import { Metadata } from 'next'
import ScrollReveal from '../../components/ScrollReveal'
import CTABand from '../../components/CTABand'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "What's On | Donnybrook Hotel",
  description: 'Weekly events, live entertainment, upcoming functions and what\'s happening at the Donnybrook Hotel.',
}

const weeklySchedule = [
  {
    day: 'Monday',
    events: [
      { title: 'Counter Lunch', time: '12:00 PM – 2:00 PM', desc: 'Hot meals served at the bar. Daily specials on the board.' },
    ],
  },
  {
    day: 'Tuesday',
    events: [
      { title: 'Counter Lunch', time: '12:00 PM – 2:00 PM', desc: 'Hot meals served at the bar.' },
      { title: 'Bistro Dinner', time: '5:30 PM – 8:00 PM', desc: 'Full bistro menu available.' },
    ],
  },
  {
    day: 'Wednesday',
    events: [
      { title: 'Counter Lunch', time: '12:00 PM – 2:00 PM', desc: 'Hot meals at the bar. Midweek specials.' },
      { title: 'Bistro Dinner', time: '5:30 PM – 8:00 PM', desc: 'Full bistro menu available.' },
    ],
  },
  {
    day: 'Thursday',
    events: [
      { title: 'Counter Lunch', time: '12:00 PM – 2:00 PM', desc: 'Hot meals at the bar.' },
      { title: 'Bistro Dinner', time: '5:30 PM – 8:00 PM', desc: 'Full bistro menu available.' },
      { title: 'Weekly Raffle', time: '6:00 PM onwards', desc: 'Thursday night raffle. Tickets at the bar. Great prizes, great crowd.', highlight: true },
    ],
  },
  {
    day: 'Friday',
    events: [
      { title: 'Counter Lunch', time: '12:00 PM – 2:00 PM', desc: 'Hot meals at the bar.' },
      { title: 'Happy Hour', time: '5:00 PM – 7:00 PM', desc: 'Kick off the weekend right. Discounted drinks at the bar.', highlight: true },
      { title: 'Bistro Dinner', time: '5:30 PM – 8:30 PM', desc: 'Full bistro menu. Great for dinner before a big Friday night.' },
      { title: 'Friday Night DJ', time: '8:00 PM – Late', desc: 'Get the weekend started with live DJ sets and a great vibe.', highlight: true },
    ],
  },
  {
    day: 'Saturday',
    events: [
      { title: 'Counter Lunch', time: '12:00 PM – 2:00 PM', desc: 'Hot meals at the bar.' },
      { title: 'Bistro Dinner', time: '5:30 PM – 8:30 PM', desc: 'Full bistro menu, perfect for a Saturday night out.' },
      { title: 'Saturday Night DJ', time: '8:00 PM – Late', desc: 'Live DJ, cold beers, and a full bar. The best Saturday nights in Donnybrook.', highlight: true },
    ],
  },
  {
    day: 'Sunday',
    events: [
      { title: 'Sunday Roast', time: '12:00 PM – 3:00 PM', desc: 'A proper Sunday tradition. Slow-roasted meats, all the trimmings, and a relaxed afternoon.', highlight: true },
    ],
  },
]

const upcomingEvents = [
  {
    date: { day: '7', month: 'Dec' },
    title: 'Christmas Party Night',
    desc: 'Get into the festive spirit with a great night at the Donnybrook Hotel. Christmas music, special cocktails, festive food platters, and entertainment throughout the evening. Table bookings recommended.',
    tag: 'Special Event',
    cta: 'Book a table',
  },
  {
    date: { day: '14', month: 'Dec' },
    title: 'End of Year Celebration',
    desc: 'Send off the year in style. DJ, specials on tap, and a crowd that knows how to have a good time. Walk-ins welcome but arrive early to secure your spot.',
    tag: 'Live Music',
    cta: null,
  },
  {
    date: { day: '21', month: 'Dec' },
    title: 'Community Christmas Raffle',
    desc: 'The biggest raffle of the year. Super prizes, festive drinks and the whole town. Join us for the annual community Christmas raffle — all proceeds to local causes.',
    tag: 'Community',
    cta: null,
  },
  {
    date: { day: '31', month: 'Dec' },
    title: "New Year's Eve Countdown",
    desc: "See in 2025 at Donnybrook's local. Live entertainment from 8pm, countdown at midnight, and a party that runs through to the early hours. Limited tickets available.",
    tag: "NYE Special",
    cta: 'Enquire now',
  },
]

export default function EventsPage() {
  return (
    <main>
      {/* Inner hero */}
      <section className="bg-dark pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 60% 50%, #2D5A3D 0%, transparent 70%)',
          }}
        />
        <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20 relative">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 mb-5 text-[10px] font-semibold tracking-[0.24em] uppercase text-gold">
              <span className="w-6 h-[1.5px] bg-gold inline-block" />
              What&apos;s On
            </div>
            <h1 className="font-serif text-[clamp(44px,6vw,88px)] font-normal leading-[1.0] text-white mb-5">
              Events &amp; <em className="italic text-forest-2">Entertainment</em>
            </h1>
            <p className="text-[16px] leading-[1.85] text-white/60 max-w-xl">
              Weekly regulars, live entertainment and upcoming special events.
              There&apos;s always a good reason to head to the Donnybrook Hotel.
            </p>
          </div>
        </div>
      </section>

      {/* Weekly schedule */}
      <section className="bg-white py-[clamp(64px,9vw,120px)]">
        <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
          <ScrollReveal>
            <div className="flex items-center gap-2.5 mb-5 text-[10px] font-semibold tracking-[0.24em] uppercase text-forest">
              <span className="w-6 h-[1.5px] bg-forest inline-block" />
              Weekly Programme
            </div>
            <h2 className="font-serif text-[clamp(32px,4vw,54px)] font-normal leading-[1.0] text-dark mb-12">
              Every week, without fail
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {weeklySchedule.map((day, i) => (
              <ScrollReveal key={day.day} delay={i * 0.04}>
                <div className="border border-border rounded-sm overflow-hidden">
                  <div className="bg-sage px-6 py-3 border-b border-border">
                    <h3 className="font-serif text-[18px] font-semibold text-forest">{day.day}</h3>
                  </div>
                  <div className="divide-y divide-border">
                    {day.events.map((event) => (
                      <div
                        key={event.title}
                        className={`flex flex-col sm:flex-row sm:items-center gap-3 px-6 py-4 ${
                          event.highlight ? 'bg-sage/40' : 'bg-white'
                        }`}
                      >
                        <div className="text-[11px] text-muted font-mono whitespace-nowrap sm:w-44 shrink-0">
                          {event.time}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2.5 mb-0.5">
                            <span className="font-serif text-[16px] font-semibold text-dark">{event.title}</span>
                            {event.highlight && (
                              <span className="text-[8.5px] tracking-[0.14em] uppercase font-bold text-gold bg-gold/10 px-2 py-0.5 rounded-sm">
                                Regular
                              </span>
                            )}
                          </div>
                          <p className="text-[12.5px] text-mid leading-[1.5]">{event.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming events */}
      <section className="bg-sage py-[clamp(64px,9vw,120px)]">
        <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
          <ScrollReveal>
            <div className="flex items-center gap-2.5 mb-5 text-[10px] font-semibold tracking-[0.24em] uppercase text-forest">
              <span className="w-6 h-[1.5px] bg-forest inline-block" />
              Coming Up
            </div>
            <h2 className="font-serif text-[clamp(32px,4vw,54px)] font-normal leading-[1.0] text-dark mb-12">
              Upcoming events
            </h2>
          </ScrollReveal>

          <div className="space-y-5">
            {upcomingEvents.map((ev, i) => (
              <ScrollReveal key={ev.title} delay={i * 0.06}>
                <div className="bg-white rounded-sm border border-border p-6 flex flex-col sm:flex-row gap-6 hover:shadow-[0_4px_20px_rgba(45,90,61,0.1)] transition-shadow">
                  <div className="bg-forest rounded-sm p-4 text-center min-w-[72px] shrink-0 self-start">
                    <span className="font-serif text-[28px] font-bold text-white leading-none block">
                      {ev.date.day}
                    </span>
                    <span className="text-[9px] tracking-[0.14em] uppercase text-white/60 font-semibold">
                      {ev.date.month}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <h3 className="font-serif text-[22px] font-semibold text-dark">{ev.title}</h3>
                      <span className="text-[9px] tracking-[0.14em] uppercase font-semibold text-gold bg-gold/10 px-3 py-1.5 rounded-sm">
                        {ev.tag}
                      </span>
                    </div>
                    <p className="text-[14px] text-mid leading-[1.65] mb-4">{ev.desc}</p>
                    {ev.cta && (
                      <Link
                        href="/contact"
                        className="inline-flex items-center text-[11px] font-semibold tracking-[0.1em] uppercase text-forest hover:text-forest-2 transition-colors"
                      >
                        {ev.cta} →
                      </Link>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Functions CTA */}
      <section className="bg-white py-[clamp(64px,9vw,120px)]">
        <div className="max-w-site mx-auto px-5 sm:px-10 lg:px-20">
          <div className="bg-dark rounded-sm p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center gap-10">
            <div className="flex-1">
              <ScrollReveal>
                <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-gold mb-3">
                  Private Functions
                </p>
                <h2 className="font-serif text-[clamp(28px,3.5vw,48px)] font-normal text-white leading-tight mb-3">
                  Planning an event?<br />
                  <em className="italic text-forest-2">Talk to us.</em>
                </h2>
                <p className="text-[14px] text-white/60 leading-[1.75]">
                  From birthday dinners to work functions and community events — we can
                  accommodate private bookings for up to 60 guests with custom menus and bar arrangements.
                </p>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-gold text-dark text-[11px] font-bold tracking-[0.12em] uppercase rounded-sm hover:bg-gold-2 transition-colors"
                >
                  Enquire Now
                </Link>
                <a
                  href="tel:0897312006"
                  className="inline-flex items-center justify-center px-8 py-[13px] border-[1.5px] border-white/20 text-white text-[11px] font-semibold tracking-[0.12em] uppercase rounded-sm hover:border-white/40 hover:bg-white/5 transition-all"
                >
                  Call Us
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTABand
        label="Stay Over"
        titleLeft="Make a night of it"
        titleRight="book a room"
        subtitle="9 comfortable rooms steps from the bar. Skip the drive and wake up at your own pace."
        primaryLabel="View Rooms"
        primaryHref="/accommodation"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </main>
  )
}

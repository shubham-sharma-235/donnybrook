import Hero from '../components/Hero'
import ServiceBar from '../components/ServiceBar'
import IntroSection from '../components/sections/IntroSection'
import FoodHero from '../components/sections/FoodHero'
import DrinksSection from '../components/sections/DrinksSection'
import RelaxSection from '../components/sections/RelaxSection'
import FunctionsSection from '../components/sections/FunctionsSection'
import EventsPreview from '../components/sections/EventsPreview'
import LocationSection from '../components/sections/LocationSection'
import CTABand from '../components/CTABand'

export default function Home() {
  return (
    <main>
      {/* 1. Hero — destination positioning */}
      <Hero />

      {/* 2. Service strip — quick overview of what's here */}
      <ServiceBar />

      {/* 3. Intro — place, location, heart of Donnybrook */}
      <IntroSection />

      {/* 4. Food — prominent dining section (brief priority: food first) */}
      <FoodHero />

      {/* 5. Drinks — bar section with cold taps and bar atmosphere */}
      <DrinksSection />

      {/* 6. Relax & Stay — outdoor spaces, beer garden, accommodation tease */}
      <RelaxSection />

      {/* 7. Functions & Catering — private events, local celebrations */}
      <FunctionsSection />

      {/* 8. Events Preview — weekly regulars + upcoming events */}
      <EventsPreview />

      {/* 9. Location & Contact */}
      <LocationSection />

      {/* 10. Final CTA */}
      <CTABand
        label="Book Direct"
        titleLeft="Ready to visit?"
        titleRight="we'd love to see you"
        subtitle="Whether you're staying the night, joining us for dinner, or planning a function — get in touch and we'll sort you out."
        primaryLabel="Make a Booking"
        primaryHref="/contact"
        secondaryLabel="View Rooms"
        secondaryHref="/accommodation"
      />
    </main>
  )
}

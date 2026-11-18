'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="bg-sage rounded-sm p-7 sm:p-12 border border-border">
      <h3 className="font-serif text-[28px] font-semibold text-dark mb-1">Send an Enquiry</h3>
      <p className="text-[14px] text-muted mb-8">We&apos;ll get back to you as soon as possible.</p>

      {submitted ? (
        <div className="p-4 bg-forest/8 rounded-sm text-[14px] text-forest text-center">
          ✓ Thanks! We&apos;ll be in touch soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[9px] font-semibold tracking-[0.16em] uppercase text-mid mb-1.5">
                First Name
              </label>
              <input
                type="text"
                required
                placeholder="First name"
                className="w-full font-sans text-[14px] text-dark bg-white border border-border rounded-sm px-3.5 py-3 outline-none focus:border-forest transition-colors"
              />
            </div>
            <div>
              <label className="block text-[9px] font-semibold tracking-[0.16em] uppercase text-mid mb-1.5">
                Last Name
              </label>
              <input
                type="text"
                required
                placeholder="Last name"
                className="w-full font-sans text-[14px] text-dark bg-white border border-border rounded-sm px-3.5 py-3 outline-none focus:border-forest transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="block text-[9px] font-semibold tracking-[0.16em] uppercase text-mid mb-1.5">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="w-full font-sans text-[14px] text-dark bg-white border border-border rounded-sm px-3.5 py-3 outline-none focus:border-forest transition-colors"
            />
          </div>
          <div>
            <label className="block text-[9px] font-semibold tracking-[0.16em] uppercase text-mid mb-1.5">
              Phone
            </label>
            <input
              type="tel"
              placeholder="Phone number"
              className="w-full font-sans text-[14px] text-dark bg-white border border-border rounded-sm px-3.5 py-3 outline-none focus:border-forest transition-colors"
            />
          </div>
          <div>
            <label className="block text-[9px] font-semibold tracking-[0.16em] uppercase text-mid mb-1.5">
              Enquiry Type
            </label>
            <select className="w-full font-sans text-[14px] text-dark bg-white border border-border rounded-sm px-3.5 py-3 outline-none focus:border-forest transition-colors appearance-none">
              <option value="">Select type</option>
              <option>Accommodation</option>
              <option>Dining Reservation</option>
              <option>Functions & Events</option>
              <option>General Enquiry</option>
            </select>
          </div>
          <div>
            <label className="block text-[9px] font-semibold tracking-[0.16em] uppercase text-mid mb-1.5">
              Message
            </label>
            <textarea
              required
              placeholder="How can we help?"
              rows={5}
              className="w-full font-sans text-[14px] text-dark bg-white border border-border rounded-sm px-3.5 py-3 outline-none focus:border-forest transition-colors resize-y"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3.5 bg-forest text-white font-sans text-[11px] font-semibold tracking-[0.12em] uppercase rounded-sm hover:bg-forest-2 transition-colors"
          >
            Send Enquiry
          </button>
        </form>
      )}
    </div>
  )
}

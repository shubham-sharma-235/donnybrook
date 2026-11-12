# Donnybrook Hotel — Next.js Website

Contemporary Australian Country Hospitality website for the Donnybrook Hotel, Western Australia.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Cormorant Garamond + Inter (Google Fonts via next/font)
- **Images**: Unsplash (via next/image with remote pattern config)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
donnybrook-hotel/
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata, Navbar, Footer)
│   ├── globals.css         # Global styles, Tailwind directives, CSS utilities
│   ├── page.tsx            # Homepage
│   ├── accommodation/
│   │   └── page.tsx        # Accommodation page
│   ├── dining/
│   │   └── page.tsx        # Dining & Bar page
│   └── contact/
│       └── page.tsx        # Contact page
├── components/
│   ├── Navbar.tsx          # Sticky nav, mobile menu (client)
│   ├── Footer.tsx          # Footer with links & socials
│   ├── Hero.tsx            # Homepage hero with Framer Motion (client)
│   ├── InnerHero.tsx       # Inner page hero banner
│   ├── ServiceBar.tsx      # Green service pills bar
│   ├── CTABand.tsx         # Dark green CTA section
│   ├── ScrollReveal.tsx    # Framer Motion scroll reveal wrapper (client)
│   ├── ContactForm.tsx     # Enquiry form with state (client)
│   └── sections/
│       ├── IntroSection.tsx
│       ├── OfferingsGrid.tsx
│       ├── DiningSplit.tsx
│       ├── FoodBarSection.tsx
│       ├── RoomsGrid.tsx
│       ├── CommunitySection.tsx
│       └── LocationSection.tsx
├── next.config.js          # Image remote patterns (Unsplash)
├── tailwind.config.ts      # Custom colours, fonts
├── tsconfig.json
└── postcss.config.js
```

## Colour Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `sage` | `#F2F7F3` | Light green background |
| `sage-2` | `#E6EFE8` | Section alt backgrounds |
| `sage-3` | `#D4E6D8` | Borders on dark, chips |
| `forest` | `#2D5A3D` | Primary accent, buttons |
| `forest-2` | `#3A7050` | Hover states |
| `forest-3` | `#1E3D29` | Dark sections, nav overlay |
| `gold` | `#8B6914` | Secondary accent, badges |
| `dark` | `#18231C` | Body text |
| `mid` | `#4A5E52` | Secondary text |
| `muted` | `#7A9080` | Placeholder, captions |
| `border` | `#D0E2D4` | Dividers, card borders |

## Pages

- `/` — Homepage (Hero, Intro, Offerings, Dining, Food & Bar, Rooms, Community, Location, CTA)
- `/accommodation` — Accommodation page with rooms grid
- `/dining` — Dining & Bar page with three section blocks
- `/contact` — Contact info + enquiry form

## Deployment

This project is ready to deploy on **Vercel** (recommended) or any Next.js-compatible host.

```bash
# Deploy to Vercel
npx vercel
```

Ensure the `NEXT_PUBLIC_*` env vars are set if you add any in future.

## Credits

Images sourced from [Unsplash](https://unsplash.com) for demonstration purposes.
Hotel content based on [donnybrookhotelwa.com.au](https://donnybrookhotelwa.com.au/).

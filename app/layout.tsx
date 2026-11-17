import type { Metadata } from 'next'
// import { Cormorant_Garamond } from 'next/font/google'
import localFont from "next/font/local";
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const cormorant = localFont({
  src: [
    {
      path: "../public/fonts/CormorantGaramond-Variable.woff2",
      weight: "300 700",
      style: "normal",
    },
    {
      path: "../public/fonts/CormorantGaramond-Italic-Variable.woff2",
      weight: "300 700",
      style: "italic",
    },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = localFont({
  src: "../public/fonts/Inter-Variable.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Donnybrook Hotel — Western Australia',
  description:
    'Donnybrook Hotel — Bar, Bistro, Accommodation & Beer Garden in Donnybrook WA. Two hours south of Perth in the heart of apple country.',
  keywords: ['Donnybrook Hotel', 'Western Australia', 'pub', 'bistro', 'accommodation', 'beer garden', 'South Western Highway'],
  openGraph: {
    title: 'Donnybrook Hotel — Western Australia',
    description: 'Bar, Bistro, Accommodation & Beer Garden in Donnybrook WA.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans bg-white text-dark antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

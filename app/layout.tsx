import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

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

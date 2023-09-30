import './globals.css'
import type { Metadata } from 'next'
import { NavBar, Footer } from '@/components'


const baseUrl = process.env.NODE_ENV === 'development'
  ? `http://localhost:${process.env.PORT || 3000}` :
  'https://' + process.env.VERCEL_URL as string;

export const metadata: Metadata = {
  title: 'Early',
  description: 'NFT Artist and Graphic Designer Vibing in Web3.',
  viewport: { width: "device-width", initialScale: 1 },
  metadataBase: new URL(baseUrl),
  keywords: "Early, Artist, Web3, Designer, Hidden Kanohi, Kanohi, fiveDollarNFT ",
  creator: 'iSy',
  publisher: 'iSy',
  generator: 'Next.js',
  applicationName: 'Early',
  authors: [
    {
      name: 'iSy',
      url: 'https://linktr.ee/isyqozz512'
    },
    {
      name: 'Early',
      url: 'https://lynkfire.com/Early'
    }
  ],
  openGraph: {
    title: 'Early',
    description: 'NFT Artist and Graphic Designer Vibing in Web3.',
    siteName: 'Early',
  },
  twitter: {
    title: 'Early',
    description: 'NFT Artist and Graphic Designer Vibing in Web3.',
    card: 'summary',
    creator: '@iSyqozz512',
    site: '@EarlyArt_SO'
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={'text-yellow-50'}>
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}

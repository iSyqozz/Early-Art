import './globals.css'
import type { Metadata } from 'next'
import { NavBar, Footer } from '@/components'


const baseUrl = process.env.NODE_ENV === 'development'
  ? `http://localhost:${process.env.PORT || 3000}` :
  'https://' + process.env.VERCEL_URL as string;

export const metadata: Metadata = {
  title: 'Early',
  description: 'NFT Artists and Graphic Designers Vibing in Web3.',
  viewport: { width: "device-width", initialScale: 1 },
  metadataBase: new URL(baseUrl),
  keywords: "Easy, Artist, Web3, Designer, Hidden Kanohi, Kanohi, fiveDollarNFT ",
  creator: 'iSy',
  publisher: 'iSy',
  generator: 'Next.js',
  applicationName: 'Easy',
  authors: [
    {
      name: 'iSy',
      url: 'https://linktr.ee/isyqozz512'
    },
    {
      name: 'Easy',
      url: 'https://lynkfire.com/Early'
    }
  ],
  openGraph: {
    title: 'Easy',
    description: 'NFT Artists and Graphic Designers Vibing in Web3.',
    siteName: 'Easy',
  },
  twitter: {
    title: 'Easy',
    description: 'NFT Artists and Graphic Designers Vibing in Web3.',
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

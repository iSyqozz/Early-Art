import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title:'Early | Home'
} 

const Home = () => {
  return (
    <div className='sm:mt-12 mt-2 max-w-full mx-auto'>
      <section className='sm:px-8 flex items-start justify-center flex-wrap w-full max-md:gap-8'>
        <div className='max-[1265px]:text-center max-[1265px]:items-center flex flex-col items-start justify-start gap-4'>
          <div className='text-4xl sm:text-5xl md:text-6xl font-semi-bold'>NFT Artist and <br /> Graphic Designer <br /> Vibing in Web3</div>
          <div className='text-sm max-sm:text-[12px] font-semibold mt-6 opacity-80'>
            A New Zealand Based, Kiwi artist trapped in an <br /> office based Consulting role, using digital art <br /> and Solana as his creative release. Aiming to one day <br />
            be able to break out of the office mold and <br /> pursue a full time career in digital art, branding <br />
            and NFTs. <br /> <br />
            Always open to chat, bounce ideas, vibe some <br />
            art and see what we can cook up.
          </div>
          <Image
            quality={100}
            priority={true}
            width={300}
            loading='eager'
            height={300}
            alt='designs'
            src={'/assets/groupDisplay2.png'}
            className='aspect-auto'></Image>

        </div>

        <div className='relative w-[800px] '>
          <Image
            loading='eager'
            quality={100}
            priority={true}
            width={1500}
            height={1500}
            alt='designs'
            src={'/assets/Splatter2.png'}
            className='absolute top-0 left-0 aspect-auto'>
          </Image>
          <Image
            quality={100}
            priority={true}
            width={1500}
            height={1500}
            alt='designs'
            src={'/assets/MainImage2.png'}
            className='absolute top-0 left-0 aspect-auto'>
          </Image>

        </div>
      </section>

    </div>
  )
}

export default Home
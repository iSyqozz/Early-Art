import Image from 'next/image'
import { Metadata } from 'next'

export const metadata:Metadata = {
  title:'Early | Kanohi'
} 

const Home = () => {
  return (
    <div className='sm:mt-12 mt-2 max-w-full mx-auto'>
      <section className='sm:px-8 flex flex-row-reverse items-start justify-center flex-wrap w-full max-md:gap-8'>
        <div className='max-[1265px]:text-center max-[1265px]:items-center flex flex-col items-start justify-start gap-4'>
          <div className='text-4xl sm:text-5xl md:text-6xl font-semi-bold'>Spooky Vibes <br /> for $5</div>
          <div className='text-sm max-sm:text-[12px] font-semibold mt-6 opacity-80'>
            Spooky vibes dope art, customization. Hidden <br /> Kanohi represents the anonymity of web3 and <br /> opportunity to recreate outselves. Part of the <br /> FiveDollarsNFT group.
          </div>
          <Image
            quality={100}
            priority={true}
            width={300}
            height={300}
            alt='designs'
            src={'/assets/groupDisplay1.png'}
            className='aspect-auto min-[1265px]:mt-6'></Image>
        </div>

        <div className='relative w-[800px] min-[1265px]:-mt-12'>
          <Image
            quality={100}
            priority={true}
            width={1500}
            height={1500}
            loading='eager'
            alt='designs'
            src={'/assets/Splatter1.png'}
            className='absolute top-0 left-0 aspect-auto'>
          </Image>
          <Image
            quality={100}
            priority={true}
            width={1500}
            loading='eager'
            height={1500}
            alt='designs'
            src={'/assets/MainImage1.png'}
            className='absolute top-0 left-0 aspect-auto'>
          </Image>
        </div>
      </section>

    </div>
  )
}

export default Home
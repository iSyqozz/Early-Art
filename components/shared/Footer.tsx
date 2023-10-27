import { DISCORD_URL, TENSOR_URL, EXCHANGE_ART_URL, TWITTER_URL } from "@/constants"
import Link from "next/link"
import Image from "next/image"
const Footer = () => {
  return (

    <div className="h-fit fixed bottom-6 flex items-center justify-center w-screen">
      <div className=" backdrop-blur-lg flex gap-8 justify-center items-center px-6 py-[6px] rounded-3xl bg-opacity-20 transition-none
      bg-black
    ">
        <Link href={DISCORD_URL} target='_blank' className="
          relative after:absolute after:content-[''] after:h-[2.5px] after:bottom-[-3px] after:rounded-2xl after:w-0 after:left-0 hover:after:w-[100%] after:mt-[5px] after:bg-gradient-to-bl after:from-purple-400  after:via-indigo-400 after:to-indigo-800 after:hover:bg-indigo-600 
          after:transition-all after:duration-200 after:ease-in
          transition-all duration-200 ease-in
          hover:scale-110">
          <Image className="aspect-auto !w-25"
            quality={100}
            width={25}
            height={25}
            alt="discord"
            src={'/icons/discord.png'}
            priority={true}
          >
          </Image>
        </Link>

        <Link href={TWITTER_URL} target='_blank' className="
          relative after:absolute after:content-[''] after:h-[2.5px] after:bottom-[-3px] after:rounded-2xl after:w-0 after:left-0 hover:after:w-[100%] after:mt-[5px] after:bg-gradient-to-bl after:from-purple-400  after:via-indigo-400 after:to-indigo-800 after:hover:bg-indigo-600 
          after:transition-all after:duration-200 after:ease-in
          transition-all duration-200 ease-in
          hover:scale-110">
          <Image className="aspect-auto !w-25"
            quality={100}
            width={25}
            height={25}
            alt="twitter"
            src={'/icons/twitter.png'}
            priority={true}
          >
          </Image>
        </Link>

        <Link href={EXCHANGE_ART_URL} target='_blank' className="
          relative after:absolute after:content-[''] after:h-[2.5px] after:bottom-[-6px] after:rounded-2xl after:w-0 after:left-0 hover:after:w-[100%] after:mt-[5px] after:bg-gradient-to-bl after:from-purple-400  after:via-indigo-400 after:to-indigo-800 after:hover:bg-indigo-600 
          after:transition-all after:duration-200 after:ease-in
          transition-all duration-200 ease-in
          hover:scale-110">
          <Image className="aspect-auto !w-25"
            quality={100}
            width={21}
            height={21}
            alt="exchangeArt"
            src={'/icons/exchangeArt.png'}
            priority={true}
          >
          </Image>
        </Link>

        <Link href={TENSOR_URL} target='_blank' className="
          relative after:absolute after:content-[''] after:h-[2.5px] after:bottom-[-3px] after:rounded-2xl after:w-0 after:left-0 hover:after:w-[100%] after:mt-[5px] after:bg-gradient-to-bl after:from-purple-400  after:via-indigo-400 after:to-indigo-800 after:hover:bg-indigo-600 
          after:transition-all after:duration-200 after:ease-in
          transition-all duration-200 ease-in
          hover:scale-110">
          <Image className="aspect-auto !w-25"
            quality={100}
            width={25}
            height={25}
            alt="tensor"
            src={'/icons/tensor.png'}
            priority={true}
          >
          </Image>
        </Link>
      </div>
    </div>


  )
}

export default Footer
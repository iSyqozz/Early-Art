import Link from "next/link"
import Image from "next/image"



const NavBar = () => {
  return (
    <>
      {/**big screen */}
      <div className="max-sm:hidden p-16 max-w-full mx-auto flex justify-between items-center">
        <Link href={'/'}>
          <Image className="!w-[80px] aspect-auto hover:scale-[1.07] duration-[0.1s]  "
            width={120}
            height={120}
            alt="logo"
            priority={true}
            src={'/assets/Logo1.png'}
            quality={100}
          ></Image>
        </Link>

        <div className="flex items-center sm:gap-16 gap-4 max-sm:text-sm justify-center font-bold">
          <Link
            className="relative after:absolute after:content-[''] after:h-[2.5px] after:bottom-[-3px] after:rounded-2xl after:w-0 after:left-0 hover:after:w-[75%] after:mt-[5px] after:bg-gradient-to-bl after:from-purple-400  after:via-indigo-400 after:to-indigo-800 after:hover:bg-indigo-600 
          after:transition-all after:duration-200 after:ease-in
          transition-all duration-200 ease-in hover:scale-105"
            href={'/kanohi'}>
            Hidden Kanohi
          </Link>
          <Link
            className="relative after:absolute after:content-[''] after:h-[2.5px] after:bottom-[-3px] after:rounded-2xl after:w-0 after:left-0 hover:after:w-[75%] after:mt-[5px] after:bg-gradient-to-bl after:from-purple-400  after:via-indigo-400 after:to-indigo-800 after:hover:bg-indigo-600 
          after:transition-all after:duration-200 after:ease-in
          transition-all duration-200 ease-in hover:scale-105"
            href={'/banner-tool'}>
            Banner Tool
          </Link>
        </div>
      </div>


      {/**small screen */}
      <div className="text-sm sm:hidden py-16 px-2 max-w-6xl mx-auto flex justify-around items-center relative">


        <Link
          className="font-bold relative after:absolute after:content-[''] after:h-[2.5px] after:bottom-[-3px] after:rounded-2xl after:w-0 after:left-0 hover:after:w-[75%] after:mt-[5px] after:bg-gradient-to-bl after:from-purple-400  after:via-indigo-400 after:to-indigo-800 after:hover:bg-indigo-600 
          after:transition-all after:duration-200 after:ease-in
          transition-all duration-200 ease-in hover:scale-105"
          href={'/kanohi'}>
          Hidden Kanohi
        </Link>

        <Link href={'/'}>
          <Image className="transition-none absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] max-sm:!w-[60px] !w-[80px] aspect-auto hover:scale-[1.07] duration-[0.1s]  "
            width={120}
            height={120}
            alt="logo"
            priority={true}
            src={'/assets/Logo1.png'}
            quality={100}
          ></Image>
        </Link>

        <Link
          className="font-bold relative after:absolute after:content-[''] after:h-[2.5px] after:bottom-[-3px] after:rounded-2xl after:w-0 after:left-0 hover:after:w-[75%] after:mt-[5px] after:bg-gradient-to-bl after:from-purple-400  after:via-indigo-400 after:to-indigo-800 after:hover:bg-indigo-600 
          after:transition-all after:duration-200 after:ease-in
          transition-all duration-200 ease-in hover:scale-105"
          href={'/banner-tool'}>
          Banner Tool
        </Link>
      </div>



    </>


  )
}

export default NavBar
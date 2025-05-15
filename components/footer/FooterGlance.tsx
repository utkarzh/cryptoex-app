import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoIosArrowRoundForward, IoLogoInstagram } from 'react-icons/io'
import { RiThreadsFill, RiTwitterXLine, RiYoutubeLine } from 'react-icons/ri'
import { TiSocialFacebook,  } from 'react-icons/ti'



const FooterGlance = () => {
  return (
    <div className="w-full flex flex-col gap-8 justify-between items-start">
      {/* content */}
      <div className="w-fit flex flex-col gap-3">
        {/* logo */}
        <Link href="/" className="">
          <Image
            width={100}
            height={100}
            className="w-auto  cursor-pointer bg-black dark:bg-transparent"
            src="/images/logo.png"
            alt="logo"
          />
        </Link>
        {/* content */}
        <p className="text-[12px] ">
          Register in minutes—sign up, deposit, and start trading crypto
          effortlessly!
        </p>
        {/* button */}
        <button className=" w-fit flex text-[14px] font-medium items-center gap-1 px-3 py-1 rounded-full bg-green-700 text-black cursor-pointer">
          Get Started
          <IoIosArrowRoundForward className="text-lg" />
        </button>
      </div>
      {/* social icons */}
      <div className='w-fit flex gap-2 items-center'>
        {/* facebook */}
          <div className='w-fit p-1 cursor-pointer hover:scale-110 transition-all duration-300  bg-[#63647e]/70 rounded-full'>
          <TiSocialFacebook/></div>
          {/* insta */}
          <div className='w-fit p-1 cursor-pointer hover:scale-110 transition-all duration-300 bg-[#63647e]/70 rounded-full'>
          <IoLogoInstagram/></div>
          {/* thread */}
          <div className='w-fit p-1 cursor-pointer hover:scale-110 transition-all duration-300 bg-[#63647e]/70 rounded-full'>
          <RiThreadsFill/></div>
          {/* x */}
          <div className='w-fit p-[5px] cursor-pointer hover:scale-110 transition-all duration-300 bg-[#63647e]/70 rounded-full'>
          <RiTwitterXLine className='text-[14px]'/></div>
          {/* youtube */}
          <div className='w-fit p-1 cursor-pointer hover:scale-110 transition-all duration-300 bg-[#63647e]/70 rounded-full'>
          <RiYoutubeLine/></div>

      </div>
    </div>
  );
}

export default FooterGlance
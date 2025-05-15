import { saira } from '@/utils/Font'
import React from 'react'
const GetStartedHeading = () => {
  return (
    <div className='w-full  relative h-50 mt-10 overflow-hidden'>

          <div className="absolute z-[20] top-0 left-20 w-[80%] blur-lg border-t-2 border-green-500  h-30 bg-gradient-to-b from-green-400/40 via-transparent/10  to-[#06062a] pointer-events-none"></div>

          <div className="absolute z-[20] top-0 left-0 w-full blur-[1px]  h-full bg-gradient-to-b from-green-400/30 via-[#06062a]/50  to-[#06062a] pointer-events-none"></div>

           <span className={`${saira.className} w-full h-full text-white text-[19vw] opacity-10 font-bold text-nowrap text-center absolute -left-8 -top-4 -translate-y-1/2 `}>Get Started
           </span>
        </div>
  )
}

export default GetStartedHeading
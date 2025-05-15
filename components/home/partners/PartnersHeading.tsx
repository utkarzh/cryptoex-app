import Image from 'next/image'
import React from 'react'


const PartnersHeading = () => {

  const partnersUrl = [
    "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "2.png", "4.png", "6.png", "3.png"
  ]
  return (
    <div className='w-full h-45 relative overflow-hidden'>

          {/* <div className="absolute z-[20] bottom-0 left-20 w-[80%] blur-lg border-t-2 border-green-500  h-45 bg-gradient-to-t from-green-400/40 via-transparent/10  to-transparent pointer-events-none"></div> */}

          <div className="absolute z-[20] bottom-0 left-0 w-full blur-[1px]  h-45 bg-gradient-to-t from-[#06062a]/100 via-[#06062a]/60  to-transparent pointer-events-none"></div>
        
          <div className=' text-white absolute opacity-10 -bottom-1/2 -left-10  w-full text-nowrap overflow-hiddenw-full text-[20vw] tracking-wide font-bold text-center'>
            PARTNERS
          </div>

          {/* partners */}
          <div className='w-full h-[40px] bg-black/50 absolute top-1/2 -translate-y-1/2 flex gap-6 items-center justify-center overflow-hidden'>

          {
            partnersUrl.map((url, index) =>  <Image width={100} height={100} src={`/images/partners/${url}`} alt="" className='w-auto h-[25px]' key={index} /> )
          }
         
          </div>
        </div>
  )
}

export default PartnersHeading
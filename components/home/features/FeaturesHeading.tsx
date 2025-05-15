import React from 'react'


const FeaturesHeading = () => {
  return (
    <div className='w-full h-45 relative overflow-hidden '>

          <div className="absolute z-[20] bottom-0 left-20 w-[80%] blur-lg border-t-2 border-green-500  h-45 bg-gradient-to-t from-green-400/40 via-transparent/10  to-transparent pointer-events-none"></div>

          <div className="absolute z-[20] bottom-0 left-0 w-full blur-[1px]  h-45 bg-gradient-to-t from-green-400/10 via-white/5  to-transparent pointer-events-none"></div>
        
          <div className=' text-white absolute opacity-10 -bottom-[150px] -left-8  w-full text-nowrap overflow-hiddenw-full text-[26vw] font-bold text-center'>
            Features
          </div>
        </div>
  )
}

export default FeaturesHeading
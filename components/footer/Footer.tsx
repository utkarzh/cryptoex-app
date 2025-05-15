import React from 'react'
import { CiWarning } from 'react-icons/ci'
import FooterGlance from './FooterGlance'
import FooterLinks from './FooterLinks'
import FooterInfo from './FooterInfo'


const Footer = () => {
  return (
    <div className='w-full h-fit flex justify-center items-center border rounded-md pt-14 pb-6 bg-[#06062a] '>
        {/* footer container */}
        <div className='w-[80%] flex flex-col gap-4 justify-center items-center'>

            {/* content section */}
            <div className='w-full h-full flex gap-24 pb-4'>
                <FooterGlance/>
                <FooterLinks/>
                <FooterInfo/>
                
            </div>
            {/* border line section */}
            <div className='w-full border-t border-[#63647e]'></div>
            {/* message section */}
            <div className='w-full flex gap-2 items-center justify-start text-slate-400'>
                <CiWarning className='text-lg' />
                <p className='text-[12px] font-extralight'>Crypto investments are subject to market risks—invest wisely and stay informed.</p>
            </div>

        </div>
    </div>
  )
}

export default Footer
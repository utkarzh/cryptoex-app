"use client"
import { saira } from '@/utils/Font';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { useInView } from 'react-intersection-observer';


const CreateAccount = () => {
  const [activeState, setActiveState] = useState<number>(1);

  const { ref, inView } = useInView({
    threshold: 1, // Trigger when 10% of the element is visible
    triggerOnce: true, // Optional: Only trigger once
  });

  const contentChangeHandler = () => {
       for(let i = 1; i<3; i++){
      setTimeout(()=> {
        setActiveState( prev=> prev+1);
      }, i*1000)
    }
  }

  useEffect(() => {
    if (inView) {
      contentChangeHandler()
    }
   
  }, [inView]);
 

  return (
    <div ref={ref} className='w-full text-white flex flex-col sm:flex-row gap-6 justify-center items-center py-2 pb-10 pt-18'
    onMouseEnter={contentChangeHandler}
    >
        {/* counting div */}
        <div className='w-fit flex flex-row sm:flex-col justify-center items-center gap-1 text-[10px] '>
          <div className={`px-2 rounded-full bg-green-700 text-[16px]`}>1</div>
          <div className={`h-0 sm:h-3 w-3 sm:w-0 ${activeState >= 2  ? "border-green-600" : "border-white"} border transition-all duration-300`}></div>
          <div className={`px-2 rounded-full ${activeState >= 2 ? "bg-green-700" : "bg-slate-700"} transition-all duration-300 text-[16px]`}>2</div>
          <div className={`h-0 sm:h-3 w-3 sm:w-0 ${activeState >= 3  ? "border-green-600" : "border-white"} border transition-all duration-300`}></div>
          <div className={`px-2 rounded-full ${activeState >= 3 ? "bg-green-700" : "bg-slate-700"} transition-all duration-300 text-[16px]`}>3</div>
        </div>
        {/* image*/}
  
            { activeState == 1 && <Image width={100} height={100} src={`/images/computerSignUp.png`} className='w-[250px] ml-4' alt="" />}

             { activeState == 2 && <Image width={100} height={100} src={`/images/computerSignUp.png`} className='w-[250px] ml-4' alt="" />}

              { activeState >= 3 && <Image width={100} height={100} src={`/images/computerSignUp.png`} className='w-[250px] ml-4' alt="" />}



     
        {/* create account content */}
        {activeState==1 && <div className='flex flex-col sm:justify-start  items-center sm:items-start text-center sm:text-start  w-fit'>
            {/* title */}
            <h3 className={`${saira.className} font-bold`}>Create Your Account</h3>
            {/* sub title */}
            <p className='max-w-[320px] text-[12px] font-extralight '>Sign up in minutes with your email, set a secure password, and verify your identity for a safe trading experience.</p>
            {/* button */}
            <button className='w-fit flex mt-4 text-[12px] items-center gap-1 px-3 py-1 rounded-full bg-green-700 text-black cursor-pointer '>
                Get Started 
                <IoIosArrowRoundForward className='text-lg'/>
            </button>
        </div>}

        {activeState==2 && <div className='flex flex-col sm:justify-start  items-center sm:items-start text-center sm:text-start  w-fit'>
            {/* title */}
            <h3 className={`${saira.className} font-bold`}>Complete Your KYC</h3>
            {/* sub title */}
            <p className='max-w-[320px] text-[12px] font-extralight '>Sign up in minutes with your email, set a secure password, and verify your identity for a safe trading experience.</p>
            {/* button */}
            <button className='w-fit flex mt-4 text-[12px]  items-center gap-1 px-3 py-1 rounded-full bg-cyan-700 text-white cursor-pointer '>
                Update KYC 
                <IoIosArrowRoundForward className='text-lg'/>
            </button>
        </div>}

        {activeState >=3 && <div className='flex flex-col sm:justify-start  items-start  sm:items-start text-start sm:text-start  w-fit ml-20 sm:ml-0'>
            {/* title */}
            <h3 className={`${saira.className} font-bold`}>Start Trading</h3>
            {/* sub title */}
            <p className='max-w-[320px] text-[12px] font-extralight '>Sign up in minutes with your email, set a secure password, and verify your identity for a safe trading experience.</p>
            {/* button */}
            <button className='w-fit flex mt-4 text-[12px]  items-center gap-1 px-3 py-1 rounded-full bg-yellow-700 text-white cursor-pointer '>
                 Start Trading
                <IoIosArrowRoundForward className='text-lg'/>
            </button>
        </div> }
    </div>
  )
}

export default CreateAccount
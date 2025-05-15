"use client"
import React, { useState } from 'react'
import { BiDollar, BiStats } from 'react-icons/bi';
import { CiStar } from 'react-icons/ci';
import { ImUserPlus } from 'react-icons/im';
import { IoStorefront } from 'react-icons/io5';
import { RiFocus3Line } from 'react-icons/ri';

const Benefits = () => {

  const [isUserBenefits, setIsUserBenifits] = useState(false);

  return (
    <div className="w-full h-fit  ">
      <div className="w-[65%] sm:w-[75%] relative rounded-r-md py-8 flex justify-end  ">
        <div className="bg-[url('/images/hexblock.png')] bg-cover bg-center opacity-30  h-full w-full absolute top-0 right-0 bg-transparent rounded-r-md  z-[20] "></div>
        <div className={`opacity-80 rounded-r-md  h-full w-full absolute top-0 right-0 ${isUserBenefits ? "bg-yellow-600" : "bg-green-600"} transition-all duration-500 z-[30]`}></div>

        <div className={`w-[95%] sm:w-[80%] z-[40] ${isUserBenefits ? "bg-yellow-600/50": "bg-green-600/50"}  transition-all duration-500 p-4 py-6 rounded-l-md flex flex-col gap-10`}>
          <div className="w-full flex flex-col sm:flex-row gap-4">
            {/* first card */}
            <div className="w-full h-full flex justify-center items-center gap-2">

              <div className='border border-white rounded-full p-1'>
                <RiFocus3Line className='text-[20px]'/>
              </div>
                

              <div className="flex flex-col gap0">
                <h2 className="text-[14px] font-bold ">Coin/Token Listings</h2>
                <p className="font-extralight text-[12px]">
                  IndoEx is expanding investment access to all qualified
                  cryptocurrencies worldwide.
                </p>
              </div>
            </div>

            {/* 2nd card */}
            <div className="w-full h-full flex justify-center items-center gap-2">

              <div className='border border-white rounded-full p-1'>
                <BiStats className='text-[20px]'/>
              </div>
                

              <div className="flex flex-col gap0">
                <h2 className="text-[14px] font-bold ">Trading Contest</h2>
                <p className="font-extralight text-[12px]">
                  Our trading contests let users showcase skills. Hold 0.1 BTC to enter and win rewards!
                </p>
              </div>
            </div>
          </div>

           <div className="w-full flex flex-col sm:flex-row gap-4">
            {/* 3rd card */}
            <div className="w-full h-full flex justify-center items-center gap-2">

              <div className='border border-white rounded-full p-1'>
                <BiDollar  className='text-[20px]'/>
              </div>
                

              <div className="flex flex-col gap0">
                <h2 className="text-[14px] font-bold ">Custom Pairing</h2>
                <p className="font-extralight text-[12px]">
                Unlike other exchanges, IndoEx charges no fees for extra market pairs.
                </p>
              </div>
            </div>

            {/* 4th card */}
           <div className="w-full h-full flex justify-center items-center gap-2">

              <div className='border border-white rounded-full p-1'>
                <CiStar  className='text-[20px]'/>
              </div>
                

              <div className="flex flex-col gap0">
                <h2 className="text-[14px] font-bold ">Listing Contest</h2>
                <p className="font-extralight text-[12px]">
               Our listing competition rewards the winner with 3 BTC. More benefits await.
                </p>
              </div>
            </div>
          </div>


        </div>

        {/* side buttons */}
        <div className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2  p-1 rounded-full  flex justify-center items-center z-[90]'>

        <div className=' p-1 rounded-full bg-gradient-to-r from-transparent to-black/70 z-[30]'>
        <div className='p-1 bg-white rounded-full '>
          {
            isUserBenefits ? <ImUserPlus  className='text-[16px] sm:text-[22px] text-yellow-700'/> : <IoStorefront className='text-[16px] sm:text-[22px] text-green-700'/>
          }
        </div>
        </div>

        

        <div className={`absolute left-1/2 bg-gradient-to-r ${ isUserBenefits ? "from-yellow-700 via-yellow-700" : "from-green-700 via-green-700"} to-[#06062a] transition-all duration-500 w-fit h-[70%] text-nowrap pl-[50%] z-[20] flex justify-center items-center pr-2 text-[12px] sm:text-[14px] font-medium`} 
        >  
        <span className='transition-all delay-100 duration-700 '>{
          isUserBenefits ? "User benefits" : "Vendor benefits"}</span>
        </div>

        <div className={` ${isUserBenefits ? "left-1/2 -translate-y-[40px]" : "left-1/2 translate-y-[40px]"} absolute  text-slate-500 pl-[50%] text-[12px] sm:text-[14px] z-[20] text-nowrap font-medium cursor-pointer  transition-all duration-500 hover:scale-105 hover:text-slate-300`}
        onClick={() => {
          setIsUserBenifits(prev=> !prev);
        }}
        >{
           !isUserBenefits ? "User benefits" : "Vendor benefits"
        }</div>
        </div>
      </div>
    </div>
  );
}

export default Benefits
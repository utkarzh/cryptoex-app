import React from 'react'
import { MdSearch } from 'react-icons/md'
import { RiBtcLine } from "react-icons/ri";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";




const TradeNavBar = () => {
    const test= [];

    for(let i= 0; i<100; i++){
        test.push( {
            logo:"RiBtcLine",
            name:"BTC",
        })
    }
  return (
    <div className='w-full flex justify-center  bg-slate-900 h-[40px] '>
        {/* container div */}
        <div className='w-[90%] flex gap-1 items-center text-white overflow-hidden'>
            {/* search logo */}
            <div className='w-fit'>
                <MdSearch className='text-2xl '/>
            </div>
            {/* crypto name and tag */}
            <div className='w-full flex gap-3 overflow-x-hidden'>

                {
                    test.map((val, index)=>  <div className='w-fit px-2 flex gap-1 items-center' key={index}>
                    {/* name */}
                    <RiBtcLine className='text-[18px] bg-yellow-400 rounded-full'/>
                    <div className='text-sm'>BTC</div>
                </div> )
                }
                <div className='w-fit px-2 flex gap-1 items-center'>
                    {/* name */}
                    <RiBtcLine className='text-[18px] bg-yellow-400 rounded-full'/>
                    <div className='text-sm'>BTC</div>
                </div>
            </div>
            {/* scroll button*/}
            <div className='w-fit flex gap-1 text-2xl'>

                 <CiCircleChevLeft/>
                <CiCircleChevRight/>
               
            </div>
            
        </div>
    </div>
  )
}

export default TradeNavBar
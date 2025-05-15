import Card from '@/components/common/Card'
import React from 'react'
import { IoWalletOutline } from 'react-icons/io5'
import { LuChevronDown, LuCircleGauge, LuDollarSign } from 'react-icons/lu'
import { TbBracketsAngle } from 'react-icons/tb'


const FeaturesContent = () => {
  return (
    <div className='w-full mt-16 pb-20 flex justify-center'>
        {/* container */}
        <div className='w-fit flex gap-2 relative '>

          {/* leftside content */}
          <div className='flex flex-col gap-2'>
           <Card>
                <div className='w-[200px] p-2 min-h-[100px] justify-start flex flex-col gap-3'>

                  <div className='w-fit p-1 bg-slate-700 rounded-full'>
                    <LuDollarSign className='text-md'/>
                  </div>
                  <div className='w-full flex flex-col gap-1'>
                    <h3 className='text-[14px] font-medium'>Reasonable Commissions</h3>
                    <p className='text-[10px] font-extralight'>Profitable investment opportunities and conditions</p>
                  </div>
                </div>
            </Card>

             <Card>
              <div className='w-[200px] p-2 min-h-[100px]  flex flex-col gap-3'>

                  <div className='w-fit p-1 bg-slate-700 rounded-full'>
                    <IoWalletOutline className='text-md'/>
                  </div>
                  <div className='w-full flex flex-col gap-1'>
                    <h3 className='text-[14px] font-medium'>Algorithmic Trading</h3>
                    <p className='text-[10px] font-extralight'>API for crossplatform trading robots</p>
                  </div>
                </div>
            </Card>
            </div>
          {/* middle content */}
    
                <div className=' h-[70%] my-auto w-[200px] p-4 flex flex-col items-center justify-center'>

                  <div className='w-fit h-fit p-1 bg-green-600 rounded-full'>
                    <LuCircleGauge className='text-2xl'/>
                  </div>
                  <div className='w-0 h-full border-l border-green-400'></div>
                  <div className='w-fit h-fit p-1 bg-slate-600 rounded-full z-[60] opacity-60 cursor-pointer'>
                    <LuChevronDown className='text-xl '/>
                  </div>
                  
                </div>
            
          {/* rightside content */}
             <div className='flex flex-col gap-2 z-[40]'>
           <Card>
              <div className='w-[200px] min-h-[100px] p-2 flex flex-col gap-3'>

                  <div className='w-fit p-1 bg-slate-700 rounded-full'>
                    <IoWalletOutline className='text-md'/>
                  </div>
                  <div className='w-full flex flex-col gap-1'>
                    <h3 className='text-[14px] font-medium'>Secure Wallets</h3>
                    <p className='text-[10px] font-extralight'>Keep your digital assets in user wallets</p>
                  </div>
                </div>
            </Card>

            

             <Card>
              <div className='w-[200px] min-h-[100px] p-2 flex flex-col gap-3'>

                  <div className='w-fit p-1 bg-slate-700 rounded-full'>
                    <TbBracketsAngle className='text-md'/>
                  </div>
                  <div className='w-full flex flex-col gap-1'>
                    <h3 className='text-[14px] font-medium'>Payment Options</h3>
                    <p className='text-[10px] font-extralight'>More than 10 ways to deposit to an account</p>
                  </div>
                </div>
            </Card>
            </div>

            {/* effect */}

            <div className="absolute z-[50] bottom-0 left-0 w-full  h-[80%] bg-gradient-to-b from-transparent via-[#06062a]/50  to-[#06062a]  "></div>

           
        </div>
    </div>
  )
}

export default FeaturesContent
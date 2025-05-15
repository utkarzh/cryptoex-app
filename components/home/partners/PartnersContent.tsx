import Card from '@/components/common/Card'
import Image from 'next/image'
import React from 'react'
import { BiLogoPlayStore } from 'react-icons/bi'
import { IoLogoApple } from 'react-icons/io'


const PartnersContent = () => {
  return (
    <div className='w-full h-fit py-20 flex justify-center items-center'>
        {/* container */}
        <div className=' flex gap-6 items-center'>
            {/* image and effect */}
            <div className='w-full'>
                <div className=' w-[460px] h-[460px] relative flex justify-center items-center p-6'>
                <div className='  border-2 border-[#161735] bg-transparent rounded-full w-full h-full flex justify-center items-center'>
                    <div className='w-[90%] h-[90%] bg-[#161735] rounded-full flex justify-center items-center '>
                        <div className='w-[80%] h-[80%] bg-green-600 rounded-full'>
                            <Image width={1000} height={1000} src="/images/computermobile.png" alt="" className='w-[500px] pl-2 h-auto absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2' />
                        </div>
                    </div>
                </div>
                </div>
            </div>
            {/* text content */}
            <div className='w-full flex flex-col gap-4'>
                <div className='w-full flex flex-col gap-1'>
                    <h3 className=' text-nowrap text-[22px] font-medium'>Trade seamlessly across devices</h3>
                    <p className='text-[12px] font-extralight'>Download our mobile app for effortless crypto trading!</p>
                </div>
                <div className='w-full h-full  flex gap-2 '>
                    {/* qr code */}
                    <div className='   flex items-center justify-center '>
                          <Card>
                       <Image width={100} height={100} src="/images/testqr.png" alt="" className='w-20 h-20 rounded-md'/>
                    </Card>
                    </div>

                    <div className='h-full flex flex-col justify-between gap-2 '>
                        {/*  android store*/}

                        <div className='w-full h-full flex items-center text-center rounded-md p-2 px-3 bg-[#161735]'> 
                            <div className=' w-full h-full flex gap-2 items-center'>
                                {/* logo */}
                                <BiLogoPlayStore className='text-lg'/>
                                {/* title and subtitle */}
                                <div className='flex flex-col items-start'>
                                    <p className='text-[8px] font-extralight text-nowrap'>GET IT ON</p>
                                    <h4 className='text-[10px] font-medium text-nowrap'>Google Play</h4>
                                </div>
                                <div>

                                </div>
                            </div>
                        </div>

                        {/* apple store */}
                       
                        <div className='w-full h-full flex items-center text-center'> 
                          
                           <div className='w-full h-full flex items-center text-center gap-2 rounded-md p-2 px-3 bg-[#161735]'> 
                                {/* logo */}
                                <IoLogoApple className='text-lg'/>
                                {/* title and subtitle */}
                                <div className='flex flex-col items-start'>
                                    <p className='text-[8px] font-extralight text-nowrap'>Download on the</p>
                                    <h4 className='text-[10px] font-medium text-nowrap'>App Store</h4>
                                </div>
                                <div>
                                    
                                </div>
                            </div>
                      
                        </div>

                        
                    </div>

                    <div>

                </div>
            </div>
        </div>

    </div>
    </div>
  )
}

export default PartnersContent
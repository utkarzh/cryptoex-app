import Image from 'next/image'
import React, { FC } from 'react'

type Props = {
    coinImgUrl: string,
    cointTitle: string,
    coinName: string
}


const CoinCard:FC<Props> = ({
    coinImgUrl, cointTitle, coinName
}) => {
  return (
    <div className='flex gap-1 justify-center items-center w-fit text-nowrap mx-2 '>
                <Image width={100} height={100} src={coinImgUrl} alt="" className='w-6 h-6 p-[2px] rounded-full bg-white' />
                <div className='flex flex-col items-start  '>
                    <span className='uppercase font-medium text-[12px]'>
                        {cointTitle}
                    </span>
                    <span className='text-[10px] capitalize'>
                        {coinName}
                    </span>
                </div>
            </div>
  )
}

export default CoinCard
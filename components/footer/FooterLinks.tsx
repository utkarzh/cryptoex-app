import Link from 'next/link'
import React from 'react'


const FooterLinks = () => {

    const serviceLinks = [
        {
            title: "Terms of Use",
            url: "#"
        },
        {
            title: "Privacy Policy",
            url: "#"
        },
        {
            title: "Wallet Status",
            url: "#"
        },
        {
            title: "Announcements",
            url: "#"
        },
        {
            title: "Media",
            url: "#"
        },
    ]

    const legalisationLinks = [
        {
            title: "Fees",
            url: "#"
        },
        {
            title: "Legalities",
            url: "#"
        },
        {
            title: "Legalities",
            url: "#"
        },
        {
            title: "Protect yourself online",
            url: "#"
        },
        {
            title: "Verification",
            url: "#"
        },

    ]
  return (

    <div className='w-full flex flex-col gap-4 justify-between'>
    <div className='w-full flex gap-16 '>

        {/* services */}
        <div className='flex flex-col gap-2'>
            <h3 className='text-[14px] font-medium'>Services</h3>
            <div className='flex flex-col gap-1'>
                {
                    serviceLinks.map((val, index) =>  <Link href={`${val.url}`} className='text-[13px] font-extralight' key={index}>{val.title}</Link> )
                }
                
            </div>
        </div>

        {/* Legalisation */}
         <div className='flex flex-col gap-2'>
            <h3 className='text-[14px] font-medium'>Legalisation</h3>
            <div className='flex flex-col gap-1'>
                {
                    legalisationLinks.map((val, index) =>  <Link href={`${val.url}`} className='text-[13px] font-extralight text-nowrap' key={index}>{val.title}</Link> )
                }
                
            </div>
        </div>
    </div>

    {/* rights */}
    <p className='text-[10px] font-normal text-slate-400/70'>
        © 2025 INDOEX All rights reserved.
    </p>
    </div>
  )
}

export default FooterLinks
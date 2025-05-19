import React from 'react'
import Benefits from './Benefits'
import Marketing from './Marketing'
import GetStartedHeading from './GetStartedHeading'


const GetStarted = () => {
  return (
    <div className='w-full h-full  '>
        <GetStartedHeading/>
        {/* card part */}
        <div className='w-full flex justify-center items-center pt-20 pb-30 '>
          <Marketing/>
        </div>
        {/* benifits */}
        <div className='w-full'>
            <Benefits/>
        </div>
    </div>
  )
}

export default GetStarted
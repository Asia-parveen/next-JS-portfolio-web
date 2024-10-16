import React from 'react'

interface Props {
    headingPrimary: string;
    headingSub: string;
}

const Heading = ({headingPrimary,headingSub}:Props) => {
  return (
    <div className='text-center p-2'>
        <h1 className='font-semibold text-[22px] md:text-[28px] text-yellow-500'>{headingSub}</h1>
        <h1 className=' font-semibold text-[25px] sm:text-[30px] md:text-[35px] text-white '>{headingPrimary}</h1>
    </div>
  )
}

export default Heading
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
interface Props {
    image: string;
    title: string;
    descrpption: string;
}

const ServiceCard = ({image,title,descrpption}:Props) => {
  return (
    <div className='shadow-md hover:scale-110 transition-all duration-500 bg-black p-8 rounded-lg'>
        <Image src={image} alt={title} width={80} height={80} className='mt-[2rem] mb-[2rem] mx-auto'/>
        <div className='text-center'>
            {/* title */}
            <h1 className='font-semibold text-[26px] text-white'>{title}</h1>
            <p className='mt-[0.5rem] text-white text-opacity-60'>{descrpption}</p>
            <button className='px-5 py-2 bg-[#AF3cFF] mt-[2rem] text-white rounded-lg'><Link href="https://github.com/Asia-parveen">Learn More</Link></button>
        </div>
    </div>
  )
}

export default ServiceCard;

import React from 'react'
import { BiEnvelope, BiMapPin, BiPhone } from 'react-icons/bi';
import Link from "next/link";

const Footer = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-black' >
        {/* logo part */}
      <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] border-b=[1.4px] pb-5 border-gray-600 border-opacity-40'>
        <div>
        <div className="text-[25px] md:text-[35px]  font-semibold text-white">
          As<span className="text-[#E487FF]">i</span>a Pa
          <span className="text-[#E487FF]">rv</span>een
        </div>
        <h1 className='text-[14px] mt-[0.5rem] text-white opacity-70'>Crafted with passion and dedication. &quot;Empowering ideas, one line of code at a time.&quot;</h1>

        <p className='mt-[1.3rem] text-yellow-400 underline font-semibold'>beautyhealthytips177@gmail.com</p>
        </div> 
         {/* links part */}
         <div className='md:mx-auto'>
          <h1 className='text-white font-semibold mb-[1.4rem] text-[17px] '>Quick Links</h1>
          <p className='text-white text-[15px] opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300'><Link href="/about">About</Link></p>
          <p className='text-white text-[15px] opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300'><Link href="#Services">Services</Link></p>
       
          <p className='text-white text-[15px] opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300'><Link href="#Project">Projects</Link></p>
          <p className='text-white text-[15px] opacity-80 mb-[1rem] cursor-pointer hover:text-yellow-300'><Link href="#Contact">Contacts</Link></p>
         </div>
         <div className='lg:mx-auto'>
         <h1 className='text-white font-semibold mb-[1.4rem] text-[17px] '>Address</h1>
         <div className='flex text-center mt-[1rem] space-x-2'>
          <BiMapPin className='w-[1rem] h-[1rem] text-yellow-400'/>
          <p className='text-[17px] font-normal text-white opacity-75'>Karachi, Pakistan</p>
         </div>
         <div className='flex text-center mt-[1rem] space-x-2'>
          <BiEnvelope className='w-[1rem] h-[1rem] text-yellow-400'/>
          <p className='text-[17px] font-normal text-white opacity-75'>beautyhealthytips@gmail.com</p>
         </div>
         <div className='flex text-center mt-[1rem] space-x-2'>
          <BiPhone className='w-[1rem] h-[1rem] text-yellow-400'/>
          <p className='text-[17px] font-normal text-white opacity-75'>+92 305 9989157</p>
         </div>
         </div>
         
      </div>
      <div className='mt-[1.4rem] w-[80%] mx-auto text-white opacity-70'>
        &#169; Asia Parveen copyright webdev worries 2024
      </div>
     
    </div>
  )
}

export default Footer;

import React from 'react'
import Heading from '../../Healper/Heading';

const Contact = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'id="Contact">
    <Heading headingPrimary='Get In Touch With Us' headingSub='Contact Us'/>
    <div className=' w-[80%] grid grid-cols-1 md:grid-cols-2 gap-[2rem] mt-[4rem] items-center mx-auto'>
        {/* info content section */}
        <div>
          <p className='text-[17px] text-white opacity-75'>Get In Touch</p>
          <h1 className='mt-[0.6rem] p-2 text-white sm:p-0 leadind-[3.5rem] md:text-[28px] lg:text-[30px] text-[27px] xl:text-[33px] font-semibold'>
            Elevate your <span className='text-yellow-600'>Brand</span> to excellence!
            </h1>
            <p className='text-[15px] text-white mt-[1rem] opacity-75'></p>
            <h1 className='mt-[2rem] mb-[2rem] text-[30px] text-yellow-500 underline font-semibold'>+92 305 9989157</h1>

        </div>
          {/* form content section */}
          <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center'>
                <input 
                type="text" 
                placeholder='Name' 
                className='py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4'/>
                 <input 
                type="email" 
                placeholder='Email' 
                className='py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4'/>
            </div>
            <input type="text" 
            placeholder='Subject' 
            className='py-[0.7rem] mt-[1.5rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4'
            />
            <textarea 
            rows={4} 
            placeholder='Message'   
            className='py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4'>
            </textarea>
            <button className='py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-gray-600 hover:bg-gray-500 font-semibold rounded-md px-4'>Submit</button>

          </div>
    </div>
    </div>
  )
}

export default Contact;

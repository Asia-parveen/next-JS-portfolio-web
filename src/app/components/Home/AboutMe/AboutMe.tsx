import React from 'react'
import Heading from '../../Healper/Heading';
import AboutInfoBox from "./AboutInfoBox";
import Image from "next/image"

const AboutMe = () => {
  return (
    <div className='mt-[5rem] mb-[3rem]'id="About">
        <Heading headingPrimary="Driven to build innovative web solutions." headingSub="About Me"/>

        <div className='w-[80%] mt-[5rem] md:mt-[3rem] mx-auto grid grid-cols-1 xl:grid-cols-2 items-center gap-[4rem]'>
            {/* here is my personal information */}
        <div>
        <h1 className='mb-[1.4rem] text-[27px] font-semibold text-yellow-400'>Personal Information</h1>
        <AboutInfoBox 
        text1="First Name : Asia" 
        text2="Last Name : Parveen"
        />
         <AboutInfoBox 
        text1="Qualification : Bsc." 
        text2="Learn : Programming"
        />
         <AboutInfoBox 
        text1="Address : Pakistan" 
        text2=" Experts : Frameworks"
        />
         <AboutInfoBox 
        text1="Language : English/Urdu" 
        text2="Freelance : Available"
        />
         <AboutInfoBox 
        text1="City : Karachi" 
        text2="Skills : Web Developer "
        />
      </div>
      {/* image of personal info section */}
      <Image data-aos="zoom-in" data-aos-anchor-placement="top-center" src="/images/comp2.jpg" 
      alt="About img" 
      width={400}
      height={400}
      className='mx-auto rounded-xl' />
    </div>
    </div>
  )
}

export default AboutMe;

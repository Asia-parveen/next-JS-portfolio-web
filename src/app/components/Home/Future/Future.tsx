import React from 'react'
import Heading from '../../Healper/Heading';
import FutureCard from './FutureCard';

const Future = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'>
      <Heading headingPrimary='Where I See Myself' headingSub='Future Goals'/>
      <div className='w-[80%] mx-auto grid grid-cols-1 gap-[2rem] lg:gap-0 sm:grid-cols-2 lg:grid-cols-3 items-center pt-[4rem] md:pt-[7rem]'>
        <div data-aos="fade-right" data-aos-anchor-placement="top-center" >
           <FutureCard 
           title="Skill Enhancement" 
           subtitle="Continuous Learning" 
          hours= "6 hours"
           num= "1"
           bg="bg-red-700"
           />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200">
           <FutureCard 
           title="Project Development" 
           subtitle="Innovative Solutions" 
          hours= "7 hours"
           num= "2"
           bg="bg-yellow-700"
           />
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="400">
           <FutureCard 
           title="Community Contribution" 
           subtitle="Open Source Involvement" 
          hours= "5 hours"
          num= "3"
           bg="bg-red-400"
           />
        </div>
      </div>
    </div>
  )
}

export default Future

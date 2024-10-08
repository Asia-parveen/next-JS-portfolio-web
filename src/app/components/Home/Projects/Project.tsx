import React from 'react'
import Heading from '../../Healper/Heading';
import Image from 'next/image';



const Project = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'id="Project">
      <Heading headingPrimary='Discover My Projects' headingSub='Project'/>
      <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] rounded-lg'>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" >
        <a href="https://quiz-app-gold-psi-15.vercel.app/" target="_blank" rel="noopener noreferrer">
          {/* image */}
          <div  className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] rounded-lg'>
            <Image 
              src="/images/3.JPG"
              alt="quizapp"
              width={300}
              height={300}
              className='object-contain w-[100%] h-[100%] ' 
            />
          </div>
          </a>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200" >
        <a href="https://countdown-timer-next-js-rho.vercel.app/" target="_blank" rel="noopener noreferrer">
          {/* image */}
          <div className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] rounded-lg'>
            <Image 
              src="/images/2.JPG"
              alt="countdowntimmer"
              width={300}
              height={300}
              className='object-contain w-[100%] h-[100%] ' 
             
            />
          </div>
          </a>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="400">
        <a href="https://asia-parveen.github.io/post-Application/" target="_blank" rel="noopener noreferrer">
          {/* image */}
          <div className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] rounded-lg'>
            <Image 
              src="/images/4.JPG"
              alt="postapp"
              width={300}
              height={300}
              className='object-contain w-[100%] h-[100%] ' 
            />
          </div>
          </a>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="600">
        <a href="https://asia-parveen.github.io/calculator-made-project/" target="_blank" rel="noopener noreferrer">
          {/* image */}
          <div className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] rounded-lg'>
            <Image 
              src="/images/1.jpg"
              alt="calculator"
              width={300}
              height={300}
              className='object-contain w-[100%] h-[100%] ' 
            />
          </div>
          </a>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="800">
        <a href="https://asia-parveen.github.io/bulb-on-off-projrct/" target="_blank" rel="noopener noreferrer">
          {/* image */}
          <div className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] rounded-lg'>
            <Image 
              src="/images/6.JPG"
              alt="bulb"
              width={300}
              height={300}
              className='object-contain w-[100%] h-[100%] ' 
            />
          </div>
          </a>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="1000">
        <a href="https://asia-parveen.github.io/signup-login-form/" target="_blank" rel="noopener noreferrer">
          {/* image */}
          <div className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] rounded-lg'>
            <Image 
              src="/images/5.JPG"
              alt="signupform"
              width={300}
              height={300}
              className='object-contain w-[100%] h-[100%] ' 
            />
          </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project;


// const Project = () => {
//   return (
//     <div className='pt-[5rem] pb-[3rem]'>
//         <Heading headingPrimary='Discover My Projects' headingSub='Project'/>
//         <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
//             <div>
//                 {/* image */}
//                 <div className='transform cursor-pointer hover:translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
//                     <Image src="/images/cal2.png"
//                     alt="calcultor"
//                     width={300}
//                     height={300}
//                     className='object-contain w-[100%] h-[100%]  />
                    
                   
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Project;
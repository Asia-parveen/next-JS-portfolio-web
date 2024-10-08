import React from 'react';
import { BiCheckCircle } from "react-icons/bi";
import Link from "next/link";

interface Props {
  title: string;
  subtitle: string;
  hours: string;
  bg: string;
  num: string;
}

const FutureCard = ({ title, subtitle, hours, bg, num }: Props) => {
  const scaleUp = num === '2' ? "scale-100 z-[10] lg:scale-110" : "scale-100";

  return (
    <div className={`${scaleUp} text-center relative rounded-lg bg-gray-900`}>
      <div className={`p-6 rounded-t-lg ${bg}`}>
        <h1 className='text-white text-[25px]'>{title}</h1>
        <p className='text-[16px] text-[#d7d7d7]'>
           Future {title} plan and more<span className='text-blue-600'>grow</span>{" "}
        </p>
        <div className='flex justify-center items-end mt-[1rem] space-x-1'>
          <h1 className='text-[35px] font-semibold text-[#212529]'>{hours}</h1>
          <p className='text-blue-950'>work practice</p>
        </div>
      </div>
      <div className='p-6 bg-blue-900'>
        <div className='flex items-center space-x-3'>
          <BiCheckCircle className='w-[1.4rem] h-[1.4rem] text-yellow-400' />
          <p className='text-[17px] text-white opacity-80'>Next.js website</p>
        </div>
        <div className='flex items-center mt-[1rem] mb-[1rem] space-x-3'>
          <BiCheckCircle className='w-[1.4rem] h-[1.4rem] text-yellow-400' />
          <p className='text-[17px] text-white opacity-80'>React.js website</p>
        </div>
        <div className='flex items-center space-x-3'>
          <BiCheckCircle className='w-[1.4rem] h-[1.4rem] text-yellow-400' />
          <p className='text-[17px] text-white opacity-80'>Full Stack website</p>
        </div>
        <div className='flex items-center mt-[1rem] mb-[1rem] space-x-3'>
          <BiCheckCircle className='w-[1.4rem] h-[1.4rem] text-yellow-400' />
          <p className='text-[17px] text-white opacity-80'>Node.js website</p>
        </div>
        <div className='flex items-center space-x-3'>
          <BiCheckCircle className='w-[1.4rem] h-[1.4rem] text-yellow-400' />
          <p className='text-[17px] text-white opacity-80'>MERN website</p>
        </div>
      </div>
     
      <button className={`p-8 py-4 ${bg} text-white block w-full hover:bg-red-800 transition-all duration-300`}>
        <Link href="https://github.com/Asia-parveen">Read More</Link>
       
      </button> 
    </div>
  );
}

export default FutureCard;




// import React from 'react'
// import { BiCheckCircle } from "react-icons/bi";

// interface Props {
//     title: string;
//     subtitle: string;
//     hours: string;
//     bg: string;
//     num: string;
// }


// const FutureCard = ({title,subtitle,hours,bg,num}: Props) => {
//     const scaleUp = num == '2' ? "scale-100 z-[10] lg: scale-110" : "scale-100"
//   return (
//     <div className='{`${scaleUp} text-center relative rounded-lg bg-gray-900}'>
//         <div className={`p-6 rounded-t-lg ${bg}`}>
//             <h1 className='text-white text-[25px]'>{title}</h1>
//             <p className='text-[16px] text-[#d7d7d7]'>My future {title} plan and more<span className='text-blue-600'>grow</span>{" "}</p>
//             <div className='flex justify-center items-end mt-[1rem] space-x-1'>
//                 <h1 className='text-[35px] font-semibold text-[#212529] '>{hours}</h1>
//                 <p className='text-white'>Give Best</p>
//             </div>
//              <div className='p-6 bg-purple-900'>
//             <div className='flex items-center space-x-3'>
//                 <BiCheckCircle className='w-[1.4rem] h-[1.4rem] text-yellow-400'/>
//                 <p className='text-[17px] text-white opacity-80'>Next js website</p>
//             </div>
//         </div> 
//          <div className='p-6 bg-purple-900'>
//             <div className='flex items-center space-x-3'>
//                 <BiCheckCircle className='w-[1.4rem] h-[1.4rem] text-yellow-400'/>
//                 <p className='text-[17px] text-white opacity-80'>Next js website</p>
//             </div> 
//             <div className='flex items-center mt-[1rem] mb-[1rem] space-x-3'>
//                 <BiCheckCircle className='w-[1.4rem] h-[1.4rem] text-yellow-400'/>
//                 <p className='text-[17px] text-white opacity-80'>React js website</p>
//             </div>
//             <div className='flex items-center space-x-3'>
//                 <BiCheckCircle className='w-[1.4rem] h-[1.4rem] text-yellow-400'/>
//                 <p className='text-[17px] text-white opacity-80'>Full Stack website</p>
//             </div>
//             <div className='flex items-center mt-[1rem] mb-[1rem]  space-x-3'>
//                 <BiCheckCircle className='w-[1.4rem] h-[1.4rem] text-yellow-400'/>
//                 <p className='text-[17px] text-white opacity-80'>Mern website</p>
//             </div>
//             <div className='flex items-center space-x-3'>
//                 <BiCheckCircle className='w-[1.4rem] h-[1.4rem] text-yellow-400'/>
//                 <p className='text-[17px] text-white opacity-80'>Nextjs website</p>
//             </div>
//             {/* <button className={`mt-[1.5rem] p-8 py-4 ${bg} text-white block w-full hover:bg-red-800 transition-all duration-300`}>Read More</button> 
           
//         </div>
//          <button className={`mt-[1.5rem] p-8 py-4 ${bg} text-white block w-full hover:bg-red-800 transition-all duration-300`}>Read More</button> 
      
//     </div>
//   )
// }

// export default FutureCard;

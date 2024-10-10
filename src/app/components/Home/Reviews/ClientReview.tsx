import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

interface Props {
  image: string;
  name: string;
  role: string;
}

const ClientReview = ({ image, name, role }: Props) => {
  return (
    <div className="flex flex-col text-center justify-center">
      <Image
        src={image}
        alt={name}
        width={120}
        height={120}
        objectFit="contain"
        className="mx-auto mb-[2rem] rounded-full"
      />
      <div className="flex items-center mx-auto">
        <FaStar className="w-[2rem] h-[2rem] text-yellow-500" />
        <FaStar className="w-[2rem] h-[2rem] text-yellow-500" />
        <FaStar className="w-[2rem] h-[2rem] text-yellow-500" />
        <FaStar className="w-[2rem] h-[2rem] text-yellow-500" />
        <FaStar className="w-[2rem] h-[2rem] text-yellow-500" />
      </div>
      <h1 className="text-[25px] text-white mt-[1rem]">{name}</h1>
      <p className="text-[18px] text-white opacity-75 mt-[0.5rem] mb-[1.4rem]">
        {role}
      </p>
      <p className=" text-[16px] text-white opacity-50 w-[90%] md:w-[50%] mx-auto">
        &quot;Asia&apos;s website design is modern, user-friendly, and perfectly
        tailored to my business needs. The seamless functionality and attention
        to detail exceeded my expectations!&quot;
      </p>
    </div>
  );
};

export default ClientReview;

// import React from 'react'
// import Image from "next/image";
// import { FaStar } from 'react-icons/fa';
// interface Props {
//     image: string;
//     name: string;
//     role: string;
// }

// const ClientReview = ({image,name,role}:Props) => {
//   return (
//     <div className='flex flex-col text-center justify-center'>
//       <Image src={image} alt={name} width={120} height={120}  objectFit='contain' className='mx-auto mb-[2rem] rounded-full'/>
//       <div className='flex items-center mx-auto'>
//         <FaStar className='w-[2rem] h-[2rem] text-yellow-500'/>
//         <FaStar className='w-[2rem] h-[2rem] text-yellow-500'/>
//         <FaStar className='w-[2rem] h-[2rem] text-yellow-500'/>
//         <FaStar className='w-[2rem] h-[2rem] text-yellow-500'/>
//         <FaStar className='w-[2rem] h-[2rem] text-yellow-500'/>
//       </div>
//       <h1 className='text-[25px] text-white mt-[1rem] '>{name}</h1>
//       <p className='text-[18px] text-white opacity-75 mt-[0.5rem] mb-[1.4rem]'>{role}</p>
//       <p className=' text-[16px] text-white opacity-50 w-[90%] md:w-[50%] mx-auto' >"Asia's website design is modern, user-friendly, and perfectly tailored to my business needs. The seamless functionality and attention to detail exceeded my expectations!"</p>

//     </div>
//   )
// }

// export default ClientReview;

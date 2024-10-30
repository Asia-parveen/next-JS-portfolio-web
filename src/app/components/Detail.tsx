import React from "react";
import Image from "next/image";
import Link from "next/link";



const Detail = () => {
  return (
    <div className="pt-[50px]">
      <div className="py-[90px]">
        <h1 className="text-white mx-[42%] sm:text-[16px] md:text-[20px] lg:text-[24px]xl:text-[26px]  font-bold font-serif">
          ABOUT ME
        </h1>
        <p className=" text-white pt-[20px] mx-[41%] font-serif tracking-tight md:tracking-wide sm:text-[12px]  md:text-[13px] lg:text-[16px] xl:text-[18px]">
          
          I T ' S A - M E , A S I A
        </p>
      </div>
      <div className="bg-white flex flex-col justify-center text-center px-auto ">
        <h1 className="text-2xl font-bold pt-10 text-center text-[#AF3CFF] ">My Background</h1>
        <p className="text-[12px] pt-5 justify-center items-center px-[5%] sm:px-[10%] md:px-[28%] text-justify font-bold ">
          I hold a strong academic background with a Bachelor’s degree in
          Chemistry and Microbiology, alongside foundational education in
          science, having completed both my matriculation and intermediate
          studies in the same field. This journey has equipped me with a solid
          understanding of scientific concepts and a keen analytical approach.</p>
          
         <p className="text-[12px] pt-5 justify-center items-center px-[5%] sm:px-[10%] md:px-[28%] text-justify font-bold "> In addition to my scientific expertise, I am well-versed in computer
          applications, particularly in MS Office, which allows me to handle
          tasks related to data management, documentation, and presentation with
          efficiency and precision.</p>
          <p className="text-[12px] pt-5 justify-center items-center px-[5%] sm:px-[10%] md:px-[28%] text-justify font-bold ">I have also completed a professional
          English language course at PACC, further enhancing my communication
          skills. This has provided me with a strong command of both written and
          verbal English, enabling effective communication in professional
          settings.</p>
          <p className="text-[12px] pt-5 justify-center items-center px-[5%] sm:px-[10%] md:px-[28%] text-justify font-bold ">With a diverse educational background and a passion
          for continuous growth, I am eager to apply my skills in roles that
          demand adaptability, attention to detail, and effective communication.
          My interdisciplinary knowledge, coupled with practical skills, makes
          me a versatile professional ready to contribute to various fields.
        </p>
      </div>

      <div className="bg-white flex flex-col justify-center text-center px-8 pb-[50px] ">
        <h1 className="text-2xl font-bold pt-10 text-center text-[#AF3CFF]">Current Training & Skill Development</h1>

        <p className="text-[12px] pt-5 justify-center items-center px-[5%] sm:px-[10%] md:px-[28%] text-justify font-bold">
            <span className="text-yellow-500 font-semibold text-lg">Web & Mobile App Development</span><br></br>

        Currently enrolled in a comprehensive Web and Mobile App Development course at <span className="text-[#AF3CFF] font-semibold ">Syalni Mass IT Training Center</span >
         to deepen my expertise in front-end and back-end technologies.</p>
          <p className="text-[12px] pt-5 justify-center items-center px-[5%] sm:px-[10%] md:px-[28%] text-justify font-bold "><span className="text-yellow-500 font-semibold text-lg  ">Web 3.0, Artificial Intelligence(AI), and Metaverse</span><br></br>
          Pursuing an advanced course on Web 3.0, Artificial Intelligence, and the Metaverse at<span className="text-[#AF3CFF] font-semibold"> Grosvenor House </span>to explore and understand cutting-edge technologies shaping the future of digital experiences.
          </p>
      </div>

      <div className="py-[9px] ">
      <h1 className="text-3xl font-bold pt-20 text-center text-yellow-600 ">My Latest Projects</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-9 pt-20 pb-20">
       <div className="flex justify-center">
       <Link href="https://resume-smoky-six.vercel.app/" target="_blank">
            <Image src="/images/cv2.png" alt="website" width={350} height={900}
            className="rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[300px] xl:max-w-[300px] h-auto" />
            </Link>
           
           
        </div>
        <div  className="flex justify-center">
        <Link href="https://next-js-css-website.vercel.app/" target="_blank">
           <Image src="/images/css.png" alt="website" width={380} height={900}
            className="rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[300px] xl:max-w-[300px] h-auto" 
            />
             </Link>
        </div>
        <div  className="flex justify-center">
        <Link href="https://asia-parveen.github.io/barber_project" target="_blank">
            <Image src="/images/lastproject.png" alt="website" width={350} height={900}
            className="rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[300px] xl:max-w-[300px] h-auto"
            />
             </Link>
        </div>

      </div>
        

       
      
       
          
       
      
      
    </div>
  );
};

export default Detail;

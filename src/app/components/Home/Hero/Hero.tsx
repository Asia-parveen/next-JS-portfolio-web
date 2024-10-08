import Image from "next/image";

import React from "react";

const Hero = () => {
  return (
    <div className="h-[87vh] flex justify-center flex-col">
      <div className="w-[80%] mx-auto  grid grid-cols-2 lg:grid-cols-5 items-center gap-[5rem]">
        <div className="col-span-2 hidden sm:block">
          <div data-aos="zoom-in"
          className="mx-auto w-[300px] h-[300px] md:w-[300px] md:h-[300px]  xl:w-[380px] xl:h-[380px]">
            <Image
              src="/images/avtor1.jpg"
              alt="Hero"
              width={300}
              height={300}
              className="w-[100%] h-[100%] rounded-2xl "
            />
          </div>
        </div>
        <div 
        className="col-span-3">
          <h1 data-aos="fade-right" data-aos-delay="400" className="text-[20px] uppercase xl:text-[26px] text-yellow-500 font-semibold">
            Hello i'm
          </h1>
          <h1 data-aos="fade-left" data-aos-delay="600" className="text-[35px] lg:text-[45px] xl:text-[60px] font-bold text-white">
            Asia <span className="text-[#AF3cFF]">Parveen!</span>
          </h1>
          <h1 data-aos="fade-right" data-aos-delay="800" className="text-[25px] lg:text-[28px] xl:text-[35px] text-white text-opacity-80">
            Software Developer
          </h1>
          <p data-aos="fade-left" data-aos-delay="1000"  className="text-[16px] xl:text-[18px] text-white text-opacity-60 mt-[1.5rem]">
            I am a Software Developer with a focus on web and mobile
            applications, currently expanding my expertise in Artificial
            Intelligence and the Metaverse.
          </p>
          <button data-aos="zoom-in" data-aos-delay="1200" className=" group  mt-[2rem] relative h-12 w-48 overflow-hidden rounded-full bg-[#E487FF] text-lg shadow group">
            <span className="absolute inset-0 w-3 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>

            <span className="relative flex items-center justify-center space-x-3 text-white font-semibold group-hover:text-[#AF3cFF] transition-colors duration-300">
              <span><a href="#About">About Me</a></span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

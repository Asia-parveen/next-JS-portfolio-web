import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className='pt-[50px]' >
      <div className="py-[70px]">
        <h1 className="text-white mx-[43%] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[22px] font-semibold font-serif">
          CONTACT  ME
        </h1>
        <p className="text-white pt-[20px] mx-[41%] font-serif tracking-[0.3em] text-[10px] md:text-[12px] lg:text-[14px] xl:text-[18px]">
          SAY HELLO TO ME
        </p>
      </div>
      <div className='pb-[70px]' >
        <p className="text-yellow-500 mx-[41%] pb-[50px] text-center text-2xl font-semibold">Contact me</p>
        <div className='pb-[70px]'>
        <ContactForm/>
        <div className='px-[10px] pt-[60px] text-center'>
          <p className='text-[17px] text-white opacity-75'>Get In Touch</p>
          <h1 className='mt-[0.6rem] p-2 text-white sm:p-0 leadind-[3.5rem] md:text-[28px] lg:text-[30px] text-[27px] xl:text-[33px] font-semibold'>
            Elevate your <span className='text-yellow-600'>Brand</span> to excellence!
            </h1>
            <p className='text-[15px] text-white mt-[1rem] opacity-75'></p>
            <h1 className='mt-[2rem] text-[20px] text-yellow-500  font-semibold'>beautyhealthytips177@gmail.com</h1>

        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

 
 
 // import React from 'react'
// import ContactForm from '../components/ContactForm';

// const Contact = () => {
//   return (
//     <div className="pt-[50px]">
//     <div className="py-[90px]">
//       <h1 className="text-white mx-[43%] sm:text-[16px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-semibold font-serif">
//       CONTACT  ME
//       </h1>
//       <p className=" text-white pt-[20px] mx-[41%] font-serif tracking-[0.3em] sm:text-[12px]  md:text-[13px] lg:text-[16px] xl:text-[18px]">
        
//       SAY HELLO TO ME
//       </p>
//     </div>
//     <div>
//         <p>Contact me</p>
//         <ContactForm/>
        
//     </div>



//     </div>
//   )
// }

// export default Contact;
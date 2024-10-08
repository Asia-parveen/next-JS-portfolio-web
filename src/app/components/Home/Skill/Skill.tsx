import React from 'react'
import Heading from "../../Healper/Heading";
import SkillCard from './SkillCard';

const Skill = () => {
  return (
    <div className='pt-[5rem] pb-[3rem]'id="Skills">
        <Heading headingPrimary='Explor My skills' headingSub='My skills'/>
        <div className='grid w-[80%] mt-[5rem] mx-auto grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center'>
            {/* put my skill card here */}
            <div data-aos="flip-left" data-aos-anchor-placement="top-center">
               <SkillCard image="/images/tailwind.png" percent="90" title="Tailwind css"/>
            </div>
            <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="200">
               <SkillCard image="/images/js.png" percent="90" title="JavaScript"/>
            </div>
            <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="400">
               <SkillCard image="/images/react.png" percent="80" title="React js"/>
            </div>
            <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="600">
               <SkillCard image="/images/nexjs.png" percent="70" title="next js"/>
            </div>
            <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="800">
               <SkillCard image="/images/html1.png" percent="95" title="HTML"/>
            </div>
            <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="1000">
               <SkillCard image="/images/css2.png" percent="90" title="CSS"/>
            </div>
            <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="1200">
               <SkillCard image="/images/bootst.png" percent="90" title="Bootstrep"/>
            </div>
            <div data-aos="flip-left" data-aos-anchor-placement="top-center" data-aos-delay="1400">
               <SkillCard image="/images/typ1.png" percent="90" title="TypeScript"/>
            </div>
        </div>
    </div>
  )
}

export default Skill
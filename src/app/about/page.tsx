import React from 'react'
import Detail from '../components/Detail';
import AboutMe from '../components/Home/AboutMe/AboutMe';
import Skill from '../components/Home/Skill/Skill';

const page = () => {
  return (
    <div >
        <Detail/>
        <AboutMe/>
        <div className='pb-[70px]'>
        <Skill/>
        </div>
    </div>
  )
}

export default page;
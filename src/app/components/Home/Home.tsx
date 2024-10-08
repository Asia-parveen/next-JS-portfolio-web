"use client";

import React, { useEffect } from 'react'
import Hero from "./Hero/Hero";
import AboutMe from "./AboutMe/AboutMe";
import Service from './Services/Service';
import Skill from "./Skill/Skill";
import Project from "./Projects/Project";
import Future from "./Future/Future";
import Review from './Reviews/Review';
import Contact from './Contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import ('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',

      })
    }
    initAOS();

  },[]);
  return (
    <div className='overflow-hidden'>
      <Hero/>
      <AboutMe/>
      <Service/>
      <Skill/>
      <Project/>
      <Future/>
      <Review/>
      <Contact/>
     
    </div>
  )
}

export default Home;
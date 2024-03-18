"use client";
import React from 'react'
import './style.css'

import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { BackgroundBeams } from '@/components/ui/background-beams';
function aboutus() {
  return (

   <main>
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
<h1 className=' about text-5xl text-bold text-white'>About Us</h1>
<p className=' text text-white '>Skill Chaat is your go-to destination for mastering 
web development. Dive into our featured courses 
 and explore the <br /> fundamentals  of HTML, CSS, TypeScript, 
 and Next.js. Our platform offers expert guidance from industry <br /> 
 professionals to help you excel in your web development journey. Join us today and unlock your full potential in the <br />  world of web development.</p>
 <img src="/skillchaat.png" alt="logo" className='logoabout'/>
 <BackgroundBeams />
   
 </main>
 
 

  )
}

export default aboutus
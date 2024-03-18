 import React from 'react'
 import link from 'next/link'
import Link from 'next/link'
import { Button } from "./ui/moving-border";
import { SparklesCore } from "./ui/sparkles";

// import tailwindcssbuttons from './ui/tailwindcssbuttons';

 function HeroSection() {
   return (
    <main>
       <div className="h-[40rem] relative w-full bg-orange flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      
    <main className=' h-auto md:h-[40rem] w-full
    rounded-md flex flex-col items-center justify-center
     relative overflow-hidden mx-auto py-10 md:py-0'>
      
      <div className='relative p-4 z-10 w-full text-center'>
      <h1 className=' mt-0 md:mt-10 '><img src="/skillchaat.png" className='pic' alt="skillchaat" /></h1>


        <p className='pi text-white '>Elevate your skills with Skill Chaat: Explore. Learn. Excel.</p></div>
        <div className="mt-4">
         {/* <Link href={'/courses'}><Button borderRadius='1.75rem'className="button bg-customBlue dark:bg-black text-black dark:text-white border-neutral-200 dark:bg-black">Explore Courses</Button></Link>  */}
          <Link href="/courses"> 
  <Button
    borderRadius="1.75rem"
    className="button bg-white text-black dark:text-white border-neutral-200 dark:bg-black"
  >
   Admission Open
  </Button>
</Link>

            </div></main></div></main>
   
   )
 }
 
 export default HeroSection
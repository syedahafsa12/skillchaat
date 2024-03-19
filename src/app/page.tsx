import React from 'react'
import HeroSection from '@/components/herosection'
import FeaturedCourses from '@/components/featured-courses'
import Instructors from '@/components/instructors'
import WhyChooseUs from '@/components/WhyChooseUs'
import Footer from '@/components/footer'
import aboutus from './about/page'

export default function page() {
  return (
    <main >
            <HeroSection />
            <FeaturedCourses />
            <Instructors />
            <WhyChooseUs />
           
            
           
    </main>
  )
}

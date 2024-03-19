"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
        title: 'Unlock Your Potential with Web Development',
        description:
          'Embark on a transformative journey into the world of web development. Our courses offer personalized instruction tailored to your learning style and pace. Whether you are a beginner or an experienced developer, our program will equip you with the skills and knowledge needed to thrive in the dynamic field of web development.',
      },
      {
        title: 'Hands-On Learning Experience',
        description:
          'Immerse yourself in a hands-on learning experience where theory meets practice. Our curriculum is designed to provide real-world projects and challenges that allow you to apply your knowledge and skills in meaningful ways. From building responsive websites to creating interactive web applications, you will gain practical experience that prepares you for success in the industry.',
      },
      {
        title: 'Expert Instruction and Support',
        description:
          'Receive guidance and support from industry experts who are passionate about helping you succeed. Our instructors bring years of experience and expertise to the classroom, offering valuable insights and personalized feedback to help you overcome challenges and achieve your goals. With their support, you will gain the confidence and skills needed to excel in your web development journey.',
      },
      {
        title: 'Stay Ahead with Cutting-Edge Technologies',
        description:
        "Stay ahead with our cutting-edge curriculum, integrating the latest technologies in web development. From advanced frameworks and libraries to modern design principles and cloud services, our courses ensure you're equipped with the most updated tools and techniques for building dynamic web applications.",
      },
  ];

function WhyChooseUs() {
  return (
    <div className="whychoose">
        <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs
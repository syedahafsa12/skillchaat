'use client'
import Link from "next/link"
import courseData from "../data2/courses.json"
import { BackgroundGradient } from "../background-gradient/page"
import './global.css'

interface Course {
    id: number;
    title: string;
   
    description: string;
    duration: string;
    instructor: string;
    price_per_month_pkr: number;
    discounted_price_first_ten_students_pkr: number;
    type: string[];
    slug?: string; // Add the slug property
  }

function FeaturedCourses() {
    const featuredCourses = courseData.courses;


  return (
    
   <main className="top-box ">
        <div className=" py-12 bg-orange ">
        <div>
            <div className="text-center">
                <h2 className="text-base text-white font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
            </div>
        </div>
        <div className=" box mt-10 ml-0  ">
            <div className="grid   justify-center">
                {featuredCourses.map((course:Course)=> (
                    <div key={course.id} className="flex  ">
                        <BackgroundGradient
                        className="flex rounded-[22px]  bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center  flex-grow">
                                <p className="text-lg sm:text-xl text-black text-bold mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                <p className="text-sm text-black dark:text-neutral-400 flex-grow">{course.description}</p>
                                <Link className="text-black" href={'./courses'}>
                                Learn More
                                </Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                   
                ))}
            </div>
        </div>
        <div className="mt-10 text-center">
            <Link href={"/coursesform"}
            className="px-2 py-2 rounded border  text-orange bg-white hover:bg-transparent hover:text-white transition duration-200"
            >
       Admission Open
            </Link>
        </div>
    </div>
        </main>
  )
}

export default FeaturedCourses
import React from 'react'
import RazorpayImage from '../assets/Razorpay.png';
import PWSkills from '../assets/PWskills.png';
import PortfolioScr from '../assets/portfolioscr.png';
import CodeDSA from '../assets/codedsa.png'
import MyNewsApp from '../assets/mynewsapp.png';


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import ProjectCard from './ProjectCard';

const ProjectData = [
    {
        id: 1,
        title: "Razorpay Landing Page",
        desc: "Developed a Razorpay frontend clone using HTML and Tailwind CSS, featuring a responsive design and key components for a seamless user experience.",
        link: "https://razorpay-babita-ui.vercel.app/",
        image: RazorpayImage
    },
    {
        id: 2,
        title: "My Portfolio Website",
        desc: "Welcome to my personal portfolio website! Explore by scrolling down – you're in the right place to discover more about me and my work.",
        link: "",
        image: PortfolioScr
    },
    {
        id: 3,
        title: "PW Skills Landing Page",
        desc: "Developed a PW Skills frontend clone using HTML and Tailwind CSS.",
        link: "https://pwskillstailwindproject.netlify.app/",
        image: PWSkills
    },
    {
        id: 4,
        title: "CodeDSA",
        desc: "A platform to practice Data Structures and Algorithms with categorized problems and a clean UI.",
        link: "https://codedsa-eta.vercel.app/",
        image: CodeDSA
    },
    {
        id: 5,
        title: "MyNews App",
        desc: "A responsive news website where users can browse articles by categories such as General, Business, Entertainment, Health, Science, Sports, and Technology.",
        link: "https://mnews.vercel.app/",
        image: MyNewsApp
    }
    

]

const Projectsection = () => {
    return (
        <div className='sm:max:w-[1140px] mx-auto mt-6 py-4'>
            <div className='sm:w-[80%] mx-auto py-4'>
                <h1 className='text-4xl font-semibold'>Projects</h1>
                <p className='text-slate-600 dark:text-slate-300 mt-3 sm:text-pretty text-lg'>Most  recent work</p>
            </div>

            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                //   scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {
                    ProjectData.map((project) => {
                        return (
                            <SwiperSlide key={project.id}>
                                <ProjectCard data={project}/>
                            </SwiperSlide>
                        )
                    })
                }


            </Swiper>

        </div>
    )
}

export default Projectsection
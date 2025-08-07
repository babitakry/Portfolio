import React, { useEffect } from 'react';
import RazorpayImage from '../assets/Razorpay.png';
import PWSkills from '../assets/PWskills.png';
import PortfolioScr from '../assets/portfolioscr.png';
import CodeDSA from '../assets/Codedsa.png';
import MyNewsApp from '../assets/Mynewsapp.png';

// Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

import ProjectCard from './ProjectCard';

const ProjectData = [
  {
    id: 1,
    title: "Razorpay Landing Page",
    desc: "Developed a Razorpay frontend clone using HTML and Tailwind CSS, featuring a responsive design and key components for a seamless user experience.",
    link: "https://razorpay-babita-ui.vercel.app/",
    image: RazorpayImage,
  },
  {
    id: 2,
    title: "My Portfolio Website",
    desc: "Welcome to my personal portfolio website! Explore by scrolling down – you're in the right place to discover more about me and my work.",
    link: "",
    image: PortfolioScr,
  },
  {
    id: 3,
    title: "PW Skills Landing Page",
    desc: "Developed a PW Skills frontend clone using HTML and Tailwind CSS.",
    link: "https://pwskillstailwindproject.netlify.app/",
    image: PWSkills,
  },
  {
    id: 4,
    title: "CodeDSA",
    desc: "A platform to practice Data Structures and Algorithms with categorized problems and a clean UI.",
    link: "https://codedsa-eta.vercel.app/",
    image: CodeDSA,
  },
  {
    id: 5,
    title: "MyNews App",
    desc: "A responsive news website where users can browse articles by categories such as General, Business, Entertainment, Health, Science, Sports, and Technology.",
    link: "https://mnews.vercel.app/",
    image: MyNewsApp,
  },
];

const Projectsection = () => {
  // AOS Init
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className='sm:max:w-[1140px] mx-auto mt-6 py-4' id="projects">
      <div className='sm:w-[80%] mx-auto py-4' data-aos="fade-up">
        <h1 className='text-4xl font-bold text-center text-gray-900 dark:text-white mb-12'>Projects</h1>
        <p className='text-slate-600 dark:text-slate-300 mt-3 text-lg'>
          Most recent work
        </p>
      </div>

      <div data-aos="zoom-in-up">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {ProjectData.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard data={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projectsection;

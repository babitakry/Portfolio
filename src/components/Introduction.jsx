import React, { useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import ImageSection from './ImageSection';

function Introduction() {

    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div
            id='home'
            className='max-w-[1000px] mx-auto min-h-[450px] my-5 gap-10 flex flex-wrap-reverse sm:flex-nowrap justify-center items-center p-[2em] sm:p-0'
            data-aos="fade-up"
        >
            {/* Left Content */}
            <div
                className='sm:w-[58%] flex flex-col items-start gap-y-3 sm:p-10'
                data-aos="fade-right"
                data-aos-delay="100"
            >
                <p className='text-sm font-bold'>Hi I am</p>
                <p className='sm:text-2xl text-xl font-bold text-[#FD6F00]'>Babita Kumari</p>

                <div className='sm:text-4xl text-2xl font-bold flex items-center gap-2 flex-wrap'>
                    <h2 className='text-[#FD6F00]'>A <span>&lt;</span></h2>
                    <Typewriter
                        options={{
                            strings: ['Web Developer', 'Full Stack Developer', 'Coder', 'Learner'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    <span className='text-[#FD6F00]'>/&gt;</span>
                </div>

                <p className='text-start text-slate-600 dark:text-slate-300 py-4'>
                    I'm a Web developer and here is my Portfolio website.
                    Here you'll learn about my journey as a web developer and a Software Developer.
                </p>

                <div data-aos="zoom-in" data-aos-delay="200">
                    <a
                        href='mailto:babitakumari.ky3007@gmail.com'
                        className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2">
                        Hire Me
                    </a>
                </div>
            </div>

            {/* Right Image + Socials */}
            <div
                className='sm:w-[48%] sm:h-full flex flex-col'
                data-aos="fade-left"
                data-aos-delay="150"
            >
                <ImageSection />

                <div className='flex justify-center items-end gap-4 p-5 mt-3 text-2xl' data-aos="fade-up" data-aos-delay="300">
                    <a href="https://github.com/Babita1947" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://leetcode.com/u/babita1947/" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                            alt="LeetCode"
                            className="w-6 h-6"
                        />
                    </a>
                    <a href="https://x.com/Babita3007" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter />
                    </a>
                    <a href="https://www.linkedin.com/in/babita-kumari-766710270/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Introduction;

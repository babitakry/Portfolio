import React from 'react'

import Typewriter from 'typewriter-effect';

import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import ImageSection from './ImageSection';

function Introduction() {
    return (
        
        <div 
        id = 'home'
        className='max-w-[1000px] mx-auto min-h-[450px] my-5 gap-10 flex flex-wrap-reverse sm:flex-nowrap justify-center items-center'>
            <div className='sm:w-[58%] flex flex-col items-start  gap-y-3 sm:p-10'>
                <p className='text-sm font-bold'>Hi I am</p>
                <p className='sm:text-2xl text-xl font-bold text-[#FD6F00]'>Babita Kumari</p>

                <div className='sm:text-4xl text-2xl font-bold flex items-center gap-2 flex-wrap'>
                    <h2 className='text-[#FD6F00] text-wrap'>A <span>&lt;</span></h2>
                    <Typewriter
                        options={{
                            strings: [ 'Web Developer', 'Frontend Developer', 'Coder', 'Learner'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    <span className='text-[#FD6F00]'>/&gt;</span></div>
                {/* <div className='text-5xl font-bold px-28'>Designer</div> */}
                <p className='text-start text-slate-600 py-4'>I'm a Web developer and here is my Portfolio website.
                Here you'll learn about my journery as web developer and a Software Developer.
                </p>
                <div>
                    <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2 ">Hire Me</button>
                </div>
            </div>
            <div className='sm:w-[48%] sm:h-full flex flex-col'>
                <ImageSection />
                <div className='flex justify-center items-end gap-4 p-5 mt-3'>
                    <FaFacebook />
                    <FaXTwitter />
                    <FaInstagram />
                    <FaLinkedin />
                </div>
            </div>
        </div>
    )
}

export default Introduction
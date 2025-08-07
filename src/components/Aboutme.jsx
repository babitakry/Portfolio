import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ImageSection from './ImageSection';

function Aboutme() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div 
      id='about'
      className='sm:max-w-[1000px] mx-auto my-6 gap-5 flex flex-col sm:flex-row p-4 sm:p-[1em] items-center'
      data-aos="fade-up"
    >
      {/* Left image section */}
      <div 
        className='sm:block hidden w-[48%] h-[90%] flex-col'
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <ImageSection />
      </div>

      {/* Right text content */}
      <div 
        className='sm:max-w-[52%] w-full h-full flex flex-col items-start px-2 sm:px-4 py-4 gap-y-4'
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <h1 className='text-2xl sm:text-3xl font-bold text-black dark:text-white'>
          About Me
        </h1>

        <div 
          className='text-start text-gray-700 dark:text-slate-300 px-1 text-sm sm:text-base w-full'
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <ul className="list-disc leading-6 sm:leading-7 text-sm sm:text-base space-y-2">
            <li>I am Babita Kumari, a B.Tech student in Computer Science and Engineering at Asansol Engineering College.</li>
            <li>Skilled in frontend development, with expertise in technologies including React.js, JavaScript, HTML, CSS, and Tailwind CSS.</li>
            <li>Accomplished in solving over 650+ data structures and algorithms problems on LeetCode using C++.</li>
          </ul>
        </div>

        {/* Divider & Personal Info */}
        <div className='w-full' data-aos="fade-up" data-aos-delay="400">
          <div className='w-full h-0.5 bg-[#FD6F00]'></div>

          <h2 className='text-xl sm:text-2xl text-start font-semibold px-0.5 pt-3 text-[#FD6F00]'>
            Personal Info
          </h2>

          <div className='grid sm:grid-cols-2 text-start gap-y-3 gap-x-4 py-4 text-sm sm:text-base'>
            <p>
              <span className='text-[#FD6F00] font-medium'>Name:</span>{' '}
              <span className='text-gray-700 dark:text-slate-300'>Babita Kumari</span>
            </p>
            <p>
              <span className='text-[#FD6F00] font-medium'>Nationality:</span>{' '}
              <span className='text-gray-700 dark:text-slate-300'>Indian</span>
            </p>
            <p>
              <span className='text-[#FD6F00] font-medium'>Email:</span>{' '}
              <a href="mailto:babitakumari.ky3007@gmail.com" className='text-gray-700 dark:text-slate-300 hover:underline'>
                Click to mail
              </a>
            </p>
            <p>
              <span className='text-[#FD6F00] font-medium'>Address:</span>{' '}
              <span className='text-gray-700 dark:text-slate-300'>Asansol, West Bengal</span>
            </p>
            <p>
              <span className='text-[#FD6F00] font-medium'>Contact:</span>{' '}
              <a href="mailto:babitakumari.ky3007@gmail.com" className='text-gray-700 dark:text-slate-300 hover:underline'>
                Click to call
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;

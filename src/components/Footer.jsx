import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className='w-full'>
      <div
        className='sm:max-w-[1140px] sm:mx-auto text-gray-800 mb-14 pt-6 px-[2em]'
        data-aos="fade-up"
      >
        <div className='sm:w-full h-0.5 bg-gray-200'></div>

        <h1
          className="text-4xl md:text-left md:px-32 bg-gradient-to-r dark:text-white from-[#FD6F00] via-red-500 to-[#FD6F00] text-transparent bg-clip-text italic font-bold"
          data-aos="zoom-in-right"
          data-aos-delay="100"
        >
          Babita
        </h1>

        <div
          className='sm:w-[80%] mx-auto grid sm:grid-cols-3 grid-cols-2 gap-10 py-10'
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Navigation Links */}
          <div className='flex flex-col justify-center items-start gap-4 capitalize px-6'>
            <a href="/home"><p className='hover:text-black text-gray-600 dark:text-gray-300 w-fit'>Home</p></a>
            <a href="/about"><p className='hover:text-black text-gray-600 dark:text-gray-300 w-fit'>About</p></a>
            <a href="/skills"><p className='hover:text-black text-gray-600 dark:text-gray-300 w-fit'>Skills</p></a>
            <a href="/qualification"><p className='hover:text-black text-gray-600 dark:text-gray-300 w-fit'>Qualification</p></a>
            <a href="/project"><p className='hover:text-black text-gray-600 dark:text-gray-300 w-fit'>Projects</p></a>
            <a href="/contact"><p className='hover:text-black text-gray-600 dark:text-gray-300 w-fit'>Contact</p></a>
          </div>

          {/* Spacer */}
          <div className='sm:flex flex-col gap-4 capitalize hidden'></div>

          {/* Social Links */}
          <div className='flex flex-col justify-center items-start gap-4 capitalize'>
            <a href="https://leetcode.com/u/babita1947/">
              <p className='hover:text-black text-gray-600 dark:text-gray-300 w-fit'>Leetcode</p>
            </a>
            <a href="">
              <p className='hover:text-black text-gray-600 dark:text-gray-300 w-fit'>Facebook</p>
            </a>
            <a href="https://linkedin.com/in/babita-kumari-766710270">
              <p className='hover:text-black text-gray-600 dark:text-gray-300 w-fit'>LinkedIn</p>
            </a>
            <a href="https://github.com/Babita1947">
              <p className='hover:text-black text-gray-600 dark:text-gray-300 w-fit'>GitHub</p>
            </a>
            <a href="https://x.com/Babita3007?t=XY3E6M1l9XI129_-r0-Enw&s=08">
              <p className='hover:text-black text-gray-600 dark:text-gray-300 w-fit'>Twitter</p>
            </a>
            <a href="mailto:babitakumari.ky3007@gmail.com">
              <p className='hover:text-black text-gray-600 dark:text-gray-300 w-fit'>Message</p>
            </a>
          </div>
        </div>

        <div className='max-w-full h-0.5 bg-gray-200' data-aos="zoom-in-up" data-aos-delay="300"></div>

        <div className='w-full h-5 text-gray-950 dark:text-gray-300 py-4' data-aos="fade-up" data-aos-delay="400">
          © 2025 : All rights reserved
        </div>
      </div>

      <div
        className="w-full bg-[#FD6F00] text-gray-200 mt-3 py-4 text-center opacity-100"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        Design & Developed with ❤️ by Babita
      </div>

    </div>
  );
}

export default Footer;

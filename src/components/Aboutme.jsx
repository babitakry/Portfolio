import React from 'react';
import ImageSection from './ImageSection';

function Aboutme() {
  return (
    <div 
      id='about'
      className='sm:max-w-[1000px] mx-auto my-6 gap-5 flex flex-col sm:flex-row p-4 sm:p-[1em] items-center '
    >
      <div className='sm:block hidden w-[48%] h-[90%] flex-col'>
        <ImageSection />
      </div>

      <div className='sm:max-w-[52%] w-full h-full flex flex-col items-start px-2 sm:px-4 py-4 gap-y-4'>
        <h1 className='text-2xl sm:text-3xl font-bold text-[#FD6F00]'>About Me</h1>

        <div className='text-start text-gray-700 dark:text-slate-300 px-1 text-sm sm:text-base w-full'>
          <ul className="list-disc leading-6 sm:leading-7 text-sm sm:text-base space-y-2">
            <li>I am Babita Kumari, a B.Tech student in Computer Science and Engineering at Asansol Engineering College.</li>
            <li>Skilled in frontend development, with expertise in technologies including React.js, JavaScript, HTML, CSS, and Tailwind CSS.</li>
            <li>Accomplished in solving over 650+ data structures and algorithms problems on LeetCode using C++.</li>
          </ul>
        </div>

        {/* <SliderRange length={89} knowledge={"Problem Solving Skills"} />
        <SliderRange length={69} knowledge={"Web Developer"} />
        <SliderRange length={92} knowledge={"ReactJS"} /> */}

        <div className='w-full'>
          <div className='w-full h-0.5 bg-[#FD6F00]'></div>

          <h2 className='text-xl sm:text-2xl text-start font-semibold px-0.5 pt-3 text-[#FD6F00]'>
            Personal Info
          </h2>

          <div className='grid sm:grid-cols-2 text-start gap-y-3 gap-x-4 py-4 text-sm sm:text-base'>
            <p>
              <span className='text-[#FD6F00] font-medium'>Name:</span>{' '}
              <span className='text-gray-700 dark:text-slate-300 font-normal'>Babita Kumari</span>
            </p>
            <p>
              <span className='text-[#FD6F00] font-medium'>Nationality:</span>{' '}
              <span className='text-gray-700 dark:text-slate-300 font-normal'>Indian</span>
            </p>
            <p>
              <span className='text-[#FD6F00] font-medium'>Email:</span>{' '}
              <a href="mailto:babitakumari.ky3007@gmail.com" className='text-gray-700 dark:text-slate-300 hover:underline'>
                Click to mail
              </a>
            </p>
            <p>
              <span className='text-[#FD6F00] font-medium'>Address:</span>{' '}
              <span className='text-gray-700 dark:text-slate-300 font-normal'>Asansol, West Bengal</span>
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

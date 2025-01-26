import React from 'react'
import ImageSection from './ImageSection'


function Aboutme() {

  return (
    <div 
    id='about'
    className='w-[1000px] mx-auto h-[450px] my-3 gap-5 flex'>
      <div className='w-[48%] h-full flex flex-col'>
        <ImageSection />
      </div>
      <div className='w-[52%] h-full flex flex-col items-start px-4 py-4 gap-y-4'>
        <h1 className='text-3xl font-semibold px-0.5'>About Me</h1>
        <p className='text-start text-slate-600 px-1 text-sm'>
          <ul class="list-disc leading-6 text-base">
            <li>I am Babita Kumari, a B.Tech student in Computer Science and Engineering at Asansol Engineering College.</li>
            <li>Skilled in frontend development, with expertise in technologies including React.js, JavaScript, HTML, CSS, and Tailwind CSS.</li>
            <li>Accomplished in solving over 650+ data structures and algorithms problems on LeetCode using C++.</li>
          </ul>
        </p>

        {/* <SliderRange length={89} knowledge={"Problem Solving Skills"} />
        <SliderRange length={69} knowledge={"Web Developer"} />
        <SliderRange length={92} knowledge={"ReactJS"} /> */}

        <div className=''>
          <div className='w-full h-0.5 bg-[#FD6F00]'></div>
          <h1 className='text-2xl text-start font-semibold px-0.5 pt-2'>Personal Info</h1>

          <div className='grid grid-cols-2 text-start gap-1 py-4'>
            <p className='text-[#FD6F00] font-semibold'>Name: <span className='text-gray-600 font-semibold'>Babita Kumari</span></p>
            <p className='text-[#FD6F00] font-semibold'>Nationality: <span className='text-gray-600 font-semibold'>Indian</span></p>
            <p className='text-[#FD6F00] font-semibold'>Email: <a href="mailto:babitakumari.ky3007@gmail.com" className='text-gray-600 font-semibold'>Click to mail</a></p>
            <p className='text-[#FD6F00] font-semibold'> Address: <span className='text-gray-600 font-semibold'>Asansol,West Bengal</span></p>
            
            <p className='text-[#FD6F00] font-semibold'>Contact: <a href="mailto:babitakumari.ky3007@gmail.com" className='text-gray-600 font-semibold'>Click to call</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutme
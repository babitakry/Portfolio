import React from 'react'

function Footer() {
  return (
    <div className='w-full'>
      <div className='sm:max-w-[1140px] sm:mx-auto text-gray-800 mb-14  pt-6 px-[2em]'>
        <div className='sm:w-full h-0.5 bg-gray-200'></div>
        <h1 className='text-4xl font-semibold m-23 text-gray-600 md:text-start text-start pt-4 pl-6 sm:pl-24'>Babita</h1>
        <div className='sm:w-[80%] mx-auto grid sm:grid-cols-3 grid-cols-2 gap-10 py-10'>
            <div className='flex flex-col justify-center items-start gap-4 capitalize px-6'>
                <a href="/home">
                  <p className='hover:text-black text-gray-600 w-fit'>Home</p>
                </a>
                <a href="/about">
                  <p className='hover:text-black text-gray-600  w-fit'>About</p>
                </a>
                <a href="/skills">
                  <p className='hover:text-black text-gray-600  w-fit'>Skills</p>
                </a>
                <a href="/qualification">
                  <p className='hover:text-black text-gray-600  w-fit'>Qualification</p>
                </a>
                <a href="/project">
                  <p className='hover:text-black text-gray-600  w-fit'>Projects</p>
                </a>
                <a href="/contact">
                  <p className='hover:text-black text-gray-600  w-fit'>Contact</p>
                </a>
            </div>
            <div className='sm:flex flex-col gap-4 capitalize hidden '></div>
            <div className='flex flex-col  justify-center items-start gap-4 capitalize'>
                <a href="https://leetcode.com/u/babita1947/">
                  <p className='hover:text-black text-gray-600 w-fit'>Leetcode</p>
                </a>
                <a href="">
                  <p className='hover:text-black text-gray-600 w-fit'>Facebook</p>
                </a>
                <a href="linkedin.com/in/babita-kumari-766710270">
                  <p className='hover:text-black text-gray-600 w-fit'>Linkedin</p>
                </a>
                <a href="https://github.com/Babita1947">
                  <p className='hover:text-black text-gray-600 w-fit'>Github</p>
                </a>
                <a href=" https://x.com/Babita3007?t=XY3E6M1l9XI129_-r0-Enw&s=08">
                  <p className='hover:text-black text-gray-600 w-fit'>Twitter</p>
                </a>
                <a href="babitakumari.ky3007@gmail.com">
                  <p className='hover:text-black text-gray-600 w-fit'>Message</p>
                </a>
            </div>
            
        </div>
        <div className='max-w-full h-0.5 bg-gray-200'></div>
        <div className='w-full h-5 text-gray-950 py-4'>Copyright 2025 : All right reserved</div>
        
    </div>
    <div className='w-full  bg-[#FD6F00] text-gray-200 mt-3 py-4'>Designed with ❤️ by Babita</div>
    </div>
  )
}

export default Footer
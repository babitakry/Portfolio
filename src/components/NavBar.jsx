import React from 'react'
import Babitalogo from '../assets/Babitalogo.jpg'

const NavBar = () => {
  return (
    <div className='w-[1000px] mx-auto h-[67px] flex justify-between items-center px-4'>
         <div className=''>
          <img src={Babitalogo} className='h-14' alt="" />
         </div>
         <div className='flex justify-center items-start align-middle gap-12 '>
            <div className='flex justify-center items-start align-middle gap-6 pt-3 text-sm '>
              <a href="/">Home</a>
              <a href="/">About Me</a>
              <a href="/">Skills</a>
              <a href="/">Qualifications</a>
              <a href="/">Projects</a>
              <a href="/">Contact Me</a>
            </div>
            <div className='pt-1'>
              <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Download CV</button>
            </div>
         </div>
      </div>

  )
}

export default NavBar
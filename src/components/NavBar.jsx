import React from 'react'
import Babitalogo from '../assets/Babitalogo.jpg'
import { Link } from 'react-scroll'
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  return (
    <div className='max-w-[1000px] mx-auto h-[67px] flex justify-between items-center px-4 sticky top-0 bg-white z-50'>
      <div className=''>
        <img src={Babitalogo} className='h-14' alt="" />
      </div>
      <div className='flex justify-center items-start align-middle gap-12 '>
        <div className='flex justify-center items-start align-middle gap-6 pt-3 text-sm '>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="text-[#FD6F00] dark:text-[#FD6F00] underline underline-offset-4 "
            className="lg:block hidden cursor-pointer  hover:text-[#FD6F00]"
          >Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="text-[#FD6F00] dark:text-[#FD6F00] underline underline-offset-4 "
            className="lg:block hidden cursor-pointer hover:text-[#FD6F00]"
          >About
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="text-[#FD6F00] dark:text-[#FD6F00] underline underline-offset-4 "
            className="lg:block hidden cursor-pointer hover:text-[#FD6F00]"
          >Skills
          </Link>
          <Link
            to="qualifications"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="text-[#FD6F00] dark:text-[#FD6F00] underline underline-offset-4 "
            className="lg:block hidden cursor-pointer hover:text-[#FD6F00]"
          >Qualifications
          </Link>
          <Link
            to="project"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="text-[#FD6F00] dark:text-[#FD6F00] underline underline-offset-4 "
            className="lg:block hidden cursor-pointer hover:text-[#FD6F00]"
          >Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            activeClass="text-[#FD6F00] dark:text-[#FD6F00] underline underline-offset-4 "
            className="lg:block hidden cursor-pointer hover:text-[#FD6F00]"
          >Contact me
          </Link>
        </div>
        <div className='pt-1'>
          <button type="button" class="hidden sm:block text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Download CV</button>
          <RxHamburgerMenu className='block sm:hidden text-2xl'/>
        </div>
      </div>
    </div>

  )
}

export default NavBar
import React from 'react'
import { Link } from 'react-scroll'

const MobileNavbar = () => {
    return (
        <div className='border rounded-md border-slate-400 bg-white opacity-95 text-slate-900 absolute top-20 right-0 z-50 p-4 px-6 lg:hidden'>
            <div className='w-full flex flex-col justify-start items-start align-middle gap-3 pt-3 text-sm '>
                <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    activeClass="text-[#FD6F00] dark:text-[#FD6F00] underline underline-offset-4 "
                    className="w-full cursor-pointer  hover:text-[#FD6F00]"
                >Home
                </Link>
                <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    activeClass="text-[#FD6F00] dark:text-[#FD6F00] underline underline-offset-4 "
                    className="w-full cursor-pointer hover:text-[#FD6F00] "
                >About
                </Link>
                <Link
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    activeClass="text-[#FD6F00] dark:text-[#FD6F00] underline underline-offset-4 "
                    className="w-full cursor-pointer hover:text-[#FD6F00] "
                >Skills
                </Link>
                <Link
                    to="qualifications"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    activeClass="text-[#FD6F00] dark:text-[#FD6F00] underline underline-offset-4 "
                    className="w-full cursor-pointer hover:text-[#FD6F00]"
                >Qualifications
                </Link>
                <Link
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    activeClass="text-[#FD6F00] dark:text-[#FD6F00] underline underline-offset-4 "
                    className="w-full cursor-pointer hover:text-[#FD6F00] "
                >Projects
                </Link>
                <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    activeClass="text-[#FD6F00] dark:text-[#FD6F00] underline underline-offset-4 "
                    className="w-full cursor-pointer hover:text-[#FD6F00] "
                >Contact me
                </Link>
                <button
                    type="button"
                    className="block sm:hidden text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Download CV</button>
            </div>
        </div>
    )
}

export default MobileNavbar
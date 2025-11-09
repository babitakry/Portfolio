import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import MobileNavbar from './MobileNavbar';
import useTheme from '../contexts/Theme';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NavBar = () => {
  const [openHamb, setOpenHamb] = useState(false);
  const { themeMode, darkTheme, lightTheme } = useTheme();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div
      className='max-w-[1000px] mx-auto py-2 flex justify-between items-center px-6 sticky top-0 bg-white dark:text-white z-50 dark:bg-[#36404a] bg-opacity-90 dark:bg-opacity-90 border-b'
      data-aos="fade-down"
    >
      {/* Logo */}
      <h1
        className="text-4xl bg-gradient-to-r dark:text-white from-[#FD6F00] via-red-500 to-[#FD6F00] inline-block text-transparent bg-clip-text italic font-bold"
        data-aos="zoom-in-right"
        data-aos-delay="100"
      >
        Babita
      </h1>

      {/* Navigation + Hamburger + Theme Toggle */}
      <div className='flex justify-center items-center gap-6'>

        {/* Desktop Navigation */}
        <div
          className='lg:flex hidden justify-center items-center gap-6 pt-3 text-sm'
          data-aos="fade-down"
          data-aos-delay="200"
        >
          {["home", "about", "skills", "qualifications", "project", "contact"].map((section, i) => (
            <Link
              key={section}
              to={section}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="text-[#FD6F00] dark:text-[#FD6F00] underline underline-offset-4"
              className="cursor-pointer hover:text-[#FD6F00] capitalize"
              data-aos="fade-down"
              data-aos-delay={200 + i * 100}
            >
              {section === "contact" ? "Contact me" : section}
            </Link>
          ))}
        </div>

        {/* CV Button & Hamburger */}
        <div className='text-center'>
          <div className='pt-3 flex'>
            <button
              type="button"
              onClick={() =>
                window.open("https://drive.google.com/file/d/1N6ZzJGwaDGvWMeoUMki9xeDPOUREdUwG/view?usp=drive_link", "_blank")
              }
              className="hidden sm:block text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              Download CV
            </button>

            {/* Hamburger Icon */}
            {
              openHamb ? (
                <RxCross2
                  onClick={() => setOpenHamb(false)}
                  className='block lg:hidden text-3xl pb-1'
                />
              ) : (
                <RxHamburgerMenu
                  onClick={() => setOpenHamb(true)}
                  className='block lg:hidden text-3xl pb-1 sm:mt-2'
                  data-aos="zoom-in"
                  data-aos-delay="400"
                />
              )
            }
          </div>
        </div>

        {/* Theme Toggle */}
        <div className='block pt-2' data-aos="zoom-in-left" data-aos-delay="500">
          {
            themeMode === "light" ? (
              <MdDarkMode
                onClick={darkTheme}
                className='sm:h-10 sm:w-8 h-7 w-7 text-[#FD6F00] cursor-pointer'
              />
            ) : (
              <MdOutlineLightMode
                onClick={lightTheme}
                className='h-10 w-8 cursor-pointer'
              />
            )
          }
        </div>
      </div>

      {/* Mobile Nav Slide In */}
      {
        openHamb &&
        <div
          data-aos="fade-left"
          data-aos-delay="100"
          className='absolute top-14 dark:top-16 right-0'
        >
          <MobileNavbar />
        </div>
      }
    </div>
  );
};

export default NavBar;

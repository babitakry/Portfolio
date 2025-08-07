import React from 'react';
import SkillsType from './SkillsType';
import { IoCode } from "react-icons/io5";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { TbTool } from "react-icons/tb";
import Language from './Language';
import Libraries from './LanguageComponenet/Libraries';
import Tools from './LanguageComponenet/Tools';

function Services() {
  const skillname = [
    {
      id: 1,
      name: "Languages",
      icon: <IoCode className='text-xl sm:text-2xl text-[#FD6F00]' />,
      types: <Language />,
      desc: "Languages that I have picked up over the years"
    },
    {
      id: 2,
      name: "Libraries & Frameworks",
      icon: <PiBracketsCurlyBold className='text-xl sm:text-2xl text-[#FD6F00]' />,
      types: <Libraries />,
      desc: "Libraries & Frameworks that I have picked up over the years"
    },
    {
      id: 3,
      name: "Tools",
      icon: <TbTool className='text-xl sm:text-2xl text-[#FD6F00]' />,
      types: <Tools />,
      desc: "Tools that I have picked up over the years"
    }
  ];

  return (
    <div
      id='skills'
      className='max-w-[1000px] mx-auto h-auto my-6 flex flex-col justify-center items-center px-4 sm:px-8 py-8'
    >
      <div className='w-full sm:max-w-[85%] mx-auto'>
        <div
          className='flex flex-col justify-center items-center gap-2 sm:gap-3 py-6 sm:py-10'
          data-aos="fade-down"
        >
          <h1 className='text-4xl font-bold text-center text-gray-900 dark:text-white mb-12'>Skills</h1>
          <p className='text-sm sm:text-base text-gray-600 dark:text-slate-300'>
            My Technical Skills
          </p>
        </div>

        <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
          {skillname.map((item, index) => (
            <div key={item.id} data-aos="zoom-in" data-aos-delay={index * 150}>
              <SkillsType item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;

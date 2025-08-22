import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ data }) => {
  return (
    <div id='project'
      className='max-w-[90%] sm:max-w-[80%] mx-auto flex justify-center items-center'>
      <div className='flex sm:flex-row flex-col justify-around items-center gap-4 sm:gap-y-2'>

        {/* Image */}
        <div className='w-[90%] sm:w-[40%] max-h-[220px]'>
          <img src={data.image} alt={data.title} className='w-full h-full object-contain rounded-lg shadow-md' />
        </div>

        {/* Content */}
        <div className='sm:w-[40%] text-center sm:text-start flex flex-col justify-center items-center sm:items-start gap-3 sm:my-5 p-3'>
          <h1 className='text-xl sm:text-2xl font-bold'>{data.title}</h1>

          {/* Show truncated desc on mobile */}
          <p className='text-slate-600 dark:text-slate-300 text-sm sm:text-base line-clamp-2 sm:line-clamp-none'>
            {data.desc}
          </p>

          {/* Button */}
          <a href={data.link} target="_blank" rel="noopener noreferrer"
             className='w-full sm:w-36 flex justify-center items-center gap-3 bg-[#FD6F00] p-2 sm:p-3 rounded-lg text-white font-bold shadow-md hover:bg-orange-600 transition'>
            Check Out <FaArrowRight className='text-white'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

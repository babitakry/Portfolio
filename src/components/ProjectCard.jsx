import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const ProjectCard = ({data}) => {
  return (
    <div id='project'
    className='sm:max-w-[80%] mx-auto flex justify-center items-center '>
            <div className='flex sm:flex-row flex-col justify-around items-center gap-y-2'>

                <div className='w-[75%] sm:w-[40%] sm:h-auto border-2'>
                    <img src={data.image} alt="" className='w-full'/>
                </div>

                <div className='sm:w-[40%] text-start flex flex-col justify-center items-start sm:gap-3 gap-2 sm:my-5 m-0 sm:p-5 p-0'>
                    <h1 className='text-2xl font-bold px-1'>{data.title}</h1>
                    <p className='hidden sm:block text-slate-600 dark:text-slate-300 text-base pl-1'>{data.desc}</p>
                    <div className='w-36 flex gap-5 bg-[#FD6F00] p-3 m-2 rounded-lg text-white font-bold '>
                        <button className=''>
                            <a href={data.link}>Check Out</a>
                        </button>
                        <div className='flex justify-center items-center'>
                            <FaArrowRight className='text-white'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProjectCard
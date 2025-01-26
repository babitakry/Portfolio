import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const ProjectCard = ({data}) => {
  return (
    <div id='project'
    className='w-[80%] h-auto mx-auto flex justify-center items-center gap-3 '>
            <div className='flex justify-around items-center'>

                <div className='w-[40%] h-auto'>
                    <img src={data.image} alt="" />
                </div>

                <div className='w-[40%] h-auto text-start flex flex-col justify-center items-start gap-3 my-5 p-5'>
                    <h1 className='text-2xl font-bold px-1'>{data.title}</h1>
                    <p className='text-slate-500 text-base pl-1'>{data.desc}</p>
                    <div className='w-36 h-14 flex gap-5 bg-[#FD6F00] p-3 m-2 rounded-lg text-white font-bold '>
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
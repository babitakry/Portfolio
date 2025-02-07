import React from 'react'
import { RiGraduationCapFill } from "react-icons/ri";
import Leftbox from './Qualification/Leftbox';
import Path from './Qualification/Path';
import Rightbox from './Qualification/Rightbox';



function Qualifications() {
    let education = [
        {
            id: 1,
            coursename: "B.Tech in Computer Science",
            collegename: "Asansol Engineering College",
            year: "2022 - 2026"
        },
        {
            id: 2,
            coursename: "Senior Secondary School",
            collegename: "St. Mary Goretti Girls' Higher Secondary School",
            year: "2019 - 2021"
        },
        {
            id: 3,
            coursename: "Secondary School",
            collegename: "St. Mary Goretti Girls' Higher Secondary School",
            year: "2009 - 2019"
        }
    ]
    return (
        <div id='qualifications'
            className='max-w-[1140px] mx-auto pt-14 sm:h-[800px] '>
            <div className='w-[80%] mx-auto flex flex-col justify-center items-center gap-3'>
                <h1 className='text-4xl font-semibold px-1'>Qualifications</h1>
                <p className='text-slate-600 dark:text-slate-300'>My Educational Qualification & Work Experience</p>

                <div className='w-[60%] pt-10'>
                    <div className='sm:w-[80%] mx-auto flex justify-center items-center text-[#FD6F00] '>
                        <RiGraduationCapFill className='text-2xl mt-1' />
                        <h1 className='text-2xl font-semibold px-1'>Education</h1>
                    </div>
                </div>

                <div className='sm:w-[60%] sm:h-32 mx-auto mt-5 space-y-4 sm:space-y-0'>
                    <div className='flex h-full'>
                        <Leftbox item={education[0]} />
                        <div className='hidden sm:flex'>
                            <Path />
                            <Rightbox />
                        </div>
                    </div>

                    <div className='flex h-full'>
                        <div className='hidden sm:flex flex-1 justify-between'>
                            <Rightbox />
                            <div className='md:pr-[12%] lg:pr-[18%]'>
                                <Path />
                            </div>
                        </div>
                        <Leftbox item={education[1]} />
                    </div>

                    <div className='flex h-full'>
                        <Leftbox item={education[2]} />
                        <div className='sm:flex hidden'>
                            <div className='w-6 h-6 rounded-full bg-[#FD6F00] ml-5 sm:absolute'></div>
                            <Rightbox />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Qualifications
import React from 'react'
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import LangCompo from './LangCompo';

function Tools() {
    let tools = [
        {
            id: 1,
            name: "Git",
            icon: <FaGitAlt className='text-3xl sm:text-5xl text-[#FD6F00]'/>
        },
        {
            id: 2,
            name: "GitHub",
            icon: <FaGithub className='text-3xl sm:text-5xl text-[#FD6F00]'/>
        },
        {
            id: 3,
            name: "Figma",
            icon: <FaFigma className='text-3xl sm:text-5xl text-[#FD6F00]'/>
        },
        {
            id: 4,
            name: "Vercel",
            icon: <IoLogoVercel className='text-3xl sm:text-5xl text-[#FD6F00]'/>
        },
    ]
    return (
        <div className='w-[80%] mx-auto py-5'>
            {
                tools.map((item) => {
                    return (
                        <LangCompo item={item} key={item.id} length={100}/>
                    )
                })
            }
        </div>
    )
}

export default Tools
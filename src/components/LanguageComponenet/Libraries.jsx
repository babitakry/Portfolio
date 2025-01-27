import React from 'react'
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import LangCompo from './LangCompo';

function Libraries() {
    let libraries = [
        {
            id: 1,
            name: "React",
            icon: <FaReact className='text-3xl sm:text-5xl text-[#FD6F00]'/>
        },
        {
            id: 2,
            name: "Tailwind CSS",
            icon: <RiTailwindCssFill className='text-3xl sm:text-5xl text-[#FD6F00]'/>
        },
        {
            id: 3,
            name: "MySQL",
            icon: <SiMysql className='text-3xl sm:text-5xl text-[#FD6F00]'/>
        },
        
    ]
    return (
        <div className='w-[80%] mx-auto py-5'>
            {
                libraries.map((item) => {
                    return (
                        <LangCompo item={item} key={item.id} length={100}/>
                    )
                })
                
            }

        </div>
    )
}

export default Libraries
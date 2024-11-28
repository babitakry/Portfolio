import React from 'react'
import LangCompo from './LanguageComponenet/LangCompo'
import { FaJava } from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa6";
import  C_Logo from "../assets/c_logo.webp";
import CPP from "../assets/cpp.png";



function Language() {
    let languages = [
        {
            id: 1,
            name: "C",
            icon: <img src={C_Logo} className='text-5xl text-[#FD6F00] w-[15%] h-[20%]'/>
        },
        {
            id: 2,
            name: "C++",
            icon: <img src={CPP} className='text-5xl text-[#FD6F00] w-[13%] h-[13%]'/>
        },
        {
            id: 3,
            name: "Java",
            icon: <FaJava className='text-5xl text-[#FD6F00]'/>
        },
        {
            id: 4,
            name: "Python",
            icon: <FaPython className='text-5xl text-[#FD6F00]'/>
        },
        {
            id: 5,
            name: "JavaScript",
            icon: <IoLogoJavascript className='text-5xl text-[#FD6F00]'/>
        },
        
        
    ];
    return (
        <div className='w-[80%] mx-auto py-5'>
            {
                languages.map((item) => {
                    return (
                        <LangCompo item={item} key={item.id} length={100}/>
                    )
                })
                
            }

        </div>
    )
}

export default Language
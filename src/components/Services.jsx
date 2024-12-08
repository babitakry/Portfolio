import React from 'react'
import SkillsType from './SkillsType';
import { IoCode } from "react-icons/io5";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { TbTool } from "react-icons/tb";
import Language from './Language';
import Libraries from './LanguageComponenet/Libraries';
import Tools from './LanguageComponenet/Tools';

function Services() {
  let skillname = [
    {
        id: 1,
        name: "Languages",
        icon: <IoCode className='text-3xl text-[#FD6F00] text-end '/>,
        types: <Language/>
    },
    {
        id: 2,
        name: "Libraries & Framworks",
        icon: <PiBracketsCurlyBold className='text-3xl text-[#FD6F00] text-end '/>,
        types: <Libraries/>
    },
    {
        id: 3,
        name: "Tools",
        icon: <TbTool className='text-3xl text-[#FD6F00] text-end '/>,
        types: <Tools/>
    }
  ]  
  return (
    <div className='w-[1140px] mx-auto h-auto my-5 gap-10 flex flex-col justify-center items-center'>
        <div className='w-[70%] mx-auto'>
            <div className='flex flex-col justify-center items-center gap-3 py-10'>
                <h1 className='text-4xl font-semibold px-1'>Skills</h1>
                <p className='text-slate-600'>My Technical Skills</p>
            </div>
            <div className='grid grid-cols-2 gap-5'>
                {
                    skillname.map((item)=>{
                        return(
                            <SkillsType item = {item} key = {item.id}/>
                            
                        )
                    })
                }
            </div>
           
        </div>
    </div>
  )
}

export default Services
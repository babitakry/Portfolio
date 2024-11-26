import React from 'react'
import { MdExpandMore } from "react-icons/md";

function SkillsType({item}) {
    console.log('Item = ',item);
  return (
    <div className='px-2'>
        <div className='flex gap-x-3 items-center'>
            {item?.icon}
            <div className='text-2xl font-semibold'>{item?.name}</div>
            <div className='flex-1 flex justify-end'>
                <MdExpandMore className='text-3xl text-[#FD6F00] text-end '/>
            </div>
        </div>
        <p className='text-slate-600 px-10 text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit! Vel.</p>
    </div>
  )
}

export default SkillsType
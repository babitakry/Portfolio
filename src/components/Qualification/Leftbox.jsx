import React from 'react'
import { FaCalendarAlt } from "react-icons/fa";

function Leftbox({item}) {
  return (
    <div className='w-[42%] flex flex-col justify-center items-start text-start'>
        <h1 className='text-xl'>{item?.coursename}</h1>
        <p className='text-slate-400'>{item?.collegename}</p>

        <div className='flex justify-center items-center gap-3 text-gray-400 mt-3'>
            <FaCalendarAlt />
            <p className='text-start'>{item?.year}</p>
        </div>
    </div>
  )
}

export default Leftbox
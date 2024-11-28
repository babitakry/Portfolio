import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Language from './Language';


function SkillsType({item}) {
    console.log('Item = ',item);
    
    const [isOpen,setIsOpen] = useState(false);

    let expandFunc = () => {
      setIsOpen(true);

    }

    let shrinkFunc = () => {
      setIsOpen(false);
    }
  return (
    <div className='px-2'>
        <div className='flex gap-x-3 items-center'>
            {item?.icon}
            <div className='text-2xl font-semibold'>{item?.name}</div>
            <div className='flex-1 flex justify-end'>

              {
                isOpen ? <IoIosArrowUp onClick={shrinkFunc} className='text-3xl text-[#FD6F00] text-end'/> : <IoIosArrowDown onClick={expandFunc} className='text-3xl text-[#FD6F00] text-end '/>
              }
                
                
            </div>
        </div>
        <p className='text-gray-400 px-10 text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit! Vel.</p>
        <div className=''>
          {
            isOpen && item.types
          }
        </div>
    </div>
  )
}

export default SkillsType
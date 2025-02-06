import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";



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
    <div className='sm:px-2'>
        <div className='flex gap-x-2 sm:gap-x-3 items-center'>
            {item?.icon}
            <div className='text-2xl font-semibold text-start'>{item?.name}</div>
            <div className='flex-1 flex justify-end'>

              {
                isOpen ? <IoIosArrowUp onClick={shrinkFunc} className='text-2xl sm:text-3xl text-[#FD6F00] text-end'/> : <IoIosArrowDown onClick={expandFunc} className='text-2xl sm:text-3xl text-[#FD6F00] text-end '/>
              }
                
            </div>
        </div>
        <p className='text-gray-400 px-11 text-start'>{item?.desc}</p>
        <div className=''>
          {
            isOpen && item.types
          }
        </div>
    </div>
  )
}

export default SkillsType
import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function SkillsType({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const expandFunc = () => setIsOpen(true);
  const shrinkFunc = () => setIsOpen(false);

  return (
    <div className='sm:px-2'>
      <div className='flex gap-x-2 sm:gap-x-3 items-center'>
        <div className='text-xl sm:text-2xl'>
          {item?.icon}
        </div>
        <div className='text-lg sm:text-2xl font-semibold text-start'>
          {item?.name}
        </div>
        <div className='flex-1 flex justify-end'>
          {
            isOpen ? (
              <IoIosArrowUp
                onClick={shrinkFunc}
                className='text-xl sm:text-3xl text-[#FD6F00]'
              />
            ) : (
              <IoIosArrowDown
                onClick={expandFunc}
                className='text-xl sm:text-3xl text-[#FD6F00]'
              />
            )
          }
        </div>
      </div>

      <p className='text-sm sm:text-base text-gray-400 px-11 text-start'>
        {item?.desc}
      </p>

      <div>
        {isOpen && item.types}
      </div>
    </div>
  );
}

export default SkillsType;

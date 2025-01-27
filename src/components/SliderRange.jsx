import React from 'react';

function SliderRange({ length, knowledge }) {
  return (
    <div className="w-[80%] flex flex-col justify-start gap-2 p-2">
      <label className="font-bold text-start">{knowledge}</label>
      <input
        type="range"
        min={6}
        max={100}
        value={length}
        // onChange={(e) => setLength(e.target.value)}
        className="
          w-full sm:h-2 rounded-lg cursor-pointer 
          bg-gray-200
          accent-[#FD6F00]
          outline-none
          focus:outline-none
        "
      />
    </div>
  );
}

export default SliderRange;

import React from 'react'

function SliderRange({length,knowledge}) {
  
  return (
    <div className='w-[80%] flex flex-col justify-start gap-2 p-2'>
        <label className='font-bold text-start'> {knowledge}</label>
        <input 
        type="range"
        min={6}
        max={100} 
        value={length}
        onChange={(e)=>{setLength(e.target.value)}}
        className='w-full cursor-pointer'/>
    </div>
  )
}

export default SliderRange
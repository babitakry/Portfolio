import React from 'react'


function LangCompo({item,length}) {
    
    return (
    <div className='w-full flex flex-col justify-start gap-2 p-2'>
        <div className='flex justify-between '>
            {item.icon}
            <label className='font-bold text-start'> {item.name}</label>
        </div>
        <input 
        type="range"
        min={6}
        max={100} 
        value={length}
        //onChange={(e)=>{setLength(e.target.value)}}
        className='w-full cursor-pointer'/>
    </div>
  )
}

export default LangCompo
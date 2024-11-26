import React from 'react'
import Virat from '../assets/Virat.webp'

function ImageSection() {
  return (
    <div className='flex justify-center items-end h-screen border-2 '>
        <div class="w-80 h-80 border-2 rounded-full relative">
            <img src={Virat} className='absolute bottom-6 w-full h-auto' alt="" />
        </div>
    </div>
  )
}

export default ImageSection
import React from 'react'
import MyAvatar from '../assets/myavatar.jpg';

function ImageSection() {
  return (
    <div className='flex justify-center items-end h-screen'>
        <div class="w-80 h-80 relative">
            <img src={MyAvatar} className='absolute bottom-12 w-full h-auto' alt="" />
        </div>
    </div>
  )
}

export default ImageSection
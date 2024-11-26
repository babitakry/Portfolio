import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import ImageSection from './ImageSection';

function Introduction() {
  return (
    <div className='w-[1140px] mx-auto h-[425px] border-2 my-5 gap-10 flex'>
        <div className='w-[58%] flex flex-col items-start border-2 px-4 py-8 gap-y-3'>
            <p className='text-sm font-bold'>Hi I am</p>
            <p className='text-3xl font-bold text-[#FD6F00]'>Babita Kumari</p>
            <div className='text-5xl font-bold'>UI & UX</div>
            <div className='text-5xl font-bold px-28'>Designer</div>
            <p className='text-start text-slate-600 py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odit maiores eligendi, neque dignissimos in dolorem aliquid vel accusamus facilis, corporis sunt labore quas nostrum.</p>
            <div>
                <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2 ">Hire Me</button>
            </div>
        </div>
        <div className='w-[48%] h-full flex flex-col gap-'>
            <ImageSection/>
            <div className='flex justify-center items-end gap-4 p-5 border-2'>
                <FaFacebook className=''/>
                <FaXTwitter />
                <FaInstagram />
                <FaLinkedin />
            </div>
        </div>
    </div>
  )
}

export default Introduction
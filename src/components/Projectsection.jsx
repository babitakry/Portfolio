import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import Razorpay from "../assets/Razorpay.png";
import Dot from './Dot';

const Projectsection = () => {
  return (
    <div className='w-[1140px] mx-auto mt-6 py-4 '>
        <div className='w-[80%] mx-auto'>
            <h1 className='text-4xl font-semibold'>Projects</h1>
            <p className='text-slate-600 mt-3'>Most recent work</p>
        </div>

        <div className='w-[80%] h-auto mx-auto flex justify-center items-center gap-3 '>
            <div className='flex justify-around items-center'>
               <FaChevronLeft className='text-5xl text-[#FD6F00]'/>

                <div className='w-[40%] h-auto'>
                    <img src={Razorpay} alt="" />
                </div>

                <div className='w-[40%] h-auto text-start flex flex-col justify-center items-start gap-3 my-5 p-5'>
                    <h1 className='text-2xl font-bold px-1'>Project Name</h1>
                    <p className='text-slate-500 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni rem ab mollitia magnam quisquam tempora.</p>
                    <div className='w-40 h-16 flex gap-5 bg-[#FD6F00] p-4 m-1 rounded-lg text-white font-bold '>
                        <button className='h'>Check out</button>
                        <div className='flex justify-center items-center'>
                            <FaArrowRight className='text-white'/>
                        </div>
                    </div>
                </div>

                <FaChevronRight className='text-5xl text-[#FD6F00]'/>
            </div>
        </div>

        <div className='w-[80%] mx-auto flex justify-center items-center gap-1'>
            <Dot bgcolor={"bg-[#FD6F00]"}/>
            <Dot bgcolor={"bg-slate-500"}/>
            <Dot bgcolor={"bg-slate-500"}/>
            <Dot bgcolor={"bg-slate-500"}/>
            <Dot bgcolor={"bg-slate-500"}/>
        </div>
    </div>
  )
}

export default Projectsection
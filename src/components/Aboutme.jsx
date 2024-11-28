import React from 'react'
import ImageSection from './ImageSection'
import SliderRange from './SliderRange';

function Aboutme() {
    
  return (
    <div className='w-[1140px] mx-auto h-[470px] border-2 my-3 gap-5 flex'>
        <div className='w-[48%] h-full flex flex-col gap-'>
            <ImageSection/>
        </div>
        <div className='w-[52%] h-full flex flex-col items-start border-2 px-4 py-4 gap-y-3'>
            <h1 className='text-3xl font-semibold px-1'>About Me</h1>
            <p className='text-start text-slate-600 px-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odit maiores eligendi, neque dignissimos in dolorem aliquid vel accusamus facilis, corporis sunt labore quas nostrum.</p>

            <SliderRange length = {89} knowledge={"UX"}/>
            <SliderRange length = {69} knowledge={"Website Design"}/>
            <SliderRange length = {92} knowledge={"App Design"}/>
            <SliderRange length = {39} knowledge={"Graphic Design"}/>

        </div>
    </div>
  )
}

export default Aboutme
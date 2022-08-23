import React from 'react';
import work from '../assets/Work.png'



export default function Aboutus() {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <h1 className='mx-auto text-bold text-[#00df9a] text-center pb-4 md:text-4xl sm:text-3xl text-2xl'>About us</h1>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 py-8'>
      <img className='w-[60%] md:w-[90%] md:h-[80%] h-[60%] my-auto mx-auto' src={work} alt="/" />
        <div className='flex flex-col justify-center pt-4'>
          <h1 className='text-bold md:text-2xl sm:text-xl text-xl'>Know what we do...</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam consequatur dignissimos provident? Minus, reiciendis magnam consequatur, expedita dolores, beatae illum repellendus aspernatur aliquid numquam error.</p>
          <button className='bg-black w-[200px] rounded-md font-medium my-4 mx-auto md:mx-0 py-1 text-[#00df9a]'>Read More</button>
        </div>
      </div>
    </div>
  )
}

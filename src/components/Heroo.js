import React from 'react';
import { Link } from 'react-router-dom';
import Typed from 'react-typed';


export default function Heroo() {
  
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto flex text-center flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>TRAVEL WITH FUN &#9992;</p>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold md:py-2'>Safar Apka, Khayal humara</h1>
        <div className='flex justify-center items-center pt-1'>
          <p className='md:text-2xl sm:text-1.5xl text-xl font-bold'>We offer </p>
          <Typed className='md:text-2xl sm:text-1.5xl text-xl font-bold pl-2' strings={[' Best deal','Best services', 'Best package']} typeSpeed={40} backSpeed={40} loop/>
        </div>
        <p className='md:text-xl sm:text-md text-gray-400 pt-2'>For exciting offer and discount, Register now</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-4 mx-auto py-1 text-black hover:opacity-70 hover:scale-105 duration-300'><Link to='/registration'>Register Now</Link></button>
      </div>
      
    </div>
  )
}

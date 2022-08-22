import React from 'react';
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';
// import { Link } from 'react-router-dom';
// import service1 from '../assets/service1.png';

export default function Service() {
  return (
    <div className='w-full py-16 px-4 bg-white'>
      <h1 className='mx-auto text-bold text-[#00df9a] text-center pb-10 md:text-4xl sm:text-3xl text-2xl'>Services</h1>
       <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-10 mx-auto mt-[-2rem] bg-white' src={service1} alt="" />
            <h2 className='font-bold text-xl text-center py-4'>Get Best Deals</h2>
            <p className='text-center'>Pay through our application and save thousands and get amazing rewards</p>
            <a className='font-medium mx-auto text-black' href='https://pratiksingh27.github.io/traveladvice/' target="_blank" rel="noreferrer">
              <button className='text-center bg-[#00df9a] w-[200px] rounded-md font-medium my-4 py-1 mx-auto text-black'>Explore</button>
              </a>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-10 mx-auto mt-[-2rem] bg-gray' src={service2} alt="" />
            <h2 className='font-bold text-xl text-center py-4'>Covid Safe</h2>
            <p className='text-center'>We have all the hotels that have all the precaution for a covid safe environment and also have a healthy staff.</p>
            <button className='text-center bg-black w-[200px] rounded-md font-medium my-4 mx-auto py-1 text-[#00df9a]'>Explore</button>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-10 mx-auto mt-[-2rem] bg-white' src={service1} alt="" />
            <h2 className='font-bold text-xl text-center py-4'>Find the best</h2>
            <p className='text-center'>Find the best hotels and places to visit near you in a single click</p>
            <a className='font-medium mx-auto text-black' href='https://pratiksingh27.github.io/traveladvice/' target="_blank" rel="noreferrer">
              <button className='text-center bg-[#00df9a] w-[200px] rounded-md font-medium my-4 py-1 mx-auto text-black hover:opacity-80'>Explore</button>
              </a>
          </div>
       </div>
    </div>
  )
}

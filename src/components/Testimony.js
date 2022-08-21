import React from 'react';
import user2 from '../assets/user2.jpg';
import {
  FaStar ,FaStarHalfAlt
} from 'react-icons/fa';

export default function Testimony() {
  return (
    <div className='w-full py-16 px-4 bg-white'>
      <h1 className='mx-auto text-bold text-[#00df9a] text-center pb-10 md:text-3xl sm:text-2xl text-xl'>What People Think...</h1>
       <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-10 mx-auto mt-[-2rem] bg-white rounded-full' src={user2} alt="" />
            <h2 className='font-bold text-xl text-center py-4'>Rahul Dhote</h2>
            <p className='text-left'>Pay through our application and save thousands and get amazing rewards</p>
            <p className='text-left flex py-2 space-x-1'><FaStar size={20} color='#ffa534'/> <FaStar size={20} color='#ffa534' /> <FaStar size={20} color='#ffa534' /> <FaStar size={20} color='#ffa534' /> <FaStarHalfAlt size={20} color='#ffa534'/> </p>
            {/* <button className='text-center bg-[#00df9a] w-[200px] rounded-md font-medium my-4 mx-auto py-1 text-black'>Explore</button> */}
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-10 mx-auto mt-[-2rem] bg-gray rounded-full' src={user2} alt="" />
            <h2 className='font-bold text-xl text-center py-4'>Pratik singh</h2>
            <p className='text-left'>We have all the hotels that have all the precaution for a covid safe environment and also have a healthy staff.</p>
            <p className='text-left flex py-2 space-x-1'><FaStar size={20} color='#ffa534'/> <FaStar size={20} color='#ffa534' /> <FaStar size={20} color='#ffa534' /> <FaStar size={20} color='#ffa534' /> <FaStar size={20} color='#ffa534' /> </p>
            {/* <button className='text-center bg-black w-[200px] rounded-md font-medium my-4 mx-auto py-1 text-[#00df9a]'>Explore</button> */}
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-10 mx-auto mt-[-2rem] bg-white rounded-full' src={user2} alt="" />
            <h2 className='font-bold text-xl text-center py-4'>Rahul Khawse</h2>
            <p className='text-left'>Find the best hotels and places to visit near you in a single click</p>
            <p className='text-left flex py-2 space-x-1'><FaStar size={20} color='#ffa534'/> <FaStar size={20} color='#ffa534' /> <FaStar size={20} color='#ffa534' /> <FaStar size={20} color='#ffa534' /> <FaStarHalfAlt size={20} color='#ffa534'/> </p>
            {/* <button className='text-center bg-[#00df9a] w-[200px] rounded-md font-medium my-4 mx-auto  py-1 text-black'>Explore</button> */}
          </div>
       </div>
    </div>
  )
}

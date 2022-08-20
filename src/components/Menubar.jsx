import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
// import styled from 'styled-components';
// import logo from '../assest/logo.png';

export default function Menubar() {
  const [nav, setNav] = useState(false)

  const handleNav =() =>{
    setNav(!nav)
  }
  return (
    <div className='flex  justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-2xl font-bold text-[#00df9a]'>Shubh_Yatra</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Gallery</li>
        <li className='p-4'>Services</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div onClick={handleNav} className ='block md:hidden'>
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        {/* <AiOutlineMenu size={20} /> */}
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[50%] border-r h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out'}>
      <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Shubh_Yatra</h1>
        <ul className='pt-0 uppercase p-4'>
        <li className='p-4 border-b border-gray-600'>Home</li>
        <li className='p-4 border-b border-gray-600'>About</li>
        <li className='p-4 border-b border-gray-600'>Gallery</li>
        <li className='p-4 border-b border-gray-600'>Services</li>
        <li className='p-4'>Contact</li>
        </ul>
      </div>
    </div>
  )
  
}
// const Nav = styled.nav;

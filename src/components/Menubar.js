import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import { Outlet } from 'react-router-dom';

import { NavLink } from 'react-router-dom';

export default function Menubar() {
  const [nav, setNav] = useState(false)

  const handleNav =() =>{
    setNav(!nav)
  }
  return (
    <div className='flex  justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-2xl font-bold text-[#B00E15]'><a href='/'>Shubh_Yatra</a></h1>
      <ul className='hidden md:flex'>
        <li className='p-4'><NavLink to="/">Home</NavLink></li>
        <li className='p-4'><NavLink to="/about">About</NavLink></li>
        <li className='p-4'><NavLink to="/gallery">Gallery</NavLink></li>
        <li className='p-4'><NavLink to="/services">Services</NavLink></li>
        <li className='p-4'><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <div onClick={handleNav} className ='block md:hidden'>
        {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20} />}
        {/* <AiOutlineMenu size={20} /> */}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[50%] border-r h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out'}>
      <h1 className='w-full text-3xl font-bold text-[#B00E15] m-4'>Shubh_Yatra</h1>
        <ul className='pt-0 uppercase p-4'>
        <li className='p-4 border-b border-gray-600'><NavLink to="/">Home</NavLink></li>
        <li className='p-4 border-b border-gray-600'><NavLink to="/about">About</NavLink></li>
        <li className='p-4 border-b border-gray-600'><NavLink to="/gallery">Gallery</NavLink></li>
        <li className='p-4 border-b border-gray-600'><NavLink to="/services">Services</NavLink></li>
        <li className='p-4'><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
      <Outlet />
    </div>
  )
  
}
// const Nav = styled.nav;

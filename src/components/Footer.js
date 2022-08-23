import React from 'react';
import {
  FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare
} from 'react-icons/fa';
import { Link} from 'react-router-dom';

export default function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8 text-gray-300'>
      <div>
      <h1 className='w-full text-2xl font-bold text-[#00df9a]'>Shubh_Yatra</h1>
      <p className='py-4'> Nulla possimus illum, ut sequi facere saepe distinctio impedit iste a provident, nihil vitae cum nemo quam, odio placeat at velit veniam molestiae? Iusto, fugit ducimus.</p>
      <div className='flex md:w-[75%] my-6 justify-between'>
        <FaFacebookSquare size={25} />
        <FaInstagramSquare size={25} />
        <FaLinkedin size={25} />
        <FaTwitterSquare size={25} />
      </div>
      </div>

      {/* footer quick links */}
      <div className='col-spam-2 flex justify-between  py-4 mt-6'>
          <div>
            <h4 className='font-medium text-gray-400'>Legal</h4>
            <ul>
              <li className='py-2 text-sm'>Policy</li>
              <li className='py-2 text-sm'>Terms</li>
              <li className='py-2 text-sm'>Claims</li>
            </ul>
          </div>
          <div>
            <h4 className='font-medium text-gray-400'>Support</h4>
            <ul>
              <li className='py-2 text-sm'>Documentation</li>
              <li className='py-2 text-sm'>Pricing</li>
              <li className='py-2 text-sm'>Guides</li>
              <li className='py-2 text-sm'>API status</li>
            </ul>
          </div>
          <div>
            <h4 className='font-medium text-gray-400'>Company</h4>
            <ul>
              <li className='py-2 text-sm'><Link to="/about">About Us</Link></li>
              <li className='py-2 text-sm'><Link to="/gallery">Gallery</Link></li>
              <li className='py-2 text-sm'><a className=' mx-auto ' href='https://pratiksingh27.github.io/traveladvice/' target="_blank" rel="noreferrer">Tour location</a></li>
              <li className='py-2 text-sm'><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
      </div>
      
    </div>
  )
}

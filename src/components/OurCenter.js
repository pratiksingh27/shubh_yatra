import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import hero from '../assets/hero.png';
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';
import {
  FaFacebookSquare
} from 'react-icons/fa';

export default function OurCenter() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3rld2do', 'template_ep5k7yr', form.current, 'agOssSMp4nkQzA2IO')
      .then((result) => {
          console.log(result.text);
          alert("message send");
          window.location.reload(true);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <>
    <div className='bg-white w-full py-16'> 
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
    <img className='w-[90%] md:h-[250px] mx-auto' src={hero} alt="/" />
    <form className='lg:grid-cols-3 py-16 shadow-xl w-full px-8 md:mx-auto md:w-full rounded-lg' ref={form} onSubmit={sendEmail}>
      <h1 className='font-bold'>Ask Us A Question</h1>
      <div className='py-8'>
      <label>Name</label><br></br>
      <input className='p-2 outline flex w- rounded-md text-black mr-2 md:w-full w-full' type="text" name="user_name" placeholder='Enter your Name' />
      </div>
      <div className='py-8'>
      <label>Email</label><br></br>
      <input className='p-2 outline flex w-50% rounded-md text-black mr-2 md:w-full w-full' type="email" name="user_email" placeholder='Enter Your Email'/>
      </div>
      <div className='py-8'>
      <label>Message</label><br></br>
      <textarea className='p-2 outline flex w-50% rounded-md text-black mr-2 md:w-full w-full' name="message" placeholder='Write us a message'/>
      </div>
      <input className='bg-[#00df9a] w-[200px] rounded-md font-medium my-4 mx-auto py-1 text-black' type="submit" value="Send" />
    </form>
    
    {/* location data */}
    

    </div>
    
    </div>
    <div className='w-full py-16 px-4 bg-white'>
      <h1 className='mx-auto text-bold text-[#00df9a] text-center pb-10 md:text-4xl sm:text-3xl text-2xl'>Our Center</h1>
       <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-10 mx-auto mt-[-2rem] bg-white' src={service1} alt="" />
            <h2 className='font-bold text-xl text-center py-4'>Get Best Deals</h2>
            <p className='text-center'>Pay through our application and save thousands and get amazing rewards</p>
            <div className='text-center rounded-md font-medium my-4 mx-auto py-1 flex'><FaFacebookSquare size={25} /><p>+7987645632</p></div>
            {/* <button className='text-center bg-[#00df9a] w-[200px] rounded-md font-medium my-4 mx-auto py-1 text-black'>Explore</button> */}
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-10 mx-auto mt-[-2rem] bg-gray' src={service2} alt="" />
            <h2 className='font-bold text-xl text-center py-4'>Covid Safe</h2>
            <p className='text-center'>We have all the hotels that have all the precaution for a covid safe environment and also have a healthy staff.</p>
            <div className='text-center rounded-md font-medium my-4 mx-auto py-1 flex'><FaFacebookSquare size={25} /><p>+7987645632</p></div>
            {/* <button className='text-center bg-black w-[200px] rounded-md font-medium my-4 mx-auto py-1 text-[#00df9a]'>Explore</button> */}
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-10 mx-auto mt-[-2rem] bg-white' src={service1} alt="" />
            <h2 className='font-bold text-xl text-center py-4'>Find the best</h2>
            <p className='text-center'>Find the best hotels and places to visit near you in a single click</p>
            <div className='text-center rounded-md font-medium my-4 mx-auto py-1 flex'><FaFacebookSquare size={25} /><p>+7987645632</p></div>
            {/* <button className='text-center bg-[#00df9a] w-[200px] rounded-md font-medium my-4 mx-auto  py-1 text-black'>Explore</button> */}
          </div>
       </div>
    </div>
    </>
  )
}

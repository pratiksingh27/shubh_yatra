import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import us from '../assets/us.png';
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';
import {
   FaPhoneAlt
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
    <img className='w-[90%] md:h-[100%] mx-auto' src={us} alt="/" />
    <form className='lg:grid-cols-3 py-16 shadow-xl w-full px-8 md:mx-auto md:w-full rounded-lg' ref={form} onSubmit={sendEmail}>
      <h1 className='font-bold'>Ask Us A Question</h1>
      <div className='py-4'>
      <label>Name</label><br></br>
      <input className='p-2 outline flex w- rounded-md text-black mr-2 md:w-full w-full' type="text" name="user_name" placeholder='Enter your Name' />
      </div>
      <div className='py-4'>
      <label>Email</label><br></br>
      <input className='p-2 outline flex w-50% rounded-md text-black mr-2 md:w-full w-full' type="email" name="user_email" placeholder='Enter Your Email'/>
      </div>
      <div className='py-4'>
      <label>Message</label><br></br>
      <textarea className='p-2 outline flex w-50% rounded-md text-black mr-2 md:w-full w-full' name="message" placeholder='Write us a message'/>
      </div>
      <input className='bg-[#B00E15] w-[200px] rounded-md font-medium my-4 mx-auto py-1 text-white' type="submit" value="Send" />
    </form>
    
    {/* location data */}
    

    </div>
    
    </div>
    <div className='w-full py-16 px-4 bg-white'>
      <h1 className='mx-auto text-bold text-[#B00E15] text-center pb-10 md:text-4xl sm:text-3xl text-2xl'>Our Centers</h1>
       <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-10 mx-auto mt-[-2rem] bg-white' src={service1} alt="" />
            <h2 className='font-bold text-xl text-center py-4'>Office</h2>
            <h2 className='font-medium text-xl text-center'> Jaipur, Rajasthan</h2>
            <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, libero.</p>
            <div className='text-center rounded-md font-medium my-4 mx-auto py-1 flex'><FaPhoneAlt size={22} className="mr-1" /><p>+7987645632</p></div>
            {/* <button className='text-center bg-[#B00E15] w-[200px] rounded-md font-medium my-4 mx-auto py-1 text-black'>Explore</button> */}
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-10 mx-auto mt-[-2rem] bg-gray' src={service2} alt="" />
            <h2 className='font-bold text-xl text-center py-4'>Head-Office</h2>
            <h2 className='font-medium text-xl text-center'>Bangalore, karnataka</h2>
            <p className='text-center'>We have all the hotels that have all the precaution for a covid safe environment and also have a healthy staff.</p>
            <div className='text-center rounded-md font-medium my-4 mx-auto py-1 flex'><FaPhoneAlt size={22} className="mr-1" /><p>+7987645632</p></div>
            {/* <button className='text-center bg-black w-[200px] rounded-md font-medium my-4 mx-auto py-1 text-[#B00E15]'>Explore</button> */}
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-10 mx-auto mt-[-2rem] bg-white' src={service1} alt="" />
            <h2 className='font-bold text-xl text-center py-4'>Office</h2>
            <h2 className='font-medium text-xl text-center'>Mumbhi, M.H</h2>
            <p className='text-center'>Find the best hotels and places to visit near you in a single click</p>
            <div className='text-center rounded-md font-medium my-4 mx-auto py-1 flex'><FaPhoneAlt size={22} className="mr-1" /><p>+7987645632</p></div>
            {/* <button className='text-center bg-[#B00E15] w-[200px] rounded-md font-medium my-4 mx-auto  py-1 text-black'>Explore</button> */}
          </div>
       </div>
    </div>
    <div className="mapouter w-full py-16 px-4">
      <div className="gmap_canvas max-w-[1240px] mx-auto">
        <iframe className='w-[100%] h-[350px]' id="gmap_canvas" src="https://maps.google.com/maps?q=redbus%20booking&t=&z=5&ie=UTF8&iwloc=&output=embed" ></iframe>
        </div>
        </div>
    </>
  )
}

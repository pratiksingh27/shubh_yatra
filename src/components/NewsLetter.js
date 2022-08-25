import React from 'react';

export default function NewsLetter() {
  // const sendMsg = () =>{
  //   console.log("hello")
  // }

  return (
    <div className='w-full py-16 text-white px-4 my-auto'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 justify-center'>
      <div className='lg:col-span-2 px-4 my-4'>
        <h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-2'>Want regular update regarding offer and discount?</h1>
        <p>Sign up to our newsletter and stay up to date</p>
      </div>
      <div className='my-4 px-4' > 
        <div className='flex flex-col sm:flex-row items-center justify-between w-full mx-auto '>
            <input className='p-2 flex w-full rounded-md text-black mr-2' type="email" name='user_email' placeholder='Enter Email'/>
            <button className='bg-[#B00E15] w-[200px] rounded-md font-medium my-4 px-4 mx-auto py-1 text-white' >Notify Me</button>
        </div>
        <p>We care about the protection of your data. Read our <span className='text-[#B00E15]'>Privacy Policy</span>.</p>
      </div>
      
      </div>
    </div>
  )
}

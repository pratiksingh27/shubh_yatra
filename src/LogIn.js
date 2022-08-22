import React from 'react';
import form from './assets/form.png'

export default function LogIn() {
  return (
    <>

      <div className="bg-white max-w-[1240px] mx-auto my-8 grid md:grid-cols-2">
        <div>
          <img className='h-[400px] justify-center mx-auto' src={form} alt="" />
        </div>
        <div>
          
          <form
            className="lg:grid-cols-3 py-16 shadow-xl w-full px-8 md:mx-auto md:w-full rounded-lg">
            <h1 className="font-bold text-3xl md:2xl">Sign In</h1>
            
            {/* Email part */}
            <div className="py-8">
              <input
                className="p-2 flex w-50% rounded-md text-black mr-2 md:w-full w-full"
                type="email"
                name="email" required
                placeholder="Enter Your Email"
              /><hr></hr>
            </div>
            {/* password part */}
            <div className="py-4">
              <input
                className="p-2 flex w- rounded-md text-black mr-2 md:w-full w-full"
                type="password"
                name="password" required
                placeholder="Your Password" 
              /><hr></hr>
            </div>
          {/* button part */}
            <input
              className="bg-[#00df9a] w-[200px] rounded-md font-medium my-4 mx-auto py-1 text-black hover:opacity-70 hover:scale-105 duration-300"
              type="submit"
              value="LogIn"
            />
          </form>
        </div>
      </div>
    </>
  )
}

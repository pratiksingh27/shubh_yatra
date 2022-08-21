import React from 'react'
import hero from '../assets/hero.png'

export default function GridGallery({ images }) {
  return (
    <>
    <div className=' bg-white '>
      <div className='max-w-[1240px] mx-auto grid grid-cols-2 gap-2 '>
      {images && images.map(() => (
        <div className='relative bg-black opacity-70 mx-auto hover:opacity-100' >
          <div className='absolute insert-0 z-10 flex'>
            {/* <div className='aboslute insert-0 z-10'>

            
            </div> */}
            <div className='mx-auto z-10 self-center uppercase tracking-widest text-sm hover:hidden'>
              
              </div>
              
          </div>
          
      <img src={hero} alt=" "/>
      </div>))}
      </div>
    </div>

   
    </>
  )
}

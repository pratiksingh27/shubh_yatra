import React from 'react'
import work from '../assets/Work.png'
import amico from '../assets/amico.png'

export default function Aboutus2() {
  return (
    <div className='w-full bg-white py-16 px-4 '>
      <h1 className='mx-auto text-bold text-[#B00E15] text-center pb-4 md:text-4xl sm:text-3xl text-3xl'>About us</h1><hr className='w-[15%] mx-auto '></hr>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 py-8'>
        <img className='w-[60%] h-60% md:w-[90%] md:h-[80%] my-auto mx-auto' src={work} alt="/" />
        <div className='flex flex-col justify-center pt-4 py-8'>
          <h1 className='text-bold md:text-2xl sm:text-xl text-xl'>Know what we do...</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam consequatur dignissimos provident? Minus, reiciendis magnam consequatur, expedita dolores, beatae illum repellendus aspernatur aliquid numquam error.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam consequatur dignissimos provident? Minus, reiciendis magnam consequatur, expedita dolores, beatae illum repellendus aspernatur aliquid numquam error.</p>
          {/* <button className='bg-black w-[200px] rounded-md font-medium my-4 mx-auto md:mx-0 py-1 text-[#B00E15]'>Read More</button> */}
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto py-8'>
      <h1 className='text-bold md:text-2xl sm:text-xl text-xl'>Know How we do...</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dicta dolorem quae iusto, saepe, fuga esse atque tenetur magni id aut fugit porro, voluptatibus quis reprehenderit! Asperiores debitis obcaecati soluta commodi beatae quod adipisci rerum, officia aliquam, esse, mollitia eum veniam ratione voluptas veritatis autem omnis repellendus corrupti sunt itaque quibusdam! Reprehenderit explicabo consectetur repudiandae aliquid labore neque laboriosam culpa id omnis aperiam sapiente incidunt reiciendis asperiores, expedita, laudantium ea molestiae commodi nobis dignissimos. Alias soluta voluptatem quia sint eligendi, modi veritatis fugit amet neque quidem sequi accusamus porro hic culpa sunt deleniti laudantium voluptatum et possimus ab natus omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className='max-w-[1240px] mx-auto '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        
        <div className='flex flex-col justify-center pt-4'>
          <h1 className='text-bold md:text-2xl sm:text-xl text-xl'>Our history</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam consequatur dignissimos provident? Minus, reiciendis magnam consequatur, expedita dolores, beatae illum repellendus aspernatur aliquid numquam error.Necessitatibus dicta dolorem quae iusto, saepe, fuga esse atque tenetur magni id aut fugit porro, voluptatibus quis reprehenderit! Asperiores debitis obcaecati soluta commodi beatae quod adipisci rerum, officia aliquam, esse, mollitia eum veniam ratione voluptas veritatis autem omnis repellendus corrupti sunt itaque quibusdam! Reprehenderit explicabo consectetur repudiandae aliquid labore neque laboriosam culpa id omnis aperiam sapiente incidunt reiciendis asperiores, expedita, laudantium ea molestiae commodi nobis dignissimos. Alias soluta voluptatem quia sint eligendi, modi veritatis fugit amet neque quidem sequi accusamus porro hic culpa sunt deleniti laudantium voluptatum et possimus ab natus omnis.</p>
          {/* <button className='bg-black w-[200px] rounded-md font-medium my-4 mx-auto md:mx-0 py-1 text-[#B00E15]'>Read More</button> */}
        </div>
        <img className='w-[60%] md:h-[60%] mx-auto my-auto' src={amico} alt="/" />
      </div>
        </div>
    </div>
  )
}

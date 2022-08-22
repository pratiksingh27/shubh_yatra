import React from 'react';

export default function ImgCard({image}) {

  return (
    <>
      <div className='w-full bg-slate-200'>
        <a href={image.webformatURL} target="new">
          <img src={image.webformatURL} alt="" className='w-full h-auto'/>
        </a>
        <p className='m-4 md:text-lg'>Image by:<strong>{image.user}</strong></p>
        <p className='m-4 md:text-lg'>Iags:<strong>{image.tags}</strong></p>
        <p className='m-4 md:text-lg'>Resolution:<strong>{image.imageHeight} X {image.imageWidth}</strong></p>
      </div>
    </>
  )
}

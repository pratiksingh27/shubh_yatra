import React from 'react'
import Footer from './components/Footer'
import GridGallery from './components/GridGallery'


export default function Gallery() {
  const images = [
    <img src="./hero.png" alt="" /> ,
    <img src="./logo.png" alt="" /> ,
    "./logo.png",
    "./logo.png",
    "./logo.png",
    "./logo.png",
    "./logo.png",
    "./logo.png",
    "./logo.png",
    "./logo.png",
    "./logo.png",
    "./logo.png",
  ];
  
  
  return (
    <div>
      <GridGallery images={images} />
      <Footer/>
      
    </div>
  )
}




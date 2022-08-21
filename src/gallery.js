// import React from 'react'
import Footer from './components/Footer'
import React from 'react'
import GridGallery from './components/GridGallery'


export default function Gallery() {
  const images = [
    "./hero.png",
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
    "./logo.png",
  ];
  
  
  return (
    <div>
      <GridGallery images={images} />
      <Footer/>
      
    </div>
  )
}




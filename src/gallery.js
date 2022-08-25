import React, {useState, useEffect} from 'react';
import Footer from './components/Footer'
import ImgCard from './components/ImgCard';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");


  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo`)
    .then((res)=> res.json())
    .then((data) => {
      setImages(data.hits);
      setIsLoading(false);
    })
    .catch(err=> console.log(err));
  }, [term]);

  return (
    <>
    {/* Search system code */}
    <div className='bg-white overflow-hidden mt-24'> 
      <div className='w-screen flex items-center justify-center h-40  bg-[#B00E15] overflow-x-hidden inset-0 z-50 '>
        <input type="search" name="search" id="" placeholder="Search Anything..." className='w-1/4 outline-none border border-r-0 border-slate-300 h-10 p-4 bg-white rounded-lg rounded-r-none' onChange={(e) => setTerm(e.target.value)} /><i className='fa fa-search border-l-0 border-slate-300 h-10 leading-10 pr-4 bg-white rounded-lg rounded-l-none' ></i>
      </div>
      {/* code to display error or photo */}
      {!isLoading && images.length ===0 && (
        <h1 className='text-center md:text-4xl text-2xl mt-16'>No Results Found!</h1>
      )};
      {isLoading ? (
        <h1 className='text-center md:text-4xl text-2xl mt-16'>Loading....</h1>
      ) : (
        <main className='mt-16 max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-2 p-5'>
          {images.map((image) => (
            <ImgCard key={image.id} image={image} />
          ))}
        </main>
      )}
      </div>
      <Footer/>
    </>
  )
};





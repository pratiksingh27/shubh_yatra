import React from 'react';
// import './App.css';
// import Aboutus from './components/Aboutus';
// import Footer from './components/Footer';
// import Heroo from './components/Heroo';
// import ScrollTop from './components/ScrollTop';
import Menubar from './components/Menubar';
// import NewsLetter from './components/NewsLetter';
// import OurCenter from './components/OurCenter';
// import Service from './components/Service';
// import Testimony from './components/Testimony';


// react router import
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Services from './Service'; //services because service is already used
import About from './about';
import First from './first';
import Gallery from './gallery';
import Services from './services';
// import COntact from './contact';
import Contact from './contact';
// import Contact from './Contact';


export default function App() {
  return (
    
  <div className='App'>
    <BrowserRouter>
    <Menubar />
      <Routes>
        <Route path='/first' element={<First />}/> 
        <Route path='/about' element={<About />}/>
        <Route path='/gallery' element={<Gallery />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </BrowserRouter>

    {/* components link */}
  {/* <ScrollTop /> */}
  {/* <Menubar /> */}
  {/* <Heroo />
  <Aboutus />
  <NewsLetter />
  <Service /> */}
  {/* <Testimony />
  <OurCenter /> */}
  {/* <Footer /> */}
  
  </div>
  );
}

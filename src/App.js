import React from 'react';
// import './App.css';
// import Aboutus from './components/Aboutus';
// import Footer from './components/Footer';
import Heroo from './components/Heroo';
import ScrollTop from './components/ScrollTop';
import Menubar from './components/Menubar';
// import OurCenter from './components/OurCenter';

// import Service from './components/Service';
// import Testimony from './components/Testimony';
export default function App() {
  return (
  <div className='App'>
  <ScrollTop />
  <Menubar />
  <Heroo />
  {/* <Aboutus />
  <Service />
  <Testimony />
  <OurCenter />
  <Footer /> */}
  
  </div>
  );
}

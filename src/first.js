import React from 'react';
import Aboutus from './components/Aboutus';
import Footer from './components/Footer';
import Heroo from './components/Heroo';
// import ScrollTop from './components/ScrollTop';
// import Menubar from './components/Menubar';
import NewsLetter from './components/NewsLetter';
// import OurCenter from './components/OurCenter';
import Service from './components/Service';
import Testimony from './components/Testimony';

export default function first() {
  return (
    <>
      {/* <BrowserRouter>
    <Menubar />
      <Routes>
        <Route path='/first' element={<First />}/> 
        <Route path='/about' element={<About />}/>
        <Route path='/testimony' element={<Testimony />}/>
      </Routes>
    </BrowserRouter> */}

    {/* components link */}
  {/* <ScrollTop /> */}
  {/* <Menubar /> */}
  <Heroo />
  <Aboutus />
  <NewsLetter />
  <Service />
  <Testimony />
  {/* <OurCenter /> */}
  <Footer />
  
  
</>
  )
}

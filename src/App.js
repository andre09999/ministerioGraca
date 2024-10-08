import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about'
import Give from './pages/give'
import Header from './components/header';
import Headercellphone from './components/headercellphone'
import Footer from './components/footer';
import GracaKids from './pages/GracaKids';


function App() {
  const location = useLocation();

  const [isMobile, setIsMobile] = useState(false);
  
  const checkMobile = () => {   
    setIsMobile(window.innerWidth >= 600);
  };
  const isKidsPage = location.pathname === '/kids' ? true : false;
 
  useEffect(() => {

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile]);
 

  useEffect(() => {
    
    if (location.pathname === '/kids') {
      const favicon = document.getElementById('');
      console.log(favicon)
    } else {
     
    }
  }, [location.pathname]);
  return (
    <div className={isKidsPage ? 'transparent-background' : "raiz"}>

      {isMobile ? (<Header />) : ( <Headercellphone />) }
      
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/sobre' element={<About />}/>
        <Route path='/servir' element={<Give />} />
        <Route path='/kids' element={<GracaKids />}/>
      </Routes>
     <Footer/>
    </div>
  );
}


export default App;

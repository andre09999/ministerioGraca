import React, { useState, useEffect } from "react";
import './home.css'
import Pc from '../Images/pc.mp4'
import celular from '../Images/celular.mp4'

function Home() {

  const [isMobile, setIsMobile] = useState(false);
  const [celulares, setCelulares] = useState("homecell1");
  const [pc, setPc] = useState('homepc1');
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 600);
    }
    setPc('homepc1')
    setCelulares('homecell1')
    window.addEventListener('resize', handleResize);
   
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={isMobile ? celulares : pc}>
      {isMobile ? (
        <video className="homecell" src={celular} autoPlay loop muted />
      ) : (
        <video className="homepc" src={Pc} autoPlay loop muted />
      )}
    </div>
  );
}

export default Home;

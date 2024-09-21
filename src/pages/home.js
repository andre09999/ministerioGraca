import React, { useState, useEffect } from "react";
import './home.css'
import Pc from '../Images/pc.mp4'
import celular from '../Images/celular.mp4'

function Home() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 600);
    }

    window.addEventListener('resize', handleResize);
    // Chamamos handleResize() uma vez para definir o estado inicial
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="home">
      {isMobile ? (
        <video className="homecell" src={celular} autoPlay loop muted />
      ) : (
        <video className="homepc" src={Pc} autoPlay loop muted />
      )}
    </div>
  );
}

export default Home;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Instagram from '../Images/instagram.png';
import Facebook from '../Images/facebook.png';
import Youtube from '../Images/youtube.png';
import whatsapp from '../Images/whatsapp.png';
import maps from '../Images/maps.png';
import './footer.css';

function Footer() {
  const location = useLocation();
  const [video, setVideo] = useState('footerpc');
  const [video1, setVideo1] = useState('esconde');
  const [fot, setFot] = useState('content');

  const routeChange = (e) => {
    const urls = {
      'Youtube': 'https://www.youtube.com/@ministeriogracago',
      'Instagram': 'https://www.instagram.com/ministeriogracago/',
      'Facebook': 'https://www.facebook.com/profile.php?id=61557652214404',
      'whatsapp': 'https://wa.me/5562996226821?text=Gra%C3%A7a+e+paz',
      'maps': 'https://maps.app.goo.gl/RbtqRh87TPhVC1F5A',
    };
    window.open(urls[e], '_blank');
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setVideo('esconde');
        setVideo1('footercell');
      } else {
        setVideo1('esconde');
        setVideo('footerpc');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const isKidsPage = location.pathname === '/kids';
    setFot(isKidsPage ? 'esconde' : 'content');
  }, [location.pathname]);

  return (
    <div className="container1">
      <div className={`${fot}`}>
        <footer className={video}>
          <button onClick={() => routeChange('Youtube')}> <img src={Youtube} alt="Youtube" /> </button>
          <button onClick={() => routeChange('Instagram')}> <img src={Instagram} alt="Instagram" /> </button>
          <button onClick={() => routeChange('Facebook')}> <img className="facebook" src={Facebook} alt="Facebook" /> </button>
          <button onClick={() => routeChange('maps')}> <img src={maps} alt="Maps" /> </button>
          <button onClick={() => routeChange('whatsapp')}> <img src={whatsapp} alt="WhatsApp" /> </button>
        </footer>
        <footer className={video1}>
          <button onClick={() => routeChange('Youtube')}> <img src={Youtube} alt="Youtube" /> </button>
          <button onClick={() => routeChange('whatsapp')}> <img src={whatsapp} alt="WhatsApp" /> </button>
          <button onClick={() => routeChange('maps')}> <img src={maps} alt="Maps" /> </button>
          <button onClick={() => routeChange('Facebook')}> <img className="facebook" src={Facebook} alt="Facebook" /> </button>
          <button onClick={() => routeChange('Instagram')}> <img src={Instagram} alt="Instagram" /> </button>
        </footer>
      </div>
    </div>
  );
}

export default Footer;

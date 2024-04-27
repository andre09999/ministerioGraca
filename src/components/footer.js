import React, { useState, useEffect } from "react";
import Instagram from '../Images/instagram.png'
import Facebook from '../Images/facebook.png'
import Youtube from '../Images/youtube.png'
import whatsapp from '../Images/whatsapp.png'
import maps from '../Images/maps.png'
import './footer.css'
function Footer() {
  const [video, setVideo] = useState('footerpc')
  const [video1 , setVideo1] = useState('esconde')
  const routeChange = (e) =>{ 
    if(e === 'Youtube'){
      window.open('https://www.youtube.com/@ministeriogracago','_blank')
    }
    if(e === 'Instagram'){
      window.open('https://www.instagram.com/ministeriogracago/','_blank')
    }
    if(e === 'Facebook'){
      window.open('https://www.facebook.com/profile.php?id=61557652214404','_blank')
    }
    if(e === 'whatsapp'){
      window.open('https://wa.me/5562996226821?text=Gra%C3%A7a+e+paz','_blank')
    }
    if(e === 'maps'){
      window.open('https://maps.app.goo.gl/RbtqRh87TPhVC1F5A','_blank')
    }
  }

  useEffect(() => {
    if (window.innerWidth < 600) {
      setVideo('esconde')
      setVideo1('footercell')
  } else {
    setVideo1('esconde')
    setVideo('footerpc')
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth]);
  


  return (
    <div className="content">
    <footer className={video}>
        <button onClick={() => routeChange('Youtube')}> <img src={Youtube} alt="Youtube"/> </button>
        <button onClick={() => routeChange('Instagram')}> <img src={Instagram} alt="instagram"/> </button>
        <button onClick={() => routeChange('Facebook')}> <img className="facebook" src={Facebook} alt="Facebook"/> </button>
      </footer>
      <footer className={video1}>
        <button onClick={() => routeChange('Youtube')}> <img src={Youtube} alt="Youtube" /> </button>
        <button onClick={() => routeChange('whatsapp')}> <img src={whatsapp} alt="whatsapp" /> </button>
        <button onClick={() => routeChange('maps')}> <img src={maps} alt="maps"/> </button>
        <button onClick={() => routeChange('Facebook')}> <img className="facebook" src={Facebook} alt="Facebook"/> </button>
        <button onClick={() => routeChange('Instagram')}> <img src={Instagram} alt="instagram"/> </button>
    </footer>
    </div>
  );
}

export default Footer;
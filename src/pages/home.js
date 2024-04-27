import React, {useState, useEffect} from "react";
import './home.css'
import Pc from '../Images/pc.mp4'
import celular from '../Images/celular.mp4'
function Home() {
  const [video, setVideo] = useState('homepc')
  const [video1 , setVideo1] = useState('esconde')
  useEffect(() => {
    if (window.innerWidth < 600) {
      setVideo('esconde')
      setVideo1('homecell')
  } else {
    setVideo1('esconde')
    setVideo('homepc')
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.innerWidth]);
  
  return (
    <div className="home">
      <video className={video} src={Pc} autoPlay loop muted />
      <video className={video1} src={celular} autoPlay loop muted/>
    </div>
  );
}

export default Home;
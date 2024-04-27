import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './header.css'
import menu from '../Images/barra-de-menu.png'
import log from '../Images/log.png'

function Headercellphone() {
  const [nav, setNav] = useState('escondido')
  const [nav1, set1Nav] = useState(false)
  const [inicio, setinicio] = useState('inicio')
  const [sobre, setsobre] = useState('sobre')
  const [contribuir, setcontribuir] = useState('contribuir')
  const location = useLocation();

  const menuBarra = () => {
    set1Nav(!nav1)
    if (nav1 === true) setNav('mostrar')
    if ( nav1 === false) setNav('escondido')
  }

  useEffect(() => {
    console.log(location.pathname === '/')
    if (location.pathname === '/') {
      setinicio('escondido')
      setsobre('sobre')
      setcontribuir('contribuir')
    }
    if (location.pathname === '/sobre') {
      setsobre('escondido')
      setinicio('inicio')
      setcontribuir('contribuir')
    }
    if (location.pathname === '/servir') {
      setcontribuir('escondido')
      setsobre('sobre')
      setinicio('inicio')
    }
  }, [location.pathname]);

  return (
    <header className="cell">
      <div className="container">
        <Link to='/sobre' id={nav} className={`nav ${sobre}`}>Sobre</Link>
        <Link to='/' id={nav} className={`nav inicial ${inicio}`}>Pagina inicial</Link>
        <Link to='servir' className={`nav but ${contribuir}`} id={nav}>Contribuir</Link>
      </div>
      <img src={log} className="logo" alt="logo" />
      <button onClick={() => menuBarra()} className="butt">
        <img src={menu} alt="menu" />
      </button>
    </header>
  );
}

export default Headercellphone;

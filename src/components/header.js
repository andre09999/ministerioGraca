import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './header.css'

function Header() {
  const [inicio, setinicio] = useState('inicio')
  const [sobre, setsobre] = useState('sobre')
  const [contribuir, setcontribuir] = useState('contribuir')
  const [kids, setkids] = useState('kids')
  const [aut, setcont] = useState('pc')
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname === '/')
    if (location.pathname === '/') {
      setinicio('escondido')
      setsobre('sobre')
      setcontribuir('contribuir')
      setkids('kid')
      setcont('pc')
    }
    if (location.pathname === '/sobre') {
      setsobre('escondido')
      setinicio('inicio')
      setcontribuir('contribuir')
      setkids('kid')
      setcont('pc')
    }
    if (location.pathname === '/servir') {
      setcontribuir('escondido')
      setsobre('sobre')
      setinicio('inicio')
      setkids('kid')
      setcont('pc')

    }
    if (location.pathname === '/kids') {
      setkids('escondido')
      setsobre('sobre')
      setinicio('inicio')
      setcontribuir('contribuir')
      setcont('headerKids')
    }
  }, [location.pathname]);

  return (
    <header className={ `${aut}`}>
        <Link to='/sobre'  className={`nav ${sobre}`}>Sobre</Link>
        <Link to='/' className={`nav inicial ${inicio}`}>Pagina inicial</Link>
        <Link to='/servir' className={`nav but ${contribuir}`} >Contribuir</Link>
        <Link to='/kids' className={`nav child ${kids}`} >Graça Kids</Link>
        <Link to='https://gestaoweb.eklesiaonline.com.br/cadastro/7mmmU0'  target='_blank' className={`nav `}>Cadastre-se</Link>
    </header>
  );
}

export default Header;
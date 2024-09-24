import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import './header.css';
import menu from '../Images/barra-de-menu1.png';
import log from '../Images/log.png';

function Headercellphone() {
  const [nav, setNav] = useState('escondido');
  const [nav1, setNav1] = useState(false);
  const [inicio, setInicio] = useState('inicio');
  const [sobre, setSobre] = useState('sobre');
  const [contribuir, setContribuir] = useState('contribuir');
  const [kids, setKids] = useState('kids');
  const [cont, setCont] = useState('cell');
  const [cont1, setCont1] = useState('');
  const location = useLocation();

  const menuBarra = () => {
    setNav1(!nav1);
    setNav(nav1 ? 'mostrar' : 'escondido');
  };

  const closeMenu = () => {
    setNav1(false);
    setNav('escondido');
  };

  useEffect(() => {
    if (location.pathname === '/') {
      setInicio('escondido');
      setSobre('sobre');
      setContribuir('contribuir');
      setKids('kid');
      setCont('cell');
      setCont1('');
    }
    if (location.pathname === '/sobre') {
      setSobre('escondido');
      setInicio('inicio');
      setContribuir('contribuir');
      setKids('kid');
      setCont('cell');
      setCont1('');
    }
    if (location.pathname === '/servir') {
      setContribuir('escondido');
      setSobre('sobre');
      setInicio('inicio');
      setKids('kid');
      setCont('cell');
      setCont1('');
    }
    if (location.pathname === '/kids') {
      setKids('escondido');
      setSobre('sobre');
      setInicio('inicio');
      setContribuir('contribuir');
      setCont('headerKids');
      setCont1('headerKids');
    }
  
    closeMenu();
  }, [location.pathname]);

  return (
    <header className={`${cont}`}>
      <div className={`container ${cont1}`}>
        <Link to='/sobre' id={nav} className={`nav ${sobre}`} onClick={closeMenu}>Sobre</Link>
        <Link to='/' id={nav} className={`nav inicial ${inicio}`} onClick={closeMenu}>Pagina inicial</Link>
        <Link to='/servir' className={`nav but ${contribuir}`} id={nav} onClick={closeMenu}>Contribuir</Link>
        <Link to='https://gestaoweb.eklesiaonline.com.br/cadastro/7mmmU'  target='_blank' className={'nav bu'} id={nav} onClick={closeMenu}>Cadastre-se</Link>
        <Link to='/kids' className={`nav child ${kids}`} id={nav} onClick={closeMenu}>Graça Kids</Link>
      </div>
      <img src={log} className="logo" alt="logo" />
      <button onClick={menuBarra} className="butt">
        <img src={menu} alt="menu" />
      </button>
    </header>
  );
}

export default Headercellphone;

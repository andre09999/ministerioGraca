import React from "react";
import { Link } from "react-router-dom";
import './header.css'

function Header() {
  return (
    <header className="pc">
        <Link to='https://maps.app.goo.gl/RbtqRh87TPhVC1F5A' target="_blank" className={`nav `}>Localização</Link>
        <Link to='/sobre'  className={`nav`}>Sobre</Link>
        <Link to='/'  className={`nav`}>Pagina inicial</Link>
        <Link to='https://wa.me/5562996226821?text=Gra%C3%A7a+e+paz' target='_blank'className="nav response">Contato</Link>
        <Link to='servir' className={`nav `} >Contribuir</Link>
        <Link to='https://gestaoweb.eklesiaonline.com.br/cadastro/7mmmU0'  target='_blank' className={`nav `}>Cadastre-se</Link>
    </header>
  );
}

export default Header;
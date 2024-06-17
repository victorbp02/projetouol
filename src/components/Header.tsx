import React from 'react';
import logo from '../img/logo.png'; 
import '../styles/Header.css';
import lupa from '../img/lupa.png';
import coracao from '../img/coracao.png';
import carrinho from '../img/carrinho.png';
import user from '../img/user.png';

const Header: React.FC = () => {
  return (
    <header className="header">
    <nav className="nav-center">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <div className='titulo'>
            <h1>Compass</h1>
        </div>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#shop">Shop</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav-icons">
      <img src={user} alt="Search" className="icon" />
      <img src={lupa} alt="Search" className="icon" />
      <img src={coracao} alt="Search" className="icon" />
      <img src={carrinho} alt="Search" className="icon" />
      
      </div>
    </nav>
  </header>

  );
};

export default Header;
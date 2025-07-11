import { Link } from 'react-router-dom';

import React from 'react';

import searchIcon from '../assets/search.png';
import shoppingBagIcon from '../assets/shopping-bag.png';

import './Header.css';

// Componente funcional tipado com React.FC
const Header: React.FC = () => {
  return (
    <header className="header-container">
      {/* Seção Superior */}
      <div className="header-top">
        <div className="logo">
          <h1>AL SKIN</h1>
        </div>
        
        <div className="search-bar">
          <input type="text" placeholder="O que você está procurando?" />
          <img 
            src={searchIcon} 
            alt="Ícone de busca" 
            className="header-icon" 
          />
        </div>
        
        <div className="cart-icon">
          <img 
            src={shoppingBagIcon} 
            alt="Ícone do carrinho" 
            className="header-icon" 
          />
        </div>
      </div>

      {/* Seção Inferior (Navegação) */}
      <nav className="header-bottom">
        <ul className="nav-links">
        <li><button className="nav-link">Categorias</button></li>
        <li><button className="nav-link">Tipo de pele</button></li>
        <li><button className="nav-link">Necessidade</button></li>
        <li><button className="nav-link">Ingredientes</button></li>
        <li><Link className="nav-link" to="/sobre">Sobre</Link></li>
        </ul>
      <div className="promo-link">
      <button className="nav-link promo">Kits até 50% OFF</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
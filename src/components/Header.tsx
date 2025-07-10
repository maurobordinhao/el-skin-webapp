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
          <li><a href="#">Categorias</a></li>
          <li><a href="#">Tipo de pele</a></li>
          <li><a href="#">Necessidade</a></li>
          <li><a href="#">Ingredientes</a></li>
        </ul>
        <div className="promo-link">
          <a href="#">Kits até 50% OFF</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
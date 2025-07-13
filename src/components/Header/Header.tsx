import React from 'react';
import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBagShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {    
  return (
    <header className="header-container">
      <div className="top-header">
        <div className="logo">AL SKIN</div>

        <div className="search-bar">
          <input type="text" placeholder="O que você está procurando?" />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>

        <div className="right-section">
          <FontAwesomeIcon icon={faBagShopping} className="cart-icon" />
          <span className="promo-banner">Kits até <strong>50% OFF</strong></span>
        </div>
      </div>

      <nav className="menu-nav">
        <ul>
          <li>Categorias</li>
          <li>Tipo de pele</li>
          <li>Necessidade</li>
          <li>Ingredientes</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

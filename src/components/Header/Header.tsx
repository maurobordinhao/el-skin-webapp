import React, { useState } from 'react';
import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBagShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [textoBusca, setTextoBusca] = useState('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextoBusca(e.target.value);
  };

  const onClickSearch = () => {
    console.log(`Você pesquisou por: ${textoBusca}`);
  };

  return (
    <header className="header-container">
      <div className="top-header">
        <div className="logo">AL SKIN</div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="O que você está procurando?"
            value={textoBusca}
            onChange={handleOnChange}
          />
          <button onClick={onClickSearch} className="search-button">
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </button>
        </div>

        <div className="right-section">
          <FontAwesomeIcon icon={faBagShopping} className="cart-icon" />
          <span className="promo-banner">
            Kits até <strong>50% OFF</strong>
          </span>
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
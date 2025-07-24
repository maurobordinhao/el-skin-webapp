// src/components/Header.tsx
import React, { useState } from 'react';
import CartModal from '../CartModal/CartModal';
import { useCart } from '../../contexts/CartContext';
import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons';

type HeaderProps = {
  onSearch: (term: string) => void;
};

const Header = ({ onSearch }: HeaderProps) => {
  const [textoBusca, setTextoBusca] = useState('');
  const { cart, showModal, setShowModal } = useCart();

  const totalItems = cart.reduce((sum, item) => sum + item.quantidade, 0);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTextoBusca(value);
    onSearch(value);
  };

  return (
    <header className="header-container">
      <div className="top-header">
        <div className="left-section">
          <div className="logo">AL SKIN</div>
        </div>

        <div className="center-section">
          <div className="search-bar">
            <input
              type="text"
              placeholder="O que você está procurando?"
              value={textoBusca}
              onChange={handleOnChange}
            />
            <button className="search-button">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>

        <div className="right-section">
          <button onClick={() => setShowModal(true)} className="cart-button">
            <FontAwesomeIcon icon={faCartShopping} />
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </button>
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

      {showModal && <CartModal onClose={() => setShowModal(false)} />}
    </header>
  );
};

export default Header;

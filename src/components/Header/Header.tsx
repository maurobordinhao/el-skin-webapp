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
      <div className="header-top">
        <div className="logo">AL SKIN</div>

        <div className="search-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="O que você está procurando?"
            value={textoBusca}
            onChange={handleOnChange}
          />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
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

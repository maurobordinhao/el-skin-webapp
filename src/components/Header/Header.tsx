// src/components/Header/Header.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import CartModal from '../CartModal/CartModal';
import { useCart } from '../../contexts/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const HeaderContainer = styled.header`
  padding: 1rem 2rem;
  background: #f8f8f8;
`;

const TopHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
`;

const SearchBar = styled.div`
  display: flex;
  flex-grow: 1;
  max-width: 600px;
  margin: 0 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;

  input {
    flex: 1;
    padding: 0.5rem 1rem;
    border: none;
    outline: none;
    font-size: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    border: none;
    background: #e5e5e5;
    cursor: pointer;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CartButton = styled.button`
  position: relative;
  background: none;
  border: none;

  .cart-count {
    position: absolute;
    top: -6px;
    right: -6px;
    background: red;
    color: white;
    font-size: 0.75rem;
    border-radius: 50%;
    padding: 2px 6px;
  }
`;

const PromoBanner = styled.span`
  font-size: 0.9rem;
`;

const MenuNav = styled.nav`
  margin-top: 1rem;
  ul {
    display: flex;
    gap: 1rem;
    padding: 0;
  }

  li {
    list-style: none;
  }
`;

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
    <HeaderContainer>
      <TopHeader>
        <Logo>AL SKIN</Logo>

        <SearchBar>
          <input
            type="text"
            placeholder="O que você está procurando?"
            value={textoBusca}
            onChange={handleOnChange}
          />
          <button>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </SearchBar>

        <RightSection>
          <CartButton onClick={() => setShowModal(true)}>
            <FontAwesomeIcon icon={faCartShopping} size="lg" />
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </CartButton>
          <PromoBanner>
            Kits até <strong>50% OFF</strong>
          </PromoBanner>
        </RightSection>
      </TopHeader>

      <MenuNav>
        <ul>
          <li>Categorias</li>
          <li>Tipo de pele</li>
          <li>Necessidade</li>
          <li>Ingredientes</li>
        </ul>
      </MenuNav>

      {showModal && <CartModal onClose={() => setShowModal(false)} />}
    </HeaderContainer>
  );
};

export default Header;

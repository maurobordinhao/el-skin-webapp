// src/components/Header/Header.tsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CartModal from '../CartModal/CartModal';
//import { useCart } from '../../contexts/CartContext';
import { useCart } from '../../hooks/useCart'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useSearch } from '../../hooks/useSearch';

const HeaderContainer = styled.header`
  width: 100%;
  background-color: white;
  font-family: 'Arial', sans-serif;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
`;

const TopHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  flex-wrap: wrap;
  gap: 16px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #1e1e1e;
`;

const SearchBar = styled.div`
  flex: 1;
  max-width: 500px;
  background-color: #f5f5f5;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 8px 16px;

  input {
    flex: 1;
    background: none;
    border: none;
    outline: none;
    font-size: 16px;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    color: #555;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
`;

const CartButton = styled.button`
  background: none;
  border: none;
  position: relative;
  cursor: pointer;
  font-size: 20px;

  .cart-count {
    position: absolute;
    top: -6px;
    right: -10px;
    background: red;
    color: white;
    border-radius: 50%;
    font-size: 11px;
    font-weight: bold;
    padding: 2px 6px;
  }
`;

const PromoBanner = styled.span`
  font-size: 12px;
  color: #cc0000;
  font-weight: bold;
`;

const MenuNav = styled.nav`
  margin-top: 1rem;
  border-top: 1px solid #eee;
  padding: 12px 0;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    gap: 3rem;
  }

  li {
    font-size: 0.95rem;
    font-weight: 500;
    color: #333;
    cursor: pointer;

    &:hover {
      color: #000;
    }
  }
`;

const Header = () => {
  const { cart, showModal, setShowModal } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantidade, 0);
  const { term, setSearch } = useSearch();

  const [textoBusca, setTextoBuscaLocal] = useState(term);

  useEffect(() => {
    setTextoBuscaLocal(term);
  }, [term]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTextoBuscaLocal(value);
    setSearch(value);
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
          <PromoBanner>Kits até <strong>50% OFF</strong></PromoBanner>
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
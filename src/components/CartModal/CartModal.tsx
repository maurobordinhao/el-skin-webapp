// src/components/CartModal/CartModal.tsx
import React from 'react';
import styled from 'styled-components';
import { useCart } from '../../contexts/CartContext';

type Props = {
  onClose: () => void;
};

const CartModal = ({ onClose }: Props) => {
  const { cart, updateQuantity, removeFromCart, showModal } = useCart();

  if (!showModal) return null;

  const totalGeral = cart.reduce(
    (acc, item) => acc + item.price * item.quantidade,
    0
  );

  return (
    <Overlay>
      <Modal>
        <Content>
          <CloseButton onClick={onClose}>&times;</CloseButton>
          <h2>Seu Carrinho</h2>

          {cart.length === 0 ? (
            <p>O carrinho está vazio.</p>
          ) : (
            <>
              <ItemList>
                {cart.map((item) => (
                  <Item key={item.id}>
                    <img src={item.image} alt={item.name} />
                    <div>
                      <p>
                        {item.name} <br />
                        R$ {item.price.toFixed(2)} x {item.quantidade} ={' '}
                        <strong>
                          R$ {(item.price * item.quantidade).toFixed(2)}
                        </strong>
                      </p>
                      <QuantityControls>
                        <button onClick={() => updateQuantity(item.id, item.quantidade - 1)}>-</button>
                        <span>{item.quantidade}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantidade + 1)}>+</button>
                      </QuantityControls>
                      <RemoveButton onClick={() => removeFromCart(item.id)}>
                        Remover
                      </RemoveButton>
                    </div>
                  </Item>
                ))}
              </ItemList>

              <Total>
                <strong>Total:</strong> R$ {totalGeral.toFixed(2)}
              </Total>

              <CheckoutButton>Finalizar Compra</CheckoutButton>
            </>
          )}
        </Content>
      </Modal>
    </Overlay>
  );
};

export default CartModal;

// Styled Components

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const Modal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  background: white;
  padding: 24px;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CloseButton = styled.button`
  align-self: flex-end;
  background: transparent;
  font-size: 24px;
  border: none;
  cursor: pointer;
`;

const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;

  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 4px;
  }
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;

  button {
    background: #8f4fff;
    color: white;
    border: none;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
`;

const RemoveButton = styled.button`
  margin-top: 8px;
  background: #ccc;
  color: #000;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
`;

const Total = styled.div`
  font-size: 18px;
  text-align: right;
  margin-top: 16px;
`;

const CheckoutButton = styled.button`
  background-color: #8f4fff;
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  align-self: flex-end;
`;

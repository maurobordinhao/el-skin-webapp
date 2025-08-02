// src/components/CartModal/CartModal.tsx
import React from 'react';
import './CartModal.css';
import { useCart } from '../../contexts/CartContext';

type Props = {
  onClose: () => void;
};

const CartModal = ({ onClose }: Props) => {
  const { cart, updateQuantity, removeFromCart, showModal } = useCart();

  if (!showModal) return null; // ← aqui está a lógica de visibilidade

  const totalGeral = cart.reduce(
    (acc, item) => acc + item.price * item.quantidade,
    0
  );

  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal">
        <div className="cart-content">
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
          <h2>Seu Carrinho</h2>

          {cart.length === 0 ? (
            <p>O carrinho está vazio.</p>
          ) : (
            <>
              <ul className="cart-items">
                {cart.map((item) => (
                  <li key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <div>
                      <p>
                        {item.name} <br />
                        R$ {item.price.toFixed(2)} x {item.quantidade} ={' '}
                        <strong>
                          R$ {(item.price * item.quantidade).toFixed(2)}
                        </strong>
                      </p>
                      <div className="quantity-controls">
                        <button onClick={() => updateQuantity(item.id, item.quantidade - 1)}>-</button>
                        <span>{item.quantidade}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantidade + 1)}>+</button>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="remove-button">
                        Remover
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="cart-total">
                <strong>Total:</strong> R$ {totalGeral.toFixed(2)}
              </div>

              <button className="checkout-button">Finalizar Compra</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;

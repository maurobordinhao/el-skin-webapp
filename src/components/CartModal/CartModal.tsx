import React from 'react';
import './CartModal.css';
import { useCart } from '../../contexts/CartContext';

type Props = {
  onClose: () => void;
};

const CartModal = ({ onClose }: Props) => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const handleDecrease = (id: string, currentQty: number) => {
    if (currentQty > 1) {
      updateQuantity(id, currentQty - 1);
    } else {
      removeFromCart(id);
    }
  };

  const handleIncrease = (id: string, currentQty: number) => {
    updateQuantity(id, currentQty + 1);
  };

  return (
    <div className="cart-modal-overlay">
      <div className="cart-modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Seu Carrinho</h2>

        {cart.length === 0 ? (
          <p>O carrinho está vazio.</p>
        ) : (
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-info">
                  <p>{item.name}</p>
                  <div className="quantity-controls">
                    <button onClick={() => handleDecrease(item.id, item.quantidade)}>-</button>
                    <span>{item.quantidade}</span>
                    <button onClick={() => handleIncrease(item.id, item.quantidade)}>+</button>
                  </div>
                  <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CartModal;

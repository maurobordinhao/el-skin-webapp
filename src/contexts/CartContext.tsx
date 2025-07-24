// src/contexts/CartContext.tsx
import React, {
  createContext,
  useContext,
  ReactNode,
  useReducer,
  useState,
} from 'react';
import { IProduct } from '../service/productService';
import {
  carrinhoReducer,
  ADD_PRODUTO,
  REMOVE_PRODUTO,
  UPDATE_QUANTIDADE,
} from '../reducers/carrinhoReducer';
import { CartItem } from '../types/CartItem';

interface CartContextProps {
  cart: CartItem[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantidade: number) => void;
  clearCart: () => void;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, dispatch] = useReducer(carrinhoReducer, []);
  const [showModal, setShowModal] = useState(false);

  const addToCart = (product: IProduct) => {
    dispatch({ type: ADD_PRODUTO, payload: product });
    setShowModal(true);
  };

  const removeFromCart = (id: string) => {
    dispatch({ type: REMOVE_PRODUTO, payload: id });
  };

  const updateQuantity = (id: string, quantidade: number) => {
    dispatch({ type: UPDATE_QUANTIDADE, payload: { produtoId: id, quantidade } });
  };

  const clearCart = () => {
    cart.forEach((item) => dispatch({ type: REMOVE_PRODUTO, payload: item.id }));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart deve estar dentro do CartProvider');
  return context;
};

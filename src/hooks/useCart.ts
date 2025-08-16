// src/hooks/useCart.ts
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store';
import {
  addToCart as addToCartAction,
  removeFromCart as removeFromCartAction,
  updateQuantity as updateQuantityAction,
  openCart,
  closeCart,
  selectCartItems,
  selectCartShowModal,
  selectCartCount,
  selectCartTotal,
} from '../store/slices/cartSlice';
import { useCallback } from 'react';
import type { CartItem } from '../store/slices/cartSlice';

export function useCart() {
  const dispatch = useDispatch<AppDispatch>();

  const cart = useSelector((s: RootState) => selectCartItems(s));
  const showModal = useSelector((s: RootState) => selectCartShowModal(s));
  const totalItems = useSelector((s: RootState) => selectCartCount(s));
  const totalAmount = useSelector((s: RootState) => selectCartTotal(s));

  const addToCart = useCallback(
    (item: Omit<CartItem, 'quantidade'> | CartItem) => {
      dispatch(addToCartAction(item));
    },
    [dispatch]
  );

  const removeFromCart = useCallback(
    (id: string) => {
      dispatch(removeFromCartAction(id));
    },
    [dispatch]
  );

  const updateQuantity = useCallback(
    (id: string, quantidade: number) => {
      dispatch(updateQuantityAction({ id, quantidade }));
    },
    [dispatch]
  );

  // manter API antiga: setShowModal(boolean)
  const setShowModal = useCallback(
    (val: boolean) => {
      dispatch(val ? openCart() : closeCart());
    },
    [dispatch]
  );

  return {
    cart,
    totalItems,
    totalAmount,
    addToCart,
    removeFromCart,
    updateQuantity,
    showModal,
    setShowModal,
  };
}

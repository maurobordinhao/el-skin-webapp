import { configureStore } from '@reduxjs/toolkit';
import cartReducer, {
  openCart, closeCart, toggleCart,
  addToCart, removeFromCart, updateQuantity,
  selectCartItems, selectCartCount, selectCartTotal
} from '../cartSlice';

const prod = { id: '1', name: 'Creme', price: 10, image: '' };

test('cart: open/close/toggle, add/update/remove e selectors', () => {
  const store = configureStore({ reducer: { cart: cartReducer } });

  // open/close/toggle
  store.dispatch(openCart());
  expect(store.getState().cart.showModal).toBe(true);
  store.dispatch(closeCart());
  expect(store.getState().cart.showModal).toBe(false);
  store.dispatch(toggleCart());
  expect(store.getState().cart.showModal).toBe(true);

  // add -> adiciona com quantidade 1 por padrão
  store.dispatch(addToCart(prod)); // quantidade = 1
  let items = selectCartItems(store.getState());
  expect(items).toHaveLength(1);
  expect(items[0].quantidade).toBe(1);

  // add mesmo produto -> acumula quantidade
  store.dispatch(addToCart(prod)); // +1
  items = selectCartItems(store.getState());
  expect(items[0].quantidade).toBe(2);

  // updateQuantity usa campo 'quantidade'
  store.dispatch(updateQuantity({ id: '1', quantidade: 3 }));
  items = selectCartItems(store.getState());
  expect(items[0].quantidade).toBe(3);

  // selectors: count e total
  expect(selectCartCount(store.getState())).toBe(3);
  expect(selectCartTotal(store.getState())).toBe(3 * 10);

  // se quantidade <= 0, remove item
  store.dispatch(updateQuantity({ id: '1', quantidade: 0 }));
  items = selectCartItems(store.getState());
  expect(items).toHaveLength(0);

  // remove explícito (não deve quebrar)
  store.dispatch(addToCart(prod));
  store.dispatch(removeFromCart('1'));
  items = selectCartItems(store.getState());
  expect(items).toHaveLength(0);
});

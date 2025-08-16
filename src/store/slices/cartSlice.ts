// src/store/slices/cartSlice.ts
import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantidade: number;
};

type CartState = {
  items: CartItem[];
  showModal: boolean;
};

const initialState: CartState = {
  items: [],
  showModal: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // payload: produto/cartItem. Se já existir, incrementa quantidade.
    addToCart(state, action: PayloadAction<Omit<CartItem, 'quantidade'> | CartItem>) {
      const incoming = action.payload as CartItem;
      const id = incoming.id;
      const found = state.items.find((i) => i.id === id);
      if (found) {
        found.quantidade += (incoming.quantidade ?? 1);
      } else {
        state.items.push({
          ...incoming,
          quantidade: incoming.quantidade ?? 1,
        });
      }
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    updateQuantity(state, action: PayloadAction<{ id: string; quantidade: number }>) {
      const { id, quantidade } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (!item) return;
      if (quantidade <= 0) {
        state.items = state.items.filter((i) => i.id !== id);
      } else {
        item.quantidade = quantidade;
      }
    },
    clearCart(state) {
      state.items = [];
    },
    openCart(state) {
      state.showModal = true;
    },
    closeCart(state) {
      state.showModal = false;
    },
    toggleCart(state) {
      state.showModal = !state.showModal;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  openCart,
  closeCart,
  toggleCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// -------- Selectors
export const selectCartItems = (state: any) => state.cart.items as CartItem[];
export const selectCartShowModal = (state: any) => state.cart.showModal;

export const selectCartCount = createSelector([selectCartItems], (items) =>
  items.reduce((sum, it) => sum + it.quantidade, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (items) =>
  items.reduce((sum, it) => sum + it.price * it.quantidade, 0)
);

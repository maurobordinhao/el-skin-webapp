// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import searchReducer from './slices/searchSlice';
import productsReducer from './slices/productsSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
    products: productsReducer, // ← adicionado
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
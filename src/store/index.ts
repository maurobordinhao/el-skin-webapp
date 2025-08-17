// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import searchReducer from './slices/searchSlice';
import productsReducer from './slices/productsSlice';
import { productsApi } from './apis/productsApi';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
    products: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer, // <- RTK Query
  },
  middleware: (getDefault) => getDefault().concat(productsApi.middleware), // <- RTK Query
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

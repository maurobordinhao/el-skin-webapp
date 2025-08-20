import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './apis/productsApi';
import cartReducer from './slices/cartSlice';
import searchReducer from './slices/searchSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,                      // <— AQUI
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefault) =>
    getDefault().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

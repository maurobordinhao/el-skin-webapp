// src/test/test-utils.tsx
import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import {
  configureStore,
  combineReducers,
} from '@reduxjs/toolkit';

import searchReducer from '../store/slices/searchSlice';
import cartReducer from '../store/slices/cartSlice';
import productsReducer from '../store/slices/productsSlice';

// --- mapa de reducers de teste
const testReducers = {
  search: searchReducer,
  cart: cartReducer,
  products: productsReducer,
};

// --- rootReducer para tipagem correta do state
const rootReducer = combineReducers(testReducers);
export type TestRootState = ReturnType<typeof rootReducer>;

// Cria a store de teste (preloadedState é parcial e opcional)
export function makeStore(preloadedState?: Partial<TestRootState>) {
  return configureStore({
    reducer: rootReducer,              // <- função reducer única (ok tipado)
    preloadedState: {
      search: { term: '' },
      cart: { items: [], showModal: false },
      products: { byId: {}, allIds: [], loading: false, error: null },
      ...(preloadedState ?? {}),
    } as TestRootState,                // <- coerção segura para testes
  });
}

export type TestAppStore = ReturnType<typeof makeStore>;
export type TestAppDispatch = TestAppStore['dispatch'];

export function renderWithStore(
  ui: React.ReactElement,
  opts?: { store?: TestAppStore; preloadedState?: Partial<TestRootState> }
) {
  const store = opts?.store ?? makeStore(opts?.preloadedState);
  const Wrapper = ({ children }: PropsWithChildren) => (
    <Provider store={store}>{children}</Provider>
  );
  return { store, ...render(ui, { wrapper: Wrapper }) };
}

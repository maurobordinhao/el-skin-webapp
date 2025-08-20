// src/test/test-utils.tsx
import React, { PropsWithChildren } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore, PreloadedState } from '@reduxjs/toolkit';

import cartReducer from '@/store/slices/cartSlice';
import productsReducer from '@/store/slices/productsSlice';
import searchReducer from '@/store/slices/searchSlice';
import appReducer from '@/store/slices/appSlice';

const rootReducer = {
  cart: cartReducer,
  products: productsReducer,
  search: searchReducer,
  app: appReducer,
};

export type RootState = {
  cart: ReturnType<typeof cartReducer>;
  products: ReturnType<typeof productsReducer>;
  search: ReturnType<typeof searchReducer>;
  app: ReturnType<typeof appReducer>;
};

export function makeTestStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

type Options = RenderOptions & {
  preloadedState?: PreloadedState<RootState>;
};

export function renderWithStore(
  ui: React.ReactElement,
  { preloadedState, ...renderOptions }: Options = {}
) {
  const store = makeTestStore(preloadedState);

  function Wrapper({ children }: PropsWithChildren<{}>) {
    return <Provider store={store}>{children}</Provider>;
  }

  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}

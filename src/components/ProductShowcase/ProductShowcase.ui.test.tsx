import React from 'react';
import { renderWithStore } from '../../test/test-utils';
import { screen, act } from '@testing-library/react';
import ProductShowcase from './ProductShowcase';
import { clearError } from '../../store/slices/productsSlice';

test('ProductShowcase: mostra mensagem de lista vazia', () => {
  const { store } = renderWithStore(<ProductShowcase onAddToCart={() => {}} />);

  act(() => {
    store.dispatch({ type: 'products/fetchAll/fulfilled', payload: [] });
  });

  expect(screen.getByText(/Nenhum produto encontrado\./i)).toBeInTheDocument();
});

test('ProductShowcase: mostra erro quando presente no estado', () => {
  const { store } = renderWithStore(<ProductShowcase onAddToCart={() => {}} />);

  act(() => {
    store.dispatch({ type: 'products/fetchAll/rejected', payload: 'Falha simulada' });
  });

  expect(screen.getByRole('alert')).toHaveTextContent(/Falha simulada/i);

  act(() => {
    store.dispatch(clearError());
  });
});

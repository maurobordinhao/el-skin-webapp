import React from 'react';
import { screen, act } from '@testing-library/react';
import { renderWithStore } from '../../test/test-utils';
import { setProducts } from '../../store/slices/productsSlice';
import type { IProduct } from '../../service/productService';

function Probe() {
  const { all, getProductById, filteredProducts } = require('../useProducts').useProducts();
  return (
    <>
      <div data-testid="all">{all.map((p: IProduct) => p.id).join(',')}</div>
      <div data-testid="byid">{getProductById('2')?.name ?? ''}</div>
      <div data-testid="filter-empty">{filteredProducts('').map((p: IProduct) => p.id).join(',')}</div>
      <div data-testid="filter-cre">{filteredProducts('cre').map((p: IProduct) => p.id).join(',')}</div>
    </>
  );
}

test('useProducts: all/getProductById/filteredProducts', () => {
  const { store } = renderWithStore(<Probe />);

  const data: IProduct[] = [
    { id: '1', name: 'Sérum', description: '', price: 1, image: '' },
    { id: '2', name: 'Creme Hidratante', description: '', price: 2, image: '' },
    { id: '3', name: 'Protetor Solar', description: '', price: 3, image: '' },
  ];

  act(() => {
    store.dispatch(setProducts(data));
  });

  expect(screen.getByTestId('all').textContent).toBe('1,2,3');
  expect(screen.getByTestId('byid').textContent).toBe('Creme Hidratante');
  expect(screen.getByTestId('filter-empty').textContent).toBe('1,2,3');
  expect(screen.getByTestId('filter-cre').textContent).toBe('2');
});

import { configureStore } from '@reduxjs/toolkit';
import productsReducer, { fetchProducts } from '../productsSlice';

// caminho correto: de __tests__/ até service/ são 3 níveis
jest.mock('../../../service/productService', () => ({
  productService: { getProducts: jest.fn().mockRejectedValue(new Error('fail')) },
}));

describe('productsSlice - pending/rejected', () => {
  const makeStore = () => configureStore({ reducer: { products: productsReducer } });

  it('fetchProducts: pending liga loading e rejected popula error', async () => {
    const store = makeStore();
    const p = store.dispatch(fetchProducts());
    expect(store.getState().products.loading).toBe(true);
    await p;
    const s = store.getState().products;
    expect(s.loading).toBe(false);
    expect(s.error).toBeTruthy();
  });
});

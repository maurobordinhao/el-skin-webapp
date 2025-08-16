// src/components/ProductShowcase/ProductShowCase.test.tsx
import { screen, waitFor } from '@testing-library/react';
import { renderWithStore } from '../../test/test-utils';
import ProductShowcase from './ProductShowcase';
import { IProduct, productService } from '../../service/productService';

jest.mock('../../service/productService', () => ({
  productService: { getProducts: jest.fn() },
}));

describe('ProductShowcase', () => {
  it('renderiza Highlights e filtra', async () => {
    (productService.getProducts as jest.Mock).mockResolvedValue([
      { id: '1', name: 'Creme', price: 10, image: '', description: '', tags: [] } as IProduct,
      { id: '2', name: 'Serum', price: 20, image: '', description: '', tags: [] } as IProduct,
    ]);

    renderWithStore(<ProductShowcase onAddToCart={() => {}} />, {
      preloadedState: { search: { term: 'creme' }, cart: { items: [], showModal: false } },
    });

    expect(screen.getByText(/Destaques/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/Creme/i)).toBeInTheDocument();
      expect(screen.queryByText(/Serum/i)).not.toBeInTheDocument();
    });
  });
});

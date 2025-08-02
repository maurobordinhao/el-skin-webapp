// src/components/ProductCard/ProductCard.test.tsx
import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard/ProductCard';
import { IProduct } from '../service/productService';
import { CartProvider } from '../contexts/CartContext';

const mockProduct: IProduct = {
  id: '1',
  name: 'Produto Teste',
  description: 'Descrição teste',
  image: 'imagem.jpg',
  price: 99.9,
  tags: [{ label: 'Rosto', type: 'face' }],
};

describe('ProductCard', () => {
  it('renderiza nome e preço do produto', () => {
    render(
      <CartProvider>
        <ProductCard product={mockProduct} />
      </CartProvider>
    );

    expect(screen.getByText('Produto Teste')).toBeInTheDocument();
    expect(screen.getByText(/R\$ 99.90/)).toBeInTheDocument();
  });
});

// src/components/ProductShowcase/ProductShowcase.test.tsx
import { render, screen } from '@testing-library/react';
import ProductShowcase from './ProductShowcase';
import { CartProvider } from '../../contexts/CartContext';

describe('ProductShowcase', () => {
  it('renderiza seção de destaques', () => {
    render(
      <CartProvider>
        <ProductShowcase />
      </CartProvider>
    );

    expect(screen.getByText(/Destaques/i)).toBeInTheDocument();
  });
});

// src/components/Header/Header.test.tsx
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { CartProvider } from '../../contexts/CartContext';

describe('Header', () => {
  it('renderiza logo e barra de busca', () => {
    render(
      <CartProvider>
        <Header onSearch={() => {}} />
      </CartProvider>
    );

    expect(screen.getByText(/AL SKIN/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/O que você está procurando?/i)).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { CartProvider, useCart } from './CartContext';
import userEvent from '@testing-library/user-event';
import { IProduct } from '../service/productService';

const mockProduct: IProduct = {
  id: '1',
  name: 'Produto Teste',
  description: 'Descrição do produto',
  price: 10,
  image: 'imagem.jpg',
  tags: [],
};

const TestComponent = () => {
  const { cart, addToCart, removeFromCart, updateQuantity, clearCart, showModal } = useCart();

  return (
    <div>
      <button onClick={() => addToCart(mockProduct)}>Adicionar</button>
      <button onClick={() => removeFromCart('1')}>Remover</button>
      <button onClick={() => updateQuantity('1', 5)}>Atualizar</button>
      <button onClick={clearCart}>Limpar</button>

      <div data-testid="cart-size">{cart.length}</div>
      <div data-testid="show-modal">{showModal ? 'sim' : 'não'}</div>

      {cart.map(item => (
        <div key={item.id}>
          <span>{item.name}</span>
          <div data-testid="quantidade">{item.quantidade}</div>
        </div>
      ))}
    </div>
  );
};

describe('CartContext', () => {
  it('adiciona item ao carrinho e mostra modal', async () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    await userEvent.click(screen.getByText('Adicionar'));

    await waitFor(() => {
      expect(screen.getByTestId('cart-size')).toHaveTextContent('1');
      expect(screen.getByTestId('show-modal')).toHaveTextContent('sim');
    });
  });

  it('atualiza quantidade de item no carrinho', async () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    await userEvent.click(screen.getByText('Adicionar'));
    await userEvent.click(screen.getByText('Atualizar'));

    await waitFor(() => {
      expect(screen.getByTestId('quantidade')).toHaveTextContent('5');
    });
  });

  it('remove item do carrinho', async () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    await userEvent.click(screen.getByText('Adicionar'));
    await userEvent.click(screen.getByText('Remover'));

    await waitFor(() => {
      expect(screen.getByTestId('cart-size')).toHaveTextContent('0');
    });
  });

  it('limpa carrinho', async () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    await userEvent.click(screen.getByText('Adicionar'));
    await userEvent.click(screen.getByText('Limpar'));

    await waitFor(() => {
      expect(screen.getByTestId('cart-size')).toHaveTextContent('0');
    });
  });
});

// src/__tests__/Header.test.tsx
import Header from '@/components/Header/Header';
import { renderWithStore as render } from '../test/test-utils';
import { screen, fireEvent } from '@testing-library/react';

const setShowModal = jest.fn();

jest.mock('@/hooks/useCart', () => ({
  useCart: () => ({
    itemsCount: 0,
    showModal: false,
    setShowModal, 
    cartItems: [],
    getSubtotal: () => 0,
  }),
}));

describe('Header', () => {
  it('mostra os links e o badge', () => {
    render(<Header />);
    expect(screen.getByText('AL SKIN')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Sobre' })).toBeInTheDocument();
  });

  it('abre o modal ao clicar no carrinho', () => {
    render(<Header />);
    fireEvent.click(screen.getByRole('button', { name: /abrir carrinho/i }));
    expect(setShowModal).toHaveBeenCalledWith(true);
  });
});

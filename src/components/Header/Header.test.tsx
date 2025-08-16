// src/components/Header/Header.test.tsx
import { screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import { renderWithStore } from '../../test/test-utils';

describe('Header (Redux)', () => {
  it('renderiza e abre modal do carrinho', () => {
    const { store } = renderWithStore(<Header />, {
      preloadedState: {
        cart: { items: [], showModal: false },
        search: { term: '' },
      },
    });

    expect(screen.getByText(/AL SKIN/i)).toBeInTheDocument();
    // clique no botão do carrinho etc…
  });
});

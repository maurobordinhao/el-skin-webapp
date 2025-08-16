// src/components/CartModal/__tests__/CartModal.test.tsx
import { screen, fireEvent, act } from '@testing-library/react';
import CartModal from '../../CartModal/CartModal';
import { renderWithStore } from '../../../test/test-utils';
import { addToCart, openCart } from '../../../store/slices/cartSlice';

const IMG = 'about:blank';

describe('CartModal (Redux)', () => {
  it('mostra itens e total quando aberto', () => {
    renderWithStore(<CartModal onClose={() => {}} />, {
      preloadedState: {
        cart: {
          items: [
            { id: '1', name: 'Produto X', price: 10, image: IMG, quantidade: 2 },
            { id: '2', name: 'Produto Y', price: 5, image: IMG, quantidade: 1 },
          ],
          showModal: true,
        },
      },
    });

    expect(screen.getByText(/Seu Carrinho/i)).toBeInTheDocument();
    expect(screen.getByText(/Produto X/i)).toBeInTheDocument();
    expect(screen.getByText(/Produto Y/i)).toBeInTheDocument();
    expect(screen.getByText(/Total:/i)).toBeInTheDocument();
  });

  it('incrementa/decrementa quantidade via ações', () => {
    const { store } = renderWithStore(<CartModal onClose={() => {}} />, {
      preloadedState: {
        cart: {
          items: [{ id: '1', name: 'Produto X', price: 10, image: IMG, quantidade: 1 }],
          showModal: true,
        },
      },
    });

    // Qualquer update no estado deve estar dentro de act(...)
    act(() => {
      store.dispatch(addToCart({ id: '1', name: 'Produto X', price: 10, image: IMG, quantidade: 1 }));
    });

    // Coloque aqui asserts específicos do seu UI (exemplo ilustrativo):
    // expect(screen.getByText(/x 2/)).toBeInTheDocument();
  });
});

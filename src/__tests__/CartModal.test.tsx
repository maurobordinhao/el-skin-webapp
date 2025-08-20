import { render, screen, fireEvent, act } from '@testing-library/react';
import CartModal from '@/components/CartModal/CartModal';

const mkHook = (over?: Partial<ReturnType<any>>) => ({
  cart: [{ id: 1, name: 'Gel', price: 10, image: '', quantidade: 1 }],
  updateQuantity: jest.fn(),
  removeFromCart: jest.fn(),
  showModal: true,
  ...over,
});

jest.mock('@/hooks/useCart');

describe('CartModal', () => {
  it('fecha ao clicar no overlay', () => {
    const onClose = jest.fn();
    const { useCart } = jest.requireMock('@/hooks/useCart');
    useCart.mockReturnValue(mkHook());
    render(<CartModal onClose={onClose} />);
    fireEvent.click(screen.getByRole('dialog')); // Overlay tem role=dialog
    expect(onClose).toHaveBeenCalled();
  });

  it('fecha automaticamente quando carrinho zera', () => {
    jest.useFakeTimers();
    const onClose = jest.fn();
    const { useCart } = jest.requireMock('@/hooks/useCart');

    // 1ª render com item
    useCart.mockReturnValue(mkHook());
    const { rerender } = render(<CartModal onClose={onClose} />);

    // 2ª render: carrinho vazio
    useCart.mockReturnValue(mkHook({ cart: [] }));
    rerender(<CartModal onClose={onClose} />);

    // dispara effect
    act(() => {
      jest.runOnlyPendingTimers();
    });

    expect(onClose).toHaveBeenCalled();
    jest.useRealTimers();
  });
});

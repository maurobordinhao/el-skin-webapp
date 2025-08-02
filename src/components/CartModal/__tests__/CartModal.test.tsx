import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CartModal from '../CartModal';
import { CartProvider, useCart } from '../../../contexts/CartContext';
import { IProduct } from '../../../service/productService';

const mockProduct: IProduct = {
  id: '1',
  name: 'Produto Teste',
  description: 'Descrição',
  price: 10,
  image: 'imagem.jpg',
  tags: [],
};

const ModalWithCart = () => {
  const [visible, setVisible] = React.useState(true);

  const Wrapper = () => {
    const { addToCart, setShowModal } = useCart();

    React.useEffect(() => {
      addToCart(mockProduct);
      setShowModal(visible);
    }, [visible]);

    return (
      <CartModal
        onClose={() => {
          setVisible(false);
          setShowModal(false);
        }}
      />
    );
  };

  return (
    <CartProvider>
      <Wrapper />
    </CartProvider>
  );
};

describe('CartModal', () => {
  it('não renderiza o modal quando showModal é false', () => {
    const Wrapper = () => {
      const { addToCart, setShowModal } = useCart();

      React.useEffect(() => {
        addToCart(mockProduct);
        setShowModal(false);
      }, []);

      return <CartModal onClose={() => {}} />;
    };

    render(
      <CartProvider>
        <Wrapper />
      </CartProvider>
    );

    expect(screen.queryByText(/Finalizar Compra/i)).not.toBeInTheDocument();
  });

  it('renderiza o modal com produto quando showModal é true', async () => {
    render(<ModalWithCart />);
    expect(await screen.findByText((t) => t.includes('Produto Teste'))).toBeInTheDocument();
    expect(screen.getAllByText((content) => content.includes('R$ 10.00')).length).toBeGreaterThan(0);
    expect(await screen.findByText(/Finalizar Compra/i)).toBeInTheDocument();
  });

  it('fecha o modal ao clicar no botão de fechar', async () => {
    render(<ModalWithCart />);
    const closeBtn = await screen.findByRole('button', { name: /×/i });
    fireEvent.click(closeBtn);
    expect(screen.queryByText(/Finalizar Compra/i)).not.toBeInTheDocument();
  });
});
// src/components/ProductCard/ProductCard.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from './ProductCard';
import { IProduct } from '../../service/productService';

describe('ProductCard', () => {
  it('renderiza nome, preço e dispara onAddToCart', () => {
    const product: IProduct = {
      id: '1',
      name: 'Produto X',
      price: 99.9,
      image: 'img',
      description: '...',
      tags: [{ label: 'rosto', type: 'face' }], // <-- array de objetos, não string[]
    };

    const onAddToCart = jest.fn();

    render(<ProductCard product={product} onAddToCart={onAddToCart} />);

    expect(screen.getByText('Produto X')).toBeInTheDocument();
    expect(screen.getByText(/R\$ 99,90|R\$ 99\.90/i)).toBeInTheDocument();

    //const btn = screen.getByRole('button', { name: /comprar|adicionar ao carrinho/i });
    //const btn = screen.getByRole('button', { name: /comprar|adicionar .* ao carrinho/i });
    const btn = screen.getByLabelText(/adicionar .* ao carrinho/i);
    fireEvent.click(btn);

    expect(onAddToCart).toHaveBeenCalledWith(product);
  });
});

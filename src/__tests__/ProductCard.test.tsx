import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '@/components/ProductCard/ProductCard';

const product = { id: 1, name: 'Gel', price: 10, image: '' };

describe('ProductCard', () => {
  it('renderiza infos e aciona onAddToCart', () => {
    const onAdd = jest.fn();
    render(<ProductCard product={product as any} onAddToCart={onAdd} />);
    expect(screen.getByText('Gel')).toBeInTheDocument();
    /*fireEvent.click(screen.getByRole('button', { name: /adicionar ao carrinho/i }));*/
    fireEvent.click(screen.getByRole('button', { name: /adicionar .* ao carrinho/i }));
    expect(onAdd).toHaveBeenCalledWith(product);
  });
});

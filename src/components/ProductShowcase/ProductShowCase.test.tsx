import 'whatwg-fetch';
import { render, screen } from '@/test/test-utils';
import ProductShowcase from '@/components/ProductShowcase/ProductShowcase';

test('mostra mensagem de vazio quando não há produtos', async () => {
  (global.fetch as jest.Mock).mockResolvedValueOnce(
    new Response(JSON.stringify([]), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  );

  render(<ProductShowcase onAddToCart={() => {}} />);
  // espera render com lista vazia após carregar
  expect(await screen.findByText(/nenhum produto encontrado/i)).toBeInTheDocument();
});

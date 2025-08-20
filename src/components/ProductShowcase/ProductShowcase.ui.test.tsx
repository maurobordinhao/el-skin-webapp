import 'whatwg-fetch';
import { renderWithStore } from '../../test/test-utils';
import ProductShowcase from './ProductShowcase';
import { screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

beforeEach(() => {
  (global.fetch as jest.Mock).mockReset();
});

test('ProductShowcase: mostra mensagem de lista vazia', async () => {
  (global.fetch as jest.Mock).mockResolvedValueOnce(
    new Response(JSON.stringify([]), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  );

  renderWithStore(<ProductShowcase onAddToCart={() => {}} />);

  await waitFor(() => {
    expect(screen.getByText(/Nenhum produto encontrado\./i)).toBeInTheDocument();
  });
});

test('ProductShowcase: mostra erro quando a API falha', async () => {
  (global.fetch as jest.Mock).mockResolvedValueOnce(
    new Response('fail', { status: 500, headers: { 'Content-Type': 'text/plain' } })
  );

  renderWithStore(<ProductShowcase onAddToCart={() => {}} />);

  await waitFor(() => {
    
    expect(screen.getByRole('alert')).toHaveTextContent(/Erro:/i);
  });

  
});

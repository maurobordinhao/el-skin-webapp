import { renderWithStore } from '../../test/test-utils';
import ProductShowcase from './ProductShowcase';
import { screen, waitFor } from '@testing-library/react';

beforeEach(() => {
  (global.fetch as jest.Mock).mockReset();
});

test('renderiza "Nossos queridinhos" e filtra', async () => {
  (global.fetch as jest.Mock).mockResolvedValueOnce(
    new Response(
      JSON.stringify([
        { id: '1', name: 'Creme', description: '', price: 10, image: '', tags: [] },
      ]),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  );

  renderWithStore(<ProductShowcase onAddToCart={() => {}} />);

  
  expect(screen.getByText(/Nossos queridinhos/i)).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.getByText(/Creme/i)).toBeInTheDocument();
  });
});

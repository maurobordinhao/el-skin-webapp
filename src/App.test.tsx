import React from 'react';
import { render, screen, within } from '@testing-library/react';
import App from './App';

test('renderiza nome da loja AL SKIN no cabeçalho', () => {
  render(<App />);
  const header = screen.getByRole('banner');
  const nomeLoja = within(header).getByText('AL SKIN');
  expect(nomeLoja).toBeInTheDocument();
});

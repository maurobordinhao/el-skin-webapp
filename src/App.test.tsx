import React from 'react';
import { screen, within } from '@testing-library/react';
import { renderWithStore } from './test/test-utils';
import App from './App';

test('renderiza nome da loja AL SKIN no cabeçalho', () => {
  renderWithStore(<App />);
  const header = screen.getByRole('banner');
  const nomeLoja = within(header).getByText('AL SKIN');
  expect(nomeLoja).toBeInTheDocument();
});

// src/pages/Sobre.test.tsx
import { render, screen } from '@testing-library/react';
import Sobre from './Sobre';

describe('Página Sobre', () => {
  it('renderiza conteúdo principal', () => {
    render(<Sobre />);
    expect(screen.getByText(/sobre a al skin/i)).toBeInTheDocument();
  });
});

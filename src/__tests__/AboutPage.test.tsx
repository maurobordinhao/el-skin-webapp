import { render, screen } from '@testing-library/react';
import AboutPage from '@/app/about/page';

describe('About page', () => {
  it('renderiza cabeçalho', () => {
    render(<AboutPage />);
    expect(screen.getByRole('heading', { level: 2, name: /sobre/i })).toBeTruthy();
  });
});

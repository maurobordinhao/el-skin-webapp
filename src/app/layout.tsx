// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Providers } from './providers';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import CartHost from './cart-host';

export const metadata: Metadata = { title: 'AL Skin' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          <Header />
          {/* <- main global para controlar fundo e altura */}
          <main className="page">{children}</main>
          <CartHost />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

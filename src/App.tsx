// App.tsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import { CartProvider } from './contexts/CartContext';

const App = () => (
  <CartProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </CartProvider>
  
);

export default App;

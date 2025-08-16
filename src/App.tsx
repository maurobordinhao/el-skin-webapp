import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

const App = () => (
  <BrowserRouter>
    <GlobalStyles />
    <AppRoutes />
  </BrowserRouter>
);

export default App;

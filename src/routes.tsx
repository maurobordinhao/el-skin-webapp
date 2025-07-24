import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/Carousel';
import ProductShowcase from './components/ProductShowcase/ProductShowcase';
import Sobre from './pages/Sobre';
import NotFound from './pages/NotFound';

const AppRoutes = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header onSearch={setSearchTerm} />
            <Carousel />
            <ProductShowcase searchTerm={searchTerm} />
            <Footer />
          </>
        }
      />
      <Route
        path="/sobre"
        element={
          <>
            <Header onSearch={() => {}} />
            <Sobre />
            <Footer />
          </>
        }
      />
      <Route
        path="*"
        element={
          <>
            <Header onSearch={() => {}} />
            <NotFound />
            <Footer />
          </>
        }
      />
    </Routes>
  );
};

export default AppRoutes;

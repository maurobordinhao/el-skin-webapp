import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Carousel from './components/Carousel/Carousel';
import ProductShowcase from './components/ProductShowcase/ProductShowcase';
import Sobre from './pages/Sobre';
import NotFound from './pages/NotFound'; 

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <Carousel />
            <ProductShowcase />
            <Footer />
          </>
        }
      />
      <Route
        path="/sobre"
        element={
          <>
            <Header />
            <Sobre />
            <Footer />
          </>
        }
      />
      <Route
        path="*"
        element={
          <>
            <Header />
            <NotFound />
            <Footer />
          </>
        }
      />
    </Routes>
  );
};

export default AppRoutes;

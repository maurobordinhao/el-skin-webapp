import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Carousel from './components/Carousel';
import ProductShowcase from './components/ProductShowcase';
import Footer from './components/Footer';
import Sobre from './pages/Sobre'; 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Carousel />
              <ProductShowcase />
            </>
          } />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import ProductShowcase from './components/ProductShowcase/ProductShowcase';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <ProductShowcase />
      <Footer />
    </div>
  );
}

export default App;

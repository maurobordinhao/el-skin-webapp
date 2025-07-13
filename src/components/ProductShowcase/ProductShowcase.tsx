import React from 'react';
import './ProductShowcase.css';
import ProductCard from '../ProductCard/ProductCard';
import protetorImg from '../../assets/protetor.png';

const baseProduct = {
  name: 'Protetor solar AL SUN',
  description: 'alta proteção e pele luminosa sem grude nem pele cinzenta',
  image: protetorImg,
  tags: ['proteção', 'rosto'],
  price: 'R$ 79,90',
};

const products = Array(8).fill(baseProduct);

const ProductShowcase = () => {    
  return (
    <section className="product-showcase">
      <h2>Destaques</h2>
      <div className="product-list">
        {products.map((p, i) => (
          <ProductCard
            key={i}
            image={p.image}
            name={p.name}
            description={p.description}
            tags={p.tags}
            price={p.price}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;

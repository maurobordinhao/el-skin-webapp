import React from 'react';
import './ProductShowcase.css';
import ProductCard from '../ProductCard/ProductCard';
//import protetorImg from '../../assets/protetor.png';
import Prod1 from '../../assets/prod1.jpg';
import Prod2 from '../../assets/prod2.jpg';
import Prod3 from '../../assets/prod3.jpg';
import Prod4 from '../../assets/prod4.jpg';
import Prod5 from '../../assets/prod5.jpg';
import Prod6 from '../../assets/prod6.jpg';
import Prod7 from '../../assets/prod7.jpg';
import Prod8 from '../../assets/prod8.jpg';

const products = [
  { id: 1, name: 'Protetor solar AL SUN 1', description: 'alta proteção e pele luminosa', image: Prod1, tags: ['proteção', 'rosto'], price: 'R$ 79,90' },
  { id: 2, name: 'Protetor solar AL SUN 2', description: 'alta proteção e pele luminosa', image: Prod2, tags: ['proteção', 'rosto'], price: 'R$ 79,90' },
  { id: 3, name: 'Protetor solar AL SUN 3', description: 'alta proteção e pele luminosa', image: Prod3, tags: ['proteção', 'rosto'], price: 'R$ 79,90' },
  { id: 4, name: 'Protetor solar AL SUN 4', description: 'alta proteção e pele luminosa', image: Prod4, tags: ['proteção', 'rosto'], price: 'R$ 79,90' },
  { id: 5, name: 'Protetor solar AL SUN 5', description: 'alta proteção e pele luminosa', image: Prod5, tags: ['proteção', 'rosto'], price: 'R$ 79,90' },
  { id: 6, name: 'Protetor solar AL SUN 6', description: 'alta proteção e pele luminosa', image: Prod6, tags: ['proteção', 'rosto'], price: 'R$ 79,90' },
  { id: 7, name: 'Protetor solar AL SUN 7', description: 'alta proteção e pele luminosa', image: Prod7, tags: ['proteção', 'rosto'], price: 'R$ 79,90' },
  { id: 8, name: 'Protetor solar AL SUN 8', description: 'alta proteção e pele luminosa', image: Prod8, tags: ['proteção', 'rosto'], price: 'R$ 79,90' },
];


//const products = Array(8).fill(baseProduct);

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

import React from 'react';
import { products } from '../data/products'; // Importando nossa lista de produtos
import ProductCard from './ProductCard'; // Importando o card que criamos
import {
  ShowcaseContainer,
  ShowcaseTitle,
  ProductGrid,
} from './ProductShowcase.styles';

const ProductShowcase: React.FC = () => {
  return (
    <ShowcaseContainer>
      <ShowcaseTitle>Nossos Destaques</ShowcaseTitle>
      <ProductGrid>
        {/* Usamos o .map() para criar um ProductCard para cada produto */}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </ShowcaseContainer>
  );
};

export default ProductShowcase;
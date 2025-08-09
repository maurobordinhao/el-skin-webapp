// src/components/ProductShowcase/ProductShowcase.tsx
import React, { useEffect, useState } from 'react';
import { IProduct } from '../../service/productService';
import { productService } from '../../service/productService';
import ProductCard from '../ProductCard/ProductCard';
import styled from 'styled-components';

type Props = {
  searchTerm?: string;
  onAddToCart: (product: IProduct) => void;
};

const ProductShowcase = ({ searchTerm, onAddToCart }: Props) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await productService.getProducts();
      setProducts(data);
    };
    fetch();
  }, []);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm?.toLowerCase() ?? '')
  );

  return (
    <Container>
      <Title>Destaques</Title>
      <Grid>
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
        {filtered.length === 0 && <NoResults>Nenhum produto encontrado.</NoResults>}
      </Grid>
    </Container>
  );
};

export default ProductShowcase;

// Styled components

const Container = styled.section`
  padding: 2rem;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const NoResults = styled.p`
  grid-column: 1 / -1;
  font-size: 1rem;
  color: #777;
`;

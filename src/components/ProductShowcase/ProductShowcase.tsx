// src/components/ProductShowcase/ProductShowcase.tsx
import React, { useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useSearch } from '../../hooks/useSearch';
import { useProducts } from '../../hooks/useProducts';
import type { IProduct } from '../../types/Product';
import ProductCard from '../ProductCard/ProductCard';

type Props = {
  onAddToCart: (product: IProduct) => void;
};

const ProductShowcase = ({ onAddToCart }: Props) => {
  const { term } = useSearch();
  const { loadProducts, filteredProducts, all, loading, error } = useProducts();

  useEffect(() => {
    if (!all.length) loadProducts();
  }, [all.length, loadProducts]);

  const list = useMemo(() => filteredProducts(term), [filteredProducts, term]);

  return (
    <Container>
      <Title>Nossos queridinhos</Title>

      {loading && <Status>Carregando produtos...</Status>}
      {error && <Status role="alert">Erro: {error}</Status>}

      <Grid aria-busy={loading}>
        {list.map((product: IProduct) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}

        {!loading && !error && list.length === 0 && (
          <NoResults>Nenhum produto encontrado.</NoResults>
        )}
      </Grid>
    </Container>
  );
};

export default ProductShowcase;

// estilos mantidos
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

const Status = styled.p`
  margin-bottom: 1rem;
`;

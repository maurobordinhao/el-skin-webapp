// src/components/ProductShowcase/ProductShowcase.tsx
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useSearch } from '../../hooks/useSearch';
import type { IProduct } from '../../types/Product';
import ProductCard from '../ProductCard/ProductCard';


import { useGetProductsQuery } from '../../store/apis/productsApi';

type Props = {
  onAddToCart: (product: IProduct) => void;
};

const ProductShowcase = ({ onAddToCart }: Props) => {
  const { term } = useSearch();

  
  const {
    data: products = [],
    isLoading,
    isError,
    error,
    
  } = useGetProductsQuery();

  
  const list = useMemo(() => {
    const t = (term ?? '').trim().toLowerCase();
    if (!t) return products;
    return products.filter((p) => p.name.toLowerCase().includes(t));
  }, [products, term]);

  
  const errorMessage =
    (error as any)?.data?.message ||
    (error as any)?.error ||
    'Erro ao carregar produtos';

  return (
    <Container>
      <Title>Nossos queridinhos</Title>

      {isLoading && <Status>Carregando produtos...</Status>}
      {isError && <Status role="alert">Erro: {errorMessage}</Status>}

      <Grid aria-busy={isLoading}>
        {list.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}

        {!isLoading && !isError && list.length === 0 && (
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

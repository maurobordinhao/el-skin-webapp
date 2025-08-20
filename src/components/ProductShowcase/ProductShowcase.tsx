'use client';

import React, { useMemo } from 'react';
import styles from './ProductShowcase.module.css';

import ProductCard from '@/components/ProductCard/ProductCard';
import { useSearch } from '@/hooks/useSearch';
import type { IProduct } from '@/service/productService';
import { useGetProductsQuery } from '@/store/apis/productsApi';

type Props = {
  onAddToCart: (product: IProduct) => void;
};

export default function ProductShowcase({ onAddToCart }: Props) {
  const { term } = useSearch();
  const { data, isLoading, isError, error } = useGetProductsQuery();

  const products = data ?? [];

  const filtered = useMemo(() => {
    const t = (term ?? '').trim().toLowerCase();
    if (!t) return products;
    return products.filter((p) => p.name.toLowerCase().includes(t));
  }, [products, term]);

  const errorMessage =
    (error as any)?.data?.message ||
    (error as any)?.error ||
    'Erro ao carregar produtos';

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Nossos queridinhos</h2>

      {isLoading && <p className={styles.status}>Carregando produtos...</p>}
      {isError && (
        <p className={styles.status} role="alert">
          Erro: {errorMessage}
        </p>
      )}

      <div className={styles.grid} aria-busy={isLoading}>
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
        {!isLoading && !isError && filtered.length === 0 && (
          <p className={styles.status}>Nenhum produto encontrado.</p>
        )}
      </div>
    </section>
  );
}

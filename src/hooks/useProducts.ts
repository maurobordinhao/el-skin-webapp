// src/hooks/useProducts.ts
import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store';
import {
  fetchProducts,
  fetchProductById,
  selectAllProducts,
  selectProductsLoading,
  selectProductsError,
} from '../store/slices/productsSlice';
import type { IProduct } from '../service/productService';

export function useProducts() {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((s: RootState) => selectAllProducts(s));
  const loading = useSelector((s: RootState) => selectProductsLoading(s));
  const error = useSelector((s: RootState) => selectProductsError(s));

  const loadProducts = useCallback(() => dispatch(fetchProducts()), [dispatch]);

  const loadProductById = useCallback(
    (id: string) => dispatch(fetchProductById(id)),
    [dispatch]
  );

  const getProductById = useCallback(
    (id: string): IProduct | undefined =>
      products.find((p: IProduct) => p.id === id), // <- tipado
    [products]
  );

  const filteredProducts = useCallback(
    (term?: string): IProduct[] => {
      const t = (term ?? '').trim().toLowerCase();
      if (!t) return products;
      return products.filter((p: IProduct) =>
        p.name.toLowerCase().includes(t) // <- tipado
      );
    },
    [products]
  );

  const all = useMemo<IProduct[]>(() => products, [products]);

  return {
    loadProducts,
    loadProductById,
    getProductById,
    filteredProducts,
    all,
    loading,
    error,
  };
}

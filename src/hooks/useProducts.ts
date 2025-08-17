// src/hooks/useProducts.ts
import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store';
import {
  selectAllProducts,
  selectProductsLoading,
  selectProductsError,
  setProducts,
  upsertProduct,
} from '../store/slices/productsSlice';
import type { IProduct } from '../service/productService';
import {
  useGetProductsQuery,
  useLazyGetProductByIdQuery,
} from '../store/apis/productsApi';

export function useProducts() {
  const dispatch = useDispatch<AppDispatch>();

  // RTK Query — lista de produtos
  const {
    data,
    error: rqError,
    isFetching,
    refetch,
  } = useGetProductsQuery();

  // RTK Query — produto por id (lazy)
  const [fetchById] = useLazyGetProductByIdQuery();

  // sincroniza os dados do RTK Query no slice atual
  useEffect(() => {
    if (data) {
      dispatch(setProducts(data));
    }
  }, [data, dispatch]);

  // Estados e seletores do slice (mantidos)
  const products = useSelector((s: RootState) => selectAllProducts(s));
  const loadingSlice = useSelector((s: RootState) => selectProductsLoading(s));
  const errorSlice = useSelector((s: RootState) => selectProductsError(s));

  // API pública do hook (mantendo sua assinatura)
  const loadProducts = useCallback(() => {
    // força nova busca do RTK Query
    return refetch();
  }, [refetch]);

  const loadProductById = useCallback(
    async (id: string) => {
      const res = await fetchById(id);
      if ('data' in res && res.data) {
        dispatch(upsertProduct(res.data));
      }
      return res;
    },
    [dispatch, fetchById]
  );

  const getProductById = useCallback(
    (id: string): IProduct | undefined =>
      products.find((p: IProduct) => p.id === id),
    [products]
  );

  const filteredProducts = useCallback(
    (term?: string): IProduct[] => {
      const t = (term ?? '').trim().toLowerCase();
      if (!t) return products;
      return products.filter((p: IProduct) =>
        p.name.toLowerCase().includes(t)
      );
    },
    [products]
  );

  const all = useMemo<IProduct[]>(() => products, [products]);

  // escolhe loading/erro: prioriza RTK Query
  const loading = isFetching || loadingSlice;
  const error =
    rqError
      ? (() => {
          const e = rqError as any;
          if ('status' in e) {
            const msg =
              typeof e.data === 'string'
                ? e.data
                : e?.data?.message ?? JSON.stringify(e.data ?? {});
            return `HTTP ${String(e.status)}: ${msg || 'falha na requisição'}`;
          }
          return e?.error ?? 'Erro ao carregar produtos';
        })()
      : errorSlice;

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

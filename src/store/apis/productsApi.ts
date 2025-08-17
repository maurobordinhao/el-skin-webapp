// src/store/apis/productsApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IProduct } from '../../service/productService';
import { API_CONFIG } from '../../config/APIConfig';

const baseUrl = (API_CONFIG?.BASE_URL ?? '').replace(/\/+$/, '');

const PRODUCTS_PATH = (API_CONFIG?.ENDPOINTS?.PRODUCTS ?? '/products').replace(/^\/+/, '');

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Products', 'Product'],
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      
      query: () => (baseUrl ? `${PRODUCTS_PATH}` : `/${PRODUCTS_PATH}`),
      providesTags: (result) =>
        result
          ? [
              ...result.map((p) => ({ type: 'Product' as const, id: p.id })),
              { type: 'Products' as const, id: 'LIST' },
            ]
          : [{ type: 'Products' as const, id: 'LIST' }],
    }),
    getProductById: builder.query<IProduct, string>({
      query: (id) =>
        baseUrl ? `${PRODUCTS_PATH}/${id}` : `/${PRODUCTS_PATH}/${id}`,
      providesTags: (_r, _e, id) => [{ type: 'Product', id }],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useLazyGetProductsQuery,
  useGetProductByIdQuery,
  useLazyGetProductByIdQuery,
} = productsApi;

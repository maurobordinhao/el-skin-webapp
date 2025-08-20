import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IProduct } from '@/service/productService';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], void>({
      query: () => '/api/products',
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;

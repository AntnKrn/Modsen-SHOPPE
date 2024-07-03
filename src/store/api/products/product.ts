import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { productType } from '../../../types/product';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com/',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<productType[], string>({
      query: () => `/products`,
    }),
    getProduct: builder.query<productType, number>({
      query: (id: number) => `/products/${id}`,
    }),
    getProductsByCategory: builder.query<productType[], string>({
      query: (category: string) => `/products/category/${category}`,
    }),
    getCategories: builder.query<string[], null>({
      query: () => `/products/categories`,
    }),
    getProductsByLimit: builder.query<productType[], number>({
      query: (limit: number) => `/products?limit=${limit}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetProductsByCategoryQuery,
  useGetCategoriesQuery,
  useGetProductsByLimitQuery,
} = productApi;

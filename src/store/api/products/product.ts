import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../../../interfaces/IProducts';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com/',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], string>({
      query: () => `/products`,
    }),
    getProduct: builder.query<IProduct, number>({
      query: (id: number) => `/products/${id}`,
    }),
    getProductsByCategory: builder.query<IProduct[], string>({
      query: (category: string) => `/products/category/${category}`,
    }),
    getCategories: builder.query<string[], null>({
      query: () => `/products/categories`,
    }),
    getProductsByLimit: builder.query<IProduct[], number>({
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

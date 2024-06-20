import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../../../interfaces/IProducts';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com/',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], string>({
      query: (queryString: string) => `/${queryString}`,
    }),
    getProduct: builder.query<IProduct, string>({
      query: (id: string) => `/products/${id}`,
    }),
    getProductsByCategory: builder.query<IProduct, string>({
      query: (category: string) => `/products/category/${category}`,
    }),
    getCategories: builder.query<string[], null>({
      query: () => `/products/categories`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetProductsByCategoryQuery,
  useGetCategoriesQuery,
} = productApi;

/* getProducts: builder.query<IProduct[], string>({
  query: (limit: string) =>
    `/products` + `${limit ? `?limit=${limit}` : ''}`,
}), */

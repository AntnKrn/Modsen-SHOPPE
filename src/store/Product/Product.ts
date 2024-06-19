import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../../interfaces/IProducts';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com/',
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProduct[], number>({
      query: (limit: number) =>
        `/products` + `${limit ? `?limit=${limit}` : ''}`,
    }),
    getProduct: builder.query<IProduct, string>({
      query: (id: string) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery } = productApi;

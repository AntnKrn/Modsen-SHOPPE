import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct } from '../../interfaces/IProducts';

//type queryType = number | string;

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
    getProduct: builder.mutation<IProduct, number>({
      query: (id: number) => `/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductMutation } = productApi;

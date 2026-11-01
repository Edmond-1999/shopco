import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      // Fetch no more than the maximum number displayed by New Arrivals.
      query: () => 'products?limit=35',
    }),
    getProductById: builder.query({
      query: (productId) => `products/${productId}`,
    }),
  }),
})

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi

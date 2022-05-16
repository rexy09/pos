import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://fakestoreapi.com/products/categories'

const createRequest = (url) => ({ url })


export const productCategoriesApi = createApi({
    reducerPath:'productCategoriesApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints:(builder) => ({
        getProductCategories: builder.query({
            query:() => createRequest()
        })
    })

});

export const { useGetProductCategoriesQuery } = productCategoriesApi
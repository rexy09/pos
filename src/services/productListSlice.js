import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseUrl = 'http://127.0.0.1:8000/inventory/'

const Headers = {
    'Content-Type':'multipart/form-data',
    'Accept':'application/json',
   
}

const createRequest = (url) => ({ url, headers:Headers })

export const productListSlice = createApi({
    reducerPath: 'productListSlice',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['ProductList'],
    endpoints: (builder) => ({
        getProductList: builder.query({
            query: () => createRequest('get/products'),
            providesTags: ['ProductList']
        }),
        addProduct: builder.mutation({
            query: (product) =>  ({
                url: 'add/product',
                method: 'POST',
                body: product
            }),
            invalidatesTags: ['ProductList']

        }),
        editProduct: builder.mutation({
            query: (editproduct) => ({
                url: 'edit/product',
                method: 'POST',
                body: editproduct
            }),
            invalidatesTags: ['ProductList']

        }),
        deleteProduct: builder.mutation({
            query: (deleteproduct) => ({
                url: 'delete/product',
                method: 'POST',
                body: deleteproduct
            }),
            invalidatesTags: ['ProductList']

        })
    })
    
});

export const { useGetProductListQuery, useAddProductMutation, useEditProductMutation, useDeleteProductMutation } = productListSlice
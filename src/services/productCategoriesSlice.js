import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'http://127.0.0.1:8000/inventory/'

const createRequest = (url) => ({ url })

export const productCategoriesSlice = createApi({
    reducerPath: 'productCategoriesSlice',
    baseQuery: fetchBaseQuery({ baseUrl }),
    tagTypes: ['ProductCategoriesList'],
    endpoints: (builder) => ({
        getProductCategories: builder.query({
            query: () => createRequest('get/product/categories'),
            providesTags: ['ProductCategoriesList']
        }),
        addProductCategories: builder.mutation({
            query: (productcategory) => ({
                url: 'add/product/category',
                method: 'POST',
                body: productcategory
            }),
            invalidatesTags: ['ProductCategoriesList']

        }),
        editProductCategories: builder.mutation({
            query: (editproductcategory) => ({
                url: 'edit/product/category',
                method: 'POST',
                body: editproductcategory
            }),
            invalidatesTags: ['ProductCategoriesList']

        }),
        deleteProductCategories: builder.mutation({
            query: (deleteproductcategory) => ({
                url: 'delete/product/category',
                method: 'POST',
                body: deleteproductcategory
            }),
            invalidatesTags: ['ProductCategoriesList']

        })
    })

});

export const { useGetProductCategoriesQuery, useAddProductCategoriesMutation, useEditProductCategoriesMutation, useDeleteProductCategoriesMutation } = productCategoriesSlice
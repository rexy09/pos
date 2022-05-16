import { configureStore } from "@reduxjs/toolkit";
import { productCategoriesApi } from "../services/productCategoriesApi";

export default configureStore({
    reducer:{
        [productCategoriesApi.reducerPath]: productCategoriesApi.reducer
    }
})
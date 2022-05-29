import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { productCategoriesSlice } from "../services/productCategoriesSlice";
import { productListSlice } from "../services/productListSlice";

export default configureStore({
    reducer: {
        [productCategoriesSlice.reducerPath]: productCategoriesSlice.reducer,
        [productListSlice.reducerPath]: productListSlice.reducer
    },
    // The Middleware helps in autorefreshing page when api request is done
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productCategoriesSlice.middleware,productListSlice.middleware)

});

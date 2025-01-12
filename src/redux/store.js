'use client';
import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../features/category/categorySlice";
import rootReducer from "./rootReducer";
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: true,
            serializableCheck: false,
        }),
});
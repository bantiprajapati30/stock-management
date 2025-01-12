import { combineReducers } from "@reduxjs/toolkit";
import categorySlice from "../features/category/categorySlice";
const rootReducer = combineReducers({
    category: categorySlice,
});

export default rootReducer;

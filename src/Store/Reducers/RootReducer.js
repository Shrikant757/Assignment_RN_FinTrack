import { combineReducers } from "@reduxjs/toolkit";
import transactionSlice from "./TransactionSlice";
import categorySlice from "./CategorySlice";

export const RootReducer = combineReducers({
    transaction: transactionSlice,
    category: categorySlice
});

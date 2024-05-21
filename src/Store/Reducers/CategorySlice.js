import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
    name: 'category',
    initialState: [],
    reducers: {
        AllCategories: (state, action) => {
            state.push(action.payload)
        },
    }
})

export const { AllCategories } = categorySlice.actions;

export default categorySlice.reducer;

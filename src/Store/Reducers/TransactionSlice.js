import { createSlice } from "@reduxjs/toolkit";

export const transactionSlice = createSlice({
    name: 'transaction',
    initialState: [],
    reducers: {
        Alltransactions: (state, action) => {
            state.push(action.payload)
        },
    }
})

export const { Alltransactions } = transactionSlice.actions;

export default transactionSlice.reducer;

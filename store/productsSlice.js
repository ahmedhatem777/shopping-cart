import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = 'https://fakestoreapi.com/products';

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    try {
        const res = await fetch(url);
        return await res.json();
    } catch (err) {
        return console.log(err);
    }
})

const initialState = {
    products: [],
    loading: false,
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: {
        [getProducts.pending]: (state) => {
            state.isLoading = true;
        },
        [getProducts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        },
        [getProducts.rejected]: (state) => {
            state.isLoading = false;
        }
    }
})

export const {addProducts} = productsSlice.actions;

export default productsSlice.reducer;
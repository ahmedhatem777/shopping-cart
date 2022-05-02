import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            //if item is already there then increment item's quantity
            state.items.push( action.payload );
        },
        removeItem: (state, action) => {
            //if there is more than 1 of that item then decrement quantity
            let index = state.items.indexOf(action.payload); 
            state.items.splice(index, index);
        },
        clearCart: (state) => {
            state.items = []
        },
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer
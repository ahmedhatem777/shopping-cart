import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    total: 0,
    quantity: 0
}

const findItem = (item, array) => {
    for( let i = 0; i < array.length; i++ ) {
        if (item.id === array[i].id) {
            return i;
        }
    }
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            let itemPresent = findItem(action.payload, state.items);

            if(itemPresent == null) {
                state.items.push( {...action.payload, quantity: 1} );
                state.total += action.payload.price;
                state.quantity += 1;
                
            }
            else if(state.items[itemPresent].quantity < 10){
                state.items[itemPresent].quantity += 1;
                state.total += action.payload.price;
                state.quantity += 1;
            }
        },
        removeItem: (state, action) => {
            let index = findItem(action.payload, state.items);
            let item = state.items[index];

            if( item.quantity > 1) {
                item.quantity -= 1;
                state.total -= item.price;
                state.quantity -= 1;
            }
            else {
                state.items.splice(index, 1);
                state.total -= item.price;
                state.quantity -= 1;
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.total = 0;
            state.quantity = 0;
        },
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
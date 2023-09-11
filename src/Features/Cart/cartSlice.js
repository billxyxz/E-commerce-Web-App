import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartItemsQty: 0,
    cartItemsAmt: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const productItem = action.payload;
            state.cartItemsQty++;
            const price = Number(productItem.price)
            const checkItem = state.cartItems.find(product => product.id === productItem.id);
            if(checkItem){
                checkItem.itemQty += 1
                checkItem.price = Number(checkItem.unitPrice * Number(checkItem.itemQty)).toFixed(2);
                let amt = 0
                for(let i = 0; i < state.cartItems.length;  i++){
                    amt += Number(state.cartItems[i].price)
                }
                state.cartItemsAmt = Number(Number(amt).toFixed(2));
                console.log(amt)
                
            }else{
                state.cartItems.push({
                    ...action.payload,
                    itemQty: 1,
                    unitPrice: price,
                })
                let amt = 0
                for(let i = 0; i < state.cartItems.length;  i++){
                    amt += Number(state.cartItems[i].price);
                    
                }
                state.cartItemsAmt = Number(Number(amt).toFixed(2));
            }

        },
        removeItem: (state, action) => {
            const itemSelected = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== itemSelected.id)
            let amt = 0
                for(let i = 0; i < state.cartItems.length;  i++){
                    amt += Number(Number(state.cartItems[i].unitPrice) * Number(state.cartItems[i].itemQty))
                }
            state.cartItemsAmt = Number(Number(amt).toFixed(2));
            let newQty = 0;
            for(let i = 0; i < state.cartItems.length;  i++){
                newQty += state.cartItems[i].itemQty;
            }
            state.cartItemsQty = newQty;
        },
        increase: (state, action) => {
            const itemSelected = state.cartItems.find(item => item.id === action.payload.id)
            itemSelected.price = (Number(itemSelected.price) + Number(action.payload.unitPrice)).toFixed(2) 
            state.cartItemsQty++;
            itemSelected.itemQty++; 
            let amt = 0
                for(let i = 0; i < state.cartItems.length;  i++){
                    amt += Number(Number(state.cartItems[i].price).toFixed(2))
                }
                state.cartItemsAmt = Number(Number(amt).toFixed(2));
        },
        decrease: (state, action) => {
            const itemSelected = state.cartItems.find(item => item.id === action.payload.id)
            itemSelected.price = (Number(itemSelected.price) - Number(action.payload.unitPrice)).toFixed(2);
            state.cartItemsQty--;
            if(itemSelected.itemQty > 1){
                itemSelected.itemQty--; 
            }else{
                state.cartItems = state.cartItems.filter(item => item.id !== itemSelected.id);
            }
            let amt = 0
                for(let i = 0; i < state.cartItems.length;  i++){
                    amt += Number(Number(state.cartItems[i].price).toFixed(2))
                }
                state.cartItemsAmt = Number(Number(amt).toFixed(2));
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.cartItemsQty = 0;

        }
    },
})

export default cartSlice.reducer;
export const { addToCart, removeItem, increase, decrease, clearCart } = cartSlice.actions


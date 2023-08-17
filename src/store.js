import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Features/Cart/cartSlice";


//This creates a redux store, which we will then export for use in our web app functionality
export const store = configureStore({
    reducer: {
        cart: cartReducer
    },
})

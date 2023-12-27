import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './Redux/Slices/CartSlices'

export const store=configureStore({
    reducer:{
        cart: cartSlice,
    }
});
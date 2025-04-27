import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const Store = configureStore({
    reducer: {
        carts: cartReducer,
    },
});

export default Store;

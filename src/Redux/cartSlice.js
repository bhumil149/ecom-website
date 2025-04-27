import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        count: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            const product = action.payload;
            if (!product.id) return;

            const existingProduct = state.products.find(item => item.id === product.id);

            if (existingProduct) {
                existingProduct.quantity++;
            } else {
                state.products.push({ ...product, quantity: 1 });
            }
            state.count = calculateTotalQuantity(state.products);
        },

        removeItems: (state, action) => {
            state.products = state.products.filter(
                (item) => item.id !== action.payload
            );

            state.count = calculateTotalQuantity(state.products);
        },

        incrementItem: (state, action) => {
            const { id } = action.payload;
            const product = state.products.find((item) => item.id === id);
            if (product) {
                product.quantity++;
                state.count = calculateTotalQuantity(state.products);
            }
        },

        decrementItem: (state, action) => {
            const { id } = action.payload;
            const product = state.products.find((item) => item.id === id);
            if (product) {
                product.quantity = Math.max(0, product.quantity - 1);
                if (product.quantity === 0) {
                    state.products = state.products.filter(item => item.id !== id);
                }
                state.count = calculateTotalQuantity(state.products);
            }
        },

        clearCart: (state) => {
            state.products = [];
            state.count = 0;
        },
    },
});

const calculateTotalQuantity = (products) => {
    return products.reduce((total, product) => total + product.quantity, 0);
};

export const {
    addProduct,
    removeItems,
    incrementItem,
    decrementItem,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/product.slice"
import cart from "./slices/cart.slice"

export default configureStore({
    reducer: {
        products,
        cart
    }
})
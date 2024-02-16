import { configureStore } from '@reduxjs/toolkit'
import Cart from './slice/CartCount';
import ProductSlice from './slice/ProductSlice';

export const store = configureStore({
    reducer: {
        Cart,
        ProductSlice
    },
})
import { configureStore } from '@reduxjs/toolkit'
import productSlice from '../slice/produit_action'
import cartSlice from '../slice/cart_slice'
export const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
  },
})
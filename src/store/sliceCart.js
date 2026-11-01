import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload
      const existingProduct = state.items.find((item) => item.id === product.id)

      if (existingProduct) {
        existingProduct.quantity += product.quantity
      } else {
        state.items.push(product)
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload)
      if (item) {
        item.quantity += 1
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload)

      if (item && item.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload)
      } else if (item) {
        item.quantity -= 1
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((cartItem) => cartItem.id !== action.payload)
    },
  },
})

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} = cartSlice.actions
export default cartSlice.reducer
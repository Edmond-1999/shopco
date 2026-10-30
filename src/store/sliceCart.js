import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload
      const quantityToAdd = product.quantity ?? 1
      const existingItem = state.items.find((item) => item.id === product.id)

      if (existingItem) {
        existingItem.quantity += quantityToAdd
        existingItem.totalPrice += product.price * quantityToAdd
      } else {
        state.items.push({
          ...product,
          quantity: quantityToAdd,
          totalPrice: product.price * quantityToAdd,
        })
      }

      state.totalQuantity += quantityToAdd
      state.totalPrice += product.price * quantityToAdd
    },
  },
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
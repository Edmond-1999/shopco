import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './sliceProducts'

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
})

export default store

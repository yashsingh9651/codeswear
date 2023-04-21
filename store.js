import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import apiCallReducer from './slices/apiCallSlice'
export default configureStore({
  reducer: {
    counter:counterReducer,
    apiCall:apiCallReducer
  }
})
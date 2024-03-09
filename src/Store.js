import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./Slices/CartSlice"
import customerReducer from './Slices/CustomerSlice'


const store = configureStore({
    reducer: {
        cart: cartReducer,
        customer: customerReducer
    }
})


export default store
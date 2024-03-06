import  { createSlice } from '@reduxjs/toolkit';



const initialState = {
    items: []

}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        getItems: (state, actions) => {
            state.items = actions.payload
        },
        addItems: (state , action)=> {
            state.items.push(action.payload)
            
        },
        removeItem: (state) => {
            state.items.filter((item) => item.id != item.id)

        }

    }
})


export const { getItems , removeItem, addItems } = cartSlice.actions

export default cartSlice.reducer
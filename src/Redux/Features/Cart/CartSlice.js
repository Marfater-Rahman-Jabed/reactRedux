import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtocart: (state, { payload }) => {
            state.cart.push({ qty: 1, ...payload })
        },
        removecart: (state, { payload }) => {
            state.cart = state.cart.filter((item, i) => i !== payload)
        },


    }
})

export const { addtocart, removecart } = cartSlice.actions
export default cartSlice.reducer
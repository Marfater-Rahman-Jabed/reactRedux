import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count = state.count + 1
        },
        decrement: (state) => {
            state.count = state.count - 1
        },
        incrementbyValue: (state, actions) => {
            state.count = state.count + actions.payload
        },
        decrementbyValue: (state, actions) => {
            state.count = state.count - actions.payload
        }
    },
})

export const { increment, decrement, incrementbyValue, decrementbyValue } = counterSlice.actions

export default counterSlice.reducer;
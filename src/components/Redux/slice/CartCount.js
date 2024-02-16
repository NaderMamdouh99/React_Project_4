import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    CartCount: 0,
}

export const counterSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        //TODO: increment the counter
        increment: (state) => {
            state.CartCount += 1
        },
        //TODO: decrement the counter
        decrement: (state) => {
            state.CartCount -= 1
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer
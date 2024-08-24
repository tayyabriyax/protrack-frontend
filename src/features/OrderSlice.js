import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    Order: [],
}

const placeOrderAsync = createAsyncThunk("unit/placeOrderAsync", (newOrder) => {
    return fetch("http://localhost:3000/api/order", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newOrder)
    }).then(resp => resp.json())
})

const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(placeOrderAsync.fulfilled, (state, action) => {
            state.Cart = action.payload
        })
    }
})

export default cartSlice.reducer;

export { placeOrderAsync };

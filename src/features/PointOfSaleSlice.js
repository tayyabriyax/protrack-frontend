import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    Cart: [],
    loadDate: false
}

const getCartAsync = createAsyncThunk("unit/getCartAsync", async () => {
    return fetch("http://localhost:3000/api/cart").then(response => response.json())
})

const addCartAsync = createAsyncThunk("unit/addCartAsync", (newCart) => {
    return fetch("http://localhost:3000/api/cart", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCart)
    }).then(resp => resp.json())
})

const deleteCartAsync = createAsyncThunk("unit/deleteCartAsync", (id) => {
    return fetch("http://localhost:3000/api/cart/" + id, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    }).then(resp => resp.json())
})

const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCartAsync.fulfilled, (state, action) => {
            state.Cart = action.payload
        })

        builder.addCase(addCartAsync.fulfilled, (state) => {
            state.loadData = !state.loadData
        })

        builder.addCase(deleteCartAsync.fulfilled, (state) => {
            state.loadData = !state.loadData
        })
    }
})

export default cartSlice.reducer;

export { getCartAsync, addCartAsync, deleteCartAsync };

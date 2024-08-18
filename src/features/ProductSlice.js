import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    Product: [],
    loadData: false
}

const getProductAsync = createAsyncThunk("unit/getProductAsync", async () => {
    return fetch("http://localhost:3000/api/product").then(response => response.json())
})

const addProductAsync = createAsyncThunk("unit/addProductAsync", (newProduct) => {
    return fetch("http://localhost:3000/api/product", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
    }).then(resp => resp.json())
})

const deleteProductAsync = createAsyncThunk("unit/deleteProductAsync", (id) => {
    return fetch("http://localhost:3000/api/product/" + id, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    }).then(resp => resp.json())
})

const editProductAsync = createAsyncThunk("unit/editProductAsync", (obj) => {
    return fetch("http://localhost:3000/api/product/" + obj.id, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }).then(resp => resp.json())
})

const productSlice = createSlice({
    name: "Product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProductAsync.fulfilled, (state, action) => {
            state.Product = action.payload
        })

        builder.addCase(addProductAsync.fulfilled, (state) => {
            state.loadData = !state.loadData
        })

        builder.addCase(deleteProductAsync.fulfilled, (state) => {
            state.loadData = !state.loadData
        })

        builder.addCase(editProductAsync.fulfilled, (state) => {
            state.loadData = !state.loadData
        })
    }
})

export default productSlice.reducer;

export { getProductAsync, deleteProductAsync, addProductAsync, editProductAsync }
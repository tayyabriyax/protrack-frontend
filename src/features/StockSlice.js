import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    Stock: [],
    loadData: false
}

const getStockAsync = createAsyncThunk("unit/getStockAsync", async () => {
    return fetch("http://localhost:3000/api/stock").then(response => response.json())
})

const addStockAsync = createAsyncThunk("unit/addStockAsync", (newStock) => {
    return fetch("http://localhost:3000/api/stock", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newStock)
    }).then(resp => resp.json())
})

const deleteStockAsync = createAsyncThunk("unit/deleteStockAsync", (id) => {
    return fetch("http://localhost:3000/api/stock/" + id, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    }).then(resp => resp.json())
})

const editStockAsync = createAsyncThunk("unit/editStockAsync", (obj) => {
    return fetch("http://localhost:3000/api/stock/" + obj.id, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }).then(resp => resp.json())
})

const stockSlice = createSlice({
    name: "Stock",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getStockAsync.fulfilled, (state, action) => {
            state.Stock = action.payload
        })

        builder.addCase(addStockAsync.fulfilled, (state) => {
            state.loadData = !state.loadData
        })

        builder.addCase(deleteStockAsync.fulfilled, (state) => {
            state.loadData = !state.loadData
        })

        builder.addCase(editStockAsync.fulfilled, (state) => {
            state.loadData = !state.loadData
        })
    }
})

export default stockSlice.reducer;

export { getStockAsync, addStockAsync, deleteStockAsync, editStockAsync }
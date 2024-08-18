import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    Supplier: [],
    loadData: false
}

const getSupplierAsync = createAsyncThunk("unit/getSupplierAsync", async () => {
    return fetch("http://localhost:3000/api/supplier").then(response => response.json())
})

const addSupplierAsync = createAsyncThunk("unit/addSupplierAsync", (newSupplier) => {
    return fetch("http://localhost:3000/api/supplier", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newSupplier)
    }).then(resp => resp.json())
})

const deleteSupplierAsync = createAsyncThunk("unit/deleteSupplierAsync", (id) => {
    return fetch("http://localhost:3000/api/supplier/" + id, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    }).then(resp => resp.json())
})

const editSupplierAsync = createAsyncThunk("unit/editSupplierAsync", (obj) => {
    return fetch("http://localhost:3000/api/supplier/" + obj.id, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }).then(resp => resp.json())
})

const supplierSlice = createSlice({
    name: "Supplier",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSupplierAsync.fulfilled, (state, action) => {
            state.Supplier = action.payload
        })

        builder.addCase(addSupplierAsync.fulfilled, (state) => {
            state.loadData = !state.loadData
        })

        builder.addCase(deleteSupplierAsync.fulfilled, (state) => {
            state.loadData = !state.loadData
        })

        builder.addCase(editSupplierAsync.fulfilled, (state) => {
            state.loadData = !state.loadData
        })
    }
})
export default supplierSlice.reducer;

export { getSupplierAsync, addSupplierAsync , deleteSupplierAsync, editSupplierAsync }


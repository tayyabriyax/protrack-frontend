import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    Company: [],
    loadData: false
}

const getCompanyAsync = createAsyncThunk("unit/getCompanyAsync", async () => {
    return fetch("http://localhost:3000/api/company").then(response => response.json())
})

const addCompanyAsync = createAsyncThunk("unit/addCompanyAsync", (newCompany) => {
    return fetch("http://localhost:3000/api/company", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCompany)
    }).then(resp => resp.json())
})

const deleteCompanyAsync = createAsyncThunk("unit/deleteCompanyAsync", (id) => {
    return fetch("http://localhost:3000/api/company/" + id, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    }).then(resp => resp.json())
})

const editCompanyAsync = createAsyncThunk("unit/editCompanyAsync", (obj) => {
    return fetch("http://localhost:3000/api/company/" + obj.id, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }).then(resp => resp.json())
})

const companySlice = createSlice({
    name: "Company",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCompanyAsync.fulfilled, (state, action) => {
            state.Company = action.payload
        })

        builder.addCase(addCompanyAsync.fulfilled, (state) => {
            state.loadData = !state.loadData
        })

        builder.addCase(deleteCompanyAsync.fulfilled, (state) => {
            state.loadData = !state.loadData
        })

        builder.addCase(editCompanyAsync.fulfilled, (state) => {
            state.loadData = !state.loadData
        })
    }
})

export default companySlice.reducer;

export { getCompanyAsync, addCompanyAsync, deleteCompanyAsync, editCompanyAsync }


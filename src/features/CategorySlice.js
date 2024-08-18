import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    Category: [],
    loadData: false
}

const getCategoryAsync = createAsyncThunk("unit/getCategoryAsync", async () => {
    return fetch("http://localhost:3000/api/category").then(response => response.json())
})

const addCategoryAsync = createAsyncThunk("unit/addCategoryAsync", (newCategory) => {
    return fetch("http://localhost:3000/api/category", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newCategory)
    }).then(resp => resp.json())
})

const deleteCategoryAsync = createAsyncThunk("unit/deleteCategoryAsync", (id) => {
    return fetch("http://localhost:3000/api/category/" + id, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    }).then(resp => resp.json())
})

const editCategoryAsync = createAsyncThunk("unit/editCategoryAsync", (obj) => {
    return fetch("http://localhost:3000/api/category/" + obj.category_id, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }).then(resp => resp.json())
})

const categorySlice = createSlice({
    name: "Category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategoryAsync.fulfilled, (state, action) => {
            state.Category = action.payload
        })

        builder.addCase(addCategoryAsync.fulfilled, (state) => {
            state.loadData = !state.loadData
        })

        builder.addCase(deleteCategoryAsync.fulfilled, (state) => {
            state.loadData = !state.loadData
        })

        builder.addCase(editCategoryAsync.fulfilled, (state) => {
            state.loadData = !state.loadData
        })
    }
})

export default categorySlice.reducer;

export { getCategoryAsync, addCategoryAsync, deleteCategoryAsync, editCategoryAsync }
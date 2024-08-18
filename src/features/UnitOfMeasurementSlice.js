import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    UnitOfMeasurement: [],
    loadData: false
}

const getUnitOfMeasurementAsync = createAsyncThunk("unit/getUnitOfMeasurementAsync", async () => {
    return fetch("http://localhost:3000/api/uom").then(response => response.json())
})

const addUnitOfMeasurementAsync = createAsyncThunk("unit/addUnitOfMeasurementAsync", (newUnit) => {
    return fetch("http://localhost:3000/api/uom", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUnit)
    }).then(resp => resp.json())
})

const deleteUnitOfMeasurementAsync = createAsyncThunk("unit/deleteUnitOfMeasurementAsync", (id) => {
    return fetch("http://localhost:3000/api/uom/" + id, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    }).then(resp => resp.json())
})

const editUnitOfMeasurementAsync = createAsyncThunk("unit/editUnitOfMeasurementAsync", (obj) => {
    return fetch("http://localhost:3000/api/uom/" + obj.unit_id, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }).then(resp => resp.json())
})

const UnitOfMeasurementSlice = createSlice({
    name: "Unit_of_Measurement",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUnitOfMeasurementAsync.fulfilled, (state, action) => {
            state.UnitOfMeasurement = action.payload
        })

        builder.addCase(addUnitOfMeasurementAsync.fulfilled, (state) => {
            state.loadData = !state.loadData
        })

        builder.addCase(deleteUnitOfMeasurementAsync.fulfilled, (state) => {
            state.loadData = !state.loadData
        })
        
        builder.addCase(editUnitOfMeasurementAsync.fulfilled, (state) => {
            state.loadData = !state.loadData
        })
    }
})

export default UnitOfMeasurementSlice.reducer;

export { getUnitOfMeasurementAsync, addUnitOfMeasurementAsync, deleteUnitOfMeasurementAsync, editUnitOfMeasurementAsync }
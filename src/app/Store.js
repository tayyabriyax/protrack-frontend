import { configureStore } from "@reduxjs/toolkit";
import UnitOfMeasurementSlice from "../features/UnitOfMeasurementSlice";

export const store = configureStore({
    reducer: {
        UnitOfMeasurement: UnitOfMeasurementSlice
    }
})
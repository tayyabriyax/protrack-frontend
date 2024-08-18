import { configureStore } from "@reduxjs/toolkit";
import UnitOfMeasurementSlice from "../features/UnitOfMeasurementSlice";
import CategorySlice from "../features/CategorySlice";
import CompanySlice from "../features/CompanySlice";
import SupplierSlice from "../features/SupplierSlice";
import ProductSlice from "../features/ProductSlice";
import StockSlice from "../features/StockSlice";

export const store = configureStore({
    reducer: {
        UnitOfMeasurement: UnitOfMeasurementSlice,
        Category: CategorySlice,
        Company: CompanySlice,
        Supplier: SupplierSlice,
        Product: ProductSlice,
        Stock: StockSlice
    }
})
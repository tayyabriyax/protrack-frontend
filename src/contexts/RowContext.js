import { createContext, useContext } from "react";

export const RowContext = createContext({
    row: [{
        id: 1,
        productName: "Tayyab",
        quantity: 6
    }],
    addRow: () => {},
    removeRow: () => {}
})

export const useRow = () => {
    return useContext(RowContext)
}

export const RowProvider = RowContext.Provider
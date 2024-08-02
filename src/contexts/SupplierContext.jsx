import { createContext, useState } from "react";

export const SupplierContext = createContext()

const SupplierProvider = ({ children }) => {
    const [supplier, setSupplier] = useState([]);
    const [loadSupplierData, setLoadSupplierData] = useState(false)

    async function getSupplierList() {
        fetch("http://localhost:3000/api/supplier")
            .then(response => {
                response.json()
                .then(resp => { setSupplier(resp) })
            });
    }
    return (
        <SupplierContext.Provider value={{ supplier, getSupplierList, loadSupplierData, setLoadSupplierData }}>
            {children}
        </SupplierContext.Provider>
    );

}


export default SupplierProvider;
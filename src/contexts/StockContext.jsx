import { createContext, useState } from "react";

export const StockContext = createContext()

const StockProvider = ({ children }) => {
    const [stock, setStock] = useState([]);
    const [loadStockData, setLoadStockData] = useState(false)

    async function getStockList() {
        fetch("http://localhost:3000/api/stock")
            .then(response => {
                response.json()
                .then(resp => { setStock(resp) })
            });
    }
    return (
        <StockContext.Provider value={{ stock, getStockList, loadStockData, setLoadStockData }}>
            {children}
        </StockContext.Provider>
    );

}


export default StockProvider;
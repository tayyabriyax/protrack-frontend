import { createContext, useState } from "react";

export const ProductContext = createContext()

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loadProductData, setLoadProductData] = useState(false)

    async function getProductList() {
        fetch("http://localhost:3000/api/product")
            .then(response => {
                response.json()
                .then(resp => { setProducts(resp) })
            });
    }
    return (
        <ProductContext.Provider value={{ products, getProductList, loadProductData, setLoadProductData }}>
            {children}
        </ProductContext.Provider>
    );

}


export default ProductProvider;
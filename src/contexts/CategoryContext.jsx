import { createContext, useState } from "react";

export const CategoryContext = createContext()

const CategoryProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [loadData, setLoadData] = useState(false)

    async function getCategoryList() {
        fetch("http://localhost:3000/api/category")
            .then(response => {
                response.json()
                .then(resp => { setCategories(resp) })
            });
    }
    return (
        <CategoryContext.Provider value={{ categories, getCategoryList, setLoadData, loadData }}>
            {children}
        </CategoryContext.Provider>
    );

}


export default CategoryProvider;

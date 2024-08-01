import { createContext, useState } from "react";

export const CompanyContext = createContext()

const CompanyProvider = ({ children }) => {
    const [company, setCompany] = useState([]);
    const [loadCompanyData, setLoadCompanyData] = useState(false)

    async function getCompanyList() {
        fetch("http://localhost:3000/api/company")
            .then(response => {
                response.json()
                .then(resp => { setCompany(resp) })
            });
    }
    return (
        <CompanyContext.Provider value={{ company, getCompanyList, loadCompanyData, setLoadCompanyData }}>
            {children}
        </CompanyContext.Provider>
    );

}


export default CompanyProvider;
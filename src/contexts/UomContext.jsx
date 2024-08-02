import { createContext, useState } from "react";

export const UnitsContext = createContext()

const UnitsProvider = ({ children }) => {
    const [units, setUnits] = useState([]);
    const [loadUnitsData, setLoadUnitsData] = useState(false)

    async function getUnitsList() {
        fetch("http://localhost:3000/api/uom")
            .then(response => {
                response.json()
                .then(resp => { setUnits(resp) })
            });
    }
    return (
        <UnitsContext.Provider value={{ units, getUnitsList, loadUnitsData, setLoadUnitsData }}>
            {children}
        </UnitsContext.Provider>
    );

}


export default UnitsProvider;
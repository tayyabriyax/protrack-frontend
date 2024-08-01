import React, { useState } from 'react'
import PosTable from '../components/PointOfSale/PosTable'
import { RowProvider } from '../contexts/RowContext'

const PointOfSale = () => {
    const [row, setRow] = useState([{}])

    const addRow = () => {
        setRow((prevRow) => [...prevRow, {}])
    }

    const removeRow = () => {
        if (row.length > 1) {
            let removedRow = row.slice(0, -1)
            setRow(removedRow)
        }
    }

    return (
        <RowProvider value={{ row, addRow, removeRow }}>
            <div className='w-full bg-purple-50 p-4 rounded-md flex flex-col gap-10 text-purple-600'>
                <div className='flex gap-2 justify-end items-center'>
                    <button onClick={addRow}
                        className='hover:bg-purple-300 hover:text-purple-600 p-2 font-bold w-40 rounded-md 
                border-purple-500 border-2'>
                        Add Row
                    </button>
                    <button onClick={removeRow}
                        className='hover:bg-purple-300 hover:text-purple-600 p-2 font-bold w-40 rounded-md 
                border-purple-500 border-2'>
                        Remove Row
                    </button>
                </div>
                <PosTable />
            </div>
        </RowProvider>
    )
}

export default PointOfSale
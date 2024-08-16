import React, { useState } from 'react'
import { editUnitOfMeasurementAsync } from '../../features/UnitOfMeasurementSlice'
import { useDispatch } from 'react-redux'

const EditModal = ({ onClose, edit_unit }) => {
    const [unitName, setUnitName] = useState(edit_unit.name)
    const [unitSymbol, setUnitSymbol] = useState(edit_unit.symbol)
    const unitId = edit_unit.id

    const handleChangeName = (e) => {
        setUnitName(e.target.value)
    }

    const handleChangeSymbol = (e) => {
        setUnitSymbol(e.target.value)
    }

    const dispatch = useDispatch();

    const handleUpdateClick = () => {
        let obj = { unit_id:unitId, uom_name: unitName, uom_symbol: unitSymbol }
        dispatch(editUnitOfMeasurementAsync(obj))
        onClose()
    }

    return (
        <div className='fixed top-0 left-0 bg-opacity-30 backdrop-blur-sm w-full h-full flex justify-center items-center'>
            <div className='py-8 flex flex-col px-8 bg-purple-100 items-center gap-8 rounded-md w-fit border-2 border-purple-600'>
                <input
                    type="text"
                    name='uom_name'
                    value={unitName}
                    onChange={handleChangeName}
                    placeholder='Name'
                    className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                <input
                    type="text"
                    name='uom_symbol'
                    value={unitSymbol}
                    onChange={handleChangeSymbol}
                    placeholder='Symbol'
                    className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                <div className='flex gap-2 w-72 justify-end'>
                    <button className='hover:bg-red-300 hover:text-red-600 py-1 px-4 font-bold rounded-md 
                    border-red-500 border-2 text-red-600' onClick={onClose}>
                        Cancel
                    </button>
                    <button
                        onClick={handleUpdateClick}
                        className='hover:bg-purple-300 hover:text-purple-600 py-1 px-4 font-bold rounded-md 
                        border-purple-500 border-2' >
                        Update
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditModal
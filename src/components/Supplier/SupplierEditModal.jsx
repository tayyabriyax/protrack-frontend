import React, { useState, useContext } from 'react'
import { useDispatch } from 'react-redux'
import { editSupplierAsync } from '../../features/SupplierSlice'

const SupplierEditModal = ({ onClose, edit_supplier }) => {
    const [supplierName, setSupplierName] = useState(edit_supplier.name)
    const [supplierAddress, setSupplierAddress] = useState(edit_supplier.address)
    const [supplierPhone, setSupplierPhone] = useState(edit_supplier.phone)
    const [supplierEmail, setSupplierEmail] = useState(edit_supplier.email)
    const supplierId = edit_supplier.id

    const handleChangeName = (e) => {
        setSupplierName(() => e.target.value)
    }

    const handleChangeAddress = (e) => {
        setSupplierAddress(() => e.target.value)
    }

    const handleChangeEmail = (e) => {
        setSupplierPhone(() => e.target.value)
    }

    const handleChangePhone = (e) => {
        setSupplierEmail(() => e.target.value)
    }

    const dispatch = useDispatch();

    const handleUpdateClick = () => {
        let obj = { id: supplierId, name: supplierName, address: supplierAddress, phone: supplierPhone, email: supplierEmail }
        dispatch(editSupplierAsync(obj))
        onClose()
    }

    return (
        <div className='fixed top-0 left-0 bg-opacity-30 backdrop-blur-sm w-full h-full flex justify-center items-center'>
            <div className='py-8 flex flex-col px-8 bg-purple-100 items-center gap-8 rounded-md w-fit border-2 border-purple-600'>
                <input
                    type="text"
                    value={supplierName}
                    onChange={handleChangeName}
                    placeholder='Supplier Name'
                    className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                <input
                    type="text"
                    value={supplierAddress}
                    onChange={handleChangeAddress}
                    placeholder='Address'
                    className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                <input
                    type="text"
                    value={supplierPhone}
                    onChange={handleChangePhone}
                    placeholder='Phone'
                    className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                <input
                    type="text"
                    value={supplierEmail}
                    onChange={handleChangeEmail}
                    placeholder='Email'
                    className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                <div className='flex gap-2 w-72 justify-end'>
                    <button className='hover:bg-red-300 hover:text-red-600 py-1 px-4 font-bold rounded-md 
                    border-red-500 border-2 text-red-600' onClick={onClose}>
                        Cancel
                    </button>
                    <button
                        className='hover:bg-purple-300 hover:text-purple-600 py-1 px-4 font-bold rounded-md 
                        border-purple-500 border-2'
                        onClick={handleUpdateClick} >
                        Update
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SupplierEditModal
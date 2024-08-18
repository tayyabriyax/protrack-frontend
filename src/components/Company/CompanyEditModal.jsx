import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editCompanyAsync } from '../../features/CompanySlice'

const CompanyEditModal = ({ onClose, edit_company }) => {
    const [companyName, setComapnyName] = useState(edit_company.name)
    const [companyAddress, setCompanyAddress] = useState(edit_company.address)
    const [companyPhone, setCompanyPhone] = useState(edit_company.phone)
    const [companyEmail, setCompanyEmail] = useState(edit_company.email)
    const companyId = edit_company.id

    const handleChangeName = (e) => {
        setComapnyName(e.target.value)
    }

    const handleChangeAddress = (e) => {
        setCompanyAddress(e.target.value)
    }

    const handleChangePhone = (e) => {
        setCompanyPhone(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setCompanyEmail(e.target.value)
    }

    const dispatch = useDispatch();

    const handleUpdateClick = () => {
        let obj = { id: companyId, name: companyName, address: companyAddress, phone: companyPhone, email: companyEmail }
        dispatch(editCompanyAsync(obj))
        onClose()
    }

    return (
        <div className='fixed top-0 left-0 bg-opacity-30 backdrop-blur-sm w-full h-full flex justify-center items-center'>
            <div className='py-8 flex flex-col px-8 bg-purple-100 items-center gap-8 rounded-md w-fit border-2 border-purple-600'>
                <input
                    type="text"
                    value={companyName}
                    onChange={handleChangeName}
                    placeholder='Company Name'
                    className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                <input
                    type="text"
                    value={companyAddress}
                    onChange={handleChangeAddress}
                    placeholder='Address'
                    className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                <input
                    type="text"
                    value={companyPhone}
                    onChange={handleChangePhone}
                    placeholder='Phone'
                    className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                <input
                    type="text"
                    value={companyEmail}
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

export default CompanyEditModal
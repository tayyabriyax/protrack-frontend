import React, { useState } from 'react'
import CompanyTable from './CompanyTable'
import CompanyModal from './CompanyModal'
import CompanyProvider from '../../contexts/CompanyContext'

const Company = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <CompanyProvider className='w-full bg-purple-100 p-4 rounded-md flex flex-col gap-10'>
            <div className='flex justify-between items-center'>
                <span className='font-bold text-xl'>Company</span>
                <button className='hover:bg-purple-300 hover:text-purple-600 p-2 font-bold w-40 rounded-md 
                border-purple-500 border-2' onClick={() => setShowModal(true)}>
                    Add New
                </button>
            </div>
            <div className='flex items-center flex-col'>
                <CompanyTable />
                {showModal && <CompanyModal onClose={() => setShowModal(false)} />}
            </div>
        </CompanyProvider>
    )
}

export default Company
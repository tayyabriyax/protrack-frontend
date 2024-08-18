import React, { useState } from 'react'
import CompanyTable from './CompanyTable'
import CompanyModal from './CompanyModal'

const Company = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <div>
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
        </div>
    )
}

export default Company
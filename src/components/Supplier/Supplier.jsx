import React, { useState } from 'react'
import SupplierModal from './SupplierModal'
import SupplierTable from './SupplierTable'
import SupplierProvider from '../../contexts/SupplierContext'

const Supplier = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <SupplierProvider className='w-full bg-purple-100 p-4 rounded-md flex flex-col gap-10'>
            <div className='flex justify-between items-center'>
                <span className='font-bold text-xl'>Supplier</span>
                <button className='hover:bg-purple-300 hover:text-purple-600 p-2 font-bold w-40 rounded-md 
                border-purple-500 border-2' onClick={() => setShowModal(true)}>
                    Add New
                </button>
            </div>
            <div className='flex items-center flex-col'>
                <SupplierTable />
                {showModal && <SupplierModal onClose={() => setShowModal(false)} />}
            </div>
        </SupplierProvider>
    )
}

export default Supplier
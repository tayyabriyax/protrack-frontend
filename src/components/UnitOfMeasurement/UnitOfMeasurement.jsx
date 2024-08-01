import React, { useState } from 'react'
import UnitTable from './UnitTable'
import AddModal from './AddModal'

const UnitOfMeasurement = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <div className='w-full bg-purple-100 p-4 rounded-md flex flex-col gap-10'>
            <div className='flex justify-between items-center'>
                <span className='font-bold text-xl'>Unit of Measurement</span>
                <button className='hover:bg-purple-300 hover:text-purple-600 p-2 font-bold w-40 rounded-md 
                border-purple-500 border-2' onClick={() => setShowModal(true)}>
                    Add New
                </button>
            </div>
            <div className='flex items-center flex-col'>
                <UnitTable />
                {showModal && <AddModal onClose={() => setShowModal(false)} />}
            </div>
        </div>
    )
}

export default UnitOfMeasurement
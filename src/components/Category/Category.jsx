import React, { useState } from 'react'
import CategoryModal from './CategoryModal'
import CategoryTable from './CategoryTable'
import CategoryProvider from '../../contexts/CategoryContext'

const Category = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div>
      <div className='flex justify-between items-center'>
        <span className='font-bold text-xl'>Category</span>
        <button className='hover:bg-purple-300 hover:text-purple-600 p-2 font-bold w-40 rounded-md 
                border-purple-500 border-2' onClick={() => setShowModal(true)}>
          Add New
        </button>
      </div>
      <div className='flex items-center flex-col'>
        <CategoryTable />
        {showModal && <CategoryModal onClose={() => setShowModal(false)} />}
      </div>
    </div >
  )
}

export default Category
import React, { useState } from 'react'
import CategoryModal from './CategoryModal'
import CategoryTable from './CategoryTable'
import CategoryProvider from '../../contexts/CategoryContext'

const Category = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <CategoryProvider className='w-full bg-purple-100 p-4 rounded-md flex flex-col gap-10'>
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
    </CategoryProvider >
  )
}

export default Category
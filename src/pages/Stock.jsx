import React, { useState } from 'react'
import StockTable from '../components/Stock/StockTable'
import StockModal from '../components/Stock/StockModal'
import StockProvider from '../contexts/StockContext'
import ProductProvider from '../contexts/ProductContext'

const RunningTasks = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <ProductProvider>
      <StockProvider>
        <div className='w-full bg-purple-50 p-4 rounded-md flex flex-col gap-10 text-purple-600'>
          <div className='flex justify-end items-center'>
            <button className='hover:bg-purple-300 hover:text-purple-600 p-2 font-bold w-40 rounded-md 
                border-purple-500 border-2' onClick={() => setShowModal(true)}>
              Add New
            </button>
          </div>
          <div className='flex items-center flex-col'>
            <StockTable />
            {showModal && <StockModal onClose={() => setShowModal(false)} />}
          </div>
        </div>
      </StockProvider>
    </ProductProvider>
  )
}

export default RunningTasks
import React from 'react'
import Dropdown from '../DropDown/Dropdown'

const StockModal = ({ onClose }) => {
    return (
        <div className='fixed top-0 left-0 bg-opacity-30 backdrop-blur-sm w-full h-full flex justify-center items-center'>
            <div className='p-8 flex flex-col gap-8 bg-purple-100 items-center rounded-md w-fit border-2 border-purple-600'>
                <div className=' grid grid-cols-2 gap-8'>
                    <Dropdown label={"Product"} />
                    <input type="text" placeholder='Purchase Price' className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                    <input type="text" placeholder='Sale Price' className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                    <input type="number" placeholder='Quantity' className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                    <input type="text" placeholder='Batch Number' className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                    <input type="date" placeholder='Date of purchase' className='p-2 text-gray-400 w-72 bg-purple-50 rounded-md outline-purple-600' />
                    <Dropdown label={"Supplier"} />
                </div>
                <div className='flex gap-2 w-full justify-end'>
                    <button className='hover:bg-red-300 hover:text-red-600 py-1 px-4 font-bold rounded-md 
                border-red-500 border-2 text-red-600' onClick={onClose}>
                        Cancel
                    </button>
                    <button className='hover:bg-purple-300 hover:text-purple-600 py-1 px-4 font-bold rounded-md 
                border-purple-500 border-2' onClick={onClose}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default StockModal
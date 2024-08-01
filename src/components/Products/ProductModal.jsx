import React from 'react'
import Dropdown from '../DropDown/Dropdown'

const ProductModal = ({ onClose }) => {
    return (
        <div className='fixed top-0 left-0 bg-opacity-30 backdrop-blur-sm w-full h-full flex justify-center items-center'>
            <div className='p-8 flex flex-col gap-8 bg-purple-100 items-center rounded-md w-fit border-2 border-purple-600'>
                <div className=' grid grid-cols-2 gap-8'>
                    <input type="text" placeholder='Product Name' className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                    <Dropdown label={"Category"} />
                    <Dropdown label={"Supplier"} />
                    <Dropdown label={"Company"} />
                    <input type="text" placeholder='Status' className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                    <input type="text" placeholder='Discription' className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                    <input type="text" placeholder='Quantity in stock' className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                    <input type="text" placeholder='Unit Of Measurement' className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                    <input type="text" placeholder='Total Value' className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                    <input type="text" placeholder='Created At' className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                    <input type="text" placeholder='Location' className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                    <input class="block w-72 text-gray-400 rounded-md bg-purple-50 cursor-pointer file:bg-purple-300 file:border-0 file:text-purple-600 file:font-bold file:p-2" type="file" />
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

export default ProductModal
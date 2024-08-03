import React, {useState} from 'react'
import ProductTable from '../components/Products/ProductTable'
import ProductModal from '../components/Products/ProductModal'
import { NavLink } from 'react-router-dom'

const ProductTablePage = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <NavLink to={'producttablepage'} className='w-full bg-purple-50 p-4 rounded-md flex flex-col gap-10 text-purple-600'>
            <div className='flex justify-end items-center'>
                <button className='hover:bg-purple-300 hover:text-purple-600 p-2 font-bold w-40 rounded-md 
                border-purple-500 border-2' onClick={() => setShowModal(true)}>
                    Add New
                </button>
            </div>
            <div className='flex items-center flex-col'>
                <ProductTable />
                {showModal && <ProductModal onClose={() => setShowModal(false)} />}
            </div>
        </NavLink>
    )
}

export default ProductTablePage
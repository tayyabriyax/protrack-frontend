import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductAsync } from '../../features/ProductSlice'
import { getCategoryAsync } from '../../features/CategorySlice'
import { getSupplierAsync } from '../../features/SupplierSlice'
import { getCompanyAsync } from '../../features/CompanySlice'

const ProductModal = ({ onClose }) => {
    const [product, setProduct] = useState({ name: "", category_id: "", supplier_id: "", company_id: "", location: "" })
    const categories = useSelector(state => state.Category.Category)
    const supplier = useSelector(state => state.Supplier.Supplier)
    const company = useSelector(state => state.Company.Company)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategoryAsync())
        dispatch(getSupplierAsync())
        dispatch(getCompanyAsync())
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    }

    const handleAddClick = () => {
        dispatch(addProductAsync(product));
        onClose()
    }

    return (
        <div className='fixed top-0 left-0 bg-opacity-30 backdrop-blur-sm w-full h-full flex justify-center items-center'>
            <div className='p-8 flex flex-col gap-8 bg-purple-100 items-center rounded-md w-fit border-2 border-purple-600'>
                <div className=' grid grid-cols-2 gap-8'>
                    <input
                        type="text"
                        name='name'
                        value={product.name}
                        onChange={handleChange}
                        placeholder='Name'
                        className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                    <div >
                        <select id="" value={product.category_id} onChange={handleChange} name='category_id'
                            className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600 text-gray-400'>
                            <option value="">Category</option>
                            {
                                categories.map((category, index) => {
                                    return (
                                        <option key={index} value={category.id}>{category.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div >
                        <select id="" value={product.supplier_id} onChange={handleChange} name='supplier_id'
                            className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600 text-gray-400'>
                            <option value="">Supplier</option>
                            {
                                supplier.map((supplier, index) => {
                                    return (
                                        <option key={index} value={supplier.id}>{supplier.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div >
                        <select id="" value={product.company_id} onChange={handleChange} name='company_id'
                            className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600 text-gray-400'>
                            <option value="">Company</option>
                            {
                                company.map((company, index) => {
                                    return (
                                        <option key={index} value={company.id}>{company.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <input
                        type="text"
                        name='location'
                        value={product.location}
                        onChange={handleChange}
                        placeholder='Location'
                        className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                    <input className="block w-72 text-gray-400 rounded-md bg-purple-50 cursor-pointer file:bg-purple-300 file:border-0 file:text-purple-600 file:font-bold file:p-2" type="file" />
                </div>
                <div className='flex gap-2 w-full justify-end'>
                    <button className='hover:bg-red-300 hover:text-red-600 py-1 px-4 font-bold rounded-md 
                border-red-500 border-2 text-red-600' onClick={onClose}>
                        Cancel
                    </button>
                    <button className='hover:bg-purple-300 hover:text-purple-600 py-1 px-4 font-bold rounded-md 
                border-purple-500 border-2' onClick={handleAddClick}>
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductModal
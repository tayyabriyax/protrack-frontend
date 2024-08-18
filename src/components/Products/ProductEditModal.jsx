import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editProductAsync } from '../../features/ProductSlice'
import { getCategoryAsync } from '../../features/CategorySlice'
import { getSupplierAsync } from '../../features/SupplierSlice'
import { getCompanyAsync } from '../../features/CompanySlice'

const ProductEditModal = ({ onClose, edit_product }) => {
    const [productName, setProductName] = useState(edit_product.name)
    const [defaultCategoryId, setDefaultCategoryId] = useState(edit_product.category_id)
    const [defaultSupplierId, setDefaultSupplierId] = useState(edit_product.supplier_id)
    const [defaultCompanyId, setDefaultCompanyId] = useState(edit_product.company_id)
    const [defaultLocation, setDefaultLocation] = useState(edit_product.location)
    const categories = useSelector(state => state.Category.Category)
    const supplier = useSelector(state => state.Supplier.Supplier)
    const company = useSelector(state => state.Company.Company)
    const productId = edit_product.id

    useEffect(() => {
        dispatch(getCategoryAsync())
        dispatch(getSupplierAsync())
        dispatch(getCompanyAsync())
    }, [])

    const handleChangeName = (e) => {
        setProductName(() => e.target.value)
    }

    const handleChangeCategoryId = (e) => {
        setDefaultCategoryId(() => e.target.value)
    }

    const handleChangeSupplierId = (e) => {
        setDefaultSupplierId(() => e.target.value)
    }

    const handleChangeCompanyId = (e) => {
        setDefaultCompanyId(() => e.target.value)
    }

    const handleChangeLocation = (e) => {
        setDefaultLocation(() => e.target.value)
    }

    const dispatch = useDispatch();

    const handleUpdateClick = () => {
        let obj = {
            id: productId, name: productName, category_id: defaultCategoryId, supplier_id: defaultSupplierId,
            company_id: defaultCompanyId, location: defaultLocation
        }
        dispatch(editProductAsync(obj))
        onClose()
    }

    return (
        <div className='fixed top-0 left-0 bg-opacity-30 backdrop-blur-sm w-full h-full flex justify-center items-center'>
            <div className='py-8 flex flex-col px-8 bg-purple-100 items-center gap-8 rounded-md w-fit border-2 border-purple-600'>
                <input
                    type="text"
                    value={productName}
                    onChange={handleChangeName}
                    placeholder='Name'
                    className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                <div >
                    <select id="" value={defaultCategoryId} onChange={handleChangeCategoryId} name='category_id'
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
                    <select id="" value={defaultSupplierId} onChange={handleChangeSupplierId} name='supplier_id'
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
                    <select id="" value={defaultCompanyId} onChange={handleChangeCompanyId} name='company_id'
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
                    value={defaultLocation}
                    onChange={handleChangeLocation}
                    placeholder='Email'
                    className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                <div className='flex gap-2 w-72 justify-end'>
                    <button className='hover:bg-red-300 hover:text-red-600 py-1 px-4 font-bold rounded-md 
                    border-red-500 border-2 text-red-600' onClick={onClose}>
                        Cancel
                    </button>
                    <button
                        className='hover:bg-purple-300 hover:text-purple-600 py-1 px-4 font-bold rounded-md 
                        border-purple-500 border-2'
                        onClick={handleUpdateClick} >
                        Update
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductEditModal
import React, { useState, useContext } from 'react'
// import Dropdown from '../DropDown/Dropdown'
import { ProductContext } from '../../contexts/ProductContext';
import { CategoryContext } from '../../contexts/CategoryContext';
import { useEffect } from 'react';
import { SupplierContext } from '../../contexts/SupplierContext';
import { CompanyContext } from '../../contexts/CompanyContext';

const ProductModal = ({ onClose }) => {
    const [product, setProduct] = useState({ name: "", category_id: "", supplier_id: "", location: "", company_id: "" });
    const { setLoadProductData } = useContext(ProductContext);
    const { categories, getCategoryList, loadData, setLoadData } = useContext(CategoryContext)
    const { supplier, getSupplierList } = useContext(SupplierContext)
    const { company, getCompanyList } = useContext(CompanyContext)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value
        });
    };

    useEffect(() => {
        getCategoryList()
        getSupplierList()
        getCompanyList()
    }, [loadData])

    const handleSelectClick = () => {
        setLoadData((prev) => !prev);
    }

    const handleAddClick = () => {
        const url = "http://localhost:3000/api/product";
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        };

        fetch(url, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                setLoadProductData((prev) => !prev);
                onClose();
                console.log('Success:', data);
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    };
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
                    <div onClick={handleSelectClick} >
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
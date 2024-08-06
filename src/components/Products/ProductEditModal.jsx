import React, { useState, useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext';

const ProductEditModal = ({ onClose, edit_product }) => {
    const [defaultName, setDefaultName] = useState(edit_product.name)
    const [defaultCategoryId, setDefaultCategoryId] = useState(edit_product.category_id)
    const [defaultSupplierId, setDefaultSupplierId] = useState(edit_product.supplier_id)
    const [defaultCompanyId, setDefaultCompanyId] = useState(edit_product.company_id)
    const [defaultLocation, setDefaultLocation] = useState(edit_product.location)
    const defaultId = edit_product.id
    const { setLoadProductData } = useContext(ProductContext);

    const handleChangeName = (e) => {
        setDefaultName(() => e.target.value)
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

    const handleAddClick = async () => {
        const url = "http://localhost:3000/api/product/" + defaultId;
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: defaultName, category_id: defaultCategoryId, supplier_id: defaultSupplierId, 
                company_id: defaultCompanyId, location: defaultLocation })
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
    }


    return (
        <div className='fixed top-0 left-0 bg-opacity-30 backdrop-blur-sm w-full h-full flex justify-center items-center'>
            <div className='py-8 flex flex-col px-8 bg-purple-100 items-center gap-8 rounded-md w-fit border-2 border-purple-600'>
                <input
                    type="text"
                    value={defaultName}
                    onChange={handleChangeName}
                    placeholder='Name'
                    className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                <input
                    type="text"
                    value={defaultCategoryId}
                    onChange={handleChangeCategoryId}
                    placeholder='Address'
                    className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                <input
                    type="text"
                    value={defaultSupplierId}
                    onChange={handleChangeSupplierId}
                    placeholder='Phone'
                    className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                <input
                    type="text"
                    value={defaultCompanyId}
                    onChange={handleChangeCompanyId}
                    placeholder='Email'
                    className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
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
                        onClick={handleAddClick} >
                        Update
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductEditModal
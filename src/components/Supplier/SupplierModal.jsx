import React, { useState, useContext } from 'react'
import { SupplierContext } from '../../contexts/SupplierContext';

const SupplierModal = ({ onClose }) => {
    const [suppliers, setSuppliers] = useState({ name: "", address: "", phone: "", email: "" });
    const { getSupplierList, setLoadSupplierData } = useContext(SupplierContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSuppliers({
            ...suppliers,
            [name]: value
        });
    };

    const handleAddClick = () => {
        const url = "http://localhost:3000/api/supplier";
        getSupplierList()
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(suppliers)
        };

        fetch(url, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                setLoadSupplierData((prev) => !prev);
                onClose();
                console.log('Success:', data);
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    };
    return (
        <div className='fixed top-0 left-0 bg-opacity-30 backdrop-blur-sm w-full h-full flex justify-center items-center'>
            <div className='py-8 flex flex-col px-8 bg-purple-100 items-center gap-8 rounded-md w-fit border-2 border-purple-600'>
                <input
                    type="text"
                    name='name'
                    value={suppliers.name}
                    onChange={handleChange}
                    placeholder='Supplier Name'
                    className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                <input
                    type="text"
                    name='address'
                    value={suppliers.address}
                    onChange={handleChange}
                    placeholder='Address'
                    className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                <input
                    type="text"
                    name='phone'
                    value={suppliers.phone}
                    onChange={handleChange}
                    placeholder='Phone'
                    className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                <input
                    type="text"
                    name='email'
                    value={suppliers.email}
                    onChange={handleChange}
                    placeholder='Email'
                    className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />                <div className='flex gap-2 w-72 justify-end'>
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

export default SupplierModal
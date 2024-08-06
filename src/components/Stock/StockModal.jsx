import React, { useState, useContext, useEffect } from 'react'
import { StockContext } from '../../contexts/StockContext';
import { ProductContext } from '../../contexts/ProductContext';
// import Dropdown from '../DropDown/Dropdown'

const StockModal = ({ onClose }) => {
    const [stock, setStock] = useState({ product_id: "", purchase_price: "", sale_price: "", quantity: "", batch_no: "" });
    const { setLoadStockData } = useContext(StockContext);
    const { products, getProductList, loadProductData, setLoadProductData } = useContext(ProductContext)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStock({
            ...stock,
            [name]: value
        });
    };

    useEffect(() => {
        getProductList()
    }, [loadProductData])

    const handleSelectClick = () => {
        setLoadProductData((prev) => !prev);
    }

    const handleAddClick = () => {
        const url = "http://localhost:3000/api/stock";
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(stock)
        };

        fetch(url, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                setLoadStockData((prev) => !prev);
                onClose();
                console.log('Success:', data);
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    };
    return (
        <div className='fixed top-0 left-0 bg-opacity-30 backdrop-blur-sm w-full h-full flex justify-center items-center text-purple-600'>
            <div className='p-8 flex flex-col gap-8 bg-purple-100 items-center rounded-md w-fit border-2 border-purple-600'>
                <div className=' grid grid-cols-2 gap-8'>
                    <div onClick={handleSelectClick} >
                        <select value={stock.product_id} onChange={handleChange} name='product_id'
                        className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600 text-gray-400'>
                            <option value="">Product</option>
                            {
                                products.map((product, index) => {
                                    return (
                                        <option value={product.id} key={index}>{product.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <input
                        type="text"
                        value={stock.purchase_price}
                        name='purchase_price'
                        onChange={handleChange}
                        placeholder='Purchase Price'
                        className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                    <input
                        type="text"
                        value={stock.sale_price}
                        name='sale_price'
                        onChange={handleChange}
                        placeholder='Sale Price'
                        className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                    <input
                        type="number"
                        value={stock.quantity}
                        name='quantity'
                        onChange={handleChange}
                        placeholder='Quantity'
                        className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                    <input
                        type="text"
                        value={stock.batch_no}
                        name='batch_no'
                        onChange={handleChange}
                        placeholder='Batch Number'
                        className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                    {/* <Dropdown label={"Supplier"} /> */}
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

export default StockModal
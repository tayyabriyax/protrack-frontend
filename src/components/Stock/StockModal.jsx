import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductAsync } from '../../features/ProductSlice'
import { addStockAsync } from '../../features/StockSlice'

const StockModal = ({ onClose }) => {
    const [stock, setStock] = useState({ product_id: "", purchase_price: "", sale_price: "", quantity: "", batch_no: "" })
    const product = useSelector(state => state.Product.Product)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductAsync())
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStock({
            ...stock,
            [name]: value
        });
    }

    const handleAddClick = () => {
        dispatch(addStockAsync(stock));
        onClose()
    }

    return (
        <div className='fixed top-0 left-0 bg-opacity-30 backdrop-blur-sm w-full h-full flex justify-center items-center text-purple-600'>
            <div className='p-8 flex flex-col gap-8 bg-purple-100 items-center rounded-md w-fit border-2 border-purple-600'>
                <div className=' grid grid-cols-2 gap-8'>
                    <div >
                        <select value={stock.product_id} onChange={handleChange} name='product_id'
                        className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600 text-gray-400'>
                            <option value="">Product</option>
                            {
                                product.map((product, index) => {
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
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductAsync } from '../../features/ProductSlice'
import { editStockAsync } from '../../features/StockSlice'

const StockEditModal = ({ onClose, edit_stock }) => {
    const [stockName, setStockName] = useState(edit_stock.product.id)
    const [defaultPurPrice, setDefaultPurPrice] = useState(edit_stock.purchase_price)
    const [defaultSalePrice, setDefaultSalePrice] = useState(edit_stock.sale_price)
    const [defaultQuantity, setDefaultQuantity] = useState(edit_stock.quantity)
    const [defaultBatchNo, setDefaultBatchNo] = useState(edit_stock.batch_no)
    const product = useSelector(state => state.Product.Product)
    const stockId = edit_stock.id

    useEffect(() => {
        dispatch(getProductAsync())
    }, [])

    const handleChangeStockName = (e) => {
        setStockName(() => e.target.value)
    }

    const handleChangePurPrice = (e) => {
        setDefaultPurPrice(() => e.target.value)
    }

    const handleChangeSalePrice = (e) => {
        setDefaultSalePrice(() => e.target.value)
    }

    const handleChangeQuantity = (e) => {
        setDefaultQuantity(() => e.target.value)
    }

    const handleChangeBatchNo = (e) => {
        setDefaultBatchNo(() => e.target.value)
    }

    const dispatch = useDispatch();

    const handleUpdateClick = () => {
        let obj = {
            id: stockId, product_id: stockName, purchase_price: defaultPurPrice, sale_price: defaultSalePrice, quantity: defaultQuantity, batch_no: defaultBatchNo
        }
        dispatch(editStockAsync(obj))
        onClose()
    }


    return (
        <div className='fixed top-0 left-0 bg-opacity-30 backdrop-blur-sm w-full h-full flex justify-center items-center text-purple-600'>
            <div className='p-8 flex flex-col gap-8 bg-purple-100 items-center rounded-md w-fit border-2 border-purple-600'>
                <div >
                    <select id="" value={stockName} onChange={handleChangeStockName} name='product_id'
                        className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600 text-gray-400'>
                        <option value="">Product</option>
                        {
                            product.map((product, index) => {
                                return (
                                    <option key={index} value={product.id}>{product.name}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <input
                    type="number"
                    value={defaultPurPrice}
                    name='purchase_price'
                    onChange={handleChangePurPrice}
                    placeholder='Purchase Price'
                    className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                <input
                    type="number"
                    value={defaultSalePrice}
                    name='sale_price'
                    onChange={handleChangeSalePrice}
                    placeholder='Sale Price'
                    className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                <input
                    type="number"
                    value={defaultQuantity}
                    name='quantity'
                    onChange={handleChangeQuantity}
                    placeholder='Quantity'
                    className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                <input
                    type="text"
                    value={defaultBatchNo}
                    name='batch_no'
                    onChange={handleChangeBatchNo}
                    placeholder='Batch Number'
                    className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                <div className='flex gap-2 w-full justify-end'>
                    <button className='hover:bg-red-300 hover:text-red-600 py-1 px-4 font-bold rounded-md 
                border-red-500 border-2 text-red-600' onClick={onClose}>
                        Cancel
                    </button>
                    <button className='hover:bg-purple-300 hover:text-purple-600 py-1 px-4 font-bold rounded-md 
                border-purple-500 border-2' onClick={handleUpdateClick}>
                        Update
                    </button>
                </div>
            </div>
        </div>
    )
}

export default StockEditModal
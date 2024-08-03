import React, { useState, useContext } from 'react'
import { StockContext } from '../../contexts/StockContext';
// import Dropdown from '../DropDown/Dropdown'

const StockEditModal = ({ onClose, edit_stock }) => {
    const [defaultStockId, setDefaultStockId] = useState(edit_stock.product_id)
    const [defaultPurPrice, setDefaultPurPrice] = useState(edit_stock.purchase_price)
    const [defaultSalePrice, setDefaultSalePrice] = useState(edit_stock.sale_price)
    const [defaultQuantity, setDefaultQuantity] = useState(edit_stock.quantity)
    const [defaultBatchNo, setDefaultBatchNo] = useState(edit_stock.batch_no)
    const defaultId = edit_stock.id
    const { setLoadStockData } = useContext(StockContext);

    const handleChangeStockId = (e) => {
        setDefaultStockId(() => e.target.value)
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

    const handleAddClick = async () => {
        const url = "http://localhost:3000/api/stock/" + defaultId;
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ product_id: defaultStockId, purchase_price: defaultPurPrice, sale_price: defaultSalePrice,
                quantity: defaultQuantity, batch_no: defaultBatchNo})
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
    }
    return (
        <div className='fixed top-0 left-0 bg-opacity-30 backdrop-blur-sm w-full h-full flex justify-center items-center text-purple-600'>
            <div className='p-8 flex flex-col gap-8 bg-purple-100 items-center rounded-md w-fit border-2 border-purple-600'>
                <div className=' grid grid-cols-2 gap-8'>
                    {/* <Dropdown label={"Product ID"} /> */}
                    <input
                        type="text"
                        value={defaultStockId}
                        name='product_id'
                        onChange={handleChangeStockId}
                        placeholder='Product ID'
                        className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                    <input
                        type="text"
                        value={defaultPurPrice}
                        name='purchase_price'
                        onChange={handleChangePurPrice}
                        placeholder='Purchase Price'
                        className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                    <input
                        type="text"
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
                    {/* <Dropdown label={"Supplier"} /> */}
                </div>
                <div className='flex gap-2 w-full justify-end'>
                    <button className='hover:bg-red-300 hover:text-red-600 py-1 px-4 font-bold rounded-md 
                border-red-500 border-2 text-red-600' onClick={onClose}>
                        Cancel
                    </button>
                    <button className='hover:bg-purple-300 hover:text-purple-600 py-1 px-4 font-bold rounded-md 
                border-purple-500 border-2' onClick={handleAddClick}>
                        Update
                    </button>
                </div>
            </div>
        </div>
    )
}

export default StockEditModal
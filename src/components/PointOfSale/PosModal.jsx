import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { placeOrderAsync } from '../../features/OrderSlice';

const PosModal = ({ total }) => {
    const [discount, setDiscount] = useState(0);
    const dispatch = useDispatch()
    const order = {
        discount: discount,
        arr_products: [total]
    }

    const handleAddClick = () => {
        dispatch(placeOrderAsync(order))
    }

    return (
        <div className='py-8 flex flex-col px-8 bg-purple-100 items-center gap-4 rounded-md w-fit border border-purple-600'>
            <div className='flex flex-col gap-1'>
                <label htmlFor="subtotal" className='font-bold'>Subtotal</label>
                <input
                    id='subtotal'
                    readOnly
                    value={total.product_total}
                    type="text"
                    className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="discount" className='font-bold'>Discount</label>
                <input
                    id='discount'
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                    type="text"
                    className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="total" className='font-bold'>Total</label>
                <input
                    value={total.product_total - discount}
                    readOnly
                    id='total'
                    type="text"
                    className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
            </div>
            <button
                onClick={handleAddClick}
                className='hover:bg-purple-300 hover:text-purple-600 p-4 mt-2 font-bold w-full rounded-md 
                                border-purple-500 border-2'>
                Place Order
            </button>

        </div>
    )
}

export default PosModal
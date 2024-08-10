import React, { useState } from 'react'

const PosModal = ({ total }) => {
    const [ discount, setDiscount ] = useState(0)

    return (
        <div className='py-8 flex flex-col px-8 bg-purple-100 items-center gap-4 rounded-md w-fit border border-purple-600 fixed right-4 bottom-4'>
            <div className='flex flex-col gap-1'>
                <label htmlFor="subtotal" className='font-bold'>Subtotal</label>
                <input
                    id='subtotal'
                    readOnly
                    value={total}
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
                    value={ total-discount }
                    readOnly
                    id='total'
                    type="text"
                    className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
            </div>

        </div>
    )
}

export default PosModal
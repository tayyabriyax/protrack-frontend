import React from 'react'
import DetailsTable from './DetailsTable'

const ProductDetails = () => {
    return (
        <div className='w-full bg-purple-50 p-4 rounded-md flex flex-col gap-2 text-purple-600'>
            <div className='flex justify-between items-center'>
                <span className='font-bold text-xl'>Unit of Measurement</span>
            </div>
            <DetailsTable />
        </div>
    )
}

export default ProductDetails
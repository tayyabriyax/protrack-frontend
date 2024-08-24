import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCartAsync, getCartAsync } from '../../features/PointOfSaleSlice';
import { Trash2Icon } from 'lucide-react';

const PosTable = () => {
    const cart = useSelector(state => state.PointOfSale.Cart);
    const loadData = useSelector(state => state.PointOfSale.loadData);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCartAsync())
    }, [loadData])

    return (
        <section className="py-2 w-full">
            <div className="container mx-auto">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <div className="max-w-full overflow-x-auto rounded-md">
                            <table className="w-full bg-purple-100 table-auto rounded-md">
                                <thead>
                                    <tr className="text-center bg-purple-300 rounded-md">
                                        <th
                                            className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-bold lg:py-7 lg:px-4"
                                        >
                                            #
                                        </th>
                                        <th
                                            className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-bold lg:py-7 lg:px-4"
                                        >
                                            Product Name
                                        </th>
                                        <th
                                            className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-bold lg:py-7 lg:px-4"
                                        >
                                            Quantity
                                        </th>
                                        <th
                                            className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-bold lg:py-7 lg:px-4"
                                        >
                                            Price
                                        </th>
                                        <th
                                            className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-bold lg:py-7 lg:px-4"
                                        >
                                            Total
                                        </th>
                                        <th
                                            className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-bold lg:py-7 lg:px-4"
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item, index) => {
                                        return (
                                            <tr className='border-b border-purple-300' key={index}>
                                                <td
                                                    className="py-5 border-s px-2 text-center text-base font-medium"
                                                >
                                                    {index + 1}
                                                </td>
                                                <td
                                                    className="py-5 px-2 text-center text-base font-medium"
                                                >
                                                    {item.product_name}
                                                </td>
                                                <td
                                                    className="py-5 px-2 text-center text-base font-medium"
                                                >
                                                    {item.product_qty}
                                                </td>
                                                <td
                                                    className="py-5 px-2 text-center text-base font-medium"
                                                >
                                                    {item.product_price}
                                                </td>
                                                <td
                                                    className="py-5 px-2 text-center text-base font-medium"
                                                >
                                                    {item.product_total}
                                                </td>
                                                <td
                                                    className="border-r py-3 px-2 text-center text-base font-medium flex justify-center gap-2"
                                                >
                                                    <button
                                                        onClick={() => dispatch(deleteCartAsync(item.id))}
                                                        className="inline-block py-2.5 px-4 rounded-md hover:bg-red-300 text-red-600 font-medium"
                                                    >
                                                        <Trash2Icon />
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PosTable
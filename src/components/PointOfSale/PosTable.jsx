import React from 'react'

const PosTable = ({ product }) => {
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
                                    </tr>
                                </thead>
                                <tbody>
                                    {product.map((item, index) => {
                                        return(
                                            <tr className='border-b border-purple-300' key={index}>
                                        <td
                                            className="py-5 border-s px-2 text-center text-base font-medium"
                                        >
                                            { index + 1 }
                                        </td>
                                        <td
                                            className="py-5 px-2 text-center text-base font-medium"
                                        >
                                            { item.product_name }
                                        </td>
                                        <td
                                            className="py-5 px-2 text-center text-base font-medium"
                                        >
                                            { item.product_qty }
                                        </td>
                                        <td
                                            className="py-5 px-2 text-center text-base font-medium"
                                        >
                                            { item.product_price }
                                        </td>
                                        <td
                                            className="py-5 px-2 text-center text-base font-medium"
                                        >
                                            { item.total }
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
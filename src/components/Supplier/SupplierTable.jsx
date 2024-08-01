import React from 'react'
import { Trash2Icon, EditIcon } from 'lucide-react'

const SupplierTable = () => {
    return (
        <section className="py-2 w-full">
            <div className="container mx-auto">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <div className="max-w-full overflow-x-auto rounded-md">
                            <table className="w-full table-auto rounded-md">
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
                                            Supplier Name
                                        </th>
                                        <th
                                            className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-bold lg:py-7 lg:px-4"
                                        >
                                            Address
                                        </th>
                                        <th
                                            className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-bold lg:py-7 lg:px-4"
                                        >
                                            Phone
                                        </th>
                                        <th
                                            className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-bold lg:py-7 lg:px-4"
                                        >
                                            Email
                                        </th>
                                        <th
                                            className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-bold lg:py-7 lg:px-4"
                                        >
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='border-b border-purple-600'>
                                        <td
                                            className="py-5 px-2 text-center text-base font-medium"
                                        >
                                            1
                                        </td>
                                        <td
                                            className="py-5 px-2 text-center text-base font-medium"
                                        >
                                            Kilometer
                                        </td>
                                        <td
                                            className="py-5 px-2 text-center text-base font-medium"
                                        >
                                            Km
                                        </td>
                                        <td
                                            className="py-5 px-2 text-center text-base font-medium"
                                        >
                                            Km
                                        </td>
                                        <td
                                            className="py-5 px-2 text-center text-base font-medium"
                                        >
                                            Km
                                        </td>
                                        <td
                                            className="border-r py-5 px-2 text-center text-base font-medium flex justify-center gap-2"
                                        >
                                            <button
                                                className="inline-block py-2.5 px-4 rounded-md hover:bg-red-300 text-red-600 font-medium"
                                            >
                                                <Trash2Icon />
                                            </button>
                                            <button
                                                className="inline-block py-2.5 px-4 rounded-md hover:bg-purple-300 font-medium"
                                            >
                                                <EditIcon />
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SupplierTable
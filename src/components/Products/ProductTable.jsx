import React from 'react'
import { Trash2Icon, EditIcon, NotepadTextIcon } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const ProductTable = ({to}) => {
    return (
        <section className="py-2 w-full ">
            <div className="container mx-auto">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <div className="max-w-full overflow-x-auto rounded-md">
                            <table className="w-full table-auto rounded-md bg-purple-100">
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
                                            Name
                                        </th>
                                        <th
                                            className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-bold lg:py-7 lg:px-4"
                                        >
                                            Category ID
                                        </th>
                                        <th
                                            className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-bold lg:py-7 lg:px-4"
                                        >
                                            Supplier ID
                                        </th>
                                        <th
                                            className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-bold lg:py-7 lg:px-4"
                                        >
                                            Company ID
                                        </th>
                                        <th
                                            className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-bold lg:py-7 lg:px-4"
                                        >
                                            Location
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
                                            Red Chili
                                        </td>
                                        <td
                                            className="py-5 px-2 text-center text-base font-medium"
                                        >
                                            Test
                                        </td>
                                        <td
                                            className="py-5 px-2 text-center text-base font-medium"
                                        >
                                            84445
                                        </td>
                                        <td
                                            className="py-5 px-2 text-center text-base font-medium"
                                        >
                                            Ehsas Ltd.
                                        </td>
                                        <td
                                            className="py-5 px-2 text-center text-base font-medium"
                                        >
                                            Fair
                                        </td>
                                        <td
                                            className="border-r py-5 px-2 text-center text-base font-medium flex justify-center gap-2"
                                        >
                                            <button
                                                className="inline-block py-2.5 px-4 rounded-md hover:bg-red-300 text-red-600 font-medium"
                                            >
                                                <Trash2Icon />
                                            </button>
                                            <NavLink
                                                to={"/productsdetails"}
                                                className="inline-block py-2.5 px-4 rounded-md hover:bg-purple-300 font-medium"
                                            >
                                                <NotepadTextIcon />
                                            </NavLink>
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

export default ProductTable
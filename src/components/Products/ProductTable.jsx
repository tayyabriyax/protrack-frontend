import React, { useState, useContext, useEffect } from 'react'
import { Trash2Icon, EditIcon, NotepadTextIcon } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { ProductContext } from '../../contexts/ProductContext'
import ProductEditModal from './ProductEditModal'

const ProductTable = () => {
    const [showModal, setShowModal] = useState(false)
    const { getProductList, loadProductData, products, setLoadProductData } = useContext(ProductContext);
    const [editId, setEditId] = useState(null)

    useEffect(() => {
        getProductList()
    }, [loadProductData])

    const deleteProduct = async (id) => {
        const url = "http://localhost:3000/api/product/" + id;
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        };

        fetch(url, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                setLoadProductData((prev) => !prev);
                console.log('Success:', data);
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    }

    const editableValue = (id) => {
        let editProduct = products.filter(company => company.id === id);
        return editProduct[0]
    }

    const editProduct = async (id) => {
        setEditId(id)
        setShowModal(true)

    }
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
                                    {
                                        products.map((items, index) => {
                                            return (
                                                <tr className='border-b border-purple-300' key={index}>
                                                    <td
                                                        className="py-3 px-2 text-center text-base font-medium"
                                                    >
                                                        {index + 1}
                                                    </td>
                                                    <td
                                                        className="py-3 px-2 text-center text-base font-medium"
                                                    >
                                                        {items.name}
                                                    </td>
                                                    <td
                                                        className="py-3 px-2 text-center text-base font-medium"
                                                    >
                                                        {items.category_id}
                                                    </td>
                                                    <td
                                                        className="py-3 px-2 text-center text-base font-medium"
                                                    >
                                                        {items.supplier_id}
                                                    </td>
                                                    <td
                                                        className="py-3 px-2 text-center text-base font-medium"
                                                    >
                                                        {items.company_id}
                                                    </td>
                                                    <td
                                                        className="py-3 px-2 text-center text-base font-medium"
                                                    >
                                                        {items.location}
                                                    </td>
                                                    <td
                                                        className="border-r py-3 px-2 text-center text-base font-medium flex justify-center gap-2"
                                                    >
                                                        <button
                                                            onClick={() => deleteProduct(items.id)}
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
                                                            onClick={() => editProduct(items.id)}
                                                            className="inline-block py-2.5 px-4 rounded-md hover:bg-purple-300 font-medium"
                                                        >
                                                            <EditIcon />
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && <ProductEditModal onClose={() => setShowModal(false)} edit_product={editableValue(editId)} />}
        </section>
    )
}

export default ProductTable
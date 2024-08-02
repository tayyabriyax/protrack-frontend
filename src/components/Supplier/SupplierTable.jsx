import React, { useState, useContext, useEffect } from 'react'
import { Trash2Icon, EditIcon } from 'lucide-react'
import { SupplierContext } from '../../contexts/SupplierContext';
import SupplierEditModal from './SupplierEditModal';

const SupplierTable = () => {
    const [showModal, setShowModal] = useState(false)
    const { getSupplierList, loadSupplierData, supplier, setLoadSupplierData } = useContext(SupplierContext);
    const [editId, setEditId] = useState(null)

    useEffect(() => {
        getSupplierList()
    }, [loadSupplierData])

    const deleteSupplier = async (id) => {
        const url = "http://localhost:3000/api/supplier/" + id;
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
                setLoadSupplierData((prev) => !prev);
                console.log('Success:', data);
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    }

    const editableValue = (id) => {
        let editSupplier = supplier.filter(supplier => supplier.id === id);
        return editSupplier[0]
    }

    const editSupplier = async (id) => {
        setEditId(id)
        setShowModal(true)

    }
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
                                    {
                                        supplier.map((supplier, index) => {
                                            return (
                                                <tr className='border-b border-purple-300' key={index}>
                                                    <td
                                                        className="py-3 px-2 text-center text-base font-medium border-s"
                                                    >
                                                        {index + 1}
                                                    </td>
                                                    <td
                                                        className="py-3 px-2 text-center text-base font-medium"
                                                    >
                                                        {supplier.name}
                                                    </td>
                                                    <td
                                                        className="py-3 px-2 text-center text-base font-medium"
                                                    >
                                                        {supplier.address}
                                                    </td>
                                                    <td
                                                        className="py-3 px-2 text-center text-base font-medium"
                                                    >
                                                        {supplier.phone}
                                                    </td>
                                                    <td
                                                        className="py-3 px-2 text-center text-base font-medium"
                                                    >
                                                        {supplier.email}
                                                    </td>
                                                    <td
                                                        className="border-r py-3 px-2 text-center text-base font-medium flex justify-center gap-2"
                                                    >
                                                        <button
                                                            onClick={() => deleteSupplier(supplier.id)}
                                                            className="inline-block py-2.5 px-4 rounded-md hover:bg-red-300 text-red-600 font-medium"
                                                        >
                                                            <Trash2Icon />
                                                        </button>
                                                        <button
                                                            onClick={() => editSupplier(supplier.id)}
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
            {showModal && <SupplierEditModal onClose={() => setShowModal(false)} edit_supplier={editableValue(editId)} />}
        </section>
    )
}

export default SupplierTable
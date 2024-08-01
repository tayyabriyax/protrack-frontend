import React, { useEffect, useContext, useState } from 'react'
import { Trash2Icon, EditIcon } from 'lucide-react'
import { CategoryContext } from '../../contexts/CategoryContext';
import EditCategoryModal from './EditCategoryModal';

const CategoryTable = () => {
    const [showModal, setShowModal] = useState(false)
    const { categories, getCategoryList, loadData, setLoadData } = useContext(CategoryContext);
    const [editId, setEditId] = useState(null)

    useEffect(() => {
        getCategoryList()
    }, [loadData])

    const deleteCategory = async (id) => {
        const url = "http://localhost:3000/api/category/"+id;
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
                setLoadData((prev) =>! prev);
                console.log('Success:', data);
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    }

    const editableValue = ( id ) => {
       let category = categories.filter(category => category.id === id);
        return category[0]
    }

    const editCategory = async (id) => {
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
                                            Category
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
                                        categories.map(function (category, index) {
                                            return (
                                                <tr className='border-b border-purple-300' key={index}>
                                                    <td
                                                        className="py-3 border-s px-2 text-center text-base font-medium"
                                                    >
                                                        {index + 1}
                                                    </td>
                                                    <td
                                                        className="py-3 px-2 text-center text-base font-medium"
                                                    >
                                                        {category.name}
                                                    </td>
                                                    <td
                                                        className="border-r py-3 px-2 text-center text-base font-medium flex justify-center gap-2"
                                                    >
                                                        <button
                                                            onClick={() => deleteCategory(category.id)}
                                                            className="inline-block py-2.5 px-4 rounded-md hover:bg-red-300 text-red-600 font-medium"
                                                        >
                                                            <Trash2Icon />
                                                        </button>
                                                        <button
                                                            onClick={() => editCategory(category.id)}                      
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
            {showModal && <EditCategoryModal onClose={() => setShowModal(false)} edit_category={editableValue(editId)} />}
        </section>
    )
}

export default CategoryTable
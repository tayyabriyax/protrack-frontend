import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editCategoryAsync } from '../../features/CategorySlice'

const EditCategoryModal = ({ onClose, edit_category}) => {
    const [categoryName, setCategoryName] = useState(edit_category.name)
    const categoryId = edit_category.id

    const handleChangeName = (e) => {
        setCategoryName(e.target.value)
    }

    const dispatch = useDispatch();

    const handleUpdateClick = () => {
        let obj = { category_id: categoryId, category_name: categoryName }
        dispatch(editCategoryAsync(obj))
        onClose()
    }

    return (
        <div className='fixed top-0 left-0 bg-opacity-30 backdrop-blur-sm w-full h-full flex justify-center items-center'>
            <div className='py-8 flex flex-col px-8 bg-purple-100 items-center gap-8 rounded-md w-fit border-2 border-purple-600'>
                <input
                    type="text"
                    value={categoryName}
                    placeholder='Category'
                    className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600'
                    onChange={handleChangeName} />
                <div className='flex gap-2 w-72 justify-end'>
                    <button className='hover:bg-red-300 hover:text-red-600 py-1 px-4 font-bold rounded-md 
                border-red-500 border-2 text-red-600' onClick={onClose}>
                        Cancel
                    </button>
                    <button
                        className='hover:bg-purple-300 hover:text-purple-600 py-1 px-4 font-bold rounded-md 
                        border-purple-500 border-2'
                        onClick={handleUpdateClick}>
                        Update
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditCategoryModal
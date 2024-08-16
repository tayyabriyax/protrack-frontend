import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUnitOfMeasurementAsync } from '../../features/UnitOfMeasurementSlice'

const AddModal = ({ onClose }) => {
  const [unit, setUnit] = useState({ uom_name: "", uom_symbol: "" })
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUnit({
      ...unit,
      [name]: value
    });
  }

  const handleAddClick = () => {
    dispatch(addUnitOfMeasurementAsync(unit));
    onClose()
  }

  return (
    <div className='fixed top-0 left-0 bg-opacity-30 backdrop-blur-sm w-full h-full flex justify-center items-center'>
      <div className='py-8 flex flex-col px-8 bg-purple-100 items-center gap-8 rounded-md w-fit border-2 border-purple-600'>
        <input
          value={unit.uom_name}
          onChange={handleChange}
          type="text"
          name='uom_name'
          placeholder='Unit Name'
          className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
        <input
          value={unit.uom_symbol}
          onChange={handleChange}
          type="text"
          name='uom_symbol'
          placeholder='Unit Symbol'
          className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
        <div className='flex gap-2 w-72 justify-end'>
          <button className='hover:bg-red-300 hover:text-red-600 py-1 px-4 font-bold rounded-md 
                border-red-500 border-2 text-red-600' onClick={onClose}>
            Cancel
          </button>
          <button className='hover:bg-purple-300 hover:text-purple-600 py-1 px-4 font-bold rounded-md 
                border-purple-500 border-2'
            onClick={handleAddClick} 
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddModal
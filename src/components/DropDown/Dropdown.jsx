import React from 'react'

const Dropdown = ({label}) => {
  return (
    <div>
        <select name="" id="" className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600 text-gray-400'>
            <option value="">{label}</option>
            <option value="">Option2</option>
            <option value="">Option3</option>
            <option value="">Option4</option>
        </select>
    </div>
  )
}

export default Dropdown
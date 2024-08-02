import React, { useState, useContext } from 'react'
import { UnitsContext } from '../../contexts/UomContext'

const EditModal = ({ onClose, edit_unit }) => {
    const [defaultName, setDefaultName] = useState(edit_unit.name)
    const [defaultSymbol, setDefaultSymbol] = useState(edit_unit.symbol)
    const defaultId = edit_unit.id
    const { setLoadUnitsData } = useContext(UnitsContext);

    const handleChangeName = (e) => {
        setDefaultName(() => e.target.value)
    }

    const handleChangeSymbol = (e) => {
        setDefaultSymbol(() => e.target.value)
    }

    const handleAddClick = async () => {
        const url = "http://localhost:3000/api/uom/" + defaultId;
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({uom_name: defaultName, uom_symbol: defaultSymbol})
        };

        fetch(url, options)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                setLoadUnitsData((prev) => !prev);
                onClose();
                console.log('Success:', data);
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    }


    return (
        <div className='fixed top-0 left-0 bg-opacity-30 backdrop-blur-sm w-full h-full flex justify-center items-center'>
            <div className='py-8 flex flex-col px-8 bg-purple-100 items-center gap-8 rounded-md w-fit border-2 border-purple-600'>
                <input
                    type="text"
                    value={defaultName}
                    onChange={handleChangeName}
                    placeholder='Company Name'
                    className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                <input
                    type="text"
                    value={defaultSymbol}
                    onChange={handleChangeSymbol}
                    placeholder='Address'
                    className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600' />
                <div className='flex gap-2 w-72 justify-end'>
                    <button className='hover:bg-red-300 hover:text-red-600 py-1 px-4 font-bold rounded-md 
                    border-red-500 border-2 text-red-600' onClick={onClose}>
                        Cancel
                    </button>
                    <button
                        className='hover:bg-purple-300 hover:text-purple-600 py-1 px-4 font-bold rounded-md 
                        border-purple-500 border-2'
                        onClick={handleAddClick} >
                        Update
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EditModal
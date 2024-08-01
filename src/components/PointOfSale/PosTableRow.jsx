import React from 'react'
import { EditIcon, Trash2Icon } from 'lucide-react'
import AutoSuggest from '../AutoSuggest/AutoSuggest'

const PosTableRow = () => {
    const options = [
        {
            name: "Tayyab Riaz",
            id: 1
        },
        {
            name: "Tahir Ilyas",
            id: 2
        }
    ]
    return (
        <tr className='border-b border-purple-300'>
            <td
                className="py-5 px-2 text-center text-base font-medium"
            >
                <AutoSuggest suggestions={options} />
            </td>
            <td
                className="py-5 px-2 text-center text-base font-medium"
            >
                <input type="number" className='p-2 border border-purple-600 w-20 bg-purple-50 rounded-md outline-purple-600' />
            </td>
            <td
                className="py-5 px-2 text-center text-base font-medium"
            >
                800
            </td>
            <td
                className="py-5 px-2 text-center text-base font-medium"
            >
                250
            </td>
            <td
                className="py-5 px-2 text-center text-base font-medium"
            >
                250
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
    )
}

export default PosTableRow
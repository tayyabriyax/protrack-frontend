import React, { useContext, useState, useEffect } from 'react'
import { Trash2Icon, EditIcon } from 'lucide-react'
import { useSelector, useDispatch } from 'react-redux'
import { getUnitOfMeasurementAsync, deleteUnitOfMeasurementAsync } from '../../features/UnitOfMeasurementSlice'
import EditModal from './EditModal'

const UnitTable = () => {
    const [showModal, setShowModal] = useState(false)
    const [editUnit, setEditUnit] = useState(null)
    const units = useSelector(state => state.UnitOfMeasurement.UnitOfMeasurement);
    const loadData = useSelector(state => state.UnitOfMeasurement.loadData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUnitOfMeasurementAsync())
    }, [loadData])

    const handleeditUnit = (unit) => {
        setShowModal(true)
        setEditUnit(unit)
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
                                            Unit Name
                                        </th>
                                        <th
                                            className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-bold lg:py-7 lg:px-4"
                                        >
                                            Unit Symbol
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
                                        units.map((unit, index) => {
                                            return (
                                                <tr className='border-b border-purple-300' key={index}>
                                                    <td
                                                        className="py-3 px-2 border-s text-center text-base font-medium"
                                                    >
                                                        { index + 1 }
                                                    </td>
                                                    <td
                                                        className="py-3 px-2 text-center text-base font-medium"
                                                    >
                                                        { unit.name }
                                                    </td>
                                                    <td
                                                        className="py-3 px-2 text-center text-base font-medium"
                                                    >
                                                        { unit.symbol }
                                                    </td>
                                                    <td
                                                        className="border-r py-3 px-2 text-center text-base font-medium flex justify-center gap-2"
                                                    >
                                                        <button
                                                            onClick={() => dispatch(deleteUnitOfMeasurementAsync(unit.id))}
                                                            className="inline-block py-2.5 px-4 rounded-md hover:bg-red-300 text-red-600 font-medium"
                                                        >
                                                            <Trash2Icon />
                                                        </button>
                                                        <button
                                                            onClick={() => handleeditUnit(unit)}
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
            {showModal && <EditModal onClose={() => setShowModal(false)} edit_unit={editUnit} />}
        </section>
    )
}

export default UnitTable 
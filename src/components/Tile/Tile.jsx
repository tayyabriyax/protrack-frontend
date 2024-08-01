import { WeightIcon } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Tile = ({ label, icon, active, to }) => {
    return (
        <NavLink to={to} className={`p-4 font-bold h-20 rounded-md bg-purple-100 w-72 hover:cursor-pointer items-center flex justify-between gap-2
                ${ active ? "bg-purple-300 text-purple-600" : "hover:text-purple-600 hover:bg-purple-200"}`}>
            <div>
                {label}
            </div>
            <div className='flex justify-center w-16 h-full items-center'>
                {icon}
            </div>
        </NavLink>
    )
}

export default Tile 
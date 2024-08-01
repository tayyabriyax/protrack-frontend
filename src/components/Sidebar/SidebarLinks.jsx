import React, { useContext } from 'react'
import { SidebarContext } from './Sidebar'
import { NavLink } from 'react-router-dom'

const SidebarLinks = ({name, icon, active, to}) => {
    const {expand} = useContext(SidebarContext)
    return (
        <NavLink to={to} className={`flex gap-2 p-4 w-full rounded-md hover:cursor-pointer
        ${ active ? "bg-purple-300 text-purple-600" : "hover:text-purple-600 hover:bg-purple-200"}`}>
            {icon}
            <span className={`transition-all ${expand ? 'font-bold' : 'hidden'}`}>{name}</span>
        </NavLink>
    )
}

export default SidebarLinks
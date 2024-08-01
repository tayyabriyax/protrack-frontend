import { ChevronFirst, LogOutIcon, LayoutDashboardIcon, User, List, ListChecksIcon, ListOrderedIcon, ChevronLast } from 'lucide-react'
import React, { createContext, useState } from 'react'
import SidebarLinks from './SidebarLinks'
import { useLocation } from 'react-router-dom'

export const SidebarContext = createContext()

const Sidebar = () => {
    const [expand, setExpand] = useState(true)
    let location = useLocation()

    function setActive(path){
        return location.pathname.startsWith(path)
    }
    return (
            <main className={`sticky top-0 left-0 border-r shadow-sm bg-purple-100 flex flex-col rounded-md transition-all h-screen
            ${expand ? 'w-80 p-4': 'w-20 p-2' }`}>
                <div className='flex justify-between items-center ps-4'>
                    <span className={`${expand ? 'border-2 border-black p-2 font-bold text-2xl rounded-md' : 'hidden' }
                    transition-all`}>
                        PROTrack
                    </span>
                    <button className={`rounded-full p-1 hover:bg-purple-300 h-fit ${expand ? 
                    'p-2' : 'my-4'}`}
                    onClick={() => setExpand(cur => !cur)} >
                        {expand ? <ChevronFirst /> : <ChevronLast />}
                    </button>
                </div>
                <ul className='flex-1 py-8'>
                <SidebarContext.Provider value={{expand}}>
                    <SidebarLinks name={"Dashboard"} icon={<LayoutDashboardIcon />} active={setActive('/dashboard')}  to='/dashboard' />
                    <SidebarLinks name={"Setup"} icon={<List />} to='/setup' active={setActive('/setup')} />
                    <SidebarLinks name={"Products"} icon={<ListChecksIcon />} to='/products' active={setActive('/products')} />
                    <SidebarLinks name={"Stock"} icon={<ListOrderedIcon />} to='/stock' active={setActive('/stock')} />
                    <SidebarLinks name={"Point of Sale"} icon={<ListOrderedIcon />} to='/pointofsale' active={setActive('/pointofsale')} />
                    <SidebarLinks name={"User Management"} icon={<ListOrderedIcon />} to='/usermanagement' active={setActive('/usermanagement')} />
                    <SidebarLinks name={"Profile"} icon={<User />} to='/profile' active={setActive('/profile')} />
                </SidebarContext.Provider>
                </ul>
                <div>
                    <button className='flex gap-2 hover:bg-red-300 hover:text-red-600 p-4 w-full rounded-md'>
                        <LogOutIcon />
                        <span className={`${expand ? 'font-bold' : 'hidden'}`} >Logout</span>
                    </button>
                </div>
            </main>
    )
}

export default Sidebar
import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="flex gap-1">
      <Sidebar />
      <div className="w-full flex flex-col gap-1">
        <Header />
        <div className='overflow-y-scroll '>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
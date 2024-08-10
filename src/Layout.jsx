import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import ProductProvider from './contexts/ProductContext'
import CompanyProvider from './contexts/CompanyContext'
import CategoryProvider from './contexts/CategoryContext'
import SupplierProvider from './contexts/SupplierContext'

const Layout = () => {
  return (
    <CategoryProvider>
      <SupplierProvider>
        <CompanyProvider>
          <ProductProvider>
            <div className="flex gap-1">
              <Sidebar />
              <div className="w-full flex flex-col gap-1">
                <Header />
                <div className='overflow-y-scroll '>
                  <Outlet />
                </div>
              </div>
            </div>
          </ProductProvider>
        </CompanyProvider>
      </SupplierProvider>
    </CategoryProvider>
  )
}

export default Layout
import React from 'react'
import Layout from './Layout.jsx'
import Setup from './pages/Setup.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Products from './pages/Products.jsx'
import Stock from './pages/Stock.jsx'
import Profile from './pages/Profile.jsx'
import LoginPage from './pages/LoginPage.jsx'
import UserManagement from './pages/UserManagement.jsx'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import UnitOfMeasurement from './components/UnitOfMeasurement/UnitOfMeasurement.jsx'
import Category from './components/Category/Category.jsx'
import Company from './components/Company/Company.jsx'
import Supplier from './components/Supplier/Supplier.jsx'
import ProductDetails from './components/Products/ProductDetails.jsx'
import PointOfSale from './pages/PointOfSale.jsx'


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout />} >
                    <Route index path='dashboard' element={<Dashboard />} />
                    <Route path='setup' element={<Setup />} >
                        <Route path='unitofmeasurement' element={<UnitOfMeasurement />} />
                        <Route path='category' element={<Category />} />
                        <Route path='company' element={<Company />} />
                        <Route path='supplier' element={<Supplier />} />
                    </Route>
                    <Route path='products' element={<Products />} />
                    <Route path='/productsdetails' element={<ProductDetails />} />
                    <Route path='stock' element={<Stock />} />
                    <Route path='pointofsale' element={<PointOfSale />} />
                    <Route path='usermanagement' element={<UserManagement />} />
                    <Route path='profile' element={<Profile />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
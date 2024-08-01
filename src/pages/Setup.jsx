import React from 'react'
import Tile from '../components/Tile/Tile'
import { BriefcaseBusinessIcon, CarIcon, ListTreeIcon, WeightIcon } from 'lucide-react'
import { Outlet, useLocation } from 'react-router-dom'

const NewLists = () => {
  const location = useLocation()
  function setActive(path) {

    if (location.pathname == path) {
      return true
    }
    else {
      return false
    }
  }
  return (
    <div className='w-full bg-purple-50 flex gap-4 rounded-md p-8 flex-col text-purple-500'>
      <div className='flex justify-between w-full ' >
        <Tile label={"Unit of Measurement"} icon={<WeightIcon size={30} />} to={"unitofmeasurement"} active={setActive('/setup/unitofmeasurement')} />
        <Tile label={"Category"} icon={<ListTreeIcon size={30} />} to={"category"} active={setActive('/setup/category')} />
        <Tile label={"Company"} icon={<BriefcaseBusinessIcon size={30} />} to={"company"} active={setActive('/setup/company')} />
        <Tile label={"Supplier"} icon={<CarIcon size={30} />} to={"supplier"} active={setActive('/setup/supplier')} />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default NewLists
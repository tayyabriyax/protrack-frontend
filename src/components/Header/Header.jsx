import { User } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <header className='bg-purple-100 w-full p-2 rounded-md flex items-center justify-end sticky top-0 right-0'>
        <button className='rounded-full hover:bg-purple-300 p-2 hover:text-purple-500 mx-8'>
            <User size={30}/>
        </button>
    </header>
  )
}

export default Header
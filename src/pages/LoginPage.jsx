import React from 'react'
import { LockIcon, User } from 'lucide-react'

const LoginPage = () => {
    return (
        <div className='w-full bg-purple-50 flex items-center justify-center rounded-md h-[41rem] text-purple-500'>
            <div className='py-8 flex flex-col w-80 bg-purple-100 items-center gap-8 rounded-md'>
                <span className='text-2xl font-bold'>
                    Login
                </span>
                <div className='flex flex-col gap-8 text-sm'>
                    <div className='flex gap-2 border-b-2 border-purple-500 items-center'>
                        <User size={20} className='' />
                        <input type="text" className='bg-transparent outline-none w-60 p-1' placeholder='Username or Email' />
                    </div>
                    <div className='flex gap-2 border-b-2 border-purple-500 items-center'>
                        <LockIcon size={20} />
                        <input type="password" className='bg-transparent outline-none w-60 p-1' placeholder='Password' />
                    </div>
                    <div className='flex gap-2 text-sm font-bold '>
                        <input type="checkbox" id='rememberMe' className='hover:cursor-pointer' />
                        <label htmlFor="rememberMe" className='hover:cursor-pointer'>Remember me</label>
                    </div>
                </div>
                <button className='hover:bg-purple-300 hover:text-purple-600 p-4 font-bold w-64 rounded-md text-lg 
                border-purple-500 border-2'>
                    Login
                </button>
                <span className='text-sm'>Did not have an account ? <button className='font-bold 
                hover:underline'>Signup</button></span>
            </div>
        </div>
    )
}

export default LoginPage
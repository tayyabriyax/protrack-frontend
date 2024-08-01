import React from 'react'

const Profile = () => {
  return (
      <div className='w-full bg-purple-50 p-4 rounded-md h-[41rem] text-purple-500'>
        <div className='py-8 flex flex-col w-96 bg-purple-100 items-center gap-8 rounded-md'>
          <span className='text-2xl font-bold'>
            Profile
          </span>
          <div>
          <div className='flex flex-col gap-4 text-sm'>
            <div className='flex flex-col gap-1 border-purple-500'>
              <label htmlFor="userName" className='cursor-pointer font-bold'>User Name</label>
              <input type="text" id='userName' className='bg-purple-50 outline-none w-80 rounded-sm p-3' placeholder='Username' />
            </div>
            <div className='flex flex-col gap-1 border-purple-500'>
              <label htmlFor="currentPassword" className='cursor-pointer font-bold'>Current Password</label>
              <input type="text" id='currentPassword' className='bg-purple-50 outline-none w-80 rounded-md p-3' placeholder='Current Password' />
            </div>
            <div className='flex flex-col gap-1 border-purple-500'>
              <label htmlFor="newPassword" className='cursor-pointer font-bold'>New Password</label>
              <input type="text" id='newPassword' className='bg-purple-50 outline-none w-80 rounded-md p-3' placeholder='New Password' />
            </div>
            <div className='flex flex-col gap-1 border-purple-500'>
              <label htmlFor="confirmPassword" className='cursor-pointer font-bold'>Confirm Password</label>
              <input type="text" id='confirmPassword' className='bg-purple-50 outline-none w-80 rounded-md p-3' placeholder='Confirm Password' />
            </div>
          </div>
          </div>
        </div>
      </div>
  )
}

export default Profile
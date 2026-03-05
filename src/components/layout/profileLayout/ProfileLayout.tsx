import SideBar from '@/components/common/sideBar/SideBar'
import React from 'react'
import { Outlet } from 'react-router-dom'

function ProfileLayout() {
  return (
    <div className='flex lg:max-w-4xl md:max-w-7xl  mx-auto my-10'>
        <SideBar/>
        <main className='flex-1 p-5'>
        <Outlet/>
        </main>
    </div>
  )
}

export default ProfileLayout
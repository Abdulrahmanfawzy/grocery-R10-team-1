import MobileSideBar from '@/components/common/sideBar/MobileSideBar'
import SideBar from '@/components/common/sideBar/SideBar'
import { Button } from '@/components/ui/button'
import {  Menu } from 'lucide-react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'

function ProfileLayout() {
  const [open, setOpen] = useState(false)
  function onClose(){
    setOpen(prev => !prev)
  }
  return (
    <div className='relative flex lg:max-w-5xl md:max-w-7xl   mx-auto my-10 gap-5'>
      <Button onClick={onClose} className="sticky top-0 left-0 border rounded-lg lg:hidden ">
        <Menu className=''/>
      </Button>
        <SideBar/>
        <MobileSideBar onClose={onClose} open={open}/>
        <main className='flex-1 p-5 lg:p-0 '>
        <Outlet/>
        </main>
    </div>
  )
}

export default ProfileLayout
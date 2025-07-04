import { Outlet } from 'react-router'
import Header from '../components/admin/Header'
import Sidebar from '../components/admin/Sidebar'

function LayoutAdmin() {
  return (
    <div className='flex h-screen w-screen'>
      <Sidebar/>
      <div className='flex flex-col flex-1'>
        <Header/>
        <div className='flex-1 bg-[#AEDDE9]'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default LayoutAdmin
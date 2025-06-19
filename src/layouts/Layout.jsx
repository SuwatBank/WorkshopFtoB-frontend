import React from 'react'
import { Outlet } from 'react-router'
import MainNav from '../components/MainNav'

function Layout() {
  return (
    <div>
      {/* Outlet is react router that will show children */}
      <MainNav/>
      <Outlet/>
    </div>
  )
}

export default Layout
import React from 'react'
import { Link } from 'react-router'

function MainNav() {
  return (
    <div className='flex justify-between bg-black text-white px-8 py-2'>
      <div className='flex gap-4'>
          <Link className='hover:bg-white hover:text-black' to = "/">LOGO</Link>
          <Link to = "/">Home</Link>
          <Link to = "/about">About</Link>
      </div>
      <div className='flex gap-4'>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
      </div>

    </div>
  )
}

export default MainNav
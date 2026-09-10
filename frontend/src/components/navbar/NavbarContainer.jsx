
import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'

const NavbarContainer = () => {
  return (
    <div className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Logo />
        <Navbar />
      </div>
    </div>
  )
}

export default NavbarContainer

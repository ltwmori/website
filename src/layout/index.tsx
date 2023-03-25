import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="p-14 lg:p-24">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout

import React from 'react'
import Header from './pages/Header'
import { Outlet } from 'react-router-dom'
import Footer from './pages/Footer'


function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
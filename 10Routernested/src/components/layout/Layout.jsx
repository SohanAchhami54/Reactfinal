import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='bg-amber-800'>
        <Header/>
            <div className='min-h-screen flex items-center justify-center'>
                  <Outlet/>
            </div>
           
          <Footer/>
    </div>
  )
}

export default Layout

import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className='p-3 bg-[#14213d]'>
       <Header/>
           <div className='min-h-screen text-white'>
               <Outlet/>
           </div>
       <Footer/>
    </div>
  )
}

export default Main

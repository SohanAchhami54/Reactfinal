import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Outlet,ScrollRestoration} from 'react-router-dom'

const Main = () => {
  return (
    <div className='bg-[#adb5bd]'>
      <Header/>
         <div className='min-h-screen'>
             <Outlet/>
         </div>
        
      <Footer/>
        <ScrollRestoration />
    
    </div>
  )
}

export default Main

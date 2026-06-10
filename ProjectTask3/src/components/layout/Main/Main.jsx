import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


const Main = () => {
  return (
    <div className='relative bg-gray-800 text-white'>
        <div className='bg-transparent sticky top-0'>
           <Header/> 
       </div>
         <main className='min-h-screen mt-5'>
              <Outlet/>
         </main>
         <Footer/>
    </div>
  )
}

export default Main

import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className='text-white'>
       <Header/>
         <main className='min-h-screen p-3 bg-gray-800'>
            <Outlet/>
         </main>
    </div>
  )
}

export default Main

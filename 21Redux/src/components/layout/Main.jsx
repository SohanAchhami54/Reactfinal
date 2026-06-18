import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className='bg-gray-700 text-white'>
       <Header/>
        <main className='min-h-screen'>
             <Outlet/>
        </main>
    </div>
  )
}

export default Main

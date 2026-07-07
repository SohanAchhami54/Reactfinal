import React from 'react'
import Header from './Header'
import { Outlet, ScrollRestoration } from 'react-router-dom'

const Main = () => {
  return (
    <div className='text-white'>
       <Header/> 
        <main className='min-h-screen bg-gray-600 p-2'>
            <Outlet/>
        </main>
         <ScrollRestoration/>
    </div>
  )
}

export default Main

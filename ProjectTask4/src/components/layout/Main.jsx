import React from 'react'
import Header from './Header'
import {Outlet,ScrollRestoration} from 'react-router-dom'

const Main = () => {
  return (
    <div className='bg-gray-700'>
      <Header/>
        <main className='min-h-screen'>
            <Outlet/>
        </main>
         <ScrollRestoration />
    </div>
  )
}

export default Main

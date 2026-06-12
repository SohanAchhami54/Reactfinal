import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className='bg-gray-800 min-h-screen text-white p-3'>
        <Header/>
          <main>
              <Outlet/>
          </main>
    </div>
  )
}

export default Main

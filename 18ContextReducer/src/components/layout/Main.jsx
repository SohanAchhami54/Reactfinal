import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className='bg-gray-600 text-white min-h-screen'>
      <Header/>
        <Outlet/>
    </div>
  )
}

export default Main

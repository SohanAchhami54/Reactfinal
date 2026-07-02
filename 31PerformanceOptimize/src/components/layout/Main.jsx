import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className='text-white bg-gray-800'>
      <Header/>
        <main className='min-h-screen p-2'>
          <Outlet/>
        </main>
    </div>
  )
}
export default Main

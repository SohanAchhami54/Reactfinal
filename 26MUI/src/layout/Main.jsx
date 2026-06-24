import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className='flex'>
      <Sidebar/>
        <section className='m-4 rounded-md bg-white border  border-neutral-200 shadow-xl min-h-screen w-full'>
             <Outlet/>
        </section>
    </div>
  )
}

export default Main

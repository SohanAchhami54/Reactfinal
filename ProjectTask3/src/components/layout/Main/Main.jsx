import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useTheme } from '../../../context/ThemeContext'


const Main = () => {
  const { thememode } = useTheme()
  return (
    <div className={`${thememode === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-400 text-black'} relative`}>
      <div className='bg-transparent sticky top-0'>
        <Header />
      </div>
      <main className='min-h-screen mt-5'>
        <Outlet />
      </main>
      <Footer />
       <ScrollRestoration/>
    </div>
  )
}

export default Main

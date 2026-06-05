import React from 'react'
import Header from './Header'
import { Outlet ,ScrollRestoration} from 'react-router-dom'
import Footer from './Footer'
import { useTheme } from '../../context/ThemeContext'

const Main = () => {
    const {thememode}=useTheme()
  return (
    <div className={`${thememode==='dark'?'bg-black text-white':'bg-white text-black'}`}>
         <div className='sticky top-0  z-50 p-1 bg-transparent backdrop-blur-2xl '>
               <Header/>
         </div>
          <main className='min-h-screen'>
              <Outlet/>
          </main>
          <Footer/>
             <ScrollRestoration />
    </div>
  )
}

export default Main

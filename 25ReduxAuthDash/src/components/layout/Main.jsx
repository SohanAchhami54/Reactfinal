import React, { useEffect } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Main = () => {
    const {thememode} =useSelector(state=>state.theme)
    useEffect(()=>{
      if(thememode==='dark'){
          document.querySelector('html').classList.remove('light') 
          document.querySelector('html').classList.add('dark') 
      }else{
          document.querySelector('html').classList.remove('dark') 
          document.querySelector('html').classList.add('light') 
      }
    },[thememode])

  return (
    <div className={`${thememode==='dark'?'bg-gray-900 text-white':'bg-white text-black'}`}>
       <Header/>
         <main className='min-h-screen px-4 sm:px-6 md:px-10'>
             <Outlet/>
         </main>
    </div>
  )
}

export default Main

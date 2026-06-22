import React, { useEffect } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Main = () => {
    const {thememode}=useSelector(state=>state.theme)

    useEffect(()=>{
        if(thememode==='light'){
          document.querySelector('html').classList.remove('dark') 
          document.querySelector('html').classList.add('light')
        }else{
            document.querySelector('html').classList.remove('light') 
            document.querySelector('html').classList.add('dark')
        }
    },[thememode])
  return (
    <div className={`p-3 ${thememode==='light'?'bg-yellow-50 text-black':'bg-gray-900 text-white'}`}>
        <Header/> 
          <main className='min-h-screen'>
              <Outlet/>
          </main>
    </div>
  )
}

export default Main

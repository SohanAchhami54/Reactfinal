import React, { useEffect } from 'react'
import { Outlet } from "react-router-dom"
import Header from './Header'
import Footer from './Footer'
import { useToggle } from '../../hooks/useToggle'

const Main = () => {
        const [isDark,toggletheme]=useToggle(false)
       useEffect(()=>{
            if(isDark){
                document.querySelector('html').classList.remove('light')
                document.querySelector('html').classList.add('dark')
            }else{
                document.querySelector('html').classList.remove('dark')
                document.querySelector('html').classList.add('light')
            }
        },[isDark])
    
  return (
   <div className={`${isDark ? 'text-white bg-black' : 'text-black bg-white'}`}>
       <Header isDark={isDark} toggletheme={toggletheme} /> 
          <main className='min-h-screen'>
              <Outlet/>
          </main>
        <Footer/>
    </div>
  )
}

export default Main

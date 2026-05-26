import React, { useEffect, useState } from 'react'
import Form from './components/Form'
import { CiLight } from "react-icons/ci"
import { MdDarkMode } from "react-icons/md"

const App = () => { 
  const [thememode,setThememode]=useState('light')
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
    <div className={`${thememode==='dark'?'text-white bg-black':'text-black bg-white'} pt-6  px-10 w-full min-h-screen` }>
      <div className='flex  justify-between '>
        <h1>My name is Sohan Achhami.</h1>
         
      <button onClick={()=>{
         if(thememode==='dark'){
           setThememode('light')
         }
         if(thememode==='light'){
          setThememode('dark')
         }}} 
         className='text-2xl'
      
      >{thememode==='light'?<MdDarkMode />:<CiLight />}</button> 
      </div>


      {/* <button onClick={()=>setThememode('dark')}>Dark</button> */}
      <Form/>
    </div>
  )
}

export default App

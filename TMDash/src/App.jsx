import React, { useEffect, useState } from 'react'

import TaskDash from './pages/TaskDash';

const App = () => {
   const [thememode,setThememode]=useState('light') 
    useEffect(()=>{
       if(thememode==='dark'){
        document.querySelector('html') .classList.remove('light') 
        document.querySelector('html') .classList.add('dark') 
       }else{
        document.querySelector('html') .classList.remove('dark') 
        document.querySelector('html') .classList.add('light')
       }
    },[thememode])

  

  return (
    <div className={`min-h-screen ${thememode==='light'?'text-black bg-white':'text-white bg-black'}`}>
      {/* <h1>My name is Sohan Achhami.</h1> */}
      <TaskDash thememode={thememode} setThememode={setThememode} />
    </div>
  )
}
export default App

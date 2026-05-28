import React from 'react'
import HookuseEffect from './components/HookuseEffect'
import HookuseEDA from './components/HookuseEDA'
import Hookuseauto from './components/Hookuseauto'

const App = () => {
  return (
    <div>
       <HookuseEffect/>
       <div className='flex flex-wrap gap-8 justify-center items-center min-h-screen bg-gray-600'>
        <Hookuseauto/>
           <HookuseEDA/>
           
       </div>
      
    </div>
  )
}

export default App

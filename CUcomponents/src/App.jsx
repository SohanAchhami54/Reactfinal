import React from 'react'
import Controll from './components/Controll'
import Uncontroll from './components/Uncontroll'
import Formcu from './components/Formcu'

const App = () => {
  return (
    <div className='p-10 flex flex-col items-center gap-10'>
       <div className='flex flex-row flex-wrap justify-center gap-10'>
      <Controll/>
      <Uncontroll/>
       </div>
     <Formcu/>
    </div>
    
  )
}
export default App

import React from 'react'
import Controll from './components/Controll'
import Uncontroll from './components/Uncontroll'

const App = () => {
  return (
    <div className='p-10 flex flex-col items-center gap-10'>
      <Controll/>
      <Uncontroll/>
    </div>
  )
}
export default App

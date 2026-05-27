import React from 'react'
import Accordion from './pages/Accordion'
import Temperature from './pages/Temperature'

const App = () => {
  return (
    <div className='bg-gray-600 text-white p-2 min-h-screen'>
      <h1>My name is Sohan Achhami.</h1>
      <Accordion/>
      <Temperature/>
    </div>
  )
}

export default App

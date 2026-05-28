import React from 'react'
import Header from './components/practice/Header'
import Sidebar from './components/practice/Sidebar'
import Main from './components/practice/Main'


const App = () => {
  return (
    <div className='bg-gray-700 min-h-screen p-3 text-xl text-white'>
        <Header/>
        <div className='flex gap-10'>
        <Sidebar/>
        <Main/>
        </div>
       
    </div>
  )
}

export default App

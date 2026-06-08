import React from 'react'
import TaskManager from './components/TaskManager'

const App = () => {
  return (
    <div className='p-3 min-h-screen bg-gray-800 text-white'>
      <h1 className='text-center py-3'>This is use reducer hook.</h1>
      <TaskManager/>
    </div>
  )
}

export default App

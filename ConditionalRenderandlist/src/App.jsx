import React from 'react'
import ConditionalRender from './components/ConditionalRender'
import Showhide from './components/Showhide'
import List from './components/List'
import TaskUser from './components/TaskUser'

const App = () => {
  return (
    <div className='bg-gray-500 min-h-screen p-3'>
      <ConditionalRender/>
      <Showhide/>
      <List/>
      <TaskUser/>
      
    </div>
  )
}

export default App

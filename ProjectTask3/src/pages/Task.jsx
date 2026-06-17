import React from 'react'
import { Stats, Taskform, TaskList } from '../components'
import { useTask } from '../context/TaskContext'


const Task = () => { 
  return (
    <div className='flex flex-col sm:flex-col md:flex-row gap-3'>
      <Taskform/>
       <div>
           <TaskList/>
           <Stats/>
       </div>
    
    </div>
  )
}

export default Task

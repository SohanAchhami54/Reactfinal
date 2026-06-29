import React from 'react'
import Tasklist from '../components/Tasklist'
import TaskInput from '../components/TaskInput'

const Task = () => {
  return (
    <div className='flex flex-col gap-3 justify-center items-center '>
        <TaskInput/>
       <Tasklist/>
    </div>
  )
}

export default Task

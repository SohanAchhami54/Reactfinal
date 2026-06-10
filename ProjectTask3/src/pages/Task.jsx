import React from 'react'
import { Taskform, TaskList } from '../components'
import { useTask } from '../context/TaskContext'


const Task = () => { 
  const {task,setTask}=useTask()
  return (
    <div className='flex flex-col sm:flex-col md:flex-row gap-3'>
      <Taskform  task={task} setTask={setTask} />
      <TaskList  task={task} />
    </div>
  )
}

export default Task

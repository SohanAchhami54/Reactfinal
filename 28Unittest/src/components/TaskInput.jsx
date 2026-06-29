import React, { useState } from 'react'
import { useTask } from '../context/Taskcontext'

const TaskInput = () => {
    const [task,setTask]=useState('')
    const [title,setTitle]=useState('')
    const {dispatch}= useTask()
  
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!task) return 
        dispatch({type:'ADD_TASK',payload:{title:title, task:task}})
        setTask('')
        setTitle('')
    }
    return (
    <div>
       <form onSubmit={handleSubmit}
        className='flex justify-center items-center gap-2'>
          <label htmlFor="task">Task:</label>
          <input type="text"
          id='task'
          value={task}
          onChange={(e)=>setTask(e.target.value)}
           placeholder='Enter the task'
           aria-label='taskinput'
           className='px-1 py-1 outline-none border focus:ring-2  rounded-md'
          />
          <label htmlFor="task">Title:</label>
          <input type="text"
          id='title'
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
           placeholder='Enter the title'
           aria-label='titleinput'
           className='px-1 py-1 outline-none border focus:ring-2  rounded-md'
          />    
          <button aria-label='addtask'
           className='px-1 bg-gray-800 px-3 py-1 rounded-md'>
            Add
          </button>
       </form>
    </div>
  )
}
export default TaskInput

import React from 'react'
import { useTheme } from '../../context/ThemeContext'
import { useTask } from '../../context/TaskContext'

const TaskCard = ({t}) => {
 const {thememode}=useTheme()
 const {toggleTask,editTask,deleteTask,setIsEditable,setEditId}=useTask()
  return (
    <li  className={`${thememode==='dark'?'bg-gray-700 ':'bg-gray-300'} flex flex-col items-start gap-3 p-5 rounded-md w-80`}>
            
                <h1 className={t.completed?'line-through':''}>Task:{t.title} </h1>
                <h1 className='break-all'>Description:{t.description} </h1>
                <p>Priority:{t.priority}</p> 
                <p>CreatedAt:{t.createdAt} </p>
                <div className='flex gap-3 mt-3 text-white'>
                   <button onClick={()=>{
                    setIsEditable(prev=>!prev)
                    setEditId(t.id)
                  }}
                  disabled={t.completed}
                   className='px-2 py-1 bg-gray-800 rounded-md'>Edit</button>
                   <button onClick={()=>deleteTask(t.id)}
                    className='px-2 py-1 bg-red-700 rounded-md'>Delete</button>
                </div>
                <input type="checkbox" checked={t.completed}
                 onChange={()=>toggleTask(t.id)}
                />

            </li>
  )
}

export default TaskCard
